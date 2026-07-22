import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function AnimatedStat({ value, label, index }: { value: string, label: string, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(value.replace(/[\d.]+/, '0'));

  useEffect(() => {
    if (!inView) return;
    const numMatch = value.match(/[\d.]+/);
    if (!numMatch) return;
    
    const target = parseFloat(numMatch[0]);
    const isFloat = numMatch[0].includes('.');
    const prefix = value.substring(0, numMatch.index);
    const suffix = value.substring((numMatch.index || 0) + numMatch[0].length);
    
    let startTime: number;
    const duration = 2000 + index * 200;
    
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const current = easeProgress * target;
      
      let formatted: string;
      if (isFloat) {
        const decimals = numMatch[0].split('.')[1].length;
        formatted = current.toFixed(decimals);
      } else {
        formatted = Math.floor(current).toString();
      }
      
      setDisplayValue(`${prefix}${formatted}${suffix}`);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [inView, value, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center"
      data-testid={`stat-${index}`}
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2 tracking-tighter">
        {displayValue}
      </div>
      <div className="text-xs md:text-sm font-mono text-primary uppercase tracking-widest">
        {label}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const stats = [
    { label: 'Lines of Code Shipped', value: '42M+' },
    { label: 'System Uptime', value: '99.999%' },
    { label: 'Threats Neutralized', value: '1.2B' },
    { label: 'Deployment Speed', value: '< 2min' },
  ];

  return (
    <section className="py-24 border-y border-border/50 bg-secondary/10 relative z-10 overflow-hidden" data-testid="section-stats">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff0a_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-border/0 md:divide-border/50">
          {stats.map((stat, i) => (
            <AnimatedStat key={i} index={i} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </section>
  );
}
