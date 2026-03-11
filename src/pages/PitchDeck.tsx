import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Mail } from "lucide-react";

import slideCover from "@/assets/slide-1-cover.jpg";
import slidePhilosophy from "@/assets/slide-2-philosophy.jpg";
import slideDilemma from "@/assets/slide-3-dilemma.jpg";
import slideSolution from "@/assets/slide-4-solution.jpg";
import slidePartner from "@/assets/slide-5-partner.jpg";
import slideRecommendation from "@/assets/slide-6-recommendation.jpg";
import slideEcosystem from "@/assets/slide-7-ecosystem.jpg";
import slideFuture from "@/assets/slide-8-future.jpg";

interface Slide {
  id: number;
  image: string;
  content: React.ReactNode;
}

const slides: Slide[] = [
  {
    id: 1,
    image: slideCover,
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm tracking-[0.4em] uppercase text-foreground/40 mb-8"
        >
          Investor Deck · 2026
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-6xl md:text-8xl font-semibold tracking-tighter text-foreground"
        >
          MEKOVA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-xl font-light text-foreground/60 mt-6 max-w-md"
        >
          Wardrobe Intelligence & Styling Platform
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 px-6 py-3 glass-card text-sm text-foreground/50"
        >
          Bridging the gap between what consumers own and what you sell.
        </motion.div>
      </div>
    ),
  },
  {
    id: 2,
    image: slidePhilosophy,
    content: (
      <div className="flex flex-col justify-end h-full p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 max-w-lg"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-foreground/40 mb-3">Our Philosophy</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            Dress Better. Style Smarter.
          </h2>
          <p className="text-foreground/60 font-light leading-relaxed mb-4">
            We give users the Wardrobe Intelligence to style their outfits, and brands get high-intent, loyal customers.
          </p>
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-full">
            Sustainable is Stylish
          </span>
        </motion.div>
      </div>
    ),
  },
  {
    id: 3,
    image: slideDilemma,
    content: (
      <div className="flex flex-col justify-end h-full p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card-dark p-8 max-w-lg text-white"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">The Retailer's Dilemma</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Shopping in Isolation.
          </h2>
          <p className="text-white/60 font-light leading-relaxed mb-4">
            Most platforms show trending products. Customers hesitate because they don't know if a new piece works with their current wardrobe.
          </p>
          <div className="flex items-center gap-3 text-white/80 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-destructive" />
            Abandoned carts and high return rates.
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    id: 4,
    image: slideSolution,
    content: (
      <div className="flex flex-col justify-center h-full p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 max-w-lg"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-foreground/40 mb-3">The MEKOVA Solution</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            The Missing Piece.
          </h2>
          <p className="text-foreground/60 font-light leading-relaxed mb-4">
            MEKOVA identifies "Wardrobe Gaps." We don't just show a product; we show how it completes a look using items the user already owns.
          </p>
          <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full">
            Contextual Discovery
          </span>
        </motion.div>
      </div>
    ),
  },
  {
    id: 5,
    image: slidePartner,
    content: (
      <div className="flex flex-col justify-end h-full p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 w-full max-w-2xl mx-auto"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4 text-center">How We Partner</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Integration", desc: "We bring your catalog into our styling engine." },
              { step: "02", title: "Discovery", desc: "Your products are surfaced as Style Recommendations." },
              { step: "03", title: "Conversion", desc: "Users click through directly to your site to checkout." },
              { step: "04", title: "Cost", desc: "Zero upfront risk. Lead-gen driven." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="text-2xl font-semibold text-gold">{item.step}</span>
                <h3 className="text-sm font-medium text-foreground mt-2">{item.title}</h3>
                <p className="text-xs text-foreground/50 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    id: 6,
    image: slideRecommendation,
    content: (
      <div className="flex flex-col justify-center items-end h-full p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 max-w-md"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-foreground/40 mb-3">The "Style Recommendation" Advantage</p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
            Why Your Product Wins.
          </h2>
          <p className="text-foreground/60 font-light leading-relaxed mb-4 text-sm">
            We tell the user why your product is a strong addition.
          </p>
          <div className="bg-accent/50 rounded-xl p-4 mb-4">
            <p className="text-sm text-foreground/70 italic">
              "This handcrafted leather boot completes 12 of your existing autumn outfits."
            </p>
          </div>
          <p className="text-xs text-foreground/50">
            ✓ Increases purchase confidence and reduces "buyer's remorse" returns.
          </p>
        </motion.div>
      </div>
    ),
  },
  {
    id: 7,
    image: slideEcosystem,
    content: (
      <div className="flex flex-col items-center justify-center h-full p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 max-w-2xl w-full"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-foreground/40 mb-3 text-center">Why Join the Ecosystem?</p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-6 text-center">
            Partner Benefits
          </h2>
          <div className="space-y-4">
            {[
              { benefit: "Direct Traffic", impact: "High-quality leads sent to your PDP (Product Detail Page)." },
              { benefit: "Brand Alignment", impact: "Positioned alongside conscious, stylish curation." },
              { benefit: "Data Insights", impact: "Understand what \"gaps\" users are trying to fill." },
            ].map((row) => (
              <div key={row.benefit} className="flex items-start gap-4 p-4 bg-accent/30 rounded-xl">
                <span className="text-sm font-medium text-foreground whitespace-nowrap min-w-[120px]">{row.benefit}</span>
                <span className="text-sm text-foreground/60 font-light">{row.impact}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    id: 8,
    image: slideFuture,
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-10 max-w-lg"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-foreground/40 mb-3">Let's Build Together</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            Be an Early Partner.
          </h2>
          <p className="text-foreground/60 font-light leading-relaxed mb-6">
            Join our exclusive pilot group of brands and retailers.
          </p>
          <a
            href="mailto:Kavitay@mekova.me"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            Kavitay@mekova.me
          </a>
        </motion.div>
      </div>
    ),
  },
];

const PitchDeck = () => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= slides.length) return;
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
      if (e.key === "Escape") setIsFullscreen(false);
      if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  };

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div className="h-screen w-screen bg-obsidian flex flex-col overflow-hidden select-none">
      {/* Top bar */}
      {!isFullscreen && (
        <div className="flex items-center justify-between px-6 py-3 bg-obsidian/90 border-b border-border/10 z-10">
          <a href="/" className="text-white/60 text-sm hover:text-white transition-colors">
            ← mekova.me
          </a>
          <span className="text-white/40 text-xs tracking-widest uppercase">
            Retailer Partnership Deck
          </span>
          <button onClick={toggleFullscreen} className="text-white/40 hover:text-white transition-colors">
            <Maximize className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Slide area */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[current].image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
            </div>
            {/* Content overlay */}
            <div className="relative z-10 h-full">{slides[current].content}</div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          disabled={current === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all disabled:opacity-0"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all disabled:opacity-0"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Fullscreen exit */}
        {isFullscreen && (
          <button
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/40 hover:text-white transition-all"
          >
            <Minimize className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Bottom bar — slide indicators */}
      <div className="flex items-center justify-center gap-2 py-4 bg-obsidian/90 border-t border-border/10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-gold" : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
        <span className="ml-4 text-white/30 text-xs tabular-nums">
          {current + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
};

export default PitchDeck;
