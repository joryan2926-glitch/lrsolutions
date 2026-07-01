import type { Metadata } from "next";
import { Footer, Header } from "@/components/Chrome";
import "./globals.css";

const baseUrl = "https://letrsolutions.fr";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": `${baseUrl}/#organization`,
      name: "L&R SOLUTIONS",
      url: baseUrl,
      logo: `${baseUrl}/lr-solutions-logo-transparent.png`,
      image: `${baseUrl}/lr-solutions-logo-transparent.png`,
      slogan: "Solutions intelligentes, résultats durables.",
      description: "Cabinet de conseil et de digitalisation spécialisé en accompagnement stratégique, développement commercial, création web, automatisation, IA, marketing digital et solutions numériques.",
      email: "contact@lr-solutions.fr",
      telephone: "+33745678901",
      address: {
        "@type": "PostalAddress",
        streetAddress: "25 Rue Élise Gervais",
        postalCode: "42000",
        addressLocality: "Saint-Étienne",
        addressCountry: "FR",
      },
      areaServed: "France",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "L&R SOLUTIONS",
      publisher: { "@id": `${baseUrl}/#organization` },
      inLanguage: "fr-FR",
    },
    {
      "@type": "ItemList",
      "@id": `${baseUrl}/#services`,
      name: "Services L&R SOLUTIONS",
      itemListElement: [
        "Conseil et accompagnement",
        "Développement commercial",
        "Marketing et communication",
        "Création de sites internet",
        "Automatisation et IA",
        "Digitalisation des entreprises",
        "Mise en relation et partenariats",
      ].map((name, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
      })),
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "L&R SOLUTIONS | Conseil, digitalisation & développement commercial",
  description: "Site officiel de L&R SOLUTIONS, startup française à Saint-Étienne spécialisée en conseil, développement commercial, marketing, création web, automatisation et solutions numériques.",
  openGraph: {
    url: baseUrl,
    siteName: "L&R SOLUTIONS",
    title: "L&R SOLUTIONS | Solutions intelligentes, résultats durables",
    description: "Cabinet nouvelle génération pour structurer, digitaliser et accélérer la croissance des entreprises.",
    type: "website",
    images: ["/lr-solutions-logo-transparent.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
