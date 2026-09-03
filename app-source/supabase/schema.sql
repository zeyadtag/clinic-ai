-- ============================================================================
-- Meridian Clinic — Multi-tenant clinic management schema
-- Postgres / Supabase. Every clinical table carries clinic_id for tenancy.
-- ============================================================================

create extension if not exists "pgcrypto";
create extension if not exists "btree_gist";
alter extension "btree_gist" set schema extensions;

-- ---------------------------------------------------------------------------
-- Enums
-- ---------------------------------------------------------------------------
create type appointment_status as enum
  ('scheduled','confirmed','waiting','in_progress','completed','cancelled','no_show');

create type waiting_list_status as enum ('open','offered','converted','expired','cancelled');

create type followup_kind as enum ('review','clinical');
create type followup_status as enum ('pending','sent','answered','flagged','closed');
create type review_sentiment as enum ('positive','negative','unset');
create type loyalty_level as enum ('new','unlocked','gold','vip');
create type notification_channel as enum ('whatsapp','sms','email','push','n8n_webhook');
create type notification_status as enum ('pending','queued','sent','failed');
create type user_role as enum ('owner','doctor','staff');

-- ---------------------------------------------------------------------------
-- Tenancy & staff
-- ---------------------------------------------------------------------------
create table clinics (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  timezone text not null default 'UTC',
  phone text,
  address text,
  logo_url text,
  created_at timestamptz not null default now()
);

create table clinic_working_hours (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references clinics(id) on delete cascade,
  day_of_week smallint not null check (day_of_week between 0 and 6),
  opens_at time not null,
  closes_at time not null,
  is_closed boolean not null default false,
  unique (clinic_id, day_of_week)
);

create table doctors (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references clinics(id) on delete cascade,
  auth_user_id uuid, -- references auth.users(id) in Supabase
  full_name text not null,
  title text,
  specialties text[] default '{}',
  qualifications text[] default '{}',
  years_experience integer default 0,
  bio text,
  photo_url text,
  role user_role not null default 'doctor',
  slot_duration_minutes integer not null default 30,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);
create index idx_doctors_clinic on doctors(clinic_id);

-- ---------------------------------------------------------------------------
-- Patients & clinical history
-- ---------------------------------------------------------------------------
create table patients (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references clinics(id) on delete cascade,
  full_name text not null,
  phone text not null,
  email text,
  date_of_birth date,
  gender text,
  allergies text[] default '{}',
  chronic_conditions text[] default '{}',
  current_medications text[] default '{}',
  notes text,
  loyalty_level loyalty_level not null default 'new',
  total_visits integer not null default 0,
  completed_visits integer not null default 0,
  last_visit_at timestamptz,
  created_at timestamptz not null default now(),
  unique (clinic_id, phone)
);
create index idx_patients_clinic on patients(clinic_id);
create index idx_patients_phone on patients(clinic_id, phone);

create table services (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references clinics(id) on delete cascade,
  name text not null,
  description text,
  price_cents integer not null default 0,
  duration_minutes integer not null default 30,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);
create index idx_services_clinic on services(clinic_id);

create table appointments (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references clinics(id) on delete cascade,
  patient_id uuid not null references patients(id) on delete cascade,
  doctor_id uuid not null references doctors(id) on delete cascade,
  service_id uuid not null references services(id),
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  status appointment_status not null default 'scheduled',
  notes text,
  checked_in_at timestamptz,
  started_at timestamptz,
  completed_at timestamptz,
  cancelled_at timestamptz,
  cancellation_reason text,
  created_at timestamptz not null default now(),
  constraint chk_time_order check (ends_at > starts_at)
);
create index idx_appts_clinic_time on appointments(clinic_id, starts_at);
create index idx_appts_doctor_time on appointments(doctor_id, starts_at);
create index idx_appts_status on appointments(clinic_id, status);
-- Prevent double-booking the same doctor for overlapping confirmed/scheduled slots
alter table appointments add constraint appointments_no_overlap
  exclude using gist (
    doctor_id with =,
    tstzrange(starts_at, ends_at, '[)') with &&
  ) where (status not in ('cancelled','no_show'));

create table patient_visits (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references clinics(id) on delete cascade,
  patient_id uuid not null references patients(id) on delete cascade,
  appointment_id uuid references appointments(id) on delete set null,
  doctor_id uuid not null references doctors(id),
  service_id uuid references services(id),
  visit_date timestamptz not null default now(),
  diagnosis text,
  treatment text,
  doctor_notes text,
  follow_up_date date,
  status appointment_status not null default 'completed',
  created_at timestamptz not null default now()
);
create index idx_visits_patient on patient_visits(patient_id, visit_date desc);
create index idx_visits_clinic on patient_visits(clinic_id, visit_date desc);

