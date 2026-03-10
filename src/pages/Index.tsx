import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import FeaturedStories from "@/components/FeaturedStories";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-background min-h-screen">
    <Navbar />
    <HeroSection />
    <BentoGrid />
    <FeaturedStories />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
