import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Features from "@/components/Features";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import TrustSecurity from "@/components/TrustSecurity";
import PlatformShowcase from "@/components/PlatformShowcase";
import ChatbotSection from "@/components/ChatbotSection";
import UrlScannerSection from "@/components/UrlScannerSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <Features />
      <WhyChooseUs />
      <HowItWorks />
      <TrustSecurity />
      <PlatformShowcase />
      <UrlScannerSection />
      <ChatbotSection />
    </>
  );
}