create table treatments (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references clinics(id) on delete cascade,
  patient_id uuid not null references patients(id) on delete cascade,
  visit_id uuid references patient_visits(id) on delete set null,
  medication text not null,
  instructions text,
  start_date date not null,
  end_date date,
  reminder_schedule text, -- e.g. 'daily_08:00', 'twice_daily', cron-like string consumed by n8n
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);
create index idx_treatments_patient on treatments(patient_id);

create table before_after_media (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references clinics(id) on delete cascade,
  patient_id uuid not null references patients(id) on delete cascade,
  visit_id uuid references patient_visits(id) on delete set null,
  stage text not null check (stage in ('before','after')),
  storage_path text not null, -- Supabase Storage object path, private bucket
  taken_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);
create index idx_media_patient on before_after_media(patient_id);

-- ---------------------------------------------------------------------------
-- Waiting list & waiting-room experience
-- ---------------------------------------------------------------------------
create table waiting_list (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references clinics(id) on delete cascade,
  patient_id uuid not null references patients(id) on delete cascade,
  service_id uuid references services(id),
  doctor_id uuid references doctors(id),
  preferred_start timestamptz,
  preferred_end timestamptz,
  status waiting_list_status not null default 'open',
  converted_appointment_id uuid references appointments(id),
  created_at timestamptz not null default now()
);
create index idx_waitlist_clinic on waiting_list(clinic_id, status);

create table clinic_day_status (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references clinics(id) on delete cascade,
  doctor_id uuid not null references doctors(id) on delete cascade,
  day date not null,
  running_late_minutes integer not null default 0,
  patients_ahead integer not null default 0,
  updated_at timestamptz not null default now(),
  unique (doctor_id, day)
);

-- ---------------------------------------------------------------------------
-- Follow-ups & reviews
-- ---------------------------------------------------------------------------
create table followups (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references clinics(id) on delete cascade,
  patient_id uuid not null references patients(id) on delete cascade,
  visit_id uuid references patient_visits(id) on delete cascade,
  kind followup_kind not null,
  status followup_status not null default 'pending',
  scheduled_for timestamptz not null,
  response text, -- 'better' | 'same' | 'worse' for clinical; free text for review
  flagged boolean not null default false,
  created_at timestamptz not null default now()
);
create index idx_followups_clinic on followups(clinic_id, status);
create index idx_followups_patient on followups(patient_id);

create table reviews (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references clinics(id) on delete cascade,
  patient_id uuid references patients(id) on delete set null,
  followup_id uuid references followups(id) on delete set null,
  rating smallint not null check (rating between 1 and 5),
  sentiment review_sentiment not null default 'unset',
  comment text,
  is_public boolean not null default false,
  created_at timestamptz not null default now()
);
create index idx_reviews_clinic on reviews(clinic_id);

-- ---------------------------------------------------------------------------
-- Loyalty / rewards
-- ---------------------------------------------------------------------------
create table patient_rewards (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references clinics(id) on delete cascade,
  patient_id uuid not null references patients(id) on delete cascade,
  milestone_visits integer not null,
  reward_description text not null,
  granted_at timestamptz not null default now()
);
create index idx_rewards_patient on patient_rewards(patient_id);

-- ---------------------------------------------------------------------------
-- Notifications / automation event outbox (n8n-friendly)
-- ---------------------------------------------------------------------------
create table notifications (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references clinics(id) on delete cascade,
  patient_id uuid references patients(id) on delete cascade,
  appointment_id uuid references appointments(id) on delete cascade,
  event_type text not null, -- e.g. 'appointment_reminder_24h', 'waitlist_slot_offered', ...
  channel notification_channel not null default 'n8n_webhook',
  payload jsonb not null default '{}',
  status notification_status not null default 'pending',
  scheduled_for timestamptz not null default now(),
  sent_at timestamptz,
  created_at timestamptz not null default now()
);
create index idx_notifications_status on notifications(clinic_id, status, scheduled_for);

create table campaigns (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references clinics(id) on delete cascade,
  name text not null,
  event_type text not null default 'seasonal_campaign',
  audience_filter jsonb not null default '{}', -- e.g. {"inactive_days": 90}
  status text not null default 'draft',
  scheduled_for timestamptz,
  created_at timestamptz not null default now()
);

create table clinic_reports (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references clinics(id) on delete cascade,
  period text not null check (period in ('weekly','monthly')),
  period_start date not null,
  period_end date not null,
  metrics jsonb not null default '{}',
  ai_summary text,
  created_at timestamptz not null default now()
);
create index idx_reports_clinic on clinic_reports(clinic_id, period_start desc);

-- ============================================================================
-- Row Level Security strategy
-- ============================================================================
-- Every clinical table is scoped by clinic_id. Staff authenticate via Supabase
-- Auth; a `doctors` row links auth_user_id -> clinic_id. Policies below use a
-- helper that resolves the caller's clinic from their auth uid, so one clinic
-- can never read or write another clinic's rows. Public (anon) access is
-- limited to inserting a booking request and reading published services and
-- reviews — never full patient records.

