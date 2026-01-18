"use client";

import React from "react";
import { SellingHeader } from "@/widgets/selling-header";
import { SellingHero } from "@/widgets/selling-hero";

export const SellingPage: React.FC = () => {
  return (
    <>
      <SellingHeader />
      <SellingHero />
    </>
  );
};
