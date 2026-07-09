import { motion } from "motion/react";
import { Shield, Eye, Lock, UserCheck, Trash2, Mail } from "lucide-react";
import { PageNav } from "../components/PageNav";
import { Footer } from "../components/Footer";

const highlights = [
  { icon: Shield,    title: "We protect your data",       desc: "Industry-standard security measures applied to all personal information." },
  { icon: Eye,       title: "Transparent collection",     desc: "We only collect what we need and tell you exactly what and why." },
  { icon: Lock,      title: "We never sell your data",    desc: "Your personal information is never sold or traded to third parties." },
  { icon: UserCheck, title: "You're in control",          desc: "Access, correct, or delete your data at any time by contacting us." },
];

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    items: [
      { heading: "Information You Provide", body: "We collect information you voluntarily provide when you contact us, request a quote, or engage our services — including your name, email, phone number, company name, and project details." },
      { heading: "Automatic Collection", body: "When you visit our website, we may automatically collect technical data such as IP address, browser type, operating system, pages viewed, and visit timestamps." },
      { heading: "Cookies", body: "We use cookies and similar tracking technologies to enhance your experience. See our Cookie Policy for full details and how to manage preferences." },
    ],
  },
  {
    number: "02",
    title: "How We Use Your Information",
    items: [
      { heading: "Service Delivery", body: "To respond to enquiries, provide quotes, deliver requested services, and communicate about your project." },
      { heading: "Business Operations", body: "To improve our services, personalise your experience, send relevant communications, and comply with legal obligations." },
      { heading: "Marketing", body: "With your consent, to send updates about our services and news. You may opt out at any time." },
    ],
  },
  {
    number: "03",
    title: "Information Sharing",
    items: [
      { heading: "We Do Not Sell Your Data", body: "A'MIS Group does not sell, trade, or rent your personal information to any third party." },
      { heading: "Trusted Service Providers", body: "We may share data with trusted providers who assist our operations, under strict confidentiality agreements." },
      { heading: "Legal Requirements", body: "We may disclose information where required by law or to protect our legal rights." },
    ],
  },
  {
    number: "04",
    title: "Data Security & Retention",
    items: [
      { heading: "Security Measures", body: "We implement appropriate technical and organisational measures to protect your data against unauthorised access or disclosure." },
      { heading: "Retention Period", body: "We retain personal information only as long as necessary for its purpose or as required by law." },
    ],
  },
  {
    number: "05",
    title: "Your Rights",
    items: [
      { heading: "Access & Correction", body: "You have the right to access personal data we hold about you and request corrections if inaccurate." },
      { heading: "Deletion", body: "You may request deletion of your personal data, subject to any legal retention obligations." },
      { heading: "Opt-Out", body: "You may opt out of marketing communications at any time via the unsubscribe link or by contacting us directly." },
    ],
  },
  {
    number: "06",
    title: "Contact Us",
    items: [
      { heading: "Privacy Enquiries", body: "For questions about this Privacy Policy or your personal data, contact us at info@amisgroups.com or write to Main Street, Melbourne, Australia." },
    ],
  },
];

export function PrivacyPolicyPage() {
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
                <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-4">Privacy Policy</h1>
                <p className="text-white/40 text-sm">Last updated: January 2026</p>
              </div>
              <p className="text-white/50 text-lg leading-relaxed">
                A'MIS Group is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.
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
              <div className="ml-0 flex flex-col gap-5 pl-0 border-l-2 border-[#c8f135]/30 pl-8">
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
              <div className="text-white font-bold">Questions about your privacy?</div>
              <div className="text-white/40 text-sm">We're happy to help — reach out any time.</div>
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
