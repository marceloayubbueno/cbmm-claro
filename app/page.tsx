import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import SectionAlternate from "@/components/sections/SectionAlternate";
import Cashback from "@/components/sections/Cashback";
import GetStarted from "@/components/sections/GetStarted";
import Compliance from "@/components/sections/Compliance";
import Pricing from "@/components/sections/Pricing";
import FAQs from "@/components/sections/FAQs";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="w-full">
        <Hero />
        <Features />
        <SectionAlternate
          variant="light"
          title="Build a flexible card program for your business needs"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam, quis nostrud exercitation."
          imageSrc="/images/features-02.png"
          imageAlt="Features"
          quote="We know the card market very well and this product provides the speed, flexible account model and API-first approach that no one else can."
          quoteAuthor="Quote Author"
          reverse={false}
        />
        <SectionAlternate
          variant="dark"
          title="Spend your money everwhere, pay anyone effortlessy"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam, quis nostrud exercitation."
          imageSrc="/images/features-03.png"
          imageAlt="Features"
          quote="We know the card market very well and this product provides the speed, flexible account model and API-first approach that no one else can."
          quoteAuthor="Quote Author"
          reverse={true}
        />
        <Cashback />
        <GetStarted />
        <Compliance />
        <Pricing />
        <FAQs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

