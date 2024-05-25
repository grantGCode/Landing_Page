import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Quote } from "./components/Quote";
import { MiddleCTA } from "./components/MiddleCTA";
import { CardsSection } from "./components/CardsSection";

export default function Home() {
  return (
      <>
        <Hero />
        <Quote />
        <MiddleCTA />
        <CardsSection />
      </>
  );
}
