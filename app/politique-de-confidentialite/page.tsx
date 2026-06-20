import { PageIntro } from "@/components/Chrome";
import { company } from "@/lib/site";

export const metadata = {
  title: "Politique de confidentialité | L&R SOLUTIONS",
  description: "Politique de confidentialité et traitement des données personnelles sur le site L&R SOLUTIONS.",
  alternates: { canonical: "/politique-de-confidentialite" },
  openGraph: { url: "https://letrsolutions.fr/politique-de-confidentialite" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        label="Politique de confidentialité"
        title="Traitement des données personnelles."
        text="Cette page présente les principes de collecte et d'utilisation des informations transmises via le site L&R SOLUTIONS."
      />
      <section className="section">
        <div className="shell glass p-8 leading-8 text-slate-300">
          <p>
            Les informations transmises via les formulaires sont utilisées uniquement pour répondre aux demandes de contact, de devis ou de renseignement.
          </p>
          <p className="mt-5">
            Les données peuvent inclure le nom, prénom, société, téléphone, email, besoin exprimé et message. Elles sont destinées à {company.name} et ne sont pas revendues.
          </p>
          <p className="mt-5">
            Conformément à la réglementation applicable, vous pouvez demander l&apos;accès, la rectification ou la suppression de vos données en écrivant à {company.email}.
          </p>
          <p className="mt-5">
            Certains emails transactionnels ou notifications peuvent être envoyés via Brevo lorsque le service est configuré.
          </p>
        </div>
      </section>
    </>
  );
}
