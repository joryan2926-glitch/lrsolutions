import { hasSupabaseServerConfig, insertSubmission } from "@/lib/supabase-server";

export type SubmissionKind = "contact" | "devis";

const unavailableMessage = "Fonctionnalité bientôt disponible : l'envoi automatique n'est pas encore activé. Contactez-nous directement par email ou téléphone.";

export async function saveSubmission(kind: SubmissionKind, payload: Record<string, string>) {
  if (!hasSupabaseServerConfig()) {
    return { saved: false, message: unavailableMessage };
  }

  try {
    await insertSubmission(kind === "contact" ? "contacts" : "quote_requests", payload);
    return { saved: true, message: kind === "contact" ? "Votre message a bien été envoyé." : "Votre demande de devis a bien été envoyée." };
  } catch (error) {
    console.error("Submission storage unavailable", error);
    return { saved: false, message: unavailableMessage };
  }
}
