import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SocialShareBar from "@/components/SocialShareBar";

import titleImg from "@/assets/story-basics-title.jpg";
import img2 from "@/assets/story-basics-2.jpg";
import img3 from "@/assets/story-basics-3.jpg";
import img4 from "@/assets/story-basics-4.jpg";
import img5 from "@/assets/story-basics-5.jpg";
import img6 from "@/assets/story-basics-6.jpg";
import img7 from "@/assets/story-basics-7.jpg";
import img8 from "@/assets/story-basics-8.jpg";

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

const MonthOfOutfits = () => (
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
          alt="A Month of Outfit Ideas"
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
              <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase">Style Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-foreground leading-tight mb-4">
              A Month of Outfit Ideas: How 4 New Basics Gave Me 33 New Looks
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
            Here are 6 tips to help you make a month of outfits using basics! I added 4 new wardrobe staples to my closet and made over 33 outfits for everything from college lectures to weekend brunches with friends. Whether you're a student in Mumbai, Delhi, or Bangalore — this guide will show you how to stretch your wardrobe budget without sacrificing style. The secret? Buy pieces that complement what you already own.
          </p>
        </div>
      </motion.div>

      <StoryImage src={img2} alt="33 outfit combinations from basics" />

      <motion.p {...fadeUp} className="text-sm text-muted-foreground italic text-center -mt-6 mb-12">
        All 33 outfits I created from just 4 new pieces mixed with my existing wardrobe
      </motion.p>

      {/* Section 1 */}
      <SectionHeading number="01" title="Choose Versatile Basics That Match Your Life" />
      <motion.div {...fadeUp}>
        <p className="text-muted-foreground leading-relaxed mb-4">
          As a student in a metro city, your wardrobe needs to work overtime — from 8 AM lectures to evening chai meetups, from internship presentations to weekend concerts. I chose four black basics that could transition across all these settings: a sleek bodysuit, a structured moto jacket, a flowy wrap cardigan, and comfortable wide-leg pants.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Why black? It's the ultimate neutral. It pairs with literally everything in your closet — your denim, your kurtas, your printed dupattas, even that one experimental neon top you impulse-bought on Myntra.
        </p>
      </motion.div>

      <StoryImage src={img4} alt="Four versatile black basics flat lay" />

      <MekovaTip>
        Before buying anything new, photograph your existing wardrobe in Mekova. Create a virtual "swatch" — place the potential new item alongside pieces you already own to see how many outfits you can make. If you can't create at least 5 new looks, skip the purchase.
      </MekovaTip>

      {/* Section 2 */}
      <SectionHeading number="02" title="Master the All-Black Monochrome" />
      <motion.div {...fadeUp}>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Monochromatic outfits are a classic, no-fail look — and they're especially powerful when you're running late for that 9 AM class. All-black outfits look sleek and play up the clothing silhouettes. To make your outfits more interesting, play with textures and layers: a chikankari kurti over wide-leg pants, a leather jacket with a flowy cardigan underneath, or mix matte and sheen fabrics.
        </p>
      </motion.div>

      <StoryImage src={img5} alt="Three all-black monochromatic outfits on campus" />

      <MekovaTip>
        Use Mekova's outfit cloning feature to duplicate a look and quickly swap just one piece. I created 8 all-black variations in under 10 minutes this way — perfect for those "I have nothing to wear" mornings.
      </MekovaTip>

      {/* Section 3 */}
      <SectionHeading number="03" title="Black + Denim: The Metro Student's Uniform" />
      <motion.div {...fadeUp}>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Denim looks extra polished when paired with black. If this combo resonates with you (and it will — it's practically the unofficial uniform of every Delhi University or Mumbai college campus), don't limit yourself to one pairing! Try your black tops with every denim piece you own — including those distressed shorts, the oversized jacket, and even a denim skirt if you have one.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The bodysuit is a game-changer here — it tucks in flawlessly. I tested it with every denim piece I own, and these were my favorite combinations.
        </p>
      </motion.div>

      <StoryImage src={img6} alt="Black and denim outfit combinations" />

      <MekovaTip>
        Use the color search feature in Mekova while creating an outfit. Search for "blue" to instantly see all your denim pieces, then drag and drop to create combinations you'd never think of manually.
      </MekovaTip>

      {/* Section 4 */}
      <SectionHeading number="04" title="Add a Pop of Desi Colour" />
      <motion.div {...fadeUp}>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Here's where it gets fun — and uniquely Indian. That mustard dupatta your mom packed? The oxidized jhumkas from Colaba Causeway? The bright Kolhapuri chappals you picked up in Pune? They're your secret weapons.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Don't limit yourself when creating outfits. Feel free to clash and introduce bold colour into your all-black base. A phulkari dupatta over a black bodysuit. Bright bandhani earrings with a moto jacket. Temple jewellery with wide-leg pants and a crop top. These unexpected combinations are what make Indian street style so electric.
        </p>
        <div className="grid grid-cols-2 gap-3 my-6">
          {["Mustard + Black", "Indigo + Denim", "Terracotta + Neutrals", "Pop of Fuchsia"].map((combo) => (
            <div key={combo} className="glass-card border border-border/50 rounded-xl p-4 text-center">
              <span className="text-sm text-muted-foreground">{combo}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <StoryImage src={img8} alt="Pop of colour with dupatta and jhumkas" />

      {/* Section 5 */}
      <SectionHeading number="05" title="Document Everything in Your Digital Closet" />
      <motion.div {...fadeUp}>
        <div className="glass-card border border-border/50 rounded-2xl p-6 my-6">
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3"><span className="text-accent-foreground/40 mt-0.5">•</span> Take photos of all your items for your Mekova closet. It's way easier to shuffle through photos while brainstorming outfits than digging through a hostel cupboard or a shared apartment wardrobe.</li>
            <li className="flex items-start gap-3"><span className="text-accent-foreground/40 mt-0.5">•</span> A digital closet inventory gives you a birds-eye view of everything you own — nothing gets lost behind that pile of textbooks.</li>
            <li className="flex items-start gap-3"><span className="text-accent-foreground/40 mt-0.5">•</span> Save your outfit ideas using Mekova's outfit feature. Future-you will thank present-you on every busy morning.</li>
          </ul>
        </div>
      </motion.div>

      <StoryImage src={img7} alt="Digital wardrobe on Mekova app" />

      <MekovaTip>
        In Mekova's Closet feature, open any clothing item's notes to see every outfit you've ever made with it. This is a lifesaver when you want to wear a certain kurta or jacket but are drawing a blank on what to pair it with.
      </MekovaTip>

      {/* Section 6 */}
      <SectionHeading number="06" title="Track Your Cost Per Wear" />
      <motion.div {...fadeUp}>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Cost Per Wear is the price divided by the number of times you actually wear an item. That ₹3,000 blazer worn 50 times? Just ₹60 per wear. That ₹500 trendy crop top worn twice? ₹250 per wear. The maths doesn't lie.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          As students, we're often on tight budgets. Instead of buying 10 cheap pieces from fast fashion, invest in 4 quality basics that will give you 33+ outfits. Mekova automatically calculates your cost-per-wear as you log outfits, helping you make smarter purchases.
        </p>
        <div className="glass-card border border-border/50 rounded-2xl p-6 my-6">
          <h3 className="text-sm font-semibold text-foreground mb-4">My 4 Basics — Cost Per Wear After One Month</h3>
          <div className="space-y-3 text-muted-foreground text-sm">
            <div className="flex justify-between"><span>Black Bodysuit</span><span className="text-foreground font-medium">₹83/wear (worn 12x)</span></div>
            <div className="flex justify-between"><span>Moto Jacket</span><span className="text-foreground font-medium">₹175/wear (worn 8x)</span></div>
            <div className="flex justify-between"><span>Wrap Cardigan</span><span className="text-foreground font-medium">₹120/wear (worn 10x)</span></div>
            <div className="flex justify-between"><span>Wide-Leg Pants</span><span className="text-foreground font-medium">₹100/wear (worn 15x)</span></div>
          </div>
        </div>
      </motion.div>

      <StoryImage src={img3} alt="Stylish student in cafe with moto jacket" />

      {/* Conclusion */}
      <motion.div {...fadeUp}>
        <div className="glass-card border border-border/50 rounded-3xl p-8 md:p-12 mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            After following these tips, I created 33 unique outfits from just 4 new basics mixed with my existing wardrobe. That's an entire month of looks — for college, internships, dates, festivals, and everything in between — without breaking the bank.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The best part? I didn't need a massive closet or a Bollywood stylist. I just needed to look at what I already owned with fresh eyes — and Mekova made that ridiculously easy.
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
            Ready to make your wardrobe work harder?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Digitise your closet with Mekova and discover the 30+ outfits you already own.
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

export default MonthOfOutfits;
