import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import storyImage from "@/assets/story-shop-closet-title.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const FeaturedStories = () => (
  <section id="blog" className="bg-background py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.div {...fadeUp} className="text-center mb-16">
        <p className="text-caption text-muted-foreground mb-4">From the blog</p>
        <h2 className="text-headline text-foreground">Style Stories</h2>
      </motion.div>

      <motion.div {...fadeUp}>
        <Link
          to="/stories/shop-your-closet"
          className="group block glass-card overflow-hidden rounded-3xl border border-border/50 hover:border-border transition-all duration-500"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
              <img
                src={storyImage}
                alt="Shop Your Closet"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <span className="text-caption text-muted-foreground mb-3">Featured Story</span>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
                Shop Your Closet
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                Rediscover hidden gems in your wardrobe. Kavita Gnyaneswari shares how to find new outfit combinations
                from clothes you already own.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all duration-300">
                Read Story <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default FeaturedStories;
