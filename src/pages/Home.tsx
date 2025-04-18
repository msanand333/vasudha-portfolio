
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CreditsSection from '@/components/CreditsSection';
import AwardsSection from '@/components/AwardsSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { useEffect } from 'react';

const Home = () => {
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
        <CreditsSection />
        <AwardsSection />
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  );
};

export default Home;
