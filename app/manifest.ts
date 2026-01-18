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
      "Learn to build AI agents and start your freelancing journey with personalized courses and AI-powered tools",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    orientation: "portrait",
    scope: "/",
    categories: ["education", "business", "productivity"],
    lang: "en",
    dir: "ltr",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      // Добавьте больше иконок для лучшей поддержки PWA
      // {
      //   src: "/icon-192.png",
      //   sizes: "192x192",
      //   type: "image/png",
      //   purpose: "maskable"
      // },
      // {
      //   src: "/icon-512.png",
      //   sizes: "512x512",
      //   type: "image/png",
      //   purpose: "any"
      // },
    ],
  };
}

