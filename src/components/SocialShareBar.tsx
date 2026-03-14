import { Twitter, Facebook, Link as LinkIcon, Mail } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const SocialShareBar = ({ title }: { title: string }) => {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    { icon: Twitter, href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, label: "Share on X" },
    { icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, label: "Share on Facebook" },
    { icon: Mail, href: `mailto:?subject=${encodedTitle}&body=Check%20this%20out:%20${encodedUrl}`, label: "Share via Email" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-2 my-8"
    >
      <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase mr-2">Share</span>
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="glass-card border border-border/50 rounded-full p-2.5 text-muted-foreground hover:text-foreground hover:border-border transition-all duration-300"
        >
          <Icon size={16} />
        </a>
      ))}
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className="glass-card border border-border/50 rounded-full p-2.5 text-muted-foreground hover:text-foreground hover:border-border transition-all duration-300 relative"
      >
        <LinkIcon size={16} />
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-foreground bg-background border border-border rounded-md px-2 py-1 whitespace-nowrap">
            Copied!
          </span>
        )}
      </button>
    </motion.div>
  );
};

export default SocialShareBar;