alter table clinics enable row level security;
alter table doctors enable row level security;
alter table patients enable row level security;
alter table services enable row level security;
alter table appointments enable row level security;
alter table patient_visits enable row level security;
alter table treatments enable row level security;
alter table before_after_media enable row level security;
alter table waiting_list enable row level security;
alter table followups enable row level security;
alter table reviews enable row level security;
alter table patient_rewards enable row level security;
alter table notifications enable row level security;
alter table campaigns enable row level security;
alter table clinic_reports enable row level security;
alter table clinic_working_hours enable row level security;
alter table clinic_day_status enable row level security;

create or replace function auth_clinic_id() returns uuid as $$
  select clinic_id from doctors where auth_user_id = auth.uid() limit 1;
$$ language sql stable security definer set search_path = public;

revoke all on function auth_clinic_id() from public;
revoke execute on function auth_clinic_id() from anon;
grant execute on function auth_clinic_id() to authenticated;

-- Staff: full access to their own clinic's rows.
create policy staff_all_clinics on clinics for select to authenticated using (id = (select auth_clinic_id()));
create policy staff_all_doctors on doctors for all to authenticated using (clinic_id = (select auth_clinic_id())) with check (clinic_id = (select auth_clinic_id()));
create policy staff_all_patients on patients for all to authenticated using (clinic_id = (select auth_clinic_id())) with check (clinic_id = (select auth_clinic_id()));
create policy staff_all_services on services for all to authenticated using (clinic_id = (select auth_clinic_id())) with check (clinic_id = (select auth_clinic_id()));
create policy staff_all_appts on appointments for all to authenticated using (clinic_id = (select auth_clinic_id())) with check (clinic_id = (select auth_clinic_id()));
create policy staff_all_visits on patient_visits for all to authenticated using (clinic_id = (select auth_clinic_id())) with check (clinic_id = (select auth_clinic_id()));
create policy staff_all_treatments on treatments for all to authenticated using (clinic_id = (select auth_clinic_id())) with check (clinic_id = (select auth_clinic_id()));
create policy staff_all_media on before_after_media for all to authenticated using (clinic_id = (select auth_clinic_id())) with check (clinic_id = (select auth_clinic_id()));
create policy staff_all_waitlist on waiting_list for all to authenticated using (clinic_id = (select auth_clinic_id())) with check (clinic_id = (select auth_clinic_id()));
create policy staff_all_followups on followups for all to authenticated using (clinic_id = (select auth_clinic_id())) with check (clinic_id = (select auth_clinic_id()));
create policy staff_all_reviews on reviews for all to authenticated using (clinic_id = (select auth_clinic_id())) with check (clinic_id = (select auth_clinic_id()));
create policy staff_all_rewards on patient_rewards for all to authenticated using (clinic_id = (select auth_clinic_id())) with check (clinic_id = (select auth_clinic_id()));
create policy staff_all_notifications on notifications for all to authenticated using (clinic_id = (select auth_clinic_id())) with check (clinic_id = (select auth_clinic_id()));
create policy staff_all_campaigns on campaigns for all to authenticated using (clinic_id = (select auth_clinic_id())) with check (clinic_id = (select auth_clinic_id()));
create policy staff_all_reports on clinic_reports for all to authenticated using (clinic_id = (select auth_clinic_id())) with check (clinic_id = (select auth_clinic_id()));
create policy staff_all_hours on clinic_working_hours for all to authenticated using (clinic_id = (select auth_clinic_id())) with check (clinic_id = (select auth_clinic_id()));
create policy staff_all_daystatus on clinic_day_status for all to authenticated using (clinic_id = (select auth_clinic_id())) with check (clinic_id = (select auth_clinic_id()));

-- Public (anon key): read active services/published reviews, and create a
-- booking (patient upsert + appointment insert) via a security-definer RPC
-- rather than direct table grants, so anon can never read patient PII back.
create policy public_read_services on services for select using (is_active = true);
create policy public_read_reviews on reviews for select using (is_public = true);
create policy public_read_doctors on doctors for select using (is_active = true);
create policy public_read_clinics on clinics for select using (true);

