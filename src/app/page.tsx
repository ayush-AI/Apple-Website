import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
    </main>
  );
}
