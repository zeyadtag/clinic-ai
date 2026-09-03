# Meridian Clinic — AI Clinic Management System

A clinic management SaaS: a public patient-facing site with real availability
checking and booking, plus a doctor/admin dashboard for running the day —
appointments, patient records, waiting list, analytics, and follow-ups.

Built with React + Vite + Tailwind CSS + React Router, designed for Supabase
as the backend, and architected so a single clinic today can become a
multi-tenant SaaS product later with minimal rework.

---

## 1. What's built

**Public site**
- Marketing home page: hero, stats, services with pricing/duration, doctor
  bios, patient reviews.
- Booking flow that checks real availability against existing appointments.
  If the requested slot is taken, it suggests the **nearest 3 open times**
  for that doctor instead of a flat rejection, and offers joining the
  **waiting list** if none of those work.
- Patient portal (phone-number lookup): shows the next upcoming visit, a
  live "doctor running X minutes late / N patients ahead" status, and any
  pending follow-ups (clinical check-in or review request) the patient can
  respond to right there.

**Doctor/admin dashboard**
- Overview: today's appointment counts, revenue chart (this week), financial
  summary (today/week/month), an AI-style insight card, a "next patient"
  prep panel, a waiting-room status control, and a "needs attention" panel
  for flagged follow-ups/reviews.
- Appointments: search, filter by date/status, confirm, cancel, start visit,
  mark completed — all appointment statuses from the spec are modeled
  (`scheduled`, `confirmed`, `waiting`, `in_progress`, `completed`,
  `cancelled`, `no_show`).
- Patients: searchable list; full profile per patient with medical info
  (allergies, chronic conditions, medications), complete visit history,
  active treatments/reminders, loyalty level + reward history, and a
  before/after media placeholder section.
- Visit workflow: "Start visit" opens a dedicated page to edit diagnosis,
  treatment, and notes (each with a voice-dictation mic button), set a
  follow-up date, save in progress, and complete the visit — which updates
  the patient's record, awards loyalty milestones, and queues review /
  clinical follow-up requests.
- Waiting list: convert an entry straight into a confirmed appointment by
  picking one of the nearest open slots.

**Cross-cutting**
- Loyalty levels (`new → unlocked → gold → vip`) auto-update at 3/5/10
  completed visits, with a reward history per patient.
- Follow-up system: review requests after every completed visit (positive →
  eligible to go public, negative → privately flagged) and clinical
  check-ins on the follow-up date (`better` closes it, `same`/`worse` flags
  it for the doctor).
- Notification/automation event log: every action that should eventually
  trigger a WhatsApp/SMS/email message goes through one function
  (`src/services/notificationService.js`) instead of a hard-coded webhook,
  so n8n can be wired in later by pointing one env var at a webhook.
- Voice input: a mic button using the browser's Web Speech API on every
  clinical text field, with a graceful disabled fallback where unsupported.

---

## 2. Folder structure

```
clinic-saas/
├── supabase/
│   └── schema.sql            # Full Postgres schema + RLS policies
├── src/
│   ├── main.jsx               # Entry point, providers
│   ├── App.jsx                 # Route table
│   ├── index.css                # Tailwind + shared component classes
│   ├── lib/
│   │   └── supabaseClient.js    # Supabase client + demo-mode detection
│   ├── data/
│   │   └── seed.js               # Seeded demo dataset (used when no Supabase configured)
│   ├── context/
│   │   └── DataContext.jsx        # All state + business logic (booking, visits, loyalty, follow-ups...)
│   ├── services/
│   │   ├── analytics.js            # Revenue/insight calculations
│   │   └── notificationService.js  # n8n-ready event outbox
│   ├── utils/
│   │   ├── availability.js         # Slot-finding / double-booking prevention
│   │   ├── dateHelpers.js
│   │   └── id.js
│   ├── components/
│   │   ├── ui/                     # Button, Card, Badge, EmptyState, ConfirmDialog, VoiceInput...
│   │   ├── layout/                 # PublicLayout/Navbar/Footer, DashboardLayout+sidebar
│   │   ├── public/                 # Hero, Stats, Services, AboutDoctor, Reviews, BookingForm
│   │   └── dashboard/               # TodayOverview, FinancialOverview, AnalyticsCharts, AIInsightCard, WaitingRoomStatus, NeedsAttention
│   └── pages/
│       ├── public/                 # HomePage, BookAppointmentPage, PatientPortalPage
│       └── dashboard/                # DashboardHome, AppointmentsPage, PatientsListPage, PatientProfilePage, VisitPage, WaitingListPage
├── package.json
├── vite.config.js
├── tailwind.config.js
└── .env.example
```

