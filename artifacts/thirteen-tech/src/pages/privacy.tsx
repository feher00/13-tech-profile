import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Privacy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col" data-testid="page-privacy">
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest mb-12">
              <ArrowLeft className="w-3 h-3" /> Back
            </a>
          </Link>

          <div className="mb-12 border-b border-border/50 pb-10">
            <p className="text-xs font-mono text-primary uppercase tracking-widest mb-4">Legal</p>
            <h1 className="text-5xl font-display font-bold text-white mb-4" data-testid="text-privacy-heading">Privacy Policy</h1>
            <p className="text-sm font-mono text-muted-foreground">Effective Date: July 1, 2026 &nbsp;·&nbsp; Last Updated: July 22, 2026</p>
          </div>

          <div className="prose prose-invert prose-sm max-w-none space-y-10 text-muted-foreground font-light leading-relaxed">

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-3">1. Overview</h2>
              <p>13 Tech LLC ("13 Tech", "we", "us", or "our") is committed to protecting the privacy of our clients, partners, and website visitors. This Privacy Policy describes how we collect, use, store, and disclose information when you interact with our services, website, and infrastructure.</p>
              <p>By accessing or using any 13 Tech service, you agree to the terms of this policy. If you do not agree, please discontinue use immediately.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-3">2. Information We Collect</h2>
              <p>We collect information in the following categories:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li><span className="text-white font-medium">Contact Information:</span> Name, email address, company name, and phone number when you submit an inquiry or engage our services.</li>
                <li><span className="text-white font-medium">Technical Data:</span> IP addresses, browser type, operating system, referral URLs, and pages visited — collected automatically via server logs and analytics tooling.</li>
                <li><span className="text-white font-medium">Project Data:</span> Source code, architecture diagrams, credentials, and documentation shared with us under scope of an active engagement. This data is governed by your Master Services Agreement (MSA).</li>
                <li><span className="text-white font-medium">Communications:</span> Emails, messages, and meeting records exchanged during the course of an engagement.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-3">3. How We Use Your Information</h2>
              <p>We use collected information solely to:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Deliver and improve engineering services under contract.</li>
                <li>Communicate with you about active or prospective engagements.</li>
                <li>Comply with legal, regulatory, or contractual obligations.</li>
                <li>Detect, prevent, and respond to security incidents or system abuse.</li>
                <li>Generate aggregated, anonymized analytics for internal business intelligence.</li>
              </ul>
              <p className="mt-4">We do not sell, rent, or trade personal information to third parties for marketing purposes — ever.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-3">4. Data Storage & Security</h2>
              <p>All client data is stored on encrypted infrastructure with AES-256 encryption at rest and TLS 1.3 in transit. Access is restricted to authorized personnel on a strict need-to-know basis, enforced through role-based access control (RBAC) and multi-factor authentication (MFA).</p>
              <p className="mt-3">We maintain SOC 2 Type II-aligned operational controls and undergo annual third-party penetration testing. In the event of a data breach that affects your personal information, we will notify you within 72 hours of confirmed discovery.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-3">5. Data Retention</h2>
              <p>We retain personal data only as long as necessary for the purposes described in this policy or as required by applicable law. Project data is returned or securely destroyed within 30 days of project completion unless otherwise specified in the governing MSA.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-3">6. Third-Party Services</h2>
              <p>We use a limited set of vetted third-party tools (e.g., cloud infrastructure providers, communication platforms) to operate our business. These vendors are bound by data processing agreements and are not permitted to use your data for their own purposes.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-3">7. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data. To exercise these rights, contact us at <a href="mailto:legal@13tech.com" className="text-primary hover:underline">legal@13tech.com</a>. We will respond within 30 days.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-3">8. Changes to This Policy</h2>
              <p>We may update this policy periodically. Material changes will be communicated via email to active clients. Continued use of our services after the effective date constitutes acceptance.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-3">9. Contact</h2>
              <p>For privacy-related inquiries: <a href="mailto:legal@13tech.com" className="text-primary hover:underline">legal@13tech.com</a></p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
