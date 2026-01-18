import React from "react";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/shared/config/seo-config";

export const metadata: Metadata = generatePageMetadata({
  title: "Sign In to Your Account",
  description:
    "Access your Skillescape account to continue your AI freelancing journey and manage your personalized learning plan.",
  path: "/auth/login",
  keywords: ["login", "sign in", "account access", "user authentication"],
  noindex: true, // Страницы авторизации обычно не индексируются
});

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
