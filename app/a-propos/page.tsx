import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Handshake, Lightbulb, Medal, ShieldCheck, Target } from "lucide-react";
import { PageIntro } from "@/components/Chrome";
import { stats, values } from "@/lib/site";

export const metadata = {
  title: "À propos | L&R SOLUTIONS",
  description: "Découvrez L&R SOLUTIONS, startup française spécialisée dans le conseil, la digitalisation et l'accompagnement des entreprises.",
  alternates: { canonical: "/a-propos" },
  openGraph: { url: "https://letrsolutions.fr/a-propos" },
};

const storyItems = [
  ["Approche personnalisée", "Des solutions adaptées à chaque besoin.", Target],
  ["Innovation continue", "Des outils et méthodes à la pointe.", Lightbulb],
  ["Engagement qualité", "Un travail rigoureux et des résultats mesurables.", Medal],
  ["Relation de confiance", "Une collaboration basée sur l'écoute et la transparence.", Handshake],
];

export default function AboutPage() {
  return (
    <>
      <PageIntro label="À propos" title="À propos de|L&R SOLUTIONS" text="L&R SOLUTIONS accompagne les entreprises, indépendants et organisations dans leur transformation numérique et leur développement grâce à des solutions innovantes, performantes et adaptées." />
      <section className="white-page">
        <div className="shell about-story">
          <div className="office-visual office-visual-dark"><Image src="/lr-solutions-logo-transparent.png" alt="Logo L&R SOLUTIONS" width={1213} height={743} /></div>
          <div>
            <span className="eyebrow">Notre histoire</span>
            <h2>Une entreprise née de la passion de l&apos;innovation</h2>
            <p>L&R SOLUTIONS est une société en cours d&apos;immatriculation, spécialisée dans le conseil, la digitalisation, le développement numérique et l&apos;accompagnement des entreprises.</p>
            <p>Notre mission est simple : fournir des solutions sur mesure, innovantes et efficaces pour aider nos clients à atteindre leurs objectifs.</p>
            <div className="story-grid">
              {storyItems.map(([title, text, Icon]) => <div key={title as string}><Icon size={24} /><span><strong>{title as string}</strong><small>{text as string}</small></span></div>)}
            </div>
          </div>
        </div>
        <div className="shell stat-band">{stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
        <div className="shell values-section">
          <span className="eyebrow">Nos valeurs</span>
          <h2>Ce qui nous guide au quotidien</h2>
          <div className="values-grid">{values.map((value) => <article className="value-card" key={value.title}><ShieldCheck size={30} /><h3>{value.title}</h3><p>{value.text}</p></article>)}</div>
        </div>
        <div className="shell team-banner"><div><h2>Une équipe, une vision, <span>votre réussite.</span></h2><p>Notre équipe met son savoir-faire et son expérience à votre service pour vous accompagner à chaque étape.</p><Link className="btn btn-primary" href="/contact">Nous contacter <ArrowRight size={16} /></Link></div></div>
      </section>
    </>
  );
}
