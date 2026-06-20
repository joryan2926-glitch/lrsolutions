import type { Metadata } from "next";
import { Footer, Header } from "@/components/Chrome";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lrsolutions.fr"),
  title: "L&R SOLUTIONS | Conseil, digitalisation & développement commercial",
  description: "Site officiel de L&R SOLUTIONS, startup française à Saint-Etienne spécialisée en conseil, développement commercial, marketing, création web, automatisation, formations et solutions numériques.",
  openGraph: {
    title: "L&R SOLUTIONS | Solutions intelligentes, résultats durables",
    description: "Cabinet nouvelle génération pour structurer, digitaliser et accélérer la croissance des entreprises.",
    images: ["/lr-solutions-logo-transparent.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><Header /><main>{children}</main><Footer /></body></html>;
}
