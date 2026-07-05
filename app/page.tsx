import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import DemoSection from "@/components/sections/DemoSection";
import BetaSignup from "@/components/sections/BetaSignup";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <DemoSection />
      <BetaSignup />
      <Footer />
    </main>
  );
}
