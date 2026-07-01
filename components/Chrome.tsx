"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { company } from "@/lib/site";

const nav = [
  ["Accueil", "/"],
  ["À propos", "/a-propos"],
  ["Services", "/services"],
  ["Tarifs", "/tarifs"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
];

const services = [
  "Conseil & Accompagnement",
  "Développement Commercial",
  "Marketing & Communication",
  "Création de Sites Internet",
  "Développement d'Applications",
  "Automatisation & IA",
  "Digitalisation des Entreprises",
  "Formations",
  "Événementiel Professionnel",
  "Mise en Relation & Partenariats",
];

export function Header() {
  return (
    <header className="site-header">
      <nav className="shell header-nav">
        <Link href="/" className="header-logo">
          <Image src="/lr-solutions-logo-transparent.png" alt="Logo L&R Solutions" width={150} height={92} priority />
        </Link>

        <div className="header-nav-scroll" aria-label="Navigation principale">
          <div className="header-nav-links">
            {nav.map(([label, href]) => (
              <Link className="nav-link" href={href} key={href}>
                {label}
              </Link>
            ))}
            <Link href="/contact?type=devis" className="btn btn-primary header-cta">
              Demander un devis <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer-premium">
      <div className="shell footer-grid">
        <div>
          <Image src="/lr-solutions-logo-transparent.png" alt="Logo L&R Solutions" width={150} height={92} className="footer-logo" />
          <p className="mt-5 leading-7 text-slate-400">
            Nous accompagnons les entreprises, indépendants et organisations dans leur transformation numérique et leur développement.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Facebook, Instagram].map((Icon, index) => <span className="social-dot" key={index}><Icon size={17} /></span>)}
          </div>
        </div>
        <div>
          <strong>Navigation</strong>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            {nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          </div>
        </div>
        <div>
          <strong>Nos services</strong>
          <div className="mt-4 grid gap-2 text-sm text-slate-400">
            {services.map((service) => <span key={service}>{service}</span>)}
          </div>
        </div>
        <div>
          <strong>Contact</strong>
          <div className="mt-4 grid gap-4 text-sm text-slate-400">
            <span className="footer-contact"><Phone size={18} /> {company.phone}</span>
            <span className="footer-contact"><Mail size={18} /> {company.email}</span>
            <span className="footer-contact"><MapPin size={18} /> {company.address}</span>
          </div>
        </div>
        <div>
          <strong>Newsletter</strong>
          <p className="mt-4 text-sm text-slate-400">Recevez nos conseils.</p>
          <input className="newsletter-input mt-5" placeholder="Votre email" />
          <button className="btn btn-primary mt-4 w-full" type="button">S&apos;inscrire</button>
        </div>
      </div>
      <div className="shell mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
        <span>© 2026 L&R SOLUTIONS - Tous droits réservés.</span>
        <span>{company.legal} - {company.address}</span>
      </div>
    </footer>
  );
}

export function PageIntro({ label, title, text }: { label: string; title: string; text: string }) {
  const [main, highlight] = title.split("|");
  const showLogo = label === "À propos";
  return (
    <section className={showLogo ? "page-hero page-hero-logo" : "page-hero"}>
      <div className="network-bg" />
      <div className="shell page-hero-inner">
        <div>
          <div className="breadcrumb">Accueil <span>›</span> {label}</div>
          <h1>{main}</h1>
          {highlight ? <h2>{highlight}</h2> : null}
          <p>{text}</p>
          {showLogo ? <Link className="btn btn-primary mt-7" href="/services">Découvrir nos services <ArrowRight size={16} /></Link> : null}
        </div>
        {showLogo ? (
          <Image src="/lr-solutions-logo-transparent.png" alt="Logo L&R SOLUTIONS" width={900} height={552} className="page-hero-logo-img" priority />
        ) : null}
      </div>
    </section>
  );
}
