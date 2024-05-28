"use client";
import React from "react";
import { HeroParallax } from "../components/magic-ui/hero-parallax";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden items-center justify-between">
      <HeroParallax />
    </main>
  );
}

