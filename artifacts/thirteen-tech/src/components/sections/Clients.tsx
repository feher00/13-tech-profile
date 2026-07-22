import { motion } from 'framer-motion';
import saasImg from '@assets/generated_images/industry_saas.jpg';
import fintechImg from '@assets/generated_images/industry_fintech.jpg';
import adtechImg from '@assets/generated_images/industry_adtech.jpg';
import healthcareImg from '@assets/generated_images/industry_healthcare.jpg';
import ecommerceImg from '@assets/generated_images/industry_ecommerce.jpg';
import cyberImg from '@assets/generated_images/industry_cybersecurity.jpg';

const industries = [
  { name: 'SaaS', image: saasImg },
  { name: 'FinTech', image: fintechImg },
  { name: 'Ad Tech', image: adtechImg },
  { name: 'Healthcare', image: healthcareImg },
  { name: 'Ecommerce', image: ecommerceImg },
  { name: 'Cybersecurity', image: cyberImg },
];

export default function Clients() {
  return (
    <section className="py-20 border-y border-border/50 bg-background/50 relative z-10" data-testid="section-clients">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-mono text-muted-foreground uppercase tracking-widest mb-12">
          Powered by industry standards
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center gap-3"
              data-testid={`client-industry-${industry.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 overflow-hidden border border-border/40 group-hover:border-primary/60 transition-all duration-500 grayscale group-hover:grayscale-0">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <span className="text-xs font-mono text-muted-foreground group-hover:text-primary uppercase tracking-widest transition-colors duration-300">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
