import { motion } from 'framer-motion';
import philosophyImg from '@assets/generated_images/philosophy_13.jpg';

export default function Philosophy() {
  return (
    <section className="py-32 relative z-10 overflow-hidden bg-black" data-testid="section-philosophy">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
            <img 
              src={philosophyImg} 
              alt="The 13 Philosophy" 
              className="relative z-10 w-full aspect-square object-cover shadow-2xl shadow-primary/10 border border-primary/20"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-background/80 to-transparent z-20 pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 border border-border text-xs font-mono text-muted-foreground uppercase tracking-widest mb-8">
              Core Axiom
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight text-white" data-testid="text-philosophy-heading">
              Why <span className="text-primary">Thirteen</span>?
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                The number 13 is universally avoided. Buildings skip the 13th floor. Airports omit the 13th gate. It is the number of the unknown, the unpredictable, the risk.
              </p>
              <p>
                We took the number they fear and made it our foundation.
              </p>
              <p>
                13 Tech was built to engineer solutions for the exact problems other firms run from. When the architecture is too complex, the stakes too high, the timeline too impossible—that is where we operate. We turn risk into calculated execution.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border/50 pt-8">
              <div>
                <div className="text-4xl font-display text-primary mb-2">00</div>
                <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Excuses</div>
              </div>
              <div>
                <div className="text-4xl font-display text-white mb-2">100<span className="text-primary">%</span></div>
                <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Execution</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}