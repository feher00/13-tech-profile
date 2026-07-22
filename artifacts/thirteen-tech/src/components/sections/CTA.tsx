import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 relative z-10 overflow-hidden" data-testid="section-cta">
      {/* Pulsing glow background */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.1),transparent_70%)]" 
      />
      
      {/* Scan line */}
      <motion.div 
        animate={{ 
          top: ['-10%', '110%']
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_10px_rgba(0,240,255,0.5)] z-20 pointer-events-none" 
      />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent opacity-50" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-background/40 backdrop-blur-sm p-12 border border-primary/20 rounded-2xl relative overflow-hidden"
        >
          {/* Inner ambient glow */}
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          
          <div className="inline-block px-4 py-2 border border-primary/30 bg-background/80 text-primary font-mono text-sm uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(0,240,255,0.2)] relative z-10">
            Initiate Sequence
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight tracking-tighter relative z-10" data-testid="text-cta-heading">
            Stop waiting for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              the impossible.
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto relative z-10">
            We are ready to architect your infrastructure. The next move is yours. Execute the command.
          </p>
          
          <button 
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-mono text-lg font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-primary hover:text-white"
            data-testid="button-cta-engage"
          >
            <span className="relative z-10 flex items-center gap-3">
              Commence Build <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
