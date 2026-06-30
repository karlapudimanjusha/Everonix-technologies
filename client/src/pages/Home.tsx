import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyEveronixSection from '@/components/WhyEveronixSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import ContactSection from '@/components/ContactSection';

/**
 * Everonix Technologies - Home Page
 * 
 * Design Philosophy: Strategic Enterprise Modern
 * - Professional, trustworthy, innovative
 * - Deep Navy (#1a3a52) + Bright Teal (#0891b2) + Slate Gray (#4a5568)
 * - Sora (display) + Inter (body) typography
 * - Asymmetric layouts with wave dividers
 * - Smooth animations and hover effects
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyEveronixSection />
      <CaseStudiesSection />
      <ContactSection />
    </>
  );
}
