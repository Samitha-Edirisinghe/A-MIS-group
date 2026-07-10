import { motion } from "motion/react";
import { Cookie, Settings, BarChart2, Megaphone, Lock, Mail } from "lucide-react";
import { PageNav } from "../components/PageNav";
import { Footer } from "../components/Footer";

const cookieTypes = [
  {
    icon: Lock,
    name: "Strictly Necessary",
    badge: "Always Active",
    accent: "#c8f135",
    description: "Essential for the website to function. These cannot be disabled — they power core functionality like session management and security.",
    examples: ["Session tokens", "Security cookies", "Load balancing"],
  },
  {
    icon: BarChart2,
    name: "Analytics & Performance",
    badge: "Optional",
    accent: "#38bdf8",
    description: "Help us understand how visitors interact with our site. All data is aggregated and anonymous — no individual tracking.",
    examples: ["Page view tracking", "User journey analysis", "Error reporting"],
  },
  {
    icon: Settings,
    name: "Functional",
    badge: "Optional",
    accent: "#a78bfa",
    description: "Enable enhanced functionality and personalisation. May be set by us or by third-party providers whose services we embed.",
    examples: ["Language preferences", "Region settings", "Chat support"],
  },
  {
    icon: Megaphone,
    name: "Marketing",
    badge: "Optional",
    accent: "#f97316",
    description: "Set by advertising partners to build interest profiles and show relevant ads on other websites.",
    examples: ["Ad targeting", "Social media tracking", "Retargeting pixels"],
  },
];

const sections = [
  { title: "What Are Cookies?", body: "Cookies are small text files placed on your device when you visit a website. They are widely used to make sites work efficiently and to provide information to owners. Cookies do not personally identify you directly, but personal data we hold may be linked to cookie information." },
  { title: "How We Use Cookies", body: "A'MIS Group uses cookies to improve your browsing experience, understand how our website is used, remember your preferences, and deliver relevant content. Some cookies are set by third-party services appearing on our pages." },
  { title: "Managing Your Preferences", body: "You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or delete those already set. Note that disabling certain cookies may affect website functionality. Cookie settings are typically found in your browser's 'Options', 'Tools', or 'Preferences' menu." },
  { title: "Third-Party Cookies", body: "Some cookies are set by third-party services including analytics providers and embedded content. These third parties have their own privacy policies and cookie practices which we encourage you to review. We do not control the storage or access of third-party cookies." },
  { title: "Cookie Retention", body: "Session cookies are temporary and deleted when you close your browser. Persistent cookies remain until you delete them or they expire. Retention periods vary per cookie type as described above." },
  { title: "Changes to This Policy", body: "We may update this Cookie Policy to reflect changes in technology, law, or our practices. When changes are made, we update the 'Last Updated' date. We encourage periodic review." },
];

export function CookiePolicyPage() {
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
                <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-4">Cookie Policy</h1>
                <p className="text-white/40 text-sm">Last updated: January 2026</p>
              </div>
              <p className="text-white/50 text-lg leading-relaxed">
                This policy explains how A'MIS Group uses cookies and similar tracking technologies on our website, and how you can control them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookie types — 4 cards */}
      <section className="py-20 px-6 lg:px-16 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#c8f135]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">Cookie Types</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0b1940] tracking-tight">Cookies We Use</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cookieTypes.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.09 }}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${c.accent}15` }}>
                        <Icon className="w-5 h-5" style={{ color: c.accent }} />
                      </div>
                      <h3 className="text-[#0b1940] font-black text-lg">{c.name}</h3>
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full shrink-0"
                      style={{ background: `${c.accent}15`, color: c.accent }}>
                      {c.badge}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{c.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.examples.map((ex) => (
                      <span key={ex} className="text-[10px] font-bold px-2.5 py-1 bg-gray-50 text-gray-400 rounded border border-gray-100 tracking-wide">{ex}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Policy sections */}
      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#c8f135]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">Policy Details</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0b1940] tracking-tight">More Information</h2>
          </motion.div>

          <div className="flex flex-col gap-10">
            {sections.map((sec, si) => (
              <motion.div key={sec.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: si * 0.05 }}
                className="border-b border-gray-100 pb-10 last:border-0">
                <h3 className="text-lg font-black text-[#0b1940] mb-3">{sec.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{sec.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-16 bg-[#0b1940]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#c8f135]/15 flex items-center justify-center shrink-0">
              <Cookie className="w-5 h-5 text-[#c8f135]" />
            </div>
            <div>
              <div className="text-white font-bold">Questions about cookies?</div>
              <div className="text-white/40 text-sm">Contact us and we'll explain everything clearly.</div>
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
