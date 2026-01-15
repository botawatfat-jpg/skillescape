import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication | Skillescape",
  description: "Sign in to your Skillescape account",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
