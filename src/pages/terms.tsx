import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Terms() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col" data-testid="page-terms">
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
            <h1 className="text-5xl font-display font-bold text-white mb-4" data-testid="text-terms-heading">Terms of Service</h1>
            <p className="text-sm font-mono text-muted-foreground">Effective Date: July 1, 2026 &nbsp;·&nbsp; Last Updated: July 22, 2026</p>
          </div>

          <div className="prose prose-invert prose-sm max-w-none space-y-10 text-muted-foreground font-light leading-relaxed">

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-3">1. Agreement to Terms</h2>
              <p>These Terms of Service ("Terms") govern your access to and use of all services, platforms, APIs, and deliverables provided by 13 Tech LLC ("13 Tech", "we", "us"). By engaging our services or accessing our website, you agree to be bound by these Terms.</p>
              <p className="mt-3">If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-3">2. Services</h2>
              <p>13 Tech provides bespoke software engineering, distributed systems architecture, infrastructure design, and related technology consulting services. The specific scope, deliverables, timelines, and pricing for each engagement are defined in a separate Master Services Agreement (MSA) and/or Statement of Work (SOW) executed between 13 Tech and the client.</p>
              <p className="mt-3">These Terms apply in addition to, and do not supersede, any executed MSA or SOW. In the event of conflict, the MSA governs.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-3">3. Intellectual Property</h2>
              <p>Unless otherwise specified in an MSA:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li><span className="text-white font-medium">Client IP:</span> All custom code, systems, and deliverables created exclusively for a client and paid for in full become the property of the client upon final payment.</li>
                <li><span className="text-white font-medium">13 Tech IP:</span> Proprietary frameworks, tooling, internal libraries, and methodologies developed by 13 Tech prior to or independently of the engagement remain the exclusive property of 13 Tech. Clients receive a limited, non-exclusive license to use these components within their deliverables.</li>
                <li><span className="text-white font-medium">Open Source:</span> Where open-source components are incorporated, their respective licenses apply. 13 Tech will disclose all OSS dependencies in the project deliverables.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-3">4. Confidentiality</h2>
              <p>Both parties agree to maintain the confidentiality of any non-public information shared during the course of an engagement. This obligation survives termination of services for a period of three (3) years unless otherwise specified in the MSA.</p>
              <p className="mt-3">13 Tech employees and contractors are bound by individual confidentiality agreements covering all client engagements.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-3">5. Payment Terms</h2>
              <p>Unless otherwise specified in an SOW, invoices are payable within 30 days of issuance. Late payments accrue interest at 1.5% per month. 13 Tech reserves the right to suspend services on accounts overdue by more than 15 days after written notice.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-3">6. Warranties & Disclaimers</h2>
              <p>13 Tech warrants that services will be performed in a professional and workmanlike manner consistent with industry standards. We warrant delivered systems against defects for 90 days following acceptance unless otherwise specified.</p>
              <p className="mt-3">EXCEPT AS EXPRESSLY STATED, ALL SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-3">7. Limitation of Liability</h2>
              <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, 13 TECH'S TOTAL LIABILITY FOR ANY CLAIM ARISING UNDER THESE TERMS SHALL NOT EXCEED THE FEES PAID BY THE CLIENT IN THE THREE MONTHS PRECEDING THE CLAIM. IN NO EVENT SHALL 13 TECH BE LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-3">8. Termination</h2>
              <p>Either party may terminate an engagement with 30 days written notice. 13 Tech reserves the right to terminate immediately if the client engages in illegal activities, fails to pay overdue invoices, or materially breaches these Terms. Upon termination, the client owes payment for all work completed to date.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-3">9. Governing Law</h2>
              <p>These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles. Any disputes shall be resolved by binding arbitration under JAMS rules, conducted in English.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-white mb-3">10. Contact</h2>
              <p>For legal inquiries: <a href="mailto:legal@the13tech.com" className="text-primary hover:underline">legal@the13tech.com</a></p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
