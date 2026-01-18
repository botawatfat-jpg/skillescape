import type { Metadata } from "next";
import { generatePageMetadata } from "@/shared/config/seo-config";

export { SellingPage as default } from "./ui/selling-page";

export const metadata: Metadata = generatePageMetadata({
  title: "Get Your Personalized AI Freelancing Plan",
  description:
    "Get your customized AI-Expert plan tailored to your skills and goals. Start your freelancing journey with personalized guidance and AI-powered tools.",
  path: "/selling-page",
  keywords: [
    "personalized plan",
    "AI expert plan",
    "customized learning",
    "freelancing roadmap",
    "AI career plan",
  ],
});
