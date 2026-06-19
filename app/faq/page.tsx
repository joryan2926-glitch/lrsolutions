import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/Chrome";
import { FaqExplorer } from "@/components/InteractiveSections";
import { faqs } from "@/lib/site";

export default function FaqPage() {
  return (
    <>
      <PageIntro label="FAQ" title="FAQ|Questions fréquentes" text="Trouvez rapidement les réponses aux questions les plus courantes sur nos services, notre accompagnement et nos solutions." />
      <section className="white-page">
        <div className="shell">
          <FaqExplorer items={faqs} />
          <div className="cta-band"><div className="rocket-box">↗</div><div><h3>Vous avez un projet en tête ?</h3><p>Discutons ensemble de vos besoins et trouvons la solution idéale.</p></div><Link className="btn btn-primary" href="/contact?type=devis">Demander un devis gratuit <ArrowRight size={16} /></Link></div>
        </div>
      </section>
    </>
  );
}