The `DataContext` is the seam: every component talks to the backend only
through the functions it exposes (`bookAppointment`, `completeVisit`,
`convertWaitingListEntry`, etc.). Today those functions read/write an
in-memory + localStorage store seeded from `src/data/seed.js`. To go live,
re-implement the body of each function against `supabase-js` — no component
needs to change.

---

## 3. Database schema

See `supabase/schema.sql` for the full, runnable SQL. It defines:

`clinics`, `clinic_working_hours`, `doctors`, `patients`, `services`,
`appointments`, `patient_visits`, `treatments`, `before_after_media`,
`waiting_list`, `clinic_day_status`, `followups`, `reviews`,
`patient_rewards`, `notifications`, `campaigns`, `clinic_reports`.

Every clinical table carries `clinic_id` for multi-tenancy, uses UUID
primary keys, foreign keys, timestamps, enum-backed status columns, and
indexes on the columns actually queried (appointments by clinic+time and by
doctor+time, patients by clinic+phone, visits by patient, etc).

**Row Level Security**: every table has RLS enabled. Staff policies scope
all access to `clinic_id = auth_clinic_id()`, a helper that resolves the
caller's clinic from their `auth.uid()` via the `doctors` table — so one
clinic's staff can never read or write another clinic's data. The public
`anon` key can only read active services and public reviews, and create a
booking through a `security definer` RPC (`book_appointment`) rather than
direct table access — so an anonymous visitor can never read back patient
data. **The service-role key is never used or referenced in frontend code.**

---

## 4. Environment variables

