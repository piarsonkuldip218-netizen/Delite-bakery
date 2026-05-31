import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Menu from "@/components/Menu";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { business } from "@/lib/data";

// Structured data for local-business SEO (rich results in Google).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: business.name,
  description: business.shortDescription,
  telephone: business.phoneRaw,
  priceRange: "₹₹",
  servesCuisine: "Cakes, Pastries, Bakery",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Baragolai Main Rd, Chariali",
    addressLocality: "Margherita",
    addressRegion: "Assam",
    postalCode: "786182",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.reviewCount,
  },
  openingHours: "Mo-Su 08:00-20:30",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Menu />
        <About />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
