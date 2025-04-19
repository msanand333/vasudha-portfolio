
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, HashRouter } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Showreel from "./pages/Showreel";
import Credits from "./pages/Credits";
import DirectedWorks from "./pages/DirectedWorks";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Use HashRouter for GitHub Pages to handle routing properly
const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/showreel" element={<Showreel />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/directed-works" element={<DirectedWorks />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </QueryClientProvider>
);

export default App;
