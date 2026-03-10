import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import titleImg from "@/assets/story-shop-closet-title.jpg";
import img2 from "@/assets/story-shop-closet-2.jpg";
import img3 from "@/assets/story-shop-closet-3.jpg";
import img4 from "@/assets/story-shop-closet-4.jpg";
import img16 from "@/assets/story-shop-closet-16.jpg";
import img5 from "@/assets/story-shop-closet-5.jpg";
import img6 from "@/assets/story-shop-closet-6.jpg";
import img7 from "@/assets/story-shop-closet-7.jpg";
import img8 from "@/assets/story-shop-closet-8.jpg";
import img9 from "@/assets/story-shop-closet-9.jpg";
import img10 from "@/assets/story-shop-closet-10.jpg";
import img15 from "@/assets/story-shop-closet-15.jpg";
import img11 from "@/assets/story-shop-closet-11.jpg";
import img12 from "@/assets/story-shop-closet-12.jpg";
import img13 from "@/assets/story-shop-closet-13.jpg";
import img14 from "@/assets/story-shop-closet-14.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const StoryImage = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div {...fadeUp} className="my-12">
    <img
      src={src}
      alt={alt}
      className="w-full rounded-2xl cinematic-shadow"
      loading="lazy"
    />
  </motion.div>
);

const MekovaTip = ({ children }: { children: React.ReactNode }) => (
  <div className="my-8 p-6 glass-card border border-border/50">
    <p className="text-sm text-muted-foreground leading-relaxed">
      <span className="font-semibold text-foreground">Mekova Tip:</span>{" "}
      {children}
    </p>
  </div>
);

