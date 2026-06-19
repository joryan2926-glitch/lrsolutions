import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { hasSupabaseServerConfig, upsertSiteContentToSupabase } from "@/lib/supabase-server";
import { writeJson } from "@/lib/storage";

export async function POST(request: Request) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const content = await request.json();
  if (hasSupabaseServerConfig()) {
    await upsertSiteContentToSupabase(content);
    return NextResponse.json({ ok: true, storage: "supabase" });
  }

  if (process.env.VERCEL) {
    return NextResponse.json({ error: "Supabase doit être configuré pour modifier le contenu en production." }, { status: 503 });
  }

  await writeJson("site-content.json", content);
  return NextResponse.json({ ok: true, storage: "json" });
}
