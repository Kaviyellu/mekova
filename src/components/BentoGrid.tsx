import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Camera, Sparkles, Calendar, ShoppingBag, Heart, TrendingUp, Palette, Users } from "lucide-react";
import featureDigitise from "@/assets/feature-digitise.jpg";
import featureOutfits from "@/assets/feature-outfits.jpg";
import featurePlanner from "@/assets/feature-planner-new.jpg";
import featureShopping from "@/assets/feature-shopping-new.jpg";
import featureWishlist from "@/assets/feature-wishlist.jpg";
import featureInsights from "@/assets/feature-insights.jpg";
import featureStyling from "@/assets/feature-styling.jpg";
import featureCommunity from "@/assets/feature-community-new.jpg";

gsap.registerPlugin(ScrollTrigger);

const hoverProps = {
  whileHover: { y: -6, boxShadow: "0 40px 80px -20px hsla(0, 0%, 0%, 0.15)" },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
};

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
          <h2 className="text-headline text-foreground">Your style, orchestrated.</h2>
        </div>

        {/* Bento Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 auto-rows-[280px] lg:auto-rows-[320px]"
        >
          {/* 1. Digitise Your Wardrobe - Large */}
          <motion.div {...hoverProps} className="bento-animate bento-item lg:col-span-7 relative group overflow-hidden">
            <img
              src={featureDigitise}
              alt="Digitise your wardrobe"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
            />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Camera size={18} className="text-foreground" />
                </div>
                <span className="text-caption text-muted-foreground">Digitise</span>
              </div>
              <div>
                <h3 className="text-title text-foreground mb-2">Digitise Your Wardrobe</h3>
                <p className="text-muted-foreground max-w-md">
                  Snap a photo, and AI removes backgrounds, categorises, and builds your digital closet instantly.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2. Daily Outfit Recommendations */}
          <motion.div {...hoverProps} className="bento-animate bento-item lg:col-span-5 relative group overflow-hidden">
            <img
              src={featureOutfits}
              alt="Daily outfit recommendations"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
            />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Sparkles size={18} className="text-foreground" />
                </div>
                <span className="text-caption text-muted-foreground">Outfits</span>
              </div>
              <div>
                <h3 className="text-title text-foreground mb-2">Daily Outfit Recommendations</h3>
                <p className="text-muted-foreground">
                  AI-curated looks based on your style, weather, and schedule. Get dressed in seconds.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3. Smart Trip Planning */}
          <motion.div {...hoverProps} className="bento-animate bento-item lg:col-span-5 relative group overflow-hidden">
            <img
              src={featurePlanner}
              alt="Smart trip planning"
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
                <h3 className="text-title text-foreground mb-2">Smart Trip Planning</h3>
                <p className="text-muted-foreground">
                  AI curates outfits for your destination, weather, and itinerary. Never overpack again.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4. Shopping Assistance */}
          <motion.div {...hoverProps} className="bento-animate bento-item lg:col-span-4 relative group overflow-hidden">
            <img
              src={featureShopping}
              alt="Shopping assistance"
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
                <h3 className="text-title text-foreground mb-2">Shopping Assistance</h3>
                <p className="text-muted-foreground">
                  AI finds pieces that complement your wardrobe across hundreds of retailers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 5. Wishlists & Price Tracking */}
          <motion.div {...hoverProps} className="bento-animate bento-item lg:col-span-3 relative group overflow-hidden">
            <img
              src={featureWishlist}
              alt="Wishlists and price tracking"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
            />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Heart size={18} className="text-foreground" />
              </div>
              <div>
                <h3 className="text-title text-foreground mb-2">Wishlists & Price Tracking</h3>
                <p className="text-sm text-muted-foreground">Save items and get notified when prices drop.</p>
              </div>
            </div>
          </motion.div>

          {/* 6. Wardrobe Insights */}
          <motion.div {...hoverProps} className="bento-animate bento-item lg:col-span-4 relative group overflow-hidden">
            <img
              src={featureInsights}
              alt="Wardrobe insights"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
            />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <TrendingUp size={18} className="text-foreground" />
                </div>
                <span className="text-caption text-muted-foreground">Insights</span>
              </div>
              <div>
                <h3 className="text-title text-foreground mb-2">Wardrobe Insights</h3>
                <p className="text-muted-foreground">
                  Get Cost per wear, ROI analytics, and usage patterns for every piece you own.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 7. Pro Styling */}
          <motion.div {...hoverProps} className="bento-animate bento-item lg:col-span-3 relative group overflow-hidden">
            <img
              src={featureStyling}
              alt="Pro styling"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
            />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Palette size={18} className="text-foreground" />
              </div>
              <div>
                <h3 className="text-title text-foreground mb-2">Pro Styling</h3>
                <p className="text-sm text-muted-foreground">Book sessions with certified stylists.</p>
              </div>
            </div>
          </motion.div>

          {/* 8. Vibe with Style Community - Large */}
          <motion.div {...hoverProps} className="bento-animate bento-item lg:col-span-5 relative group overflow-hidden">
            <img
              src={featureCommunity}
              alt="Style community"
              className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-700"
            />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Users size={18} className="text-foreground" />
                </div>
                <span className="text-caption text-muted-foreground">Community</span>
              </div>
              <div>
                <h3 className="text-title text-foreground mb-2">Vibe with Style Community</h3>
                <p className="text-muted-foreground max-w-md">
                  Share outfits, discover new aesthetics, and connect with people who vibe with your style.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
