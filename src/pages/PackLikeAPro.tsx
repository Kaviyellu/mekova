import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SocialShareBar from "@/components/SocialShareBar";

import titleImg from "@/assets/story-packing-title.jpg";
import img2 from "@/assets/story-packing-2.jpg";
import img3 from "@/assets/story-packing-3.jpg";
import img4 from "@/assets/story-packing-4.jpg";
import img5 from "@/assets/story-packing-5.jpg";
import img6 from "@/assets/story-packing-6.jpg";
import img7 from "@/assets/story-packing-7.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const StoryImage = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div {...fadeUp} className="my-12">
    <div className="glass-card overflow-hidden border border-border/50 rounded-3xl">
      <img src={src} alt={alt} className="w-full" loading="lazy" />
    </div>
  </motion.div>
);

const MekovaTip = ({ children }: { children: React.ReactNode }) => (
  <motion.div {...fadeUp} className="my-10">
    <div className="glass-card border border-border/50 rounded-2xl p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
      <p className="text-sm text-muted-foreground leading-relaxed pl-4">
        <span className="font-semibold text-foreground">Mekova Tip:</span>{" "}
        {children}
      </p>
    </div>
  </motion.div>
);

const SectionHeading = ({ number, title }: { number: string; title: string }) => (
  <motion.div {...fadeUp} className="flex items-baseline gap-4 mb-6">
    <span className="text-4xl font-light text-accent-foreground/20 tracking-tighter">{number}</span>
    <h2 className="text-title text-foreground">{title}</h2>
  </motion.div>
);

