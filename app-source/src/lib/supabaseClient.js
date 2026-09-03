import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL || 'https://dexeezznudtwaxqaustx.supabase.co'
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_isT5LDE4Z-KeBDxBjkzZfw_J7DdVeJq'

// The anon key is safe to ship to the browser — it is meant to be public and
// is constrained entirely by the Row Level Security policies in
// supabase/schema.sql. The service-role key must never appear in frontend
// code; all privileged writes happen through RLS-scoped policies or
// security-definer RPCs (see book_appointment in the schema).
const hasRealCredentials =
  url && anonKey && !url.includes('your-project') && !anonKey.includes('your-anon-key')

export const supabase = hasRealCredentials ? createClient(url, anonKey) : null

export const isDemoMode = () =>
  import.meta.env.VITE_USE_DEMO_DATA === 'true' || !supabase
