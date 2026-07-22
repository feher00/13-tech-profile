import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import heroImage from '@assets/generated_images/hero_abstract.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden" data-testid="section-hero">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Abstract tech background" 
          className="w-full h-full object-cover opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase mb-6" data-testid="badge-status">
              <Terminal className="w-3 h-3" />
              <span>System Status: Optimal</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-9xl font-display font-bold tracking-tighter mb-6 leading-none"
            data-testid="text-hero-heading"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">WE ARE </span>
            <span className="text-primary">13</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl text-muted-foreground font-light max-w-3xl mb-12"
            data-testid="text-hero-subheading"
          >
            We take on complex, high-stakes engineering challenges other firms shy away from. Built for precision. Engineered for power.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button 
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-mono font-medium uppercase tracking-widest overflow-hidden transition-all hover:bg-white hover:text-black"
              data-testid="button-engage"
            >
              <span className="relative z-10 flex items-center gap-2">
                Engage Systems <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button 
              className="px-8 py-4 border border-border text-foreground font-mono font-medium uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
              data-testid="button-manifesto"
            >
              Read Manifesto
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    </section>
  );
}