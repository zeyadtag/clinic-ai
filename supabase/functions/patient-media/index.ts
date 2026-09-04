import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function reply(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

function getSecretKey() {
  const legacyKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (legacyKey) return legacyKey;
  try {
    return JSON.parse(Deno.env.get("SUPABASE_SECRET_KEYS") || "{}").default;
  } catch {
    return null;
  }
}

Deno.serve(async (request: Request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (request.method !== "POST") return reply({ error: "method_not_allowed" }, 405);

  const secretKey = getSecretKey();
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  if (!secretKey || !supabaseUrl) return reply({ error: "service_unavailable" }, 503);
  const admin = createClient(supabaseUrl, secretKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  try {
    const contentType = request.headers.get("content-type") || "";
    let action = "list";
    let phone = "";
    let code = "";
    let note = "";
    let consent = false;
    let file: File | null = null;

    if (contentType.includes("multipart/form-data")) {
      const form = await request.formData();
      action = String(form.get("action") || "upload");
      phone = String(form.get("phone") || "").trim();
      code = String(form.get("code") || "").trim().toUpperCase();
      note = String(form.get("note") || "").trim().slice(0, 500);
      consent = form.get("consent") === "true";
      const candidate = form.get("file");
      file = candidate instanceof File ? candidate : null;
    } else {
      const body = await request.json();
      action = String(body.action || "list");
      phone = String(body.phone || "").trim();
      code = String(body.code || "").trim().toUpperCase();
    }

    if (phone.length < 7 || code.length < 12) return reply({ error: "invalid_credentials" }, 401);
    const { data: patientId, error: authError } = await admin.rpc("resolve_patient_portal", {
      p_phone: phone,
      p_code: code,
    });
    if (authError || !patientId) return reply({ error: "invalid_credentials" }, 401);

    const { data: patient, error: patientError } = await admin
      .from("patients")
      .select("id,clinic_id")
      .eq("id", patientId)
      .single();
    if (patientError || !patient) return reply({ error: "patient_not_found" }, 404);

    if (action === "list") {
      const { data: rows, error } = await admin
        .from("before_after_media")
        .select("id,stage,storage_path,taken_at,patient_note,consent_granted_at,upload_source")
        .eq("patient_id", patient.id)
        .order("taken_at", { ascending: false })
        .limit(30);
      if (error) throw error;
      const media = await Promise.all(
        (rows || []).map(async (row) => {
          const { data } = await admin.storage
            .from("patient-progress")
            .createSignedUrl(row.storage_path, 1800);
          return {
            id: row.id,
            stage: row.stage,
            takenAt: row.taken_at,
            note: row.patient_note,
            consentGrantedAt: row.consent_granted_at,
            uploadSource: row.upload_source,
            url: data?.signedUrl || null,
          };
        }),
      );
      return reply({ ok: true, media });
    }

    if (action !== "upload") return reply({ error: "invalid_action" }, 400);
    if (!consent) return reply({ error: "consent_required" }, 400);
    if (!file || !allowedTypes.has(file.type) || file.size < 1 || file.size > 5 * 1024 * 1024) {
      return reply({ error: "invalid_file" }, 400);
    }

    const extension = file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg";
    const path = `${patient.clinic_id}/${patient.id}/portal/${crypto.randomUUID()}.${extension}`;
    const { error: uploadError } = await admin.storage
      .from("patient-progress")
      .upload(path, file, { contentType: file.type, upsert: false, cacheControl: "3600" });
    if (uploadError) throw uploadError;

    const { data: mediaRow, error: insertError } = await admin
      .from("before_after_media")
      .insert({
        clinic_id: patient.clinic_id,
        patient_id: patient.id,
        stage: "after",
        storage_path: path,
        consent_granted_at: new Date().toISOString(),
        upload_source: "patient_portal",
        patient_note: note || null,
      })
      .select("id,stage,taken_at,patient_note,consent_granted_at,upload_source")
      .single();
    if (insertError) {
      await admin.storage.from("patient-progress").remove([path]);
      throw insertError;
    }

    const { data: signed } = await admin.storage.from("patient-progress").createSignedUrl(path, 1800);
    return reply({
      ok: true,
      media: {
        id: mediaRow.id,
        stage: mediaRow.stage,
        takenAt: mediaRow.taken_at,
        note: mediaRow.patient_note,
        consentGrantedAt: mediaRow.consent_granted_at,
        uploadSource: mediaRow.upload_source,
        url: signed?.signedUrl || null,
      },
    });
  } catch (error) {
    console.error("patient-media error", error instanceof Error ? error.message : "unknown");
    return reply({ error: "request_failed" }, 500);
  }
});
