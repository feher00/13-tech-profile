import { motion } from 'framer-motion';
import { SiGooglecloud, SiDigitalocean, SiStripe, SiDatadog, SiVercel, SiCloudflare } from 'react-icons/si';

export default function Clients() {
  const logos = [
    { icon: SiDigitalocean, name: 'DigitalOcean' },
    { icon: SiGooglecloud, name: 'Google Cloud' },
    { icon: SiStripe, name: 'Stripe' },
    { icon: SiDatadog, name: 'Datadog' },
    { icon: SiVercel, name: 'Vercel' },
    { icon: SiCloudflare, name: 'Cloudflare' },
  ];

  return (
    <section className="py-20 border-y border-border/50 bg-background/50 relative z-10" data-testid="section-clients">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-mono text-muted-foreground uppercase tracking-widest mb-10">
          Powered by industry standards
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {logos.map((Logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
              data-testid={`client-logo-${Logo.name.toLowerCase().replace(' ', '-')}`}
            >
              <Logo.icon className="w-8 h-8 md:w-10 md:h-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}