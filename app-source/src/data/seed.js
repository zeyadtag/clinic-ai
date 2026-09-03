import { uid } from '../utils/id'
import { addDays, addMinutes, startOfDay } from '../utils/dateHelpers'

// Synthetic demo fixtures only. These labels and contact details do not
// represent real people and must never be replaced with production records.

const today = startOfDay(new Date())

export function buildSeed() {
  const clinic = {
    id: 'clinic_meridian',
    name: 'عيادة ميريديان',
    slug: 'meridian',
    timezone: 'America/New_York',
    phone: '(555) 019-2200',
    address: '48 شارع هاربور فيو، الطابق الثالث',
  }

  const doctors = [
    {
      id: 'doc_amara',
      fullName: 'د. أمارا تشين',
      title: 'طب الأسرة والباطنة العامة',
      specialties: ['طب الأسرة', 'الرعاية الوقائية', 'إدارة الأمراض المزمنة'],
      qualifications: ['دكتوراه في الطب، جامعة جونز هوبكنز', 'البورد في الباطنة العامة'],
      yearsExperience: 14,
      bio: 'تتمتع د. أمارا بخبرة واسعة في متابعة الحالات المزمنة والرعاية الوقائية، وتؤمن بأن الاستماع الجيد للمريض هو بداية العلاج الصحيح.',
      slotDurationMinutes: 30,
      isActive: true,
    },
    {
      id: 'doc_ravi',
      fullName: 'د. رافي باتيل',
      title: 'الأمراض الجلدية والطب التجميلي',
      specialties: ['الأمراض الجلدية', 'علاج حب الشباب', 'الإجراءات التجميلية'],
      qualifications: ['دكتوراه في الطب، جامعة ميشيغان', 'زمالة جراحات الجلد'],
      yearsExperience: 9,
      bio: 'يجمع د. رافي بين علاج الأمراض الجلدية والإجراءات التجميلية مع متابعة دقيقة لتطور الحالة من أول زيارة حتى النتيجة النهائية.',
      slotDurationMinutes: 45,
      isActive: true,
    },
  ]

  const services = [
    { id: 'svc_checkup', name: 'كشف طبي عام', description: 'فحص شامل ومراجعة للحالة الصحية.', priceCents: 12000, durationMinutes: 30 },
    { id: 'svc_followup', name: 'زيارة متابعة', description: 'متابعة مختصرة لتقييم تطور الحالة.', priceCents: 7000, durationMinutes: 20 },
    { id: 'svc_derm', name: 'استشارة جلدية', description: 'فحص البشرة ووضع خطة العلاج المناسبة.', priceCents: 15000, durationMinutes: 45 },
    { id: 'svc_aesthetic', name: 'جلسة تجميلية', description: 'إجراء تجميلي مع متابعة صور قبل وبعد.', priceCents: 32000, durationMinutes: 60 },
    { id: 'svc_bloodwork', name: 'مراجعة التحاليل', description: 'مراجعة نتائج التحاليل وتحديد الخطوات التالية.', priceCents: 9000, durationMinutes: 20 },
  ]

  const patients = [
    {
      id: 'pat_jordan',
      fullName: 'مريض تجريبي 01',
      phone: '000-000-0001',
      email: 'demo.patient01@example.invalid',
      dateOfBirth: '1990-01-01',
      gender: 'Male',
      allergies: ['Penicillin'],
      chronicConditions: ['Hypertension'],
      currentMedications: ['Lisinopril 10mg'],
      notes: 'Prefers early morning appointments.',
      loyaltyLevel: 'gold',
      totalVisits: 9,
      completedVisits: 8,
    },
    {
      id: 'pat_sofia',
      fullName: 'مريض تجريبي 02',
      phone: '000-000-0002',
      email: 'demo.patient02@example.invalid',
      dateOfBirth: '1990-01-01',
      gender: 'Female',
      allergies: [],
      chronicConditions: [],
      currentMedications: [],
      notes: '',
      loyaltyLevel: 'unlocked',
      totalVisits: 4,
      completedVisits: 4,
    },
    {
      id: 'pat_wei',
      fullName: 'مريض تجريبي 03',
      phone: '000-000-0003',
      email: 'demo.patient03@example.invalid',
      dateOfBirth: '1990-01-01',
      gender: 'Male',
      allergies: ['Sulfa drugs'],
      chronicConditions: ['Type 2 Diabetes'],
      currentMedications: ['Metformin 500mg'],
      notes: 'Needs interpreter assistance on occasion (Mandarin).',
      loyaltyLevel: 'vip',
      totalVisits: 16,
      completedVisits: 15,
    },
    {
      id: 'pat_amelia',
      fullName: 'مريض تجريبي 04',
      phone: '000-000-0004',
      email: 'demo.patient04@example.invalid',
      dateOfBirth: '1990-01-01',
      gender: 'Female',
      allergies: [],
      chronicConditions: [],
      currentMedications: [],
      notes: '',
      loyaltyLevel: 'new',
      totalVisits: 1,
      completedVisits: 0,
    },
  ]

  const mk = (h, m = 0, dayOffset = 0) => addMinutes(startOfDay(addDays(today, dayOffset)), h * 60 + m)

  const appointments = [
    { id: uid('appt'), patientId: 'pat_jordan', doctorId: 'doc_amara', serviceId: 'svc_checkup', startsAt: mk(9, 0), endsAt: mk(9, 30), status: 'completed' },
    { id: uid('appt'), patientId: 'pat_sofia', doctorId: 'doc_ravi', serviceId: 'svc_derm', startsAt: mk(9, 30), endsAt: mk(10, 15), status: 'completed' },
    { id: uid('appt'), patientId: 'pat_amelia', doctorId: 'doc_amara', serviceId: 'svc_checkup', startsAt: mk(10, 30), endsAt: mk(11, 0), status: 'in_progress' },
    { id: uid('appt'), patientId: 'pat_wei', doctorId: 'doc_amara', serviceId: 'svc_followup', startsAt: mk(11, 15), endsAt: mk(11, 35), status: 'confirmed' },
    { id: uid('appt'), patientId: 'pat_jordan', doctorId: 'doc_ravi', serviceId: 'svc_aesthetic', startsAt: mk(13, 0), endsAt: mk(14, 0), status: 'scheduled' },
    { id: uid('appt'), patientId: 'pat_sofia', doctorId: 'doc_amara', serviceId: 'svc_bloodwork', startsAt: mk(15, 0), endsAt: mk(15, 20), status: 'cancelled', cancellationReason: 'Patient rescheduled' },
    { id: uid('appt'), patientId: 'pat_wei', doctorId: 'doc_ravi', serviceId: 'svc_derm', startsAt: mk(9, 0, 1), endsAt: mk(9, 45, 1), status: 'scheduled' },
    { id: uid('appt'), patientId: 'pat_amelia', doctorId: 'doc_amara', serviceId: 'svc_checkup', startsAt: mk(10, 0, -1), endsAt: mk(10, 30, -1), status: 'no_show' },
  ]

  const visits = [
    {
      id: uid('visit'),
      patientId: 'pat_jordan',
      doctorId: 'doc_amara',
      serviceId: 'svc_checkup',
      visitDate: mk(9, 0, -7),
      diagnosis: 'Well-controlled hypertension',
      treatment: 'Continue Lisinopril 10mg daily',
      doctorNotes: 'BP 128/82, patient reports consistent medication adherence.',
      followUpDate: null,
      status: 'completed',
    },
    {
      id: uid('visit'),
      patientId: 'pat_wei',
      doctorId: 'doc_amara',
      serviceId: 'svc_followup',
      visitDate: mk(11, 0, -14),
      diagnosis: 'Type 2 diabetes, stable',
      treatment: 'Continue Metformin, dietary counseling reinforced',
      doctorNotes: 'A1C trending down since last visit. Encouraged to continue current routine.',
      followUpDate: null,
      status: 'completed',
    },
    {
      id: uid('visit'),
      patientId: 'pat_sofia',
      doctorId: 'doc_ravi',
      serviceId: 'svc_derm',
      visitDate: mk(9, 30, 0),
      diagnosis: 'Mild eczema, forearms',
      treatment: 'Topical corticosteroid, twice daily for 2 weeks',
      doctorNotes: 'No signs of infection. Advised fragrance-free moisturizer.',
      followUpDate: addDays(today, 14).toISOString().slice(0, 10),
      status: 'completed',
    },
  ]

  const treatments = [
    {
      id: uid('tx'),
      patientId: 'pat_sofia',
      medication: 'Hydrocortisone 1% cream',
      instructions: 'Apply a thin layer to affected areas twice daily.',
      startDate: today.toISOString().slice(0, 10),
      endDate: addDays(today, 14).toISOString().slice(0, 10),
      reminderSchedule: 'daily_08:00,daily_20:00',
      isActive: true,
    },
  ]

  const waitingList = [
    { id: uid('wl'), patientId: 'pat_amelia', serviceId: 'svc_derm', doctorId: 'doc_ravi', preferredStart: mk(9, 0, 2), status: 'open' },
  ]

  const followups = [
    {
      id: uid('fu'),
      patientId: 'pat_wei',
      visitId: visits[1].id,
      kind: 'clinical',
      status: 'pending',
      scheduledFor: addDays(today, -1),
      response: null,
      flagged: false,
    },
  ]

  const reviews = [
    { id: uid('rev'), patientId: 'pat_jordan', rating: 5, sentiment: 'positive', comment: 'خدمة ممتازة والطبيبة تشرح كل التفاصيل بوضوح واهتمام.', isPublic: true },
    { id: uid('rev'), patientId: 'pat_wei', rating: 5, sentiment: 'positive', comment: 'الاستقبال منظم ووقت الانتظار قصير، والتجربة مريحة جدًا.', isPublic: true },
    { id: uid('rev'), patientId: 'pat_sofia', rating: 4, sentiment: 'positive', comment: 'نتائج رائعة وخطة علاج واضحة مع متابعة دقيقة للحالة.', isPublic: true },
  ]

  const rewards = [
    { id: uid('rw'), patientId: 'pat_wei', milestoneVisits: 10, rewardDescription: '10% off next visit', grantedAt: addDays(today, -40) },
  ]

  const notifications = []
  const dayStatus = {
    doc_amara: { runningLateMinutes: 8, patientsAhead: 1 },
    doc_ravi: { runningLateMinutes: 0, patientsAhead: 0 },
  }

  return { clinic, doctors, services, patients, appointments, visits, treatments, waitingList, followups, reviews, rewards, notifications, dayStatus }
}
