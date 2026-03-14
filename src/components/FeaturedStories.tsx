import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import storyImage from "@/assets/story-shop-closet-title.jpg";
import basicsImage from "@/assets/story-basics-title.jpg";
import packingImage from "@/assets/story-packing-title.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const StoryCard = ({
  to, image, alt, tag, title, description,
}: {
  to: string; image: string; alt: string; tag: string; title: string; description: string;
}) => (
  <motion.div {...fadeUp} className="mt-8 first:mt-0">
    <Link
      to={to}
      className="group block glass-card overflow-hidden rounded-3xl border border-border/50 hover:border-border transition-all duration-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
          <img src={image} alt={alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <span className="text-caption text-muted-foreground mb-3">{tag}</span>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">{title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">{description}</p>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all duration-300">
            Read Story <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  </motion.div>
);

const FeaturedStories = () => (
  <section id="blog" className="bg-background py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.div {...fadeUp} className="text-center mb-16">
        <p className="text-caption text-muted-foreground mb-4">From the blog</p>
        <h2 className="text-headline text-foreground">Style Stories</h2>
      </motion.div>

      <StoryCard
        to="/stories/pack-like-a-pro"
        image={packingImage}
        alt="Pack Like a Pro"
        tag="Travel Style"
        title="Pack Like a Pro: 30 Outfits in One Bag"
        description="Kavita Gnyaneswari shares her foolproof method for fitting 30 mix-and-match outfits into a single carry-on — from Goa beach days to Jaipur temple visits."
      />

      <StoryCard
        to="/stories/month-of-outfits"
        image={basicsImage}
        alt="A Month of Outfit Ideas"
        tag="Featured Story"
        title="A Month of Outfits from 4 Basics"
        description="Kavita Gnyaneswari shows how 4 versatile black basics gave her 33 new looks — perfect for fashion-conscious students in Indian metro cities."
      />

      <StoryCard
        to="/stories/shop-your-closet"
        image={storyImage}
        alt="Shop Your Closet"
        tag="Style Guide"
        title="Shop Your Closet"
        description="Rediscover hidden gems in your wardrobe. Kavita Gnyaneswari shares how to find new outfit combinations from clothes you already own."
      />
    </div>
  </section>
);

export default FeaturedStories;
