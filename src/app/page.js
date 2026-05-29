import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ApplicationsSection } from "@/components/home/ApplicationsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { GallerySection } from "@/components/home/GallerySection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactCTASection } from "@/components/home/ContactCTASection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <IndustriesSection />

      <ApplicationsSection />

      <WhyChooseSection />

      <GallerySection />

      <CertificationsSection />

      <TestimonialsSection />

      <ContactCTASection />
    </>
  );
}