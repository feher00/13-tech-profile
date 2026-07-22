import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-xl border-border/50 py-4 shadow-lg shadow-black/50' 
          : 'bg-transparent border-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      data-testid="navbar"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer" data-testid="nav-logo">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-display font-bold text-xl group-hover:bg-primary group-hover:text-white transition-colors">
            13
          </div>
          <span className="font-mono text-lg tracking-widest font-bold text-white uppercase hidden sm:block">
            Tech LLC
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8" data-testid="nav-links">
          {['Capabilities', 'Industries', 'Philosophy'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Action */}
        <button 
          className="px-5 py-2 border border-primary text-primary text-xs font-mono uppercase tracking-widest hover:bg-primary hover:text-black transition-all"
          data-testid="button-nav-engage"
        >
          Engage
        </button>
      </div>
    </motion.header>
  );
}