"use client";

import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import type { faqs } from "@/lib/site";

type Faq = (typeof faqs)[number];

export function FaqExplorer({ items }: { items: Faq[] }) {
  const categories = ["Toutes les questions", ...Array.from(new Set(items.map((item) => item.category)))];
  const [active, setActive] = useState(categories[0]);
  const [query, setQuery] = useState("");
  const filtered = items.filter((item) => {
    const matchCategory = active === "Toutes les questions" || item.category === active;
    return matchCategory && `${item.question} ${item.answer}`.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="faq-layout">
      <div>
        <label className="search-box wide">
          <Search size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher une question..." />
        </label>
        <div className="filter-row compact">
          {categories.map((category) => (
            <button className={active === category ? "filter-pill active" : "filter-pill"} onClick={() => setActive(category)} type="button" key={category}>
              {category}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-3">
          {filtered.map((item, index) => (
            <details className="faq-item" open={index === 0} key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <aside className="sidebar-stack">
        <div className="dark-widget">
          <h3>Vous ne trouvez pas la réponse ?</h3>
          <p>Notre équipe est à votre disposition pour vous aider.</p>
          <strong>07 45 67 89 01</strong>
          <strong>contact@lr-solutions.fr</strong>
          <Link href="/contact">Nous contacter <ArrowRight size={14} /></Link>
        </div>
        <div className="white-widget">
          <h3>Pourquoi choisir L&R SOLUTIONS ?</h3>
          {["Expertise & expérience", "Solutions sur mesure", "Accompagnement complet", "Résultats mesurables", "Support réactif"].map((item) => <p key={item}>{item}</p>)}
        </div>
      </aside>
    </div>
  );
}
