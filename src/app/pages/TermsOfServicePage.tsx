import { motion } from "motion/react";
import { FileText, CreditCard, Shield, AlertCircle, Mail } from "lucide-react";
import { PageNav } from "../components/PageNav";
import { Footer } from "../components/Footer";

const highlights = [
  { icon: FileText,    title: "Clear service terms",   desc: "Straightforward terms governing how we work together on every project." },
  { icon: CreditCard,  title: "Transparent pricing",   desc: "Fees are agreed upfront. No hidden charges or surprise invoices." },
  { icon: Shield,      title: "IP protection",         desc: "Your deliverables are yours upon full payment. Our methods remain ours." },
  { icon: AlertCircle, title: "Fair termination",      desc: "Either party may end an engagement with written notice under clear conditions." },
];

const sections = [
  {
    number: "01",
    title: "Acceptance of Terms",
    items: [
      { heading: "Agreement", body: "By accessing our website or engaging A'MIS Group Pvt Ltd for services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services." },
      { heading: "Changes to Terms", body: "We reserve the right to modify these terms at any time. Changes take effect immediately upon posting. Your continued use of our services constitutes acceptance." },
    ],
  },
  {
    number: "02",
    title: "Our Services",
    items: [
      { heading: "Scope", body: "A'MIS Group provides technology, creative, photography, and video production services through three studios: A'MIS Creotech, A'MIS Captura, and A'MIS Cinemix. Specific deliverables, timelines, and fees are defined in individual project agreements." },
      { heading: "Service Standards", body: "We commit to delivering all services with professional skill and care, and will communicate proactively about any issues affecting delivery." },
      { heading: "Third-Party Services", body: "Some services may involve third-party platforms or tools. We are not responsible for the terms or performance of third-party services." },
    ],
  },
  {
    number: "03",
    title: "Client Responsibilities",
    items: [
      { heading: "Accurate Information", body: "You agree to provide accurate, complete, and timely information needed for us to deliver our services. Delays from your side may affect delivery timelines." },
      { heading: "Approvals & Feedback", body: "You are responsible for reviewing and approving deliverables within agreed timeframes. Revision rounds beyond those specified may attract additional fees." },
      { heading: "Lawful Use", body: "You agree to use our services only for lawful purposes and in compliance with all applicable laws." },
    ],
  },
  {
    number: "04",
    title: "Intellectual Property",
    items: [
      { heading: "Ownership Transfer", body: "Upon full payment, intellectual property rights for custom deliverables are transferred to you as specified in your project agreement. Licensed stock assets carry their own usage restrictions." },
      { heading: "Portfolio Rights", body: "Unless otherwise agreed in writing, A'MIS Group retains the right to display completed work in our portfolio and marketing materials." },
      { heading: "A'MIS Group IP", body: "Our brand, website, methodologies, and pre-existing intellectual property remain the sole property of A'MIS Group Pvt Ltd." },
    ],
  },
  {
    number: "05",
    title: "Payment Terms",
    items: [
      { heading: "Fees", body: "Fees are set out in individual project proposals. All fees are quoted exclusive of applicable taxes unless stated otherwise." },
      { heading: "Payment Schedule", body: "Payment schedules are defined in your project agreement. We typically require a deposit before commencing work. Final deliverables are released upon full payment." },
      { heading: "Late Payment", body: "Late payments may result in work being paused. We reserve the right to charge interest on overdue amounts." },
    ],
  },
  {
    number: "06",
    title: "Limitation of Liability",
    items: [
      { heading: "Liability Cap", body: "To the maximum extent permitted by law, A'MIS Group's total liability shall not exceed the total fees paid by you in the preceding three months." },
      { heading: "Excluded Losses", body: "We are not liable for indirect, consequential, special, or incidental damages including loss of profits, data, or business opportunity." },
    ],
  },
  {
    number: "07",
    title: "Termination",
    items: [
      { heading: "By You", body: "You may terminate a project with written notice. Fees for work completed to date are payable in full." },
      { heading: "By Us", body: "We reserve the right to terminate if you breach these terms, fail to make payment, or engage in harmful conduct toward our team." },
    ],
  },
  {
    number: "08",
    title: "Governing Law",
    items: [
      { heading: "Jurisdiction", body: "These Terms are governed by the laws of Australia. Disputes are subject to the exclusive jurisdiction of the courts of Melbourne, Victoria, Australia." },
    ],
  },
];

export function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageNav current="" />

      {/* Hero */}
      <section className="relative bg-[#0b1940] pt-16 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#c8f135]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(90deg,#c8f135 0,#c8f135 1px,transparent 1px,transparent 60px),repeating-linear-gradient(180deg,#c8f135 0,#c8f135 1px,transparent 1px,transparent 60px)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#c8f135]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#c8f135] uppercase">Legal</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-end">
              <div>
                <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-4">Terms of Service</h1>
                <p className="text-white/40 text-sm">Last updated: January 2026</p>
              </div>
              <p className="text-white/50 text-lg leading-relaxed">
                These terms govern your use of A'MIS Group's website and services. Please read them carefully before engaging us.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-6 lg:px-16 bg-[#f7f8fa] border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div key={h.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#c8f135]/12 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#c8f135]" />
                </div>
                <div>
                  <div className="text-[#0b1940] font-bold text-sm mb-1">{h.title}</div>
                  <div className="text-gray-400 text-xs leading-relaxed">{h.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Sections */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto flex flex-col gap-14">
          {sections.map((sec, si) => (
            <motion.div key={sec.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: si * 0.04 }}>
              <div className="flex items-start gap-6 mb-6">
                <span className="text-4xl font-black text-gray-100 leading-none shrink-0">{sec.number}</span>
                <h2 className="text-2xl font-black text-[#0b1940] pt-2">{sec.title}</h2>
              </div>
              <div className="flex flex-col gap-5 border-l-2 border-[#c8f135]/30 pl-8">
                {sec.items.map((item) => (
                  <div key={item.heading}>
                    <div className="text-[#0b1940] font-bold text-sm mb-1.5">{item.heading}</div>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-16 bg-[#0b1940]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#c8f135]/15 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-[#c8f135]" />
            </div>
            <div>
              <div className="text-white font-bold">Questions about our terms?</div>
              <div className="text-white/40 text-sm">Get in touch and we'll be happy to clarify.</div>
            </div>
          </div>
          <a href="mailto:info@amisgroups.com" className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#c8f135] text-[#0b1940] font-black text-sm rounded hover:bg-[#d5f84a] transition-colors">
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
