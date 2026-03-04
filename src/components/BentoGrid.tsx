import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calendar,
  Globe,
  ShoppingBag,
  TrendingUp,
  Users,
  Palette,
  Plane,
  Heart,
} from "lucide-react";
import featurePlanner from "@/assets/feature-planner.jpg";
import featureShopping from "@/assets/feature-shopping.jpg";
import featureCommunity from "@/assets/feature-community.jpg";

gsap.registerPlugin(ScrollTrigger);

const BentoGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.querySelectorAll(".bento-animate");
      if (items) {
        gsap.from(items, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        });
      }
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" className="bg-background py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-20">
          <p className="text-caption text-muted-foreground mb-4">Everything you need</p>
          <h2 className="text-headline text-foreground">
            Your style, orchestrated.
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 auto-rows-[280px] lg:auto-rows-[320px]"
        >
          {/* Planner - Large */}
          <div className="bento-animate bento-item lg:col-span-7 relative group overflow-hidden">
            <img
              src={featurePlanner}
              alt="Smart trip planner"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
            />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Calendar size={18} className="text-foreground" />
                </div>
                <span className="text-caption text-muted-foreground">Planner</span>
              </div>
              <div>
                <h3 className="text-title text-foreground mb-2">Smart Trip Packing</h3>
                <p className="text-muted-foreground max-w-md">
                  AI curates outfits for your destination, weather, and itinerary. Never overpack again.
                </p>
              </div>
            </div>
          </div>

          {/* Trips */}
          <div className="bento-animate bento-item lg:col-span-5 flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Plane size={18} className="text-foreground" />
              </div>
              <span className="text-caption text-muted-foreground">Trips</span>
            </div>
            <div>
              <h3 className="text-title text-foreground mb-2">Capsule Wardrobe</h3>
              <p className="text-muted-foreground">
                Generate a minimal travel capsule from your existing wardrobe. 10 pieces, 30 outfits.
              </p>
            </div>
          </div>

          {/* Shopping */}
          <div className="bento-animate bento-item lg:col-span-5 relative group overflow-hidden">
            <img
              src={featureShopping}
              alt="Shopping insights"
              className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-700"
            />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <ShoppingBag size={18} className="text-foreground" />
                </div>
                <span className="text-caption text-muted-foreground">Shopping</span>
              </div>
              <div>
                <h3 className="text-title text-foreground mb-2">Wishlists & Price Drops</h3>
                <p className="text-muted-foreground">
                  Track items across retailers. Get notified when prices drop on pieces that match your style.
                </p>
              </div>
            </div>
          </div>

          {/* Insights */}
          <div className="bento-animate bento-item lg:col-span-4 flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <TrendingUp size={18} className="text-foreground" />
              </div>
              <span className="text-caption text-muted-foreground">Insights</span>
            </div>
            <div>
              <h3 className="text-title text-foreground mb-2">Cost Per Wear</h3>
              <p className="text-muted-foreground">
                Understand your wardrobe ROI. See which pieces earn their place.
              </p>
            </div>
          </div>

          {/* Styling */}
          <div className="bento-animate bento-item lg:col-span-3 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <Palette size={18} className="text-foreground" />
            </div>
            <div>
              <h3 className="text-title text-foreground mb-2">Pro Styling</h3>
              <p className="text-sm text-muted-foreground">
                Book a session with certified stylists.
              </p>
            </div>
          </div>

          {/* Community - Large */}
          <div className="bento-animate bento-item lg:col-span-7 relative group overflow-hidden">
            <img
              src={featureCommunity}
              alt="Style community"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
            />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Users size={18} className="text-foreground" />
                </div>
                <span className="text-caption text-muted-foreground">Community</span>
              </div>
              <div>
                <h3 className="text-title text-foreground mb-2">Style Circle</h3>
                <p className="text-muted-foreground max-w-md">
                  Share outfits, discover new aesthetics, and connect with people who dress like you think.
                </p>
              </div>
            </div>
          </div>

          {/* Vibes */}
          <div className="bento-animate bento-item lg:col-span-2 flex flex-col justify-between items-center text-center">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <Heart size={18} className="text-foreground" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground">Vibe Feed</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
