import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Participation from "@/components/sections/Participation";
import Contacts from "@/components/sections/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="w-full">
        <Hero />
        <Features />
        <Participation />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
