import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { label: 'Lines of Code Shipped', value: '42M+' },
    { label: 'System Uptime', value: '99.999%' },
    { label: 'Threats Neutralized', value: '1.2B' },
    { label: 'Deployment Speed', value: '< 2min' },
  ];

  return (
    <section className="py-24 border-y border-border/50 bg-secondary/10 relative z-10 overflow-hidden" data-testid="section-stats">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff0a_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-border/0 md:divide-border/50">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
              data-testid={`stat-${i}`}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-mono text-primary uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}