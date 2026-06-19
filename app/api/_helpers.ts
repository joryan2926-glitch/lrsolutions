import { hasSupabaseServerConfig, insertSubmission } from "@/lib/supabase-server";

export type SubmissionKind = "contact" | "devis";

export async function saveSubmission(kind: SubmissionKind, payload: Record<string, string>) {
  if (!hasSupabaseServerConfig()) {
    return { saved: false, message: "Supabase n'est pas encore configuré sur ce déploiement. Votre formulaire est prêt côté site." };
  }

  await insertSubmission(kind === "contact" ? "contacts" : "quote_requests", payload);
  return { saved: true, message: kind === "contact" ? "Votre message a bien été envoyé." : "Votre demande de devis a bien été envoyée." };
}
