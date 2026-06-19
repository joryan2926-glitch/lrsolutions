"use client";

import { useEffect, useState } from "react";
import type { SiteContent } from "@/lib/content";

type Submission = { kind: string; createdAt: string; payload: Record<string, string> };

export function AdminPanel({ initialContent }: { initialContent: SiteContent }) {
  const [content, setContent] = useState(initialContent);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [status, setStatus] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const savedToken = window.localStorage.getItem("lr-admin-token") ?? "";
    setToken(savedToken);
    fetch("/api/admin/submissions", { headers: savedToken ? { "x-admin-token": savedToken } : {} })
      .then((response) => response.json())
      .then((data) => setSubmissions(data.submissions ?? []));
  }, []);

  async function save() {
    setStatus("");
    window.localStorage.setItem("lr-admin-token", token);
    const response = await fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(token ? { "x-admin-token": token } : {}) },
      body: JSON.stringify(content),
    });
    setStatus(response.ok ? "Contenu sauvegardé." : "Erreur de sauvegarde.");
  }

  return (
    <div className="admin-grid bg-[#020817]">
      <aside className="border-r border-white/10 p-6">
        <h1 className="text-xl font-bold">Administration</h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Back-office pour modifier les contenus, les services, les tarifs, les articles et consulter les demandes.
        </p>
        <input className="field mt-6" placeholder="ADMIN_TOKEN" type="password" value={token} onChange={(event) => setToken(event.target.value)} />
        <button className="btn btn-primary mt-4 w-full" onClick={save} type="button">Sauvegarder</button>
        {status ? <p className="mt-4 text-sm text-[#5edcff]">{status}</p> : null}
      </aside>
      <main className="grid gap-6 p-6">
        <section className="glass p-5">
          <h2 className="text-lg font-bold">Textes accueil</h2>
          <div className="mt-4 grid gap-3">
            <input className="field" value={content.heroTitle} onChange={(event) => setContent({ ...content, heroTitle: event.target.value })} />
            <textarea className="field min-h-24" value={content.heroText} onChange={(event) => setContent({ ...content, heroText: event.target.value })} />
            <input className="field" value={content.slogan} onChange={(event) => setContent({ ...content, slogan: event.target.value })} />
          </div>
        </section>

        <section className="glass p-5">
          <h2 className="text-lg font-bold">Services</h2>
          <div className="mt-4 grid gap-3">
            {content.services.map((service, index) => (
              <div className="grid gap-2 md:grid-cols-[.35fr_1fr]" key={index}>
                <input className="field" value={service.title} onChange={(event) => {
                  const next = [...content.services];
                  next[index] = { ...service, title: event.target.value };
                  setContent({ ...content, services: next });
                }} />
                <input className="field" value={service.text} onChange={(event) => {
                  const next = [...content.services];
                  next[index] = { ...service, text: event.target.value };
                  setContent({ ...content, services: next });
                }} />
              </div>
            ))}
          </div>
        </section>

        <section className="glass p-5">
          <h2 className="text-lg font-bold">Tarifs</h2>
          <div className="mt-4 grid gap-3">
            {content.pricing.map((pack, index) => (
              <div className="grid gap-2 md:grid-cols-4" key={index}>
                <input className="field" value={pack.name} onChange={(event) => {
                  const next = [...content.pricing];
                  next[index] = { ...pack, name: event.target.value };
                  setContent({ ...content, pricing: next });
                }} />
                <input className="field" value={pack.price} onChange={(event) => {
                  const next = [...content.pricing];
                  next[index] = { ...pack, price: event.target.value };
                  setContent({ ...content, pricing: next });
                }} />
                <input className="field md:col-span-2" value={pack.description} onChange={(event) => {
                  const next = [...content.pricing];
                  next[index] = { ...pack, description: event.target.value };
                  setContent({ ...content, pricing: next });
                }} />
              </div>
            ))}
          </div>
        </section>

        <section className="glass p-5">
          <h2 className="text-lg font-bold">Articles de blog</h2>
          <div className="mt-4 grid gap-3">
            {content.blog.map((post, index) => (
              <div className="grid gap-2 md:grid-cols-[.25fr_.35fr_1fr]" key={index}>
                <input className="field" value={post.date} onChange={(event) => {
                  const next = [...content.blog];
                  next[index] = { ...post, date: event.target.value };
                  setContent({ ...content, blog: next });
                }} />
                <input className="field" value={post.title} onChange={(event) => {
                  const next = [...content.blog];
                  next[index] = { ...post, title: event.target.value };
                  setContent({ ...content, blog: next });
                }} />
                <input className="field" value={post.excerpt} onChange={(event) => {
                  const next = [...content.blog];
                  next[index] = { ...post, excerpt: event.target.value };
                  setContent({ ...content, blog: next });
                }} />
              </div>
            ))}
          </div>
        </section>

        <section className="glass p-5">
          <h2 className="text-lg font-bold">Demandes contact & devis</h2>
          <div className="mt-4 grid gap-3">
            {submissions.length ? submissions.map((item, index) => (
              <div className="rounded border border-white/10 bg-white/[.04] p-4 text-sm" key={index}>
                <div className="font-bold text-[#5edcff]">{item.kind} · {item.createdAt}</div>
                <pre className="mt-3 whitespace-pre-wrap text-slate-300">{JSON.stringify(item.payload, null, 2)}</pre>
              </div>
            )) : <p className="text-slate-400">Aucune demande enregistrée.</p>}
          </div>
        </section>
      </main>
    </div>
  );
}
