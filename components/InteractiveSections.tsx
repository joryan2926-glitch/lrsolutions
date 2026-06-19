"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { blogPosts, faqs, projects } from "@/lib/site";

type Project = (typeof projects)[number];
type Post = (typeof blogPosts)[number];
type Faq = (typeof faqs)[number];

export function ProjectGallery({ items }: { items: Project[] }) {
  const categories = ["Tous les projets", ...Array.from(new Set(items.map((item) => item.category)))];
  const [active, setActive] = useState(categories[0]);
  const filtered = active === "Tous les projets" ? items : items.filter((item) => item.category === active);

  return (
    <>
      <div className="filter-row">
        {categories.map((category) => (
          <button className={active === category ? "filter-pill active" : "filter-pill"} onClick={() => setActive(category)} type="button" key={category}>
            {category}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {filtered.map((project) => (
          <article className="project-card" key={project.title}>
            <Image src={project.image} alt="" width={900} height={520} className="project-image" />
            <div className="p-6">
              <span className="tag">{project.category}</span>
              <h2>{project.title}</h2>
              <p>{project.text}</p>
              <div className="mt-5 flex items-center justify-between">
                <Link href="/contact?type=devis">Voir le projet <ArrowRight size={14} /></Link>
                <span>{project.year}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export function BlogExplorer({ posts, categories }: { posts: Post[]; categories: string[] }) {
  const [active, setActive] = useState("Tous les articles");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => posts.filter((post) => {
    const matchCategory = active === "Tous les articles" || post.category === active;
    const text = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase();
    return matchCategory && text.includes(query.toLowerCase());
  }), [active, posts, query]);

  return (
    <div className="blog-layout">
      <div>
        <div className="blog-tools">
          <div className="filter-row compact">
            {["Tous les articles", ...categories].map((category) => (
              <button className={active === category ? "filter-pill active" : "filter-pill"} onClick={() => setActive(category)} type="button" key={category}>
                {category}
              </button>
            ))}
          </div>
          <label className="search-box">
            <Search size={18} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher un article..." />
          </label>
        </div>
        <div className="article-grid">
          {filtered.map((post) => (
            <article className="article-card" key={post.title}>
              <Image src={post.image} alt="" width={900} height={520} className="project-image" />
              <div className="p-5">
                <span className="tag">{post.category}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="article-meta">
                  <span><Calendar size={14} /> {post.date}</span>
                  <span><Clock size={14} /> {post.readTime}</span>
                  <Link href="/blog">Lire l&apos;article <ArrowRight size={14} /></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <aside className="sidebar-stack">
        <div className="dark-widget">
          <h3>Newsletter</h3>
          <p>Recevez nos conseils et actualités directement dans votre boîte mail.</p>
          <input placeholder="Votre email" />
          <button type="button">S&apos;inscrire</button>
        </div>
        <div className="white-widget">
          <h3>Catégories</h3>
          {categories.map((category, index) => (
            <button onClick={() => setActive(category)} type="button" key={category}>
              {category}<span>{12 + index}</span>
            </button>
          ))}
        </div>
        <div className="white-widget">
          <h3>Articles populaires</h3>
          {posts.slice(0, 3).map((post) => <p key={post.title}>{post.title}</p>)}
        </div>
      </aside>
    </div>
  );
}

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
