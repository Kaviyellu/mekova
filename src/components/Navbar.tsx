import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-lg font-semibold tracking-tight text-foreground">
          Mekova
        </span>

        <div className="hidden md:flex items-center gap-8">
          {["Features", "Wardrobe", "Planner", "Community"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors">
            Sign In
          </button>
          <button className="hidden md:block bg-primary text-primary-foreground text-sm px-5 py-2 rounded-full hover:opacity-90 transition-opacity">
            Get Started
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass-card border-t border-border/50 px-6 py-6 space-y-4 animate-fade-in">
          {["Features", "Wardrobe", "Planner", "Community"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-sm text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full bg-primary text-primary-foreground text-sm px-5 py-2.5 rounded-full">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
