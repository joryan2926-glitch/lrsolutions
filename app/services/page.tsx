import Link from "next/link";
import { ArrowRight, BarChart3, Handshake, Headphones, Megaphone, Shield, Sparkles, Users, Workflow } from "lucide-react";
import { PageIntro } from "@/components/Chrome";
import { Reveal } from "@/components/Reveal";
import { serviceBenefits } from "@/lib/site";
import { servicePages } from "@/lib/service-pages";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Services | L&R SOLUTIONS",
  description: "Conseil, développement commercial, marketing, création web, automatisation, digitalisation, solutions numériques et partenariats.",
  alternates: { canonical: "/services" },
  openGraph: { url: "https://letrsolutions.fr/services" },
};

const icons = [Users, BarChart3, Megaphone, Sparkles, Workflow, Shield, Handshake, Sparkles];
const benefitIcons = [Users, Shield, BarChart3, Headphones];

export default function ServicesPage() {
  return (
    <>
      <PageIntro label="Services" title="Nos services|Des solutions complètes pour booster votre activité" text="L&R SOLUTIONS accompagne les entreprises, indépendants et organisations avec des solutions innovantes, performantes et adaptées à leurs besoins." />
      <section className="white-page">
        <div className="shell">
          <div className="benefit-strip">
            {serviceBenefits.map(([title, text], index) => {
              const Icon = benefitIcons[index];
              return <div className="benefit-item" key={title}><Icon size={34} /><div><strong>{title}</strong><p>{text}</p></div></div>;
            })}
          </div>
          <div className="service-grid-premium">
            {servicePages.map((service, index) => {
              const Icon = icons[index] ?? Sparkles;
              return (
                <Reveal className="service-card-premium" delay={index * 0.03} key={service.title}>
                  <Icon size={34} />
                  <h2>{service.title}</h2>
                  <p>{service.shortDescription}</p>
                  <Link href={`/services/${service.slug}`}>En savoir plus <ArrowRight size={14} /></Link>
                </Reveal>
              );
            })}
          </div>
          <CtaBand title="Un projet en tête ?" text="Discutons ensemble de vos besoins et trouvons la solution idéale pour faire passer votre entreprise au niveau supérieur." />
        </div>
      </section>
    </>
  );
}

function CtaBand({ title, text }: { title: string; text: string }) {
  return <div className="cta-band"><div className="rocket-box">↗</div><div><h3>{title}</h3><p>{text}</p></div><Link className="btn btn-primary" href="/contact?type=devis">Demander un devis <ArrowRight size={16} /></Link></div>;
}
