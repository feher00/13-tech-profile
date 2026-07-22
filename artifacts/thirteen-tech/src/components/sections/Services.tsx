import { motion } from 'framer-motion';
import { Layers, Workflow, Database, Cpu, Cloud } from 'lucide-react';

const capabilities = [
  {
    id: 'arch',
    title: 'Distributed Architecture',
    desc: 'Microservices and serverless paradigms engineered for infinite horizontal scaling and fault tolerance.',
    icon: Layers,
    metrics: '99.999% Uptime'
  },
  {
    id: 'data',
    title: 'High-Velocity Data',
    desc: 'Streaming pipelines and analytical databases capable of ingesting petabytes without breaking a sweat.',
    icon: Database,
    metrics: '<10ms Latency'
  },
  {
    id: 'infra',
    title: 'Cloud Infrastructure',
    desc: 'Infrastructure-as-code deployments across AWS, GCP, and Azure. Immutable, reproducible, secure.',
    icon: Cloud,
    metrics: 'Multi-Region Active'
  },
  {
    id: 'algos',
    title: 'Applied Heuristics',
    desc: 'Proprietary algorithms and machine learning models integrated directly into your critical path.',
    icon: Workflow,
    metrics: 'Real-time Inference'
  }
];

export default function Services() {
  return (
    <section className="py-32 relative z-10 bg-background" id="capabilities" data-testid="section-services">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white" data-testid="text-services-heading">
              Engineering <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              We don't assemble pieces. We forge systems from the ground up, guaranteeing optimal performance under extreme duress.
            </p>
          </div>
          <button className="flex-shrink-0 px-6 py-3 border border-border text-sm font-mono uppercase tracking-widest hover:border-primary hover:text-primary transition-colors">
            View Tech Stack
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/50 border border-border/50">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-12 group hover:bg-secondary/20 transition-colors"
              data-testid={`card-service-${cap.id}`}
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-4 bg-secondary/50 rounded-none border border-border group-hover:border-primary/50 group-hover:text-primary transition-colors">
                  <cap.icon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Target</div>
                  <div className="text-sm font-mono text-primary bg-primary/10 px-2 py-1 border border-primary/20">
                    {cap.metrics}
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-primary transition-colors">
                {cap.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}