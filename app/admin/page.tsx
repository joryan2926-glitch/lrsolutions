import type { Metadata } from "next";
import { AdminPanel } from "@/components/AdminPanel";
import { getContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Administration | L&R SOLUTIONS",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminPage() {
  if (!process.env.ADMIN_TOKEN) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#020817] px-6 text-white">
        <section className="glass max-w-xl p-8 text-center">
          <h1 className="text-2xl font-black">Administration désactivée</h1>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Définissez la variable d&apos;environnement ADMIN_TOKEN dans Vercel pour activer le back-office.
          </p>
        </section>
      </main>
    );
  }

  const content = await getContent();
  return <AdminPanel initialContent={content} />;
}
