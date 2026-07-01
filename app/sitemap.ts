import type { MetadataRoute } from "next";
import { servicePages } from "@/lib/service-pages";

const baseUrl = "https://letrsolutions.fr";

const staticRoutes = [
  "",
  "/a-propos",
  "/services",
  "/tarifs",
  "/faq",
  "/contact",
  "/mentions-legales",
  "/politique-de-confidentialite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...servicePages.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
