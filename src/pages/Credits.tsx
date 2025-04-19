
import Header from '@/components/Header';
import CreditsSection from '@/components/CreditsSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const Credits = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-16">
        <CreditsSection />
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  );
};

export default Credits;
