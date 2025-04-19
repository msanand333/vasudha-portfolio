
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ShowreelSection from '@/components/ShowreelSection';
import CreditsSection from '@/components/CreditsSection';
import DirectedWorksSection from '@/components/DirectedWorksSection';
import ProjectsSection from '@/components/ProjectsSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  // Set dark theme as default
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (!savedTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ShowreelSection />
        <CreditsSection />
        <DirectedWorksSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  );
};

export default Index;
