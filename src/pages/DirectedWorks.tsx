
import Header from '@/components/Header';
import DirectedWorksSection from '@/components/DirectedWorksSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const DirectedWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-16">
        <DirectedWorksSection />
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  );
};

export default DirectedWorks;
