import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Shield, Lock, Server, Eye, RefreshCw, AlertTriangle } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const specs = [
  {
    icon: Lock,
    title: 'Encryption Standards',
    items: [
      'AES-256-GCM encryption at rest across all storage layers',
      'TLS 1.3 enforced for all data in transit — TLS 1.0/1.1 disabled',
      'RSA-4096 / ECDSA P-384 for asymmetric key operations',
      'HSTS with 12-month max-age and includeSubDomains enforced on all endpoints',
      'Certificate Transparency (CT) logging enabled on all issued certificates',
    ],
  },
  {
    icon: Shield,
    title: 'Access Control',
    items: [
      'Zero-trust network architecture — no implicit trust across segments',
      'RBAC with least-privilege enforcement across all systems and cloud accounts',
      'Hardware MFA (FIDO2/WebAuthn) mandatory for all engineering personnel',
      'Privileged Access Workstations (PAWs) for production environment access',
      'Just-in-time (JIT) access provisioning for elevated permissions',
      'SSH certificate authority — no long-lived SSH keys in production',
    ],
  },
  {
    icon: Server,
    title: 'Infrastructure Security',
    items: [
      'Immutable infrastructure via IaC (Terraform) — no manual configuration drift',
      'Network micro-segmentation with deny-all default firewall posture',
      'Runtime container scanning with Falco for anomaly detection',
      'WAF deployed across all public-facing endpoints (OWASP Top 10 ruleset)',
      'DDoS mitigation at edge layer — capacity exceeds 1 Tbps',
      'Supply chain security: SLSA Level 3 build provenance for all releases',
    ],
  },
  {
    icon: Eye,
    title: 'Monitoring & Detection',
    items: [
      'SIEM with 24/7 automated threat correlation and alerting',
      'Full packet capture and deep packet inspection at network perimeter',
      'Behavioral anomaly detection on all privileged accounts',
      'Immutable audit logs with cryptographic integrity verification',
      'Mean time to detect (MTTD) target: under 15 minutes for critical events',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Resilience & Recovery',
    items: [
      'RPO of 1 hour and RTO of 4 hours for critical production systems',
      'Automated cross-region backups with integrity validation on every snapshot',
      'Chaos engineering practices — weekly automated fault injection in staging',
      'Disaster recovery runbooks tested quarterly under simulated outage conditions',
      'Multi-region active-active topology for Tier 1 client infrastructure',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Vulnerability Management',
    items: [
      'Annual third-party penetration testing (black-box and grey-box)',
      'Continuous automated dependency scanning with CVSS scoring',
      'Critical CVEs patched within 24 hours of disclosure; high within 7 days',
      'Coordinated vulnerability disclosure program — responsible disclosure welcomed',
      'SAST and DAST integrated into every CI/CD pipeline run',
    ],
  },
];

export default function Security() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col" data-testid="page-security">
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest mb-12">
              <ArrowLeft className="w-3 h-3" /> Back
            </a>
          </Link>

          <div className="mb-16 border-b border-border/50 pb-10">
            <p className="text-xs font-mono text-primary uppercase tracking-widest mb-4">Technical Documentation</p>
            <h1 className="text-5xl font-display font-bold text-white mb-4" data-testid="text-security-heading">Security Specifications</h1>
            <p className="text-muted-foreground font-light leading-relaxed max-w-2xl">
              13 Tech operates at the intersection of precision engineering and adversarial threat modeling. Below are the technical controls, standards, and postures we enforce across all internal systems and client-facing infrastructure.
            </p>
            <p className="text-sm font-mono text-muted-foreground mt-6">Last Reviewed: July 2025 &nbsp;·&nbsp; Classification: Public</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/30 border border-border/30">
            {specs.map((spec) => (
              <div
                key={spec.title}
                className="bg-background p-8 group hover:bg-secondary/10 transition-colors"
                data-testid={`card-security-${spec.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 border border-border/50 group-hover:border-primary/40 transition-colors">
                    <spec.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-display font-bold text-white">{spec.title}</h2>
                </div>
                <ul className="space-y-3">
                  {spec.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground font-light leading-relaxed">
                      <span className="text-primary font-mono mt-0.5 flex-shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 border border-primary/20 bg-primary/5">
            <h3 className="text-lg font-display font-bold text-white mb-3">Security Inquiries & Disclosure</h3>
            <p className="text-muted-foreground font-light text-sm leading-relaxed mb-4">
              To report a vulnerability, request our full security audit reports, or discuss security requirements for your engagement, contact our security team directly.
            </p>
            <a
              href="mailto:security@13tech.com?subject=Security%20Inquiry"
              className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:underline uppercase tracking-widest"
            >
              security@13tech.com
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
