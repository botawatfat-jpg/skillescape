import { MetadataRoute } from "next";

/**
 * Web App Manifest для PWA поддержки
 * Next.js 15/16 - автоматическая генерация manifest.json
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Skillescape - AI-Powered Freelancing Platform",
    short_name: "Skillescape",
    description:
      "Learn to build AI agents and start your freelancing journey",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

