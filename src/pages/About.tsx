import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

const About = () => (
  <div className="bg-background min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fade}
          className="text-caption text-muted-foreground mb-6"
        >
          About Mekova
        </motion.p>
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fade}
          className="text-display mb-8"
        >
          Where dressing becomes{" "}
          <span className="text-gold">intentional.</span>
        </motion.h1>
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fade}
          className="text-body-large text-muted-foreground max-w-2xl mx-auto"
        >
          A platform transforming how people manage, style, and extend the life
          of their wardrobes — putting clarity before consumption.
        </motion.p>
      </div>
    </section>

    {/* Origin */}
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-caption text-muted-foreground mb-4">The Origin</p>
          <h2 className="text-headline mb-6">
            Born from a simple question.
          </h2>
          <p className="text-body-large text-muted-foreground leading-relaxed">
            Why do we keep buying more when we don't fully use what we already
            own?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-10"
        >
          <p className="text-lg font-medium text-foreground mb-4">
            Mekova is our answer.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            A Wardrobe Intelligence platform where every piece you own is
            visible, styled, and worn with purpose. We help you wear better,
            shop smarter, and reduce waste in a world designed to oversell.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Founder */}
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass-card p-12 md:p-16 relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

          <p className="text-caption text-muted-foreground mb-6">
            Founder's Note
          </p>
          <blockquote className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground leading-snug mb-8">
            "Wardrobe full of clothes, yet nothing to wear?"
          </blockquote>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hi, I'm Kavita — an IT professional, fashion enthusiast, working
              woman, homemaker, and a mother of two. Every morning, my day
              starts with millions of micro-decisions, including{" "}
              <em>"What should I wear?"</em>
            </p>
            <p>
              Despite having a full wardrobe, I often struggled to find the
              right outfits — rushed mornings, wasted time, and an emotional
              drain before the day even began. The problem isn't lack of
              clothes. It's lack of clarity.
            </p>
            <p>
              I identified a gap between <strong>buying</strong> and{" "}
              <strong>wearing</strong> — what we buy vs. what we actually wear.
              Mekova bridges that gap: a simple, everyday tool to help you make
              better wardrobe choices, dress better, and shop smarter.
            </p>
          </div>
          <p className="mt-8 text-sm font-medium text-foreground">
            — Kavita, Founder of Mekova
          </p>
        </div>
      </motion.div>
    </section>

    {/* Values */}
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-caption text-muted-foreground mb-4">
            What We Believe
          </p>
          <h2 className="text-headline">Clarity over consumption.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Wear Better",
              desc: "See your wardrobe clearly. Rediscover outfits you'd forgotten and style what you already own with confidence.",
            },
            {
              title: "Shop Smarter",
              desc: "Stop impulse buying. Our smart gap analysis shows exactly what's missing to unlock more outfit combinations.",
            },
            {
              title: "Live Lighter",
              desc: "Reduce clutter, decision fatigue, and unnecessary purchases. Align your wardrobe with mindful living.",
            },
          ].map((value, i) => (
            <motion.div
              key={value.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              className="glass-card p-8 group hover:shadow-lg transition-shadow duration-500"
            >
              <h3 className="text-title mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission statement */}
    <section className="py-24 px-6 bg-primary">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-caption text-primary-foreground/50 mb-6">
          Our Mission
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary-foreground leading-snug mb-6">
          Turn the daily "What do I wear?" struggle into a calm, confident
          moment.
        </h2>
        <p className="text-primary-foreground/60 text-lg">
          So you dress well, feel confident, and start every day put-together.
        </p>
      </motion.div>
    </section>

    <Footer />
  </div>
);

export default About;
