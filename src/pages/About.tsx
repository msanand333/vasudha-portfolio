
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-16">
        <AboutSection />
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  );
};

export default About;
