'use client'
import { Suspense } from "react";
import { Hero } from "./components/Hero";
import { Quote } from "./components/Quote";
import { Footer } from "./components/Footer";
import { MiddleCTA } from "./components/MiddleCTA";
import { CardsSection } from "./components/CardsSection";

export default function Home() {
  return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
          <Quote />
          <MiddleCTA />
          <CardsSection />
          <Footer />
        </Suspense>
      </>
  );
}
