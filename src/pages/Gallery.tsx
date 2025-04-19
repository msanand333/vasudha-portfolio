
import Header from '@/components/Header';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-16">
        <GallerySection />
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  );
};

export default Gallery;
