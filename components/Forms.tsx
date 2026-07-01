"use client";

import { useState } from "react";

type FormType = "contact" | "devis";

export function ContactForm({ type = "contact" }: { type?: FormType }) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const endpoint = type === "devis" ? "/api/devis" : "/api/contact";

  return (
    <form
      className="grid gap-4"
      onSubmit={async (event) => {
        event.preventDefault();
        setLoading(true);
        setMessage("");
        const form = event.currentTarget;
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Object.fromEntries(new FormData(form))),
        });
        const result = await response.json() as { message?: string; error?: string; saved?: boolean };
        setMessage(result.message ?? result.error ?? "Demande envoyée.");
        setLoading(false);
        if (response.ok && result.saved) form.reset();
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="field" name="nom" placeholder="Nom complet *" required />
        <input className="field" name="prenom" placeholder="Prénom" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="field" name="telephone" placeholder="Téléphone" />
        <input className="field" name="email" type="email" placeholder="Email *" required />
      </div>
      <input className="field" name="societe" placeholder="Société" />
      {type === "devis" ? (
        <select className="field" name="besoin" defaultValue="Conseil et accompagnement">
          <option>Conseil et accompagnement</option>
          <option>Développement commercial</option>
          <option>Marketing et communication</option>
          <option>Création de site internet</option>
          <option>Automatisation de processus</option>
          <option>Autre besoin</option>
        </select>
      ) : (
        <input className="field" name="sujet" placeholder="Sujet" />
      )}
      <textarea
        className="field min-h-36"
        name="message"
        placeholder={type === "devis" ? "Décrivez votre projet ou votre demande..." : "Votre message *"}
        required
      />
      <label className="flex gap-3 text-xs leading-5 text-slate-500">
        <input className="mt-1" name="consentement" type="checkbox" value="oui" required />
        J&apos;accepte d&apos;être recontacté(e) par L&R SOLUTIONS.
      </label>
      <button className="btn btn-primary w-full" disabled={loading} type="submit">
        {loading ? "Envoi en cours..." : type === "devis" ? "Demander un devis" : "Envoyer le message"}
      </button>
      {message ? <div className="form-status">{message}</div> : null}
    </form>
  );
}
