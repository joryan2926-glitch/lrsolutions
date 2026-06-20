import type { SiteContent } from "@/lib/content";

type SupabaseRow = Record<string, unknown>;

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export function hasSupabaseServerConfig() {
  return Boolean(supabaseUrl && serviceRoleKey);
}

function getRestUrl(path: string) {
  if (!supabaseUrl) throw new Error("NEXT_PUBLIC_SUPABASE_URL is missing");
  return `${supabaseUrl.replace(/\/$/, "")}/rest/v1/${path}`;
}

async function supabaseFetch<T>(path: string, init: RequestInit = {}): Promise<T> {
  if (!serviceRoleKey) throw new Error("SUPABASE_SERVICE_ROLE_KEY is missing");
  const response = await fetch(getRestUrl(path), {
    ...init,
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...(init.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Supabase REST error ${response.status}: ${message}`);
  }

  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}

export async function getSiteContentFromSupabase(): Promise<SiteContent | null> {
  if (!hasSupabaseServerConfig()) return null;
  try {
    const rows = await supabaseFetch<Array<{ content: SiteContent }>>("site_content?id=eq.main&select=content&limit=1");
    return rows[0]?.content ?? null;
  } catch (error) {
    console.warn("Supabase content unavailable, falling back to local content.", error);
    return null;
  }
}

export async function upsertSiteContentToSupabase(content: SiteContent) {
  await supabaseFetch("site_content?on_conflict=id", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=representation" },
    body: JSON.stringify({ id: "main", content }),
  });
}

export async function insertSubmission(table: "contacts" | "quote_requests", payload: Record<string, string>) {
  return supabaseFetch<Array<SupabaseRow>>(table, {
    method: "POST",
    body: JSON.stringify({
      nom: payload.nom ?? payload.name ?? null,
      prenom: payload.prenom ?? null,
      societe: payload.societe ?? null,
      telephone: payload.telephone ?? null,
      email: payload.email ?? null,
      besoin: payload.besoin ?? payload.sujet ?? null,
      message: payload.message ?? null,
      payload,
    }),
  });
}

export async function listSubmissions() {
  if (!hasSupabaseServerConfig()) return [];
  let contacts: SupabaseRow[] = [];
  let quotes: SupabaseRow[] = [];

  try {
    [contacts, quotes] = await Promise.all([
      supabaseFetch<Array<SupabaseRow>>("contacts?select=*&order=created_at.desc&limit=100"),
      supabaseFetch<Array<SupabaseRow>>("quote_requests?select=*&order=created_at.desc&limit=100"),
    ]);
  } catch (error) {
    console.warn("Supabase submissions unavailable.", error);
    return [];
  }

  return [
    ...contacts.map((row) => normalizeSubmission("contact", row)),
    ...quotes.map((row) => normalizeSubmission("devis", row)),
  ].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

function normalizeSubmission(kind: string, row: SupabaseRow) {
  return {
    kind,
    createdAt: String(row.created_at ?? ""),
    payload: (row.payload as Record<string, string> | undefined) ?? {
      nom: String(row.nom ?? ""),
      prenom: String(row.prenom ?? ""),
      societe: String(row.societe ?? ""),
      telephone: String(row.telephone ?? ""),
      email: String(row.email ?? ""),
      besoin: String(row.besoin ?? ""),
      message: String(row.message ?? ""),
    },
  };
}
