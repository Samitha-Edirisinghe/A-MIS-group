import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, ArrowRight, Mail, Phone, MapPin, Clock, Send, ChevronDown } from "lucide-react";
import { PageNav } from "../components/PageNav";
import { Footer } from "../components/Footer";

const studios = [
  { name: "A'MIS Creotech", accent: "#c8f135", tagline: "Technology & Creative", email: "creotech@amisgroups.com", phone: "076 268 865", phoneDisplay: "076 268 865" },
  { name: "A'MIS Captura",  accent: "#38bdf8", tagline: "Photography",           email: "captura@amisgroups.com",  phone: "0770031808", phoneDisplay: "077 003 1808" },
  { name: "A'MIS Cinemix",  accent: "#a78bfa", tagline: "Video Production",      email: "cinemix@amisgroups.com",  phone: "0779573135", phoneDisplay: "077 957 3135" },
];

const info = [
  { icon: Mail,    label: "Email Us",    value: "info@amisgroups.com" },
  { icon: Phone,   label: "Call Us",     value: "076 268 8365" },
  { icon: MapPin,  label: "Visit Us",    value: "179, Nagolla Rd, Matale, Sri Lanka" },
  { icon: Clock,   label: "Office Hours",value: "Mon–Friday, 09am – 05pm" },
];

const faqs = [
  { q: "How quickly do you respond to enquiries?", a: "We aim to respond to all enquiries within one business day. For urgent projects, you can call us directly and we'll do our best to assist you right away." },
  { q: "Do you work with clients outside Sri Lanka?", a: "Absolutely. We work with clients across Asia, Australia, Europe, and beyond. Our teams are fully equipped for remote collaboration and digital delivery." },
  { q: "Can I work with more than one studio at once?", a: "Yes — many of our clients engage multiple studios simultaneously. Our studios are designed to work in sync, so a combined project is handled seamlessly under one roof." },
  { q: "What information should I include in my first message?", a: "A brief description of your project, your goals, your preferred timeline, and an approximate budget range. The more context you give us, the faster we can put together a meaningful response." },
  { q: "Do you offer fixed-price or hourly engagements?", a: "Both. Most projects are scoped and priced as fixed packages after an initial discovery call. Ongoing retainers and hourly arrangements are also available for long-term clients." },
  { q: "How do I know which studio is right for my project?", a: "A'MIS Creotech handles technology, branding, and digital marketing. A'MIS Captura covers all photography needs. A'MIS Cinemix handles video production. If you're unsure, just tell us what you need and we'll point you in the right direction." },
  { q: "Can you sign an NDA before we discuss our project?", a: "Yes, we're happy to sign a non-disclosure agreement before any sensitive details are shared. Just mention this in your initial message." },
];

