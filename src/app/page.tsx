"use client";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import HowItWorks from "@/components/HowItWorks";
import Model from "@/components/Model";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}
