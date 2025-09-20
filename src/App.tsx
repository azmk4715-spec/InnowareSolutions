import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ModernNavigation from "./components/ModernNavigation";
import ModernPopup, { useAutoPopup } from "./components/ModernPopup";
import Footer from "./components/Footer";
import FloatingContactButton from "./components/FloatingContactButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ProjectInquiry from "./pages/ProjectInquiry";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const { showPopup, closePopup } = useAutoPopup();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen bg-background">
              <ModernNavigation />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/project-inquiry" element={<ProjectInquiry />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <FloatingContactButton />
              <ModernPopup isOpen={showPopup} onClose={closePopup} />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
