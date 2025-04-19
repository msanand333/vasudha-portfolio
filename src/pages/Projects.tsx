
import Header from '@/components/Header';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-16">
        <ProjectsSection />
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  );
};

export default Projects;
