import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/Chrome";
import { ProjectGallery } from "@/components/InteractiveSections";
import { projects } from "@/lib/site";

export const metadata = {
  title: "Réalisations | L&R SOLUTIONS",
  description: "Découvrez des exemples de projets digitaux, commerciaux et stratégiques réalisés par L&R SOLUTIONS.",
  alternates: { canonical: "/realisations" },
  openGraph: { url: "https://letrsolutions.fr/realisations" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro label="Réalisations" title="Nos réalisations|Des projets concrets, des résultats mesurables" text="Découvrez une sélection de projets réalisés pour nos clients. Des solutions sur mesure qui répondent à des besoins réels et génèrent de la valeur." />
      <section className="white-page">
        <div className="shell">
          <ProjectGallery items={projects} />
          <div className="mt-10 text-center"><button className="btn btn-primary" type="button">Voir plus de projets <ArrowRight size={16} /></button></div>
          <div className="cta-band"><div className="rocket-box">↗</div><div><h3>Vous avez un projet en tête ?</h3><p>Discutons ensemble de vos besoins et trouvons la solution idéale pour atteindre vos objectifs.</p></div><Link className="btn btn-primary" href="/contact?type=devis">Demander un devis gratuit <ArrowRight size={16} /></Link></div>
        </div>
      </section>
    </>
  );
}
