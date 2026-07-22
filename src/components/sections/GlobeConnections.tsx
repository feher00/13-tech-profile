import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const CITIES = [
  { lat: 37.7749, lng: -122.4194, role: 'Developer' },
  { lat: 40.7128, lng: -74.0060, role: 'FinTech' },
  { lat: 51.5074, lng: -0.1278, role: 'Investor' },
  { lat: 48.8566, lng: 2.3522, role: 'Startup' },
  { lat: 35.6762, lng: 139.6503, role: 'Enterprise' },
  { lat: 1.3521, lng: 103.8198, role: 'CTO' },
  { lat: -33.8688, lng: 151.2093, role: 'Developer' },
  { lat: 25.2048, lng: 55.2708, role: 'CEO' },
  { lat: -23.5505, lng: -46.6333, role: 'HealthTech' },
  { lat: 19.0760, lng: 72.8777, role: 'Developer' },
  { lat: 52.5200, lng: 13.4050, role: 'Startup' },
  { lat: 43.6532, lng: -79.3832, role: 'FinTech' },
  { lat: -1.2921, lng: 36.8219, role: 'Developer' },
  { lat: 31.2304, lng: 121.4737, role: 'Enterprise' },
  { lat: 55.7558, lng: 37.6173, role: 'Investor' },
  { lat: -34.6037, lng: -58.3816, role: 'Developer' },
  { lat: 9.0820, lng: 8.6753, role: 'Startup' },
  { lat: 60.1695, lng: 24.9354, role: 'CTO' },
  { lat: 37.5665, lng: 126.9780, role: 'Developer' },
  { lat: -33.9249, lng: 18.4241, role: 'HealthTech' },
];

function AnimatedCounter({ value, label }: { value: string, label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  
  const numMatch = value.match(/[\d]+/);
  const target = numMatch ? parseInt(numMatch[0], 10) : 0;
  const suffix = value.replace(/[\d]+/, '');

  useEffect(() => {
    if (!inView || target === 0) return;
    
    let startTime: number;
    const duration = 2000;
    
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * target));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center" data-testid={`counter-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2 tracking-tighter">
        {count}{suffix}
      </div>
      <div className="text-xs md:text-sm font-mono text-primary uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}

export default function GlobeConnections() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let radius = 0;
    let rotation = 0;

    const arcs: any[] = [];
    for (let i = 0; i < 15; i++) {
      const from = CITIES[Math.floor(Math.random() * CITIES.length)];
      let to = CITIES[Math.floor(Math.random() * CITIES.length)];
      while (to === from) {
        to = CITIES[Math.floor(Math.random() * CITIES.length)];
      }
      arcs.push({
        from,
        to,
        progress: Math.random(),
        speed: 0.002 + Math.random() * 0.003
      });
    }

    const resize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      radius = Math.min(width, height) * 0.4;
    };

    const resizeObserver = new ResizeObserver(resize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    resize();

    const getSphereCoords = (lat: number, lng: number, rot: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + rot) * (Math.PI / 180);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);
      
      return { x, y, z };
    };

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = '#0a0f1e';
      ctx.fill();

      ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)';
      ctx.lineWidth = 1;
      
      for (let lat = -80; lat <= 80; lat += 20) {
        ctx.beginPath();
        const y = cy - radius * Math.sin(lat * Math.PI / 180);
        const r = radius * Math.cos(lat * Math.PI / 180);
        ctx.ellipse(cx, y, r, r * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      for (let lng = 0; lng < 360; lng += 20) {
        ctx.beginPath();
        for (let lat = -90; lat <= 90; lat += 5) {
          const coords = getSphereCoords(lat, lng, rotation);
          if (lat === -90) ctx.moveTo(cx + coords.x, cy - coords.y);
          else ctx.lineTo(cx + coords.x, cy - coords.y);
        }
        ctx.stroke();
      }

      rotation += 0.2; 

      CITIES.forEach(city => {
        const coords = getSphereCoords(city.lat, city.lng, rotation);
        if (coords.z > 0) {
          const px = cx + coords.x;
          const py = cy - coords.y;

          const pulse = (Math.sin(Date.now() / 300) + 1) / 2;
          ctx.beginPath();
          ctx.arc(px, py, 4 + pulse * 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 240, 255, ${0.2 + pulse * 0.3})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = '#00f0ff';
          ctx.fill();

          ctx.font = '10px JetBrains Mono';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
          ctx.fillText(city.role, px + 8, py + 3);
        }
      });

      arcs.forEach(arc => {
        const fromCoords = getSphereCoords(arc.from.lat, arc.from.lng, rotation);
        const toCoords = getSphereCoords(arc.to.lat, arc.to.lng, rotation);
        
        if (fromCoords.z > -radius * 0.5 && toCoords.z > -radius * 0.5) {
          const fx = cx + fromCoords.x;
          const fy = cy - fromCoords.y;
          const tx = cx + toCoords.x;
          const ty = cy - toCoords.y;
          
          const midX = (fx + tx) / 2;
          const midY = (fy + ty) / 2;
          const dist = Math.sqrt(Math.pow(tx - fx, 2) + Math.pow(ty - fy, 2));
          const cpX = midX + (fromCoords.x > 0 ? dist * 0.3 : -dist * 0.3);
          const cpY = midY - dist * 0.3;

          ctx.beginPath();
          ctx.moveTo(fx, fy);
          ctx.quadraticCurveTo(cpX, cpY, tx, ty);
          
          arc.progress += arc.speed;
          if (arc.progress > 1) arc.progress = 0;

          ctx.strokeStyle = 'rgba(0, 240, 255, 0.1)';
          ctx.lineWidth = 1;
          ctx.stroke();

          const t = arc.progress;
          const dotX = Math.pow(1 - t, 2) * fx + 2 * (1 - t) * t * cpX + Math.pow(t, 2) * tx;
          const dotY = Math.pow(1 - t, 2) * fy + 2 * (1 - t) * t * cpY + Math.pow(t, 2) * ty;

          ctx.beginPath();
          ctx.arc(dotX, dotY, 2, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = '#00f0ff';
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative bg-background overflow-hidden border-y border-border/50" data-testid="section-globe">
      <div 
        ref={containerRef} 
        className="w-full h-[60vh] md:h-[80vh] relative z-0"
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
        
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10 -mt-20 md:-mt-32 pb-32 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center pointer-events-auto"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white" data-testid="text-globe-heading">
            A Network <br/>
            <span className="text-primary">Without Borders</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light mb-16">
            We connect the builders, the backers, and the visionaries — engineering the future from every corner of the earth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-border/50">
            <AnimatedCounter value="40+" label="Countries" />
            <AnimatedCounter value="500+" label="Developers" />
            <AnimatedCounter value="200+" label="Clients" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
