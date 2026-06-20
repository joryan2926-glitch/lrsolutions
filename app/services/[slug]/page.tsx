import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, HelpCircle, Layers3, Lightbulb, Rocket, ShieldCheck, Target, Workflow } from "lucide-react";
import { ContactForm } from "@/components/Forms";
import { getServicePage, servicePages } from "@/lib/service-pages";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      url: `https://letrsolutions.fr/services/${service.slug}`,
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["/lr-solutions-logo-transparent.png"],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();

  return (
    <>
      <section className="page-hero service-detail-hero">
        <div className="network-bg" />
        <div className="shell page-hero-inner">
          <div>
            <div className="breadcrumb">Accueil <span>›</span> Services <span>›</span> {service.title}</div>
            <p className="hero-kicker">Service L&R SOLUTIONS</p>
            <h1>{service.title}</h1>
            <h2>{service.shortDescription}</h2>
            <p>{service.detailedDescription}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="btn btn-primary" href="/contact?type=devis">Demander un devis <ArrowRight size={16} /></Link>
              <Link className="btn btn-soft" href="/contact">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="white-page">
        <div className="shell service-detail-layout">
          <main className="service-detail-main">
            <SectionBlock eyebrow="Problématiques" title="Les difficultés que nous aidons à résoudre" icon={HelpCircle}>
              <div className="detail-card-grid">
                {service.problems.map((item) => <InfoCard text={item} key={item} />)}
              </div>
            </SectionBlock>

            <SectionBlock eyebrow="Méthode" title="Notre méthode d'accompagnement" icon={Workflow}>
              <div className="method-timeline">
                {service.method.map((step, index) => (
                  <article key={step.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div><h3>{step.title}</h3><p>{step.text}</p></div>
                  </article>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock eyebrow="Prestations incluses" title="Ce que la mission peut inclure" icon={Layers3}>
              <div className="included-grid">
                {service.included.map((item) => <span key={item}><Check size={16} /> {item}</span>)}
              </div>
            </SectionBlock>

            <SectionBlock eyebrow="Bénéfices" title="Les bénéfices pour votre entreprise" icon={Rocket}>
              <div className="detail-card-grid">
                {service.benefits.map((item) => <InfoCard text={item} key={item} />)}
              </div>
            </SectionBlock>

            <SectionBlock eyebrow="Réalisations" title="Exemples de projets possibles" icon={Target}>
              <div className="examples-grid">
                {service.examples.map((item) => <article key={item}><Lightbulb size={24} /><h3>{item}</h3><p>Une mission cadrée pour répondre à un objectif concret et créer un résultat mesurable.</p></article>)}
              </div>
            </SectionBlock>

            <SectionBlock eyebrow="FAQ" title={`Questions fréquentes sur ${service.title}`} icon={HelpCircle}>
              <div className="grid gap-3">
                {service.faqs.map((item, index) => (
                  <details className="faq-item" open={index === 0} key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </SectionBlock>
          </main>

          <aside className="service-detail-sidebar">
            <div className="dark-widget sticky-quote">
              <ShieldCheck size={30} />
              <h2>Demander un devis</h2>
              <p>Présentez votre besoin, vos délais et vos objectifs. Nous revenons vers vous avec une réponse claire.</p>
              <ContactForm type="devis" />
            </div>
            <div className="white-widget">
              <h3>Services associés</h3>
              {servicePages.filter((item) => item.slug !== service.slug).slice(0, 5).map((item) => (
                <Link className="related-service" href={`/services/${item.slug}`} key={item.slug}>
                  {item.title} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function SectionBlock({ eyebrow, title, icon: Icon, children }: { eyebrow: string; title: string; icon: typeof HelpCircle; children: ReactNode }) {
  return (
    <section className="detail-section">
      <div className="detail-section-heading">
        <span><Icon size={22} /></span>
        <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
      </div>
      {children}
    </section>
  );
}

function InfoCard({ text }: { text: string }) {
  return <article className="detail-info-card"><Check size={18} /><p>{text}</p></article>;
}
