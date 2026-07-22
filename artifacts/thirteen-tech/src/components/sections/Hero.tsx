import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let w = canvas.width = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;

    const numNodes = 80;
    const nodes: any[] = [];
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        isBackbone: i < 13,
        isAnchor: Math.random() < 0.1,
        baseRadius: i < 13 ? 3 : 2,
        phase: Math.random() * Math.PI * 2
      });
    }

    const pulses: any[] = [];
    let lastPulseTime = 0;

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const resizeObserver = new ResizeObserver(() => {
      if (!canvas) return;
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    });
    resizeObserver.observe(canvas);

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);
      
      // Update nodes
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        
        if (mouseX > 0 && mouseY > 0) {
          const dx = mouseX - n.x;
          const dy = mouseY - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            n.x += (dx / dist) * 0.3;
            n.y += (dy / dist) * 0.3;
          }
        }
        n.phase += 0.02;
      });

      // Draw edges
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.5;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Fire pulses
      if (time - lastPulseTime > 2000 + Math.random() * 1000) {
        lastPulseTime = time;
        const startNode = nodes[Math.floor(Math.random() * nodes.length)];
        const neighbors = nodes.filter(n => {
          if (n === startNode) return false;
          const dx = n.x - startNode.x;
          const dy = n.y - startNode.y;
          return Math.sqrt(dx * dx + dy * dy) < 200;
        });
        
        if (neighbors.length > 0) {
          const endNode = neighbors[Math.floor(Math.random() * neighbors.length)];
          pulses.push({
            startNode,
            endNode,
            progress: 0,
            speed: 0.02 + Math.random() * 0.01
          });
        }
      }

      // Draw pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;
        
        if (p.progress >= 1) {
          pulses.splice(i, 1);
          continue;
        }

        const x = p.startNode.x + (p.endNode.x - p.startNode.x) * p.progress;
        const y = p.startNode.y + (p.endNode.y - p.startNode.y) * p.progress;
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.fill();
        
        const grad = ctx.createRadialGradient(x, y, 0, x, y, 10);
        grad.addColorStop(0, 'rgba(0, 240, 255, 0.8)');
        grad.addColorStop(1, 'rgba(0, 240, 255, 0)');
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Draw nodes
      nodes.forEach(n => {
        let currentRadius = n.baseRadius;
        let glowRadius = n.isBackbone ? 12 : 8;
        
        if (n.isAnchor) {
          const pulseEffect = Math.sin(n.phase) * 0.5 + 0.5; // 0 to 1
          currentRadius += pulseEffect * 1.5;
          glowRadius += pulseEffect * 6;
        }

        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowRadius);
        grad.addColorStop(0, `rgba(0, 240, 255, ${n.isBackbone ? 0.6 : 0.4})`);
        grad.addColorStop(1, 'rgba(0, 240, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(n.x, n.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.9)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background" data-testid="section-hero">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0" 
        data-testid="hero-canvas"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20 pointer-events-none">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center pointer-events-auto">
          
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
    </section>
  );
}
