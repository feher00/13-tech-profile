import { motion } from 'framer-motion';
import { Activity, Shield, Cpu, Zap, Box, Network } from 'lucide-react';
import saasImg from '@assets/generated_images/industry_saas.jpg';
import fintechImg from '@assets/generated_images/industry_fintech.jpg';
import adtechImg from '@assets/generated_images/industry_adtech.jpg';
import healthcareImg from '@assets/generated_images/industry_healthcare.jpg';
import ecommerceImg from '@assets/generated_images/industry_ecommerce.jpg';
import cyberImg from '@assets/generated_images/industry_cybersecurity.jpg';

const industries = [
  {
    id: 'saas',
    name: 'SaaS',
    description: 'Scalable multi-tenant architectures designed for zero-downtime deployments and rapid global expansion.',
    icon: Box,
    image: saasImg
  },
  {
    id: 'fintech',
    name: 'FinTech',
    description: 'High-frequency transaction systems built with bank-grade security and microsecond latency.',
    icon: Activity,
    image: fintechImg
  },
  {
    id: 'adtech',
    name: 'Ad Tech',
    description: 'Real-time bidding engines and massive data pipelines processing billions of events per second.',
    icon: Network,
    image: adtechImg
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'HIPAA-compliant platforms that handle sensitive biometric data with absolute precision and privacy.',
    icon: Activity,
    image: healthcareImg
  },
  {
    id: 'ecommerce',
    name: 'Ecommerce',
    description: 'Global logistics and high-volume transaction networks that never falter under Black Friday loads.',
    icon: Zap,
    image: ecommerceImg
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Impenetrable defense grids and proactive threat detection systems powered by advanced heuristics.',
    icon: Shield,
    image: cyberImg
  }
];

export default function Industries() {
  return (
    <section className="py-32 relative z-10" id="industries" data-testid="section-industries">
      <div className="container mx-auto px-6">
        
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white" data-testid="text-industries-heading">
            Sectors of <span className="text-primary">Dominance</span>.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl font-light">
            We don't build generic software. We engineer domain-specific weaponized technology for the most demanding industries on earth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[400px] overflow-hidden bg-secondary/20"
              data-testid={`card-industry-${ind.id}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={ind.image} 
                  alt={ind.name}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4 text-primary opacity-50 group-hover:opacity-100 transition-opacity">
                  <ind.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                  {ind.name}
                </h3>
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  <p className="text-sm text-muted-foreground mt-2 font-light">
                    {ind.description}
                  </p>
                </div>
              </div>
              
              {/* Borders */}
              <div className="absolute inset-0 border border-border/50 group-hover:border-primary/50 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}