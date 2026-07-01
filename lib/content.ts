import { readFile } from "node:fs/promises";
import path from "node:path";
import { getSiteContentFromSupabase } from "@/lib/supabase-server";
export { company } from "@/lib/site";

export type Service = { title: string; text: string };
export type Pricing = { name: string; price: string; description: string; features: string[] };
export type SiteContent = {
  heroTitle: string;
  heroText: string;
  slogan: string;
  services: Service[];
  pricing: Pricing[];
};

export async function getContent(): Promise<SiteContent> {
  if (process.env.USE_SUPABASE_CONTENT === "true") {
    const content = await getSiteContentFromSupabase();
    if (content) return content;
  }

  const file = path.join(process.cwd(), "data", "site-content.json");
  const raw = await readFile(file, "utf8");
  return JSON.parse(raw) as SiteContent;
}