import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import VentajasSection from '@/sections/VentajasSection';
import GaleriaSection from '@/sections/GaleriaSection';
import TestimoniosSection from '@/sections/TestimoniosSection';
import PreciosSection from '@/sections/PreciosSection';
import CTASection from '@/sections/CTASection';
import ContactoSection from '@/sections/ContactoSection';

export default function App() {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef} className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <HeroSection />
        <VentajasSection />
        <GaleriaSection />
        <TestimoniosSection />
        <PreciosSection />
        <CTASection />
        <ContactoSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