Copy `.env.example` to `.env` (already done in this export) and fill in:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key       # anon/public key only — never the service role key
VITE_USE_DEMO_DATA=true                     # set to false once Supabase is configured
VITE_N8N_INBOUND_WEBHOOK_URL=               # optional — see notificationService.js
```

With `VITE_USE_DEMO_DATA=true` (the default), the app runs immediately with
zero backend setup, using the seeded dataset persisted to
`localStorage` under the key `meridian_clinic_demo_v1`.

---

## 5. Running locally

This project was built in a sandboxed environment **without internet
access**, so `npm install` could not be executed here — it was verified
statically instead (see §7). On your machine, with normal internet access:

```bash
npm install
npm run dev        # http://localhost:5173
npm run build       # production build to dist/
npm run preview      # serve the production build locally
```

To connect a real Supabase project:
1. Create a Supabase project, then run `supabase/schema.sql` in the SQL editor.
2. Insert your own `clinics`, `doctors`, and `services` rows (or adapt
   `src/data/seed.js` and write a one-time seed script).
3. Set `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` in `.env` and set
   `VITE_USE_DEMO_DATA=false`.
4. Re-implement each function body in `src/context/DataContext.jsx` against
   `supabase-js` calls (the function signatures are the contract; components
   don't need to change).

---

## 6. Fully functional vs. demo/placeholder

**Fully functional (against the seeded demo data store):**
- Availability checking, nearest-3-slot suggestion, and waiting-list fallback
- Booking creates/updates a patient and creates an appointment
- Appointment status workflow (confirm/cancel/start/complete/no-show)
- Patient medical record + full visit history
- Visit workflow (diagnosis/treatment/notes/follow-up date, save, complete)
- Waiting list → appointment conversion
- Loyalty level + reward milestones (3/5/10 visits)
- Follow-up system: review requests (positive/negative branching) and
  clinical check-ins (better/same/worse branching, with flagging)
- Revenue/booking/cancellation analytics + AI-style insight card
  (rule-based today; see §8)
- Voice dictation on clinical text fields (where the browser supports the
  Web Speech API — Chrome/Edge; falls back to plain typing elsewhere)
- Waiting-room "running late" status, staff-editable, patient-visible

**Demo/placeholder — architecture is in place, real integration is not:**
- **Persistence**: `localStorage`, not a live database. The Supabase schema
  and RLS policies are production-ready SQL; `DataContext` needs its
  function bodies swapped to `supabase-js` calls to go live.
- **Before/after media**: UI placeholder only; `before_after_media` table
  and `storage_path` column are ready for Supabase Storage.
- **Notifications/automation**: every event (reminders, cancellation
  re-offer, waitlist offers, treatment reminders, review/follow-up
  requests) is logged through one function and optionally POSTed to
  `VITE_N8N_INBOUND_WEBHOOK_URL` if set — no messages are actually sent
  without connecting that webhook (or Supabase's realtime + a scheduled
  job) to n8n/WhatsApp/SMS/email.
- **"5 minutes before appointment" next-patient surfacing**: the dashboard
  shows the next upcoming appointment today; the actual timed trigger would
  come from a Supabase cron job or n8n workflow watching `appointments`.
- **Multi-tenant UI**: the schema and RLS are multi-tenant-ready, but the
  frontend currently renders a single clinic (no clinic switcher/auth yet).
- **Staff authentication**: no login screen; the dashboard is reachable
  directly. RLS policies assume a `doctors.auth_user_id` linked to
  Supabase Auth once that's added.

---

## 7. Verification performed in this environment

This sandbox has no network access (`npm install` returns a registry 403),
so a real `vite build` could not be run here. In its place:
- Every `.jsx` file was transformed through an available `esbuild` binary
  (JSX/syntax check) — zero errors.
- Every plain `.js` file was checked with `node --check` — zero errors.
- All 40+ relative imports were verified to resolve to real files.
- Every named/default import was cross-checked against what its source file
  actually exports.
- All React hooks were confirmed to run unconditionally before any early
  `return` in components that have one.
- Every `<Link>`/`navigate()` target was checked against the route table.
- Every custom Tailwind class used was checked against `tailwind.config.js`.
- A full logic review of `DataContext.jsx` caught and fixed two real bugs:
  a patient-id lookup that relied on undocumented React state-update timing,
  and review follow-ups that were never marked closed/flagged after a
  patient submitted a review.

**Please still run `npm install && npm run build` yourself before deploying**
— static checks catch syntax and wiring errors, not everything a real
bundler and browser runtime would.

---

## 8. Recommended next steps

1. Wire `DataContext.jsx` to real `supabase-js` calls; add Supabase Auth for
   staff login, matching the RLS policies already written.
2. Connect `VITE_N8N_INBOUND_WEBHOOK_URL` (or a Supabase scheduled function)
   to actually send the reminder/follow-up/review-request messages that are
   currently just logged.
3. Replace the rule-based `generateInsights()` in `src/services/analytics.js`
   with a real model call (Claude/GPT) fed the same appointment/revenue
   data — the function boundary is already isolated for this swap.
4. Add Supabase Storage integration for before/after media uploads.
5. Build the clinic-switcher / multi-tenant admin UI on top of the schema's
   existing `clinic_id` scoping.
6. Add a scheduled job (Supabase cron or n8n) that flags appointments ~5
   minutes out so the "next patient" panel can auto-refresh in real time
   rather than on page load.
