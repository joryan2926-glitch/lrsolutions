import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/Forms";
import { PageIntro } from "@/components/Chrome";
import { company } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <PageIntro label="Contact" title="Contactez-nous|Parlons de votre projet" text="Vous avez une question, un projet ou besoin d'un conseil ? Notre équipe est à votre écoute pour vous accompagner." />
      <section className="white-page">
        <div className="shell">
          <div className="contact-panel">
            <aside className="contact-info">
              <h2>Nos coordonnées</h2>
              <p>N&apos;hésitez pas à nous contacter par le moyen qui vous convient le mieux.</p>
              <ContactLine icon={Phone} title="Téléphone" value={company.phone} text="Lun - Ven : 9h00 - 18h00" />
              <ContactLine icon={Mail} title="Email" value={company.email} text="Réponse sous 24h" />
              <ContactLine icon={MapPin} title="Adresse" value={company.address} text="Sur rendez-vous" />
              <ContactLine icon={Clock} title="Horaires" value="Lun - Ven : 9h00 - 18h00" text="Sam - Dim : Fermé" />
            </aside>
            <div className="contact-form-card">
              <h2>Envoyez-nous un message</h2>
              <p>Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.</p>
              <ContactForm type="contact" />
              <span className="privacy-note"><ShieldCheck size={15} /> Vos données sont confidentielles et ne seront jamais partagées.</span>
            </div>
          </div>
          <div className="map-card"><div><h3>Nous localiser</h3><p>Notre bureau est situé à Saint-Étienne. N&apos;hésitez pas à prendre rendez-vous.</p><Link href="/contact">Itinéraire <ArrowRight size={14} /></Link></div><strong>Saint-Étienne</strong></div>
          <div className="cta-band"><div className="rocket-box">↗</div><div><h3>Vous avez un projet en tête ?</h3><p>Discutons ensemble de vos besoins et trouvons la solution idéale.</p></div><Link className="btn btn-primary" href="/contact?type=devis">Demander un devis gratuit <ArrowRight size={16} /></Link></div>
        </div>
      </section>
    </>
  );
}

function ContactLine({ icon: Icon, title, value, text }: { icon: typeof Phone; title: string; value: string; text: string }) {
  return <div className="contact-line"><span><Icon size={22} /></span><div><strong>{title}</strong><b>{value}</b><small>{text}</small></div></div>;
}
