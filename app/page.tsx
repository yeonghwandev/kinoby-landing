import StickyBar from "@/components/StickyBar";
import Hero from "@/components/sections/Hero";
import WhyKinoby from "@/components/sections/WhyKinoby";
import HowItWorks from "@/components/sections/HowItWorks";
import DemoSection from "@/components/sections/DemoSection";
import BetaSignup from "@/components/sections/BetaSignup";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <StickyBar />
      <main className="pt-10">
      <Hero />
      <WhyKinoby />
      <HowItWorks />
      <DemoSection />
      <BetaSignup />
      <Footer />
      </main>
    </>
  );
}
