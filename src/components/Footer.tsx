const Footer = () => (
  <footer className="bg-background border-t border-border py-20 px-6">
    <div className="max-w-7xl mx-auto">
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
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
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
    </div>
  </footer>
);

export default Footer;