function FaqList() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
          className={`rounded-2xl border transition-all duration-200 overflow-hidden ${open === i ? "border-[#c8f135]/40 shadow-sm" : "border-gray-100 hover:border-gray-200"}`}>
          <button onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
            <span className="text-[#0b1940] font-bold text-sm md:text-base">{faq.q}</span>
            <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${open === i ? "bg-[#c8f135] rotate-180" : "bg-gray-100"}`}>
              <ChevronDown className={`w-4 h-4 ${open === i ? "text-[#0b1940]" : "text-gray-400"}`} />
            </div>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}>
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">{faq.a}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const field = (label: string, key: keyof typeof form, type = "text", placeholder = "") => (
    <div>
      <label className="block text-xs font-bold tracking-widest uppercase text-[#0b1940]/40 mb-2">{label}</label>
      <input
        type={type}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        placeholder={placeholder}
        className="w-full bg-[#f7f8fa] border border-gray-200 rounded-lg px-4 py-3 text-[#0b1940] text-sm placeholder-gray-300 outline-none focus:border-[#c8f135] transition-colors"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <PageNav current="CONTACT US" />

      {/* ── HERO ── */}
      <section className="relative bg-[#0b1940] overflow-hidden flex flex-col" style={{ minHeight: "100vh" }}>
        <div className="absolute top-0 left-0 right-0 h-[3px] z-30 bg-[#c8f135]" />

        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
            alt="Contact A'MIS Group" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, #0b1940 0%, #0b1940 40%, rgba(11,25,64,0.70) 58%, rgba(11,25,64,0.2) 80%, rgba(11,25,64,0.05) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, #0b1940, transparent)" }} />
        </div>

        <div className="relative z-10 flex-1 flex items-center" style={{ paddingTop: 72 }}>
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-12 lg:py-16">
            <div className="max-w-xl lg:max-w-2xl">
              <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#c8f135]" />
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#c8f135]">Get In Touch</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.93] tracking-tighter mb-5">
                Let's Build<br />Something<br /><span className="text-[#c8f135]">Great.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }}
                className="text-white/55 text-base leading-relaxed mb-8 max-w-md">
                Tell us about your project and we'll get back to you within one business day with a clear path forward.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.18 }} className="flex flex-wrap gap-3">
                <a href="#contact-form" className="inline-flex items-center gap-2 px-6 py-3 font-black text-sm rounded-lg bg-[#c8f135] text-[#0b1940] hover:brightness-110 transition-all"
                  style={{ boxShadow: "0 6px 20px #c8f13535" }}>
                  Send a Message <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="tel:0762688365" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-bold text-sm rounded-lg hover:border-white/50 hover:bg-white/5 transition-all">
                  Call: 076 268 8365 <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

      </section>

      {/* ── MAIN CONTACT ── */}
      <section className="py-16 md:py-28 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">

            {/* Left — form */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#c8f135]" />
                <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">Send a Message</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0b1940] tracking-tight mb-10">Start the Conversation.</h2>

              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#c8f135]/10 border border-[#c8f135]/30 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-[#c8f135] rounded-full flex items-center justify-center mx-auto mb-5">
                    <Send className="w-7 h-7 text-[#0b1940]" />
                  </div>
                  <h3 className="text-[#0b1940] font-black text-2xl mb-3">Message Sent!</h3>
                  <p className="text-gray-500 text-base leading-relaxed">Thank you for reaching out. We'll get back to you within one business day.</p>
                  <button onClick={() => { setSent(false); setForm({ name: "", email: "", company: "", subject: "", message: "" }); }}
                    className="mt-6 px-6 py-3 bg-[#0b1940] text-white font-bold text-sm rounded hover:bg-[#0d2050] transition-colors">
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {field("Your Name", "name", "text", "John Smith")}
                    {field("Email Address", "email", "email", "john@company.com")}
                  </div>
                  {field("Company (Optional)", "company", "text", "Your Company Ltd")}
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-[#0b1940]/40 mb-2">Service Needed</label>
                    <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full bg-[#f7f8fa] border border-gray-200 rounded-lg px-4 py-3 text-[#0b1940] text-sm outline-none focus:border-[#c8f135] transition-colors">
                      <option value="">Select a service...</option>
                      <option>Software Development</option>
                      <option>Mobile App Development</option>
                      <option>Web Design & Development</option>
                      <option>UI/UX Design</option>
                      <option>Graphic Design</option>
                      <option>Marketing Services</option>
                      <option>Photography</option>
                      <option>Video Production</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-[#0b1940]/40 mb-2">Your Message</label>
                    <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="w-full bg-[#f7f8fa] border border-gray-200 rounded-lg px-4 py-3 text-[#0b1940] text-sm placeholder-gray-300 outline-none focus:border-[#c8f135] transition-colors resize-none" />
                  </div>
                  <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 py-4 bg-[#c8f135] text-[#0b1940] font-black text-sm rounded hover:bg-[#d5f84a] transition-colors">
                    Send Message <ArrowUpRight className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Right — info */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#c8f135]" />
                <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">Contact Details</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0b1940] tracking-tight mb-10">Find Us Here.</h2>

              <div className="flex flex-col gap-4 mb-12">
                {info.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4 p-5 bg-[#f7f8fa] rounded-xl border border-gray-100">
                    <div className="w-11 h-11 rounded-xl bg-[#c8f135]/12 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#c8f135]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-widest uppercase text-[#0b1940]/40 mb-1">{label}</div>
                      <div className="text-[#0b1940] font-semibold text-sm">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 h-52 bg-[#f7f8fa] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-[#c8f135] mx-auto mb-2" />
                  <div className="text-[#0b1940] font-bold text-sm">179, Nagolla Rd, Matale</div>
                  <div className="text-gray-400 text-xs mt-1">Sri Lanka</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STUDIO CONTACTS ── */}
      <section className="py-24 px-6 lg:px-16 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-[#c8f135]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">Studio Contacts</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0b1940] tracking-tight">Reach the Right Studio.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studios.map((studio, i) => (
              <motion.div key={studio.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                <div className="h-1 w-12 rounded mb-6" style={{ background: studio.accent }} />
                <h3 className="text-[#0b1940] font-black text-xl mb-1">{studio.name}</h3>
                <div className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: studio.accent }}>{studio.tagline}</div>
                <div className="flex flex-col gap-3">
                  <a href={`mailto:${studio.email}`} className="flex items-center gap-3 text-gray-500 hover:text-[#0b1940] transition-colors group">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:bg-gray-50 transition-colors" style={{ background: `${studio.accent}15` }}>
                      <Mail className="w-4 h-4" style={{ color: studio.accent }} />
                    </div>
                    <span className="text-sm">{studio.email}</span>
                  </a>
                  <a href={`tel:${studio.phone}`} className="flex items-center gap-3 text-gray-500 hover:text-[#0b1940] transition-colors group">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:bg-gray-50 transition-colors" style={{ background: `${studio.accent}15` }}>
                      <Phone className="w-4 h-4" style={{ color: studio.accent }} />
                    </div>
                    <span className="text-sm">{studio.phoneDisplay}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-28 px-6 lg:px-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#c8f135]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">Common Questions</span>
              <span className="w-8 h-[2px] bg-[#c8f135]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0b1940] tracking-tight">Frequently Asked Questions.</h2>
            <p className="text-gray-400 text-base mt-3">Can't find your answer? <a href="#contact-form" className="text-[#c8f135] font-bold hover:underline">Send us a message.</a></p>
          </motion.div>
          <FaqList />
        </div>
      </section>

      <Footer />
    </div>
  );
}
