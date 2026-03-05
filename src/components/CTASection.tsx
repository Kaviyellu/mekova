import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => (
  <section className="bg-primary py-32 px-6">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-headline text-primary-foreground mb-6">
        Your closet deserves better.
      </h2>
      <p className="text-body-large text-primary-foreground/60 mb-12">
        Join the waitlist and be among the first to experience the future of personal style.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-80 px-6 py-3.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-primary-foreground/40 transition-colors"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Join Waitlist <ArrowRight size={16} />
        </motion.button>
      </div>
    </motion.div>
  </section>
);

export default CTASection;
