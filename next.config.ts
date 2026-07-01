import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  outputFileTracingRoot: dirname(fileURLToPath(import.meta.url)),
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      { source: "/blog", destination: "/", permanent: true },
      { source: "/realisations", destination: "/", permanent: true },
      { source: "/services/developpement-applications", destination: "/services", permanent: true },
      { source: "/services/formations", destination: "/services", permanent: true },
      { source: "/services/evenementiel-professionnel", destination: "/services", permanent: true },
      { source: "/services/support-maintenance", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;