const PackLikeAPro = () => (
  <div className="bg-background min-h-screen">
    {/* Navbar */}
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors">
          <ArrowLeft size={18} />
          <span className="text-lg font-semibold tracking-tight">Mekova</span>
        </Link>
      </div>
    </nav>

    {/* Hero */}
    <header className="pt-16">
      <div className="relative w-full h-[80vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          src={titleImg}
          alt="Pack Like a Pro — 30 Outfits in One Bag"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="glass-card inline-block px-4 py-1.5 rounded-full border border-border/50 mb-6">
              <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase">Travel Style</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-foreground leading-tight mb-4">
              Pack Like a Pro: 30 Outfits in One Bag for Your Next Trip
            </h1>
            <p className="text-sm text-muted-foreground">
              by <span className="text-foreground font-medium">Kavita Gnyaneswari</span>, Mekova Co-Founder
            </p>
          </motion.div>
        </div>
      </div>
    </header>

    {/* Article body */}
    <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <motion.div {...fadeUp}>
        <div className="glass-card border border-border/50 rounded-3xl p-8 md:p-12 mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether it's a long weekend in Goa, a cousin's wedding in Jaipur, or a solo trip to Pondicherry — overpacking is the one habit that ruins every trip. I planned my travel wardrobe with Mekova in advance and fit 30 outfit combinations into a single cabin bag. Here's exactly how I did it — and how you can too.
          </p>
        </div>
      </motion.div>

      <SocialShareBar title="Pack Like a Pro: 30 Outfits in One Bag" />

      <StoryImage src={img2} alt="Stylish traveller at a train station" />

      <motion.p {...fadeUp} className="text-sm text-muted-foreground italic text-center -mt-6 mb-12">
        My entire travel wardrobe — one bag, zero stress
      </motion.p>

      {/* Section 1 */}
      <SectionHeading number="01" title="Plan Outfits Before You Pack" />
      <motion.div {...fadeUp}>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The single biggest packing mistake? Throwing random clothes into a bag and hoping for the best. Instead, plan your outfits first — then pack only what's in those outfits. This is the "pack by outfit" method, and it's the secret to never overpacking again.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          I used Mekova's outfit editor to create 30 mix-and-match combinations from just 22 pieces. Since my entire wardrobe is digitised in the app, I could do this on a lunch break — no need to spread everything on the bed.
        </p>
      </motion.div>

      <StoryImage src={img3} alt="30 outfit combinations flat lay" />

      <MekovaTip>
        Use Mekova's Clone Outfit feature to duplicate a look and swap just one piece — a kurta for a top, sneakers for Kolhapuris. I created 12 variations in 5 minutes this way.
      </MekovaTip>

      {/* Section 2 */}
      <SectionHeading number="02" title="Pick a Travel Colour Palette" />
      <motion.div {...fadeUp}>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The trick to making 22 pieces feel like 60 is a cohesive colour palette. I stuck to neutrals (black, white, beige) plus two accent colours (indigo and terracotta) — everything mixes with everything.
        </p>
        <div className="grid grid-cols-2 gap-3 my-6">
          {["Black + White base", "Beige + Khaki layers", "Indigo denim accents", "Terracotta pops"].map((combo) => (
            <div key={combo} className="glass-card border border-border/50 rounded-xl p-4 text-center">
              <span className="text-sm text-muted-foreground">{combo}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          This doesn't mean boring. A bandhani dupatta, oxidized jhumkas, or embroidered Kolhapuris can transform a plain outfit — and they take zero suitcase space.
        </p>
      </motion.div>

      <StoryImage src={img7} alt="Travel accessories flat lay" />

      <MekovaTip>
        Use Mekova's colour search while building outfits. Search for "blue" to instantly see all your denim and indigo pieces — then drag and drop to find combinations you'd never think of manually.
      </MekovaTip>

      {/* Section 3 */}
      <SectionHeading number="03" title="The Visual Packing List" />
      <motion.div {...fadeUp}>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Once your outfits are saved, Mekova automatically generates a packing list of the exact items you need — nothing more, nothing less. Every single piece in your bag has a purpose because it's part of a real outfit.
        </p>
        <div className="glass-card border border-border/50 rounded-2xl p-6 my-6">
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3"><span className="text-accent-foreground/40 mt-0.5">•</span> See every item as a thumbnail — spot duplicates instantly</li>
            <li className="flex items-start gap-3"><span className="text-accent-foreground/40 mt-0.5">•</span> Check off items as you pack them into your bag</li>
            <li className="flex items-start gap-3"><span className="text-accent-foreground/40 mt-0.5">•</span> Works offline — perfect for when you're packing at the hostel with no Wi-Fi</li>
          </ul>
        </div>
      </motion.div>

      <StoryImage src={img6} alt="Mekova packing list on phone" />

      {/* Section 4 */}
      <SectionHeading number="04" title="Fit Everything with Smart Packing" />
      <motion.div {...fadeUp}>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Having a lean packing list is half the battle. Here's how to physically fit everything into one cabin-sized bag:
        </p>
        <div className="glass-card border border-border/50 rounded-2xl p-6 my-6">
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3"><span className="text-accent-foreground/40 mt-0.5">•</span> <strong className="text-foreground">Roll, don't fold</strong> — rolling saves 30% more space and reduces wrinkles on cotton and linen</li>
            <li className="flex items-start gap-3"><span className="text-accent-foreground/40 mt-0.5">•</span> <strong className="text-foreground">Packing cubes</strong> — colour-code by category (tops, bottoms, ethnic). They're ₹300 on Amazon and worth every rupee</li>
            <li className="flex items-start gap-3"><span className="text-accent-foreground/40 mt-0.5">•</span> <strong className="text-foreground">Wear the bulkiest items</strong> — travel in your sneakers, jeans, and jacket instead of packing them</li>
            <li className="flex items-start gap-3"><span className="text-accent-foreground/40 mt-0.5">•</span> <strong className="text-foreground">Dupatta = multi-tool</strong> — use it as a scarf on an AC train, a beach cover-up in Goa, or a temple head-cover in Jaipur</li>
          </ul>
        </div>
      </motion.div>

      <StoryImage src={img4} alt="Packing cubes in carry-on suitcase" />

      {/* Section 5 */}
      <SectionHeading number="05" title="My 22-Item Packing List" />
      <motion.div {...fadeUp}>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Here's exactly what I packed for a 10-day trip that covered beach days, café hopping, sightseeing, and one dressy dinner. 22 items. 30 outfits. One bag.
        </p>
        <div className="glass-card border border-border/50 rounded-2xl p-6 my-6">
          <h3 className="text-sm font-semibold text-foreground mb-4">The Full List</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-muted-foreground text-sm">
            <div className="flex justify-between py-1 border-b border-border/30"><span>White linen shirt</span><span className="text-foreground font-medium">×1</span></div>
            <div className="flex justify-between py-1 border-b border-border/30"><span>Black bodysuit</span><span className="text-foreground font-medium">×1</span></div>
            <div className="flex justify-between py-1 border-b border-border/30"><span>Beige crop top</span><span className="text-foreground font-medium">×1</span></div>
            <div className="flex justify-between py-1 border-b border-border/30"><span>Cotton kurta (indigo)</span><span className="text-foreground font-medium">×1</span></div>
            <div className="flex justify-between py-1 border-b border-border/30"><span>Printed cami</span><span className="text-foreground font-medium">×1</span></div>
            <div className="flex justify-between py-1 border-b border-border/30"><span>Denim shorts</span><span className="text-foreground font-medium">×1</span></div>
            <div className="flex justify-between py-1 border-b border-border/30"><span>Wide-leg pants (black)</span><span className="text-foreground font-medium">×1</span></div>
            <div className="flex justify-between py-1 border-b border-border/30"><span>Cotton palazzos (white)</span><span className="text-foreground font-medium">×1</span></div>
            <div className="flex justify-between py-1 border-b border-border/30"><span>Maxi skirt</span><span className="text-foreground font-medium">×1</span></div>
            <div className="flex justify-between py-1 border-b border-border/30"><span>Flowy maxi dress</span><span className="text-foreground font-medium">×1</span></div>
            <div className="flex justify-between py-1 border-b border-border/30"><span>Denim jacket</span><span className="text-foreground font-medium">×1</span></div>
            <div className="flex justify-between py-1 border-b border-border/30"><span>Light cardigan</span><span className="text-foreground font-medium">×1</span></div>
            <div className="flex justify-between py-1 border-b border-border/30"><span>Silk dupatta</span><span className="text-foreground font-medium">×1</span></div>
            <div className="flex justify-between py-1 border-b border-border/30"><span>White sneakers</span><span className="text-foreground font-medium">×1</span></div>
            <div className="flex justify-between py-1 border-b border-border/30"><span>Kolhapuri chappals</span><span className="text-foreground font-medium">×1</span></div>
            <div className="flex justify-between py-1 border-b border-border/30"><span>Block-heel sandal</span><span className="text-foreground font-medium">×1</span></div>
            <div className="flex justify-between py-1 border-b border-border/30"><span>Oxidized jhumkas</span><span className="text-foreground font-medium">×1</span></div>
            <div className="flex justify-between py-1 border-b border-border/30"><span>Gold hoops</span><span className="text-foreground font-medium">×1</span></div>
            <div className="flex justify-between py-1 border-b border-border/30"><span>Sunglasses</span><span className="text-foreground font-medium">×1</span></div>
            <div className="flex justify-between py-1 border-b border-border/30"><span>Straw tote</span><span className="text-foreground font-medium">×1</span></div>
            <div className="flex justify-between py-1 border-b border-border/30"><span>Mini crossbody</span><span className="text-foreground font-medium">×1</span></div>
            <div className="flex justify-between py-1 border-b border-border/30"><span>Swimsuit</span><span className="text-foreground font-medium">×1</span></div>
          </div>
        </div>
      </motion.div>

      <StoryImage src={img5} alt="Stylish traveller at Goa beach" />

      {/* Conclusion */}
      <motion.div {...fadeUp}>
        <div className="glass-card border border-border/50 rounded-3xl p-8 md:p-12 mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            That's 30 outfits for every scenario — beach days, city walks, temple visits, and candlelight dinners — in a single carry-on. No checked luggage fees. No "I have nothing to wear" panic at the hotel.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The secret isn't packing less. It's packing smarter — and Mekova makes that effortless.
          </p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        {...fadeUp}
        className="mt-20 glass-card border border-border/50 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-accent/10" />
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 tracking-tight">
            Never overpack again.
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Digitise your closet with Mekova and build your perfect packing list in minutes.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get Started with Mekova
          </Link>
        </div>
      </motion.div>
    </article>

    {/* Footer */}
    <footer className="border-t border-border py-12 px-6 text-center">
      <p className="text-xs text-muted-foreground">© 2026 Mekova. Crafted with precision.</p>
    </footer>
  </div>
);

export default PackLikeAPro;
