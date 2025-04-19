
import Header from '@/components/Header';
import ShowreelSection from '@/components/ShowreelSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const Showreel = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-16">
        <ShowreelSection />
        <ProjectsSection />
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  );
};

export default Showreel;
