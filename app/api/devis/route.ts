import { NextResponse } from "next/server";
import { saveSubmission } from "@/app/api/_helpers";

export async function POST(request: Request) {
  const payload = await request.json() as Record<string, string>;
  if (!payload.email) return NextResponse.json({ error: "Email obligatoire." }, { status: 400 });

  try {
    const result = await saveSubmission("devis", payload);
    return NextResponse.json({ message: result.message, saved: result.saved });
  } catch (error) {
    console.error("Quote submission failed", error);
    return NextResponse.json({ error: "Le formulaire de devis est temporairement indisponible. Merci de nous contacter directement par email ou téléphone." }, { status: 503 });
  }
}
