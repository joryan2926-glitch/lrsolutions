import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Check, Handshake, Megaphone, ShieldCheck, Sparkles, Users, Workflow } from "lucide-react";
import { ContactForm } from "@/components/Forms";
import { getContent } from "@/lib/content";
import { stats } from "@/lib/site";
import { servicePages } from "@/lib/service-pages";

export const dynamic = "force-dynamic";

export const metadata = {
  alternates: { canonical: "/" },
};

const serviceIcons = [Users, BarChart3, Megaphone, Sparkles, Workflow, ShieldCheck, Handshake, Sparkles];
const proofs = ["Solutions sur mesure", "Accompagnement personnalis\u00e9", "R\u00e9sultats mesurables", "Expertise et r\u00e9activit\u00e9"];
const trustSteps = [
  ["Diagnostic", "Comprendre votre contexte, vos priorit\u00e9s et vos points de blocage avant toute recommandation."],
  ["Plan clair", "Transformer le besoin en feuille de route lisible, chiffr\u00e9e et exploitable."],
  ["Ex\u00e9cution", "Mettre en place les actions, les outils ou les supports avec un suivi r\u00e9gulier."],
  ["Optimisation", "Mesurer les r\u00e9sultats, ajuster et documenter pour garder une base durable."],
];

export default async function Home() {
  const content = await getContent();
  const featuredPricing = content.pricing.slice(0, 4);

  return (
    <>
      <section className="home-hero">
        <div className="network-bg" />
        <div className="shell home-hero-grid">
          <div>
            <p className="hero-kicker">{content.slogan}</p>
            <h1>L&apos;innovation au service <span>de votre croissance</span></h1>
            <p>L&amp;R SOLUTIONS accompagne les entreprises, ind&eacute;pendants et organisations dans leur transformation num&eacute;rique et leur d&eacute;veloppement gr&acirc;ce &agrave; des solutions performantes et sur mesure.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="btn btn-primary" href="/services">D&eacute;couvrir nos services <ArrowRight size={16} /></Link>
              <Link className="btn btn-soft" href="/tarifs">Nos tarifs</Link>
              <Link className="btn btn-light" href="/contact?type=devis">Demander un devis</Link>
            </div>
          </div>
          <div className="hero-logo-xl"><Image src="/lr-solutions-logo-transparent.png" alt="Logo L&R SOLUTIONS" width={1213} height={743} priority /></div>
        </div>
        <div className="shell proof-row">{proofs.map((proof) => <div key={proof}><ShieldCheck size={24} /><span>{proof}</span></div>)}</div>
      </section>

      <section className="white-page">
        <div className="shell split-about">
          <div>
            <span className="eyebrow">&Agrave; propos de L&amp;R SOLUTIONS</span>
            <h2>Une startup fran&ccedil;aise au service de votre r&eacute;ussite</h2>
            <p>L&amp;R SOLUTIONS est une soci&eacute;t&eacute; en cours d&apos;immatriculation, sp&eacute;cialis&eacute;e dans le conseil, la digitalisation, le d&eacute;veloppement num&eacute;rique et l&apos;accompagnement des entreprises.</p>
            <ul>{["Approche strat\u00e9gique et personnalis\u00e9e", "Solutions innovantes et performantes", "Accompagnement de A \u00e0 Z", "Engagement et proximit\u00e9"].map((item) => <li key={item}><Check size={16} /> {item}</li>)}</ul>
            <Link className="btn btn-dark" href="/a-propos">En savoir plus</Link>
          </div>
          <div className="about-photo"><Image src="/visual-city.svg" alt="" width={900} height={520} /></div>
        </div>
        <div className="shell stats-row">{stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>

        <div className="shell section-mini">
          <span className="eyebrow">Nos services</span>
          <h2>Des solutions compl&egrave;tes pour booster votre activit&eacute;</h2>
          <div className="mini-card-grid">
            {servicePages.slice(0, 10).map((service, index) => {
              const Icon = serviceIcons[index] ?? Sparkles;
              return <article className="mini-card" key={service.title}><Icon size={28} /><h3>{service.title}</h3><p>{service.shortDescription}</p><Link href={`/services/${service.slug}`}>En savoir plus <ArrowRight size={14} /></Link></article>;
            })}
          </div>
          <Link className="btn btn-primary mx-auto mt-7" href="/services">Voir tous nos services <ArrowRight size={16} /></Link>
        </div>

        <div className="shell trust-panel">
          <div>
            <span className="eyebrow">M&eacute;thode &amp; engagement</span>
            <h2>Un accompagnement structur&eacute;, lisible et orient&eacute; r&eacute;sultats</h2>
            <p>Chaque mission est cadr&eacute;e avec une logique simple : comprendre, prioriser, ex&eacute;cuter, mesurer. Vous savez o&ugrave; vous allez, ce qui est livr&eacute; et pourquoi chaque action compte.</p>
          </div>
          <div className="trust-grid">
            {trustSteps.map(([title, text], index) => (
              <article key={title}>
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="shell section-mini">
          <span className="eyebrow">Nos tarifs</span>
          <h2>Des offres adapt&eacute;es &agrave; vos besoins</h2>
          <div className="pricing-grid-premium compact-pricing">{featuredPricing.map((pack, index) => <article className={index === 1 ? "pricing-premium featured" : "pricing-premium"} key={pack.name}><h3>{pack.name}</h3><strong>{pack.price}</strong><p>{pack.description}</p><Link href="/contact?type=devis">Choisir cette offre</Link></article>)}</div>
        </div>

        <div className="shell home-bottom">
          <div>
            <span className="eyebrow">Parlons de votre projet</span>
            <h2>Un besoin concret, une r&eacute;ponse claire</h2>
            <p className="mt-4 leading-8 text-slate-600">D&eacute;crivez votre besoin, votre contexte et vos objectifs. L&amp;R SOLUTIONS vous r&eacute;pond avec une approche structur&eacute;e, lisible et orient&eacute;e r&eacute;sultats.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link className="btn btn-primary" href="/contact?type=devis">Demander un devis <ArrowRight size={16} /></Link>
              <Link className="btn btn-dark" href="/contact">Nous contacter</Link>
            </div>
          </div>
          <div className="home-contact-card">
            <span className="eyebrow">Contact</span>
            <h2>Contactez-nous</h2>
            <ContactForm type="contact" />
          </div>
        </div>
      </section>
    </>
  );
}