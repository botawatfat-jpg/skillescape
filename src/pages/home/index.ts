import type { Metadata } from "next";
import { generatePageMetadata } from "@/shared/config/seo-config";

export { HomePage as default } from "./ui/home-page";

export const metadata: Metadata = generatePageMetadata({
  // Используем дефолтные значения из seoConfig для главной страницы
  path: "/",
  keywords: [
    "learn AI",
    "AI freelancing platform",
    "build AI agents",
    "AI business automation",
    "start freelancing",
  ],
});
