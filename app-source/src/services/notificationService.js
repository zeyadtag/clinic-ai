/**
 * Notification / automation event outbox.
 *
 * Every clinic event that should eventually trigger an outbound message
 * (WhatsApp, SMS, email) goes through this single function instead of
 * calling a messaging provider directly. That keeps the frontend free of
 * any hard-coded webhook URLs or provider credentials.
 *
 * To wire this to real automation later:
 *   1. Point VITE_N8N_INBOUND_WEBHOOK_URL at an n8n Webhook node.
 *   2. Replace the console.log below with a fetch() POST of the event.
 *   3. In Supabase, add a trigger or scheduled function that inserts into
 *      the `notifications` table (see supabase/schema.sql) and have n8n
 *      poll or subscribe to that table via Supabase's realtime feature.
 *
 * Event types produced by the app today:
 *   appointment_reminder_24h, cancellation_slot_reoffer, waitlist_joined,
 *   waitlist_slot_offered, treatment_reminder, clinical_followup,
 *   review_request, negative_review_flagged
 *
 * Event types the schema additionally reserves for future automation:
 *   doctor_cancellation_broadcast, patient_reactivation, seasonal_campaign,
 *   weekly_clinic_report, monthly_clinic_report, urgent_patient_alert
 */
const WEBHOOK_URL = import.meta.env.VITE_N8N_INBOUND_WEBHOOK_URL || ''

export function logNotificationEvent(record) {
  // Demo mode: just log so developers can see the event stream in devtools.
  // eslint-disable-next-line no-console
  console.info('[notification event]', record.eventType, record)

  if (WEBHOOK_URL) {
    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(record),
    }).catch(() => {
      // Swallow errors — notification delivery must never block the UI flow.
    })
  }
}
