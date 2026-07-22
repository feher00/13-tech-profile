import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section 
      className="relative z-10 bg-black text-white" 
      data-testid="section-philosophy"
    >
      {/* Chapter 1: Transformation and Innovation */}
      <div className="min-h-screen flex items-center relative overflow-hidden py-32">
        {/* Background elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,240,255,0.08),transparent_50%)]"
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="inline-block px-3 py-1 border border-primary/30 text-xs font-mono text-primary uppercase tracking-widest mb-8 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                Axiom 01: Transformation
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight tracking-tighter" data-testid="text-philosophy-heading-1">
                Break <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Convention.</span>
              </h2>
              <div className="space-y-6 text-xl text-muted-foreground font-light leading-relaxed">
                <p>
                  The number 13 is universally avoided. It is unconventional, unpredictable, and entirely memorable.
                </p>
                <p>
                  We challenge the status quo, choosing <span className="text-white font-medium">innovation over tradition</span>. We engineer solutions for the exact problems other firms run from, turning massive challenges into unprecedented opportunities.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative aspect-square flex items-center justify-center"
            >
              <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="text-[12rem] md:text-[20rem] font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white/10 to-primary/20 tracking-tighter leading-none mix-blend-screen">
                13
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Threshold Transition */}
      <div className="h-32 relative flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-px bg-gradient-to-b from-transparent via-primary to-transparent"
        />
      </div>

      {/* Chapter 2: Growth Beyond Limits */}
      <div className="min-h-screen flex items-center relative overflow-hidden py-32 bg-secondary/20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,240,255,0.05),transparent_50%)]"
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative h-full flex flex-col justify-center"
            >
              <div className="flex gap-4 mb-8">
                {[1,2,3,4,5,6,7,8,9,10,11,12].map((num) => (
                  <div key={num} className="w-1 md:w-2 h-16 bg-white/10 rounded-full" />
                ))}
                <motion.div 
                  initial={{ height: 16, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileInView={{ height: 96, backgroundColor: "rgba(0,240,255,1)" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="w-1 md:w-2 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.8)]" 
                />
              </div>
              <div className="text-4xl font-display font-bold text-white/20 tracking-widest uppercase">
                Beyond <br/> Completeness
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-1 lg:order-2"
            >
              <div className="inline-block px-3 py-1 border border-primary/30 text-xs font-mono text-primary uppercase tracking-widest mb-8 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                Axiom 02: Growth
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight tracking-tighter" data-testid="text-philosophy-heading-2">
                Beyond <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">Limits.</span>
              </h2>
              <div className="space-y-6 text-xl text-muted-foreground font-light leading-relaxed">
                <p>
                  Twelve traditionally represents completeness. Twelve months, twelve zodiac signs, twelve hours. 
                </p>
                <p>
                  Thirteen goes one step further. We build <span className="text-white font-medium">beyond expectations</span>, embracing continuous improvement to deliver the absolute next level of technology. When you reach the edge of what's considered possible, we build the bridge to the other side.
                </p>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
