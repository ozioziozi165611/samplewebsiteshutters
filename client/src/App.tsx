import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EditorialShowcase from "@/components/EditorialShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import GalleryShowcase from "@/components/GalleryShowcase";
import ContactForm from "@/components/ContactForm";
import StickyQuoteBar from "@/components/StickyQuoteBar";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <Navigation />
          
          {/* Hero Section */}
          <section id="hero">
            <Hero />
          </section>
          
          {/* Editorial Design Showcase */}
          <section id="showcase">
            <EditorialShowcase />
          </section>
          
          {/* Testimonials & Social Proof */}
          <section id="testimonials">
            <TestimonialsSection />
          </section>
          
          {/* Transformation Gallery */}
          <section id="gallery">
            <GalleryShowcase />
          </section>
          
          {/* Contact Form */}
          <section id="contact">
            <ContactForm />
          </section>
          
          {/* Sticky Quote Bar */}
          <StickyQuoteBar />
          
          {/* Footer */}
          <footer className="bg-primary text-primary-foreground py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Elite Shutters</h3>
                  <p className="opacity-90">
                    Premium window treatments for discerning homeowners. 
                    Quality craftsmanship, professional installation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Products</h4>
                  <ul className="space-y-2 opacity-90">
                    <li>Plantation Shutters</li>
                    <li>Wooden Blinds</li>
                    <li>Roller Blinds</li>
                    <li>Venetian Blinds</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Services</h4>
                  <ul className="space-y-2 opacity-90">
                    <li>Free Consultation</li>
                    <li>Custom Design</li>
                    <li>Professional Installation</li>
                    <li>Warranty Support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Contact</h4>
                  <ul className="space-y-2 opacity-90">
                    <li>(555) 123-4567</li>
                    <li>info@eliteshutters.com</li>
                    <li>123 Design Center Blvd</li>
                    <li>City, State 12345</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center opacity-75">
                <p>&copy; 2024 Elite Shutters & Blinds. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
