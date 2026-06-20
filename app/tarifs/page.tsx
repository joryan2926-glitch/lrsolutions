import Link from "next/link";
import { ArrowRight, Check, Headphones, Shield, Settings } from "lucide-react";
import { PageIntro } from "@/components/Chrome";
import { faqs } from "@/lib/site";

export const metadata = {
  title: "Tarifs | L&R SOLUTIONS",
  description: "Découvrez les packs d'accompagnement et prestations unitaires officielles de L&R SOLUTIONS.",
  alternates: { canonical: "/tarifs" },
  openGraph: { url: "https://letrsolutions.fr/tarifs" },
};

const packs = [
  {
    name: "Essentiel",
    price: "49€",
    period: "/mois",
    description: "Pour poser les bases, obtenir un regard externe et avancer avec des conseils réguliers.",
    features: ["Audit rapide", "1 rendez-vous mensuel", "Conseils stratégiques", "Support email"],
    href: "/contact?type=devis&offre=essentiel",
  },
  {
    name: "Standard",
    price: "149€",
    period: "/mois",
    description: "L'offre la plus complète pour structurer votre activité avec un suivi clair et priorisé.",
    features: ["Accompagnement complet", "Conseils stratégiques", "2 rendez-vous mensuels", "Support prioritaire", "Reporting mensuel"],
    href: "/contact?type=devis&offre=standard",
    popular: true,
  },
  {
    name: "Premium",
    price: "299€",
    period: "/mois",
    description: "Un accompagnement avancé pour accélérer, automatiser et suivre vos résultats en détail.",
    features: ["Accompagnement avancé", "Réunions illimitées", "Support prioritaire", "Automatisations simples", "Reporting détaillé"],
    href: "/contact?type=devis&offre=premium",
  },
  {
    name: "Sur Mesure",
    price: "Sur devis",
    period: "",
    description: "Une solution personnalisée pour les besoins complexes, spécifiques ou évolutifs.",
    features: ["Prestations personnalisées", "Développement spécifique", "Accompagnement dédié"],
    href: "/contact?type=devis&offre=sur-mesure",
  },
];

const comparisonRows = [
  ["Audit rapide", "✓", "✓", "✓", "Sur devis"],
  ["Conseils stratégiques", "✓", "✓", "✓", "✓"],
  ["Rendez-vous", "1 / mois", "2 / mois", "Illimités", "Personnalisés"],
  ["Support", "Email", "Prioritaire", "Prioritaire", "Dédié"],
  ["Reporting", "-", "Mensuel", "Détaillé", "Personnalisé"],
  ["Automatisations simples", "-", "-", "✓", "Sur devis"],
  ["Développement spécifique", "-", "-", "-", "✓"],
];

const unitServices = [
  { category: "Conseil & Accompagnement", items: [["Audit entreprise", "79€"], ["Accompagnement projet", "149€"], ["Plan de développement", "249€"]] },
  { category: "Développement Commercial", items: [["Stratégie commerciale", "149€"], ["Processus commercial", "249€"], ["Accompagnement prospection", "299€"]] },
  { category: "Marketing & Communication", items: [["Audit communication", "99€"], ["Création campagne", "199€"], ["Gestion réseaux sociaux", "à partir de 149€/mois"]] },
  { category: "Création de Sites Internet", items: [["Landing page", "299€"], ["Site vitrine", "690€"], ["Site professionnel", "990€"], ["Site premium", "1490€"]] },
  { category: "Développement d'Applications", items: [["MVP simple", "à partir de 1990€"], ["Application métier", "Sur devis"], ["SaaS", "Sur devis"]] },
  { category: "Automatisation & IA", items: [["Audit IA", "99€"], ["Automatisation simple", "199€"], ["Automatisation avancée", "à partir de 490€"]] },
  { category: "Digitalisation des Entreprises", items: [["Diagnostic", "149€"], ["Mise en place outils", "299€"], ["Transformation digitale", "Sur devis"]] },
  { category: "Formations", items: [["Formation individuelle", "79€"], ["Formation groupe", "199€"], ["Formation entreprise", "Sur devis"]] },
  { category: "Événementiel Professionnel", items: [["Accompagnement événement", "149€"], ["Organisation complète", "Sur devis"]] },
  { category: "Mise en Relation & Partenariats", items: [["Recherche partenaires", "99€"], ["Mise en relation professionnelle", "149€"]] },
  { category: "Solutions Numériques", items: [["Mise en place CRM", "249€"], ["GED", "199€"], ["Outils collaboratifs", "149€"]] },
  { category: "Support & Maintenance", items: [["Maintenance site", "29€/mois"], ["Maintenance premium", "59€/mois"], ["Intervention ponctuelle", "49€/heure"]] },
];

