import { motion } from "framer-motion";

const Footer = () => (
  <footer className="bg-background border-t border-border py-20 px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <span className="text-lg font-semibold text-foreground tracking-tight">Mekova</span>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            Your wardrobe, reimagined with AI intelligence and timeless design.
          </p>
        </div>
        {[
          { title: "Product", links: ["Features", "Pricing", "Download"] },
          { title: "Company", links: ["About", "Blog", "Careers"] },
          { title: "Legal", links: ["Privacy", "Terms", "Cookies"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-medium text-foreground mb-4">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-8 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 Mekova. Crafted with precision.
        </p>
      </div>
    </motion.div>
  </footer>
);

export default Footer;
