import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { hasSupabaseServerConfig, listSubmissions } from "@/lib/supabase-server";
import { readJson } from "@/lib/storage";

export async function GET(request: Request) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (hasSupabaseServerConfig()) {
    const submissions = await listSubmissions();
    return NextResponse.json({ submissions, storage: "supabase" });
  }

  const submissions = process.env.VERCEL ? [] : await readJson("submissions.json", []);
  return NextResponse.json({ submissions, storage: process.env.VERCEL ? "not_configured" : "json" });
}
