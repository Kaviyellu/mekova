import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Scan, Wand2 } from "lucide-react";
import heroImage from "@/assets/hero-digitise.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image expand on scroll
      gsap.fromTo(
        imageRef.current,
        { width: "70%", borderRadius: "32px" },
        {
          width: "100%",
          borderRadius: "0px",
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      // Text fade
      gsap.from(textRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[200vh] bg-background">
      {/* Sticky hero */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Title */}
        <div ref={textRef} className="text-center mb-12 px-6 z-10">
          <p className="text-caption text-muted-foreground mb-4">
            Your Wardrobe, Reimagined
          </p>
          <h1 className="text-display text-foreground mb-6">
            Mekova
          </h1>
          <p className="text-body-large text-muted-foreground max-w-xl mx-auto">
            Digitise your wardrobe. Get AI-powered styling. Plan outfits for every moment.
          </p>
        </div>

        {/* Expanding image container */}
        <div
          ref={imageRef}
          className="relative overflow-hidden cinematic-shadow mx-auto"
          style={{ width: "70%", borderRadius: "32px", maxHeight: "60vh" }}
        >
          <img
            src={heroImage}
            alt="Mekova - Digitise your wardrobe with AI"
            className="w-full h-full object-cover"
          />

          {/* Glassmorphic floating labels */}
          <div className="absolute top-6 left-6 glass-label animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <span className="flex items-center gap-2 text-foreground">
              <Scan size={14} /> AI Scan
            </span>
          </div>
          <div className="absolute top-6 right-6 glass-label animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <span className="flex items-center gap-2 text-foreground">
              <Sparkles size={14} /> Smart Match
            </span>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-label animate-fade-up" style={{ animationDelay: "1s" }}>
            <span className="flex items-center gap-2 text-foreground">
              <Wand2 size={14} /> Style Engine
            </span>
          </div>
        </div>
      </div>

      {/* Three columns below */}
      <div className="relative z-10 bg-background py-32 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            {
              icon: Scan,
              title: "Instant Digitisation",
              desc: "Point your camera. AI identifies brand, color, fabric, and fit—building your digital closet in seconds.",
            },
            {
              icon: Sparkles,
              title: "AI Suggestions",
              desc: "Get outfit recommendations based on weather, calendar events, and your personal style DNA.",
            },
            {
              icon: Wand2,
              title: "Style Engine",
              desc: "Our proprietary algorithm learns what makes you feel confident and surfaces your best combinations.",
            },
          ].map((item, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-6">
                <item.icon size={20} className="text-foreground" />
              </div>
              <h3 className="text-title text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
