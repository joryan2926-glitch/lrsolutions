import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, BriefcaseBusiness, Check, Code2, Handshake, Megaphone, ShieldCheck, Sparkles, Users, Workflow } from "lucide-react";
import { ContactForm } from "@/components/Forms";
import { getContent } from "@/lib/content";
import { stats } from "@/lib/site";
import { servicePages } from "@/lib/service-pages";

export const dynamic = "force-dynamic";

export const metadata = {
  alternates: { canonical: "/" },
};

const serviceIcons = [Users, BarChart3, Megaphone, Sparkles, Code2, Workflow, ShieldCheck, BriefcaseBusiness, Handshake];
const proofs = ["Solutions sur mesure", "Accompagnement personnalisé", "Résultats mesurables", "Expertise et réactivité"];

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
            <p>L&R SOLUTIONS accompagne les entreprises, indépendants et organisations dans leur transformation numérique et leur développement grâce à des solutions performantes et sur mesure.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="btn btn-primary" href="/services">Découvrir nos services <ArrowRight size={16} /></Link>
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
            <span className="eyebrow">À propos de L&R SOLUTIONS</span>
            <h2>Une startup française au service de votre réussite</h2>
            <p>L&R SOLUTIONS est une société en cours d&apos;immatriculation, spécialisée dans le conseil, la digitalisation, le développement numérique et l&apos;accompagnement des entreprises.</p>
            <ul>{["Approche stratégique et personnalisée", "Solutions innovantes et performantes", "Accompagnement de A à Z", "Engagement et proximité"].map((item) => <li key={item}><Check size={16} /> {item}</li>)}</ul>
            <Link className="btn btn-dark" href="/a-propos">En savoir plus</Link>
          </div>
          <div className="about-photo"><Image src="/visual-city.svg" alt="" width={900} height={520} /></div>
        </div>
        <div className="shell stats-row">{stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>

        <div className="shell section-mini">
          <span className="eyebrow">Nos services</span>
          <h2>Des solutions complètes pour booster votre activité</h2>
          <div className="mini-card-grid">
            {servicePages.slice(0, 10).map((service, index) => {
              const Icon = serviceIcons[index] ?? Sparkles;
              return <article className="mini-card" key={service.title}><Icon size={28} /><h3>{service.title}</h3><p>{service.shortDescription}</p><Link href={`/services/${service.slug}`}>En savoir plus <ArrowRight size={14} /></Link></article>;
            })}
          </div>
          <Link className="btn btn-primary mx-auto mt-7" href="/services">Voir tous nos services <ArrowRight size={16} /></Link>
        </div>

        <div className="shell section-mini">
          <span className="eyebrow">Nos tarifs</span>
          <h2>Des offres adaptées à vos besoins</h2>
          <div className="pricing-grid-premium compact-pricing">{featuredPricing.map((pack, index) => <article className={index === 1 ? "pricing-premium featured" : "pricing-premium"} key={pack.name}><h3>{pack.name}</h3><strong>{pack.price}</strong><p>{pack.description}</p><Link href="/contact?type=devis">Choisir cette offre</Link></article>)}</div>
        </div>

        <div className="shell home-bottom">
          <div>
            <span className="eyebrow">Parlons de votre projet</span>
            <h2>Un besoin concret, une réponse claire</h2>
            <p className="mt-4 leading-8 text-slate-600">Décrivez votre besoin, votre contexte et vos objectifs. L&R SOLUTIONS vous répond avec une approche structurée, lisible et orientée résultats.</p>
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