const ShopYourCloset = () => (
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
      <div className="relative w-full max-h-[70vh] overflow-hidden">
        <img
          src={titleImg}
          alt="How To Shop Your Closet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-foreground leading-tight mb-4">
              How To Shop Your Closet: The Amazing Spring Outfits You Already Own
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
        <p className="text-body-large text-muted-foreground mb-8">
          At the beginning of a new season, I always feel like I have a closet full of clothes but nothing to wear — and I don't think I'm alone. After a recent closet clean-out, I felt like I was left with a sparse, disjointed wardrobe, but after coming up with a few simple tips, I was surprised to realize I could come up with over 70 outfits using only what I already owned (about 50 clothing items, including accessories)! This means I could wear a different outfit every day for at least two months — without buying any new clothes! This guide will help you shop your own closet and take a fresh look at your existing wardrobe. Like me, you may find that you don't need to go shopping at all!
        </p>
      </motion.div>

      <StoryImage src={img2} alt="All outfits created from existing wardrobe" />

      <motion.p {...fadeUp} className="text-sm text-muted-foreground italic text-center -mt-6 mb-12">
        See a collection of all the outfits I made at <a href="#outfit-examples" className="underline text-foreground">the bottom of this story</a>
      </motion.p>

      {/* Section 1 */}
      <motion.div {...fadeUp}>
        <h2 className="text-title text-foreground mb-4">1. Get Your Closet Ready For Spring</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          First, put your winter clothes away. No, seriously. Ideally, when you open your closet, you should only see items that look flattering and are seasonally appropriate. This will make looking through your closet significantly less frustrating. Who wants to grab corduroy pants when it's 90 degrees outside?
        </p>
      </motion.div>

      <MekovaTip>
        If you're just getting started photographing your wardrobe so you can set up your virtual closet in Mekova, only photograph the in-season items you intend to keep. Get rid of the items you don't want and store the ones you won't need during the season. This will save you a ton of time! I also like to photograph my items by clothing type (all my blouses, all my skirts, and so on). And remember that you only do this once — every day after you're done, you'll be able to get dressed faster!
      </MekovaTip>

      <StoryImage src={img3} alt="Seasonal closet organization" />

      {/* Section 2 */}
      <motion.div {...fadeUp}>
        <h2 className="text-title text-foreground mb-4">2. Remove Items You Don't Like or That Have Worn Out</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Examine the items you haven't been wearing and determine if they are just underused or if they need to be removed from your wardrobe. Remember to focus on quality over quantity. You may find a few gems that have fallen to the back of the closet, but make sure you still remove the items that are no good. If you answer yes to any of the following questions, it's likely time to part ways with that item of clothing.
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
          <li>Does it fit poorly?</li>
          <li>Is it too hard to clean so it's always in the hamper?</li>
          <li>Does it have an embellishment or detail you don't like?</li>
          <li>Is it a bad fit for your lifestyle?</li>
          <li>Is it a loner (i.e. is it hard to match with anything else in your closet)?</li>
          <li>Is it faded or stained?</li>
          <li>Is it so uncomfortable that you're basically tearing it off once you get home?</li>
        </ul>
      </motion.div>

      <MekovaTip>
        The Style Stats feature will give you a list of the "25 Least Worn Items" in your closet so you can easily see what parts of your wardrobe have been neglected or need to go.
      </MekovaTip>

      {/* Section 3 */}
      <motion.div {...fadeUp}>
        <h2 className="text-title text-foreground mb-4">3. Document What You Already Own and Like</h2>
        <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
          <li>Take photos of your items for your Mekova closet so you can view everything in one place. It's a lot easier to shuffle through photos while coming up with outfit ideas than sorting through a huge pile of clothes. Think of it as your own personal closet inventory!</li>
          <li>A closet inventory will give you a better idea of everything you have so nothing can get lost in the closet.</li>
          <li>Save outfits you already like with Mekova's outfit feature. (See over 70 outfits at the <a href="#outfit-examples" className="underline text-foreground">bottom of the story</a>!)</li>
        </ul>
      </motion.div>

      <StoryImage src={img4} alt="Digital closet inventory in Mekova" />

      <MekovaTip>
        In the Closet feature, open any clothing item's notes to see every outfit you've ever made with it. I do this when I feel like I want to wear a certain top or dress, but am drawing a blank when it comes to outfit ideas.
      </MekovaTip>

      <StoryImage src={img16} alt="Outfit ideas from closet items" />

      {/* Section 4 */}
      <motion.div {...fadeUp}>
        <h2 className="text-title text-foreground mb-4">4. Get Creative With Color</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Try experimenting with new color combinations. Mixing your existing clothes in unexpected color combinations can make them feel fresh!
        </p>
        <p className="text-muted-foreground leading-relaxed mb-2">Some color sets that work well together:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
          <li>Primary colors</li>
          <li>Complimentary colors</li>
          <li>Analogous colors</li>
          <li>Neutrals with a pop of color</li>
        </ul>
      </motion.div>

      <MekovaTip>
        Search for clothing pieces by color while you're creating an outfit by tapping the magnifying glass on the "Add Clothing" screen.
      </MekovaTip>

      <StoryImage src={img5} alt="Color combination outfit ideas" />

      {/* Section 5 */}
      <motion.div {...fadeUp}>
        <h2 className="text-title text-foreground mb-4">5. Mix and Match Everything</h2>
        <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
          <li>Try every top with every bottom. This can be overwhelming if you have a huge amount of clothes, but at least try ten new combinations you've never worn.</li>
          <li>Don't neglect your fancier shoes. A lot of us own gorgeous shoes we never wear. Break them out of the closet, but make sure you practice walking in them first!</li>
          <li>Use your accessories wisely. Chunky wedges or a bright bag can make an outfit feel totally different.</li>
        </ul>
      </motion.div>

      <MekovaTip>
        Tap the Clone Outfit button while looking at an outfit in Edit mode to make an identical copy. This is a really quick and easy way to swap out outfit components while preserving the original.
      </MekovaTip>

      <StoryImage src={img6} alt="Mix and match outfit combinations" />

      {/* Section 6 */}
      <motion.div {...fadeUp}>
        <h2 className="text-title text-foreground mb-4">6. Keep Everything Available</h2>
        <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
          <li>Get in the habit of ironing your clothes on laundry day. If you iron everything at once, it will help you get dressed faster and you'll wear more of your clothes.</li>
          <li>Don't let your laundry get out of control. Your wardrobe will seem smaller if most of it is sitting in the laundry hamper.</li>
        </ul>
      </motion.div>

      <StoryImage src={img7} alt="Organized wardrobe ready to wear" />

      {/* Section 7 */}
      <motion.div {...fadeUp}>
        <h2 className="text-title text-foreground mb-4">7. Save Your Outfit Ideas</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Create a record of all your outfit ideas with photos of your real clothes using Mekova's outfit editor feature. Saving every idea in digital form will ensure you'll be able to quickly find something to wear when you get dressed. If you record your outfits now, you won't have to rack your brain to think of something to wear later in the spring or summer.
        </p>
      </motion.div>

      <StoryImage src={img8} alt="Saving outfit ideas in Mekova" />

      {/* Section 8 */}
      <motion.div {...fadeUp}>
        <h2 className="text-title text-foreground mb-4">8. Break Out Of Your Clothing Rut</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          If you still feel like you have a closet full of clothes but nothing to wear, you're probably in a rut. Here are a few solutions that will help you overcome your rut and make your wardrobe interesting again.
        </p>

        <h3 className="text-lg font-medium text-foreground mb-2">Comfort Problem</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The clothes you've been wearing aren't necessarily the most flattering but they are so comfortable that you don't care that you wore each item three times this week.
        </p>

        <h4 className="text-sm font-semibold text-foreground mb-2">Solution A: Incorporate It</h4>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Sweatpants, T-shirts, and leggings feel amazing because they're made of soft fabrics and usually have a good amount of stretch. If they're well made and still in good shape (no pills, stains, fading, or holes!), you can incorporate these items into real outfits that don't look like lounge-wear. Wear an oversized t-shirt half-tucked into skinny jeans with a pair of comfortable heels. If you have a pair of tapered sweatpants, wear them with a silk button-front shirt and heels.
        </p>

        <h4 className="text-sm font-semibold text-foreground mb-2">Solution B: Get Inspired</h4>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Go shopping with comfortable fabrics in mind; just remember to keep the shapes polished. My favorite comfy but "fancy" items are jersey maxi dresses. They are soft, comfortable, and basically feel like pajamas — but if you wear a gorgeous print or color, everyone acts like you're really dressed up!
        </p>
      </motion.div>

      <StoryImage src={img9} alt="Comfortable but stylish outfit ideas" />

      <motion.div {...fadeUp}>
        <h3 className="text-lg font-medium text-foreground mb-2">Cleaning Problem</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          All your really great items lay on the bottom of your hamper because they're dry-clean only, while you constantly wear the items that are easiest to wash.
        </p>

        <h4 className="text-sm font-semibold text-foreground mb-2">Solution A: Dry Cleaning Alternatives</h4>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Start using dry cleaning alternatives like Dryel, hand washing, or steaming. I'm guessing your dry clean only clothes weren't cheap, so make sure they actually make it into your outfit rotation. Think about their cost per wear — the more you wear the item, the less it costs you per wear.
        </p>

        <h4 className="text-sm font-semibold text-foreground mb-2">Solution B: Machine Wash... If You Dare</h4>
        <p className="text-muted-foreground leading-relaxed mb-4">
          This can be risky, but if you really can't bring yourself to hand-wash, try washing the item in the machine using a sweater bag with cold water on gentle. Some items are even too delicate for this so be cautious! (Don't forget to line dry!)
        </p>
      </motion.div>

      <StoryImage src={img10} alt="Laundry and clothing care tips" />

      <motion.div {...fadeUp}>
        <h3 className="text-lg font-medium text-foreground mb-2">Fit Problem</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Every time you look in the drawer, you only see a jumbled mess of clothes that have stretched, shrunk, or never fit to begin with. Donate or toss ill-fitting clothes now. This means you may have to do a little shopping, but now you can plan what to purchase based on what you currently own. Before you shop, make as many outfits as you can with what you have and take notes on what items could give you even more combos.
        </p>
      </motion.div>

      <StoryImage src={img15} alt="Planning your wardrobe purchases" />

      <motion.div {...fadeUp}>
        <p className="text-body-large text-muted-foreground mb-8">
          After following these steps with my own wardrobe, I was able to make the 70+ outfits you see below. Now I can save the money I would have spent on clothes!
        </p>
      </motion.div>

      {/* Outfit Examples */}
      <div id="outfit-examples">
        <motion.div {...fadeUp}>
          <h2 className="text-headline text-foreground mb-8 text-center">The Spring Outfits I Created</h2>
        </motion.div>

        <div className="space-y-8">
          <StoryImage src={img11} alt="Spring outfit combinations - set 1" />
          <StoryImage src={img12} alt="Spring outfit combinations - set 2" />
          <StoryImage src={img13} alt="Spring outfit combinations - set 3" />
          <StoryImage src={img14} alt="Spring outfit combinations - set 4" />
        </div>
      </div>

      {/* CTA */}
      <motion.div
        {...fadeUp}
        className="mt-20 p-10 bg-primary rounded-3xl text-center"
      >
        <h3 className="text-2xl font-semibold text-primary-foreground mb-3 tracking-tight">
          Ready to shop your own closet?
        </h3>
        <p className="text-primary-foreground/60 mb-6">
          Digitise your wardrobe with Mekova and discover the outfits you already own.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Get Started with Mekova
        </Link>
      </motion.div>
    </article>

    {/* Footer */}
    <footer className="border-t border-border py-12 px-6 text-center">
      <p className="text-xs text-muted-foreground">© 2026 Mekova. Crafted with precision.</p>
    </footer>
  </div>
);

export default ShopYourCloset;
