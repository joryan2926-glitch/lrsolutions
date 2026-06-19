import { PageIntro } from "@/components/Chrome";
import { company } from "@/lib/site";

export default function LegalPage() {
  return (
    <>
      <PageIntro
        label="Mentions légales"
        title="Informations légales."
        text="Informations relatives à l'éditeur du site internet officiel de L&R SOLUTIONS."
      />
      <section className="section">
        <div className="shell glass p-8 leading-8 text-slate-300">
          <p>
            <strong>{company.name}</strong> est une {company.legal}, située au {company.address}.
          </p>
          <p className="mt-5">
            Directeur de la publication : représentant légal de L&R SOLUTIONS.
          </p>
          <p className="mt-5">
            Le site présente les services de conseil, accompagnement, développement commercial, digitalisation, création web, automatisation, formation et mise en relation proposés par L&R SOLUTIONS.
          </p>
          <p className="mt-5">
            Tous les contenus présents sur ce site sont protégés. Toute reproduction totale ou partielle sans autorisation préalable est interdite.
          </p>
          <p className="mt-5">Tous droits réservés © 2026.</p>
        </div>
      </section>
    </>
  );
}