export default function PricingPage() {
  return (
    <>
      <PageIntro label="Tarifs" title="Nos tarifs|Des offres adaptées à vos besoins" text="Choisissez la formule qui correspond à vos objectifs et bénéficiez de solutions performantes au meilleur rapport qualité/prix." />
      <section className="white-page">
        <div className="shell">
          <div className="pricing-benefits">
            <div><Settings size={34} /><span><strong>Tarifs transparents</strong><small>Aucun frais caché</small></span></div>
            <div><Shield size={34} /><span><strong>Paiement sécurisé</strong><small>Transactions 100% sécurisées</small></span></div>
            <div><Headphones size={34} /><span><strong>Accompagnement inclus</strong><small>Support et suivi personnalisé</small></span></div>
          </div>

          <div className="pricing-grid-premium">
            {packs.map((pack) => (
              <article className={pack.popular ? "pricing-premium featured" : "pricing-premium"} key={pack.name}>
                {pack.popular ? <div className="popular">Plus populaire</div> : null}
                <h2>{pack.name}</h2>
                <p className="plan-description">{pack.description}</p>
                <strong>{pack.price}{pack.period ? <small>{pack.period}</small> : null}</strong>
                <div className="mt-7 grid gap-3">
                  {pack.features.map((feature) => <span key={feature}><Check size={16} /> {feature}</span>)}
                </div>
                <Link href={pack.href}>{pack.name === "Sur Mesure" ? "Demander un devis" : "Choisir cette offre"}</Link>
              </article>
            ))}
          </div>

          <h2 className="compare-title">Comparez nos offres</h2>
          <div className="compare-table">
            <table>
              <thead><tr><th>Fonctionnalités</th><th>Essentiel</th><th>Standard</th><th>Premium</th><th>Sur Mesure</th></tr></thead>
              <tbody>{comparisonRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>

          <section className="unit-pricing-section">
            <span className="eyebrow">Prestations unitaires</span>
            <h2>Des interventions ciblées selon vos besoins</h2>
            <p>Choisissez une prestation ponctuelle ou combinez plusieurs expertises pour construire un accompagnement adapté à votre projet.</p>
            <div className="unit-category-grid">
              {unitServices.map((group) => (
                <article className="unit-category-card" key={group.category}>
                  <h3>{group.category}</h3>
                  <div className="unit-price-list">
                    {group.items.map(([label, price]) => (
                      <div className="unit-price-row" key={label}>
                        <span>{label}</span>
                        <strong>{price}</strong>
                      </div>
                    ))}
                  </div>
                  <Link href={`/contact?type=devis&prestation=${encodeURIComponent(group.category)}`}>
                    Demander un devis <ArrowRight size={14} />
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <div className="cta-band"><div className="rocket-box">□</div><div><h3>Vous avez un projet spécifique ?</h3><p>Discutons ensemble de vos besoins et trouvons la solution idéale.</p></div><Link className="btn btn-primary" href="/contact?type=devis">Demander un devis gratuit <ArrowRight size={16} /></Link></div>
          <div className="pricing-faq">
            <span className="eyebrow">Questions fréquentes</span>
            <h2>Tout savoir sur nos tarifs</h2>
            <div className="grid gap-5 md:grid-cols-2">{faqs.slice(2, 6).map((item) => <details className="faq-item" key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
          </div>
        </div>
      </section>
    </>
  );
}