-- Example booking RPC (implement fully server-side). Kept intentionally
-- minimal here; expand validation before production use.
create or replace function book_appointment(
  p_clinic_id uuid, p_full_name text, p_phone text, p_service_id uuid,
  p_doctor_id uuid, p_starts_at timestamptz, p_email text default null,
  p_notes text default null
) returns jsonb as $$
declare v_patient_id uuid; v_appt appointments; v_duration int; v_end timestamptz;
begin
  if length(trim(p_full_name)) < 2 or length(trim(p_phone)) < 7 then
    raise exception 'invalid_patient_data';
  end if;
  if p_starts_at < now() then raise exception 'appointment_in_past'; end if;

  perform pg_advisory_xact_lock(hashtext(p_doctor_id::text));

  select duration_minutes into v_duration
  from services where id = p_service_id and clinic_id = p_clinic_id and is_active;
  if v_duration is null then raise exception 'invalid_service'; end if;
  if not exists (select 1 from doctors where id = p_doctor_id and clinic_id = p_clinic_id and is_active) then
    raise exception 'invalid_doctor';
  end if;
  v_end := p_starts_at + make_interval(mins => v_duration);
  if exists (
    select 1 from appointments
    where doctor_id = p_doctor_id and status not in ('cancelled','no_show')
      and tstzrange(starts_at, ends_at, '[)') && tstzrange(p_starts_at, v_end, '[)')
  ) then raise exception 'slot_unavailable'; end if;

  insert into patients (clinic_id, full_name, phone, email)
    values (p_clinic_id, trim(p_full_name), trim(p_phone), nullif(trim(p_email),''))
    on conflict (clinic_id, phone) do update
      set full_name = excluded.full_name, email = coalesce(excluded.email, patients.email)
    returning id into v_patient_id;
  insert into appointments (clinic_id, patient_id, doctor_id, service_id, starts_at, ends_at, notes)
    values (p_clinic_id, v_patient_id, p_doctor_id, p_service_id, p_starts_at, v_end, p_notes)
    returning * into v_appt;
  insert into notifications (clinic_id, patient_id, appointment_id, event_type, scheduled_for, payload)
    values (p_clinic_id, v_patient_id, v_appt.id, 'appointment_reminder_24h',
      greatest(now(), p_starts_at - interval '24 hours'), jsonb_build_object('startsAt', p_starts_at));
  return jsonb_build_object(
    'id', v_appt.id, 'patientId', v_appt.patient_id, 'doctorId', v_appt.doctor_id,
    'serviceId', v_appt.service_id, 'startsAt', v_appt.starts_at,
    'endsAt', v_appt.ends_at, 'status', v_appt.status
  );
end;
$$ language plpgsql security definer set search_path = public;

revoke all on function book_appointment(uuid,text,text,uuid,uuid,timestamptz,text,text) from public;
grant execute on function book_appointment(uuid,text,text,uuid,uuid,timestamptz,text,text) to anon, authenticated;

grant usage on schema public to anon, authenticated;
grant select on clinics, doctors, services, reviews to anon, authenticated;
grant select, insert, update, delete on all tables in schema public to authenticated;

-- Demo clinic configuration. Replace these labels when onboarding a real clinic.
insert into clinics (id, name, slug, timezone, phone, address)
values ('10000000-0000-0000-0000-000000000001', 'عيادة ميريديان', 'meridian', 'Africa/Cairo', '01000000000', 'الإسكندرية، مصر');

insert into doctors (id, clinic_id, full_name, title, specialties, qualifications, years_experience, bio, slot_duration_minutes)
values
('20000000-0000-0000-0000-000000000001','10000000-0000-0000-0000-000000000001','د. أمارا تشين','طب الأسرة والباطنة العامة',array['طب الأسرة','الرعاية الوقائية'],array['دكتوراه في الطب'],14,'خبرة واسعة في متابعة الحالات المزمنة والرعاية الوقائية.',30),
('20000000-0000-0000-0000-000000000002','10000000-0000-0000-0000-000000000001','د. رافي باتيل','الأمراض الجلدية والطب التجميلي',array['الأمراض الجلدية','الإجراءات التجميلية'],array['زمالة جراحات الجلد'],9,'متخصص في علاج الأمراض الجلدية والإجراءات التجميلية.',45);

insert into services (id, clinic_id, name, description, price_cents, duration_minutes)
values
('30000000-0000-0000-0000-000000000001','10000000-0000-0000-0000-000000000001','كشف طبي عام','فحص شامل ومراجعة للحالة الصحية.',12000,30),
('30000000-0000-0000-0000-000000000002','10000000-0000-0000-0000-000000000001','زيارة متابعة','متابعة مختصرة لتقييم تطور الحالة.',7000,20),
('30000000-0000-0000-0000-000000000003','10000000-0000-0000-0000-000000000001','استشارة جلدية','فحص البشرة ووضع خطة العلاج المناسبة.',15000,45),
('30000000-0000-0000-0000-000000000004','10000000-0000-0000-0000-000000000001','جلسة تجميلية','إجراء تجميلي مع متابعة صور قبل وبعد.',32000,60),
('30000000-0000-0000-0000-000000000005','10000000-0000-0000-0000-000000000001','مراجعة التحاليل','مراجعة نتائج التحاليل وتحديد الخطوات التالية.',9000,20);
