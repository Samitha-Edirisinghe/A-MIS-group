import _imgs from "@/imageRegistry";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ArrowRight, Heart, Zap, Globe, Award, MapPin, Clock, Briefcase, X, Upload, CheckCircle } from "lucide-react";
import { PageNav } from "../components/PageNav";
import { Footer } from "../components/Footer";
import { useState, useRef } from "react";

function ApplyModal({ job, onClose }: { job: typeof openings[0]; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", cover: "" });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const accent = studioColors[job.studio] ?? "#c8f135";

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        {/* Top accent bar */}
        <div className="h-1 w-full rounded-t-2xl" style={{ background: accent }} />

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="text-[10px] font-black tracking-[0.28em] uppercase mb-1" style={{ color: accent }}>
                Application
              </div>
              <h2 className="text-xl font-black text-[#0b1940] leading-tight">{job.title}</h2>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: `${accent}18`, color: accent }}>{job.studio}</span>
                <span className="text-xs text-gray-400">{job.type} · {job.location}</span>
              </div>
            </div>
            <button onClick={onClose} className="shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200 active:bg-gray-200 transition-colors ml-4">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Job description */}
          {(job as any).description && (
            <div className="mb-6 pb-6 border-b border-gray-100">
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{(job as any).description}</p>

              <div className="flex flex-col gap-5">
                <div>
                  <h4 className="text-[11px] font-black tracking-[0.2em] uppercase text-[#0b1940] mb-2.5">Responsibilities</h4>
                  <ul className="flex flex-col gap-1.5">
                    {(job as any).responsibilities?.map((r: string) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[11px] font-black tracking-[0.2em] uppercase text-[#0b1940] mb-2.5">Requirements</h4>
                  <ul className="flex flex-col gap-1.5">
                    {(job as any).requirements?.map((r: string) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {(job as any).niceToHave?.length > 0 && (
                  <div>
                    <h4 className="text-[11px] font-black tracking-[0.2em] uppercase text-[#0b1940] mb-2.5">Nice to Have</h4>
                    <ul className="flex flex-col gap-1.5">
                      {(job as any).niceToHave.map((r: string) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-gray-500">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 opacity-50" style={{ background: accent }} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          <h3 className="text-sm font-black text-[#0b1940] tracking-wide uppercase mb-4">Your Application</h3>

          {submitted ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: `${accent}18` }}>
                <CheckCircle className="w-8 h-8" style={{ color: accent }} />
              </div>
              <h3 className="text-[#0b1940] font-black text-lg">Application Sent!</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Thanks for applying for <strong className="text-[#0b1940]">{job.title}</strong>. We'll review your application and be in touch within 3–5 business days.
              </p>
              <button onClick={onClose} className="mt-2 px-6 py-2.5 font-black text-sm rounded-lg text-[#0b1940] transition-all" style={{ background: accent }}>
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-[#0b1940] mb-1.5 tracking-wide">Full Name <span className="text-red-400">*</span></label>
                <input required value={form.name} onChange={set("name")} placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0b1940] placeholder:text-gray-300 focus:outline-none focus:border-[#c8f135] focus:ring-2 focus:ring-[#c8f135]/20 transition-all" />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-[#0b1940] mb-1.5 tracking-wide">Email Address <span className="text-red-400">*</span></label>
                <input required type="email" value={form.email} onChange={set("email")} placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0b1940] placeholder:text-gray-300 focus:outline-none focus:border-[#c8f135] focus:ring-2 focus:ring-[#c8f135]/20 transition-all" />
              </div>

              {/* Contact Number */}
              <div>
                <label className="block text-xs font-bold text-[#0b1940] mb-1.5 tracking-wide">Contact Number <span className="text-red-400">*</span></label>
                <input required type="tel" value={form.phone} onChange={set("phone")} placeholder="+61 400 000 000"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0b1940] placeholder:text-gray-300 focus:outline-none focus:border-[#c8f135] focus:ring-2 focus:ring-[#c8f135]/20 transition-all" />
              </div>

              {/* CV Upload */}
              <div>
                <label className="block text-xs font-bold text-[#0b1940] mb-1.5 tracking-wide">CV / Resume <span className="text-red-400">*</span></label>
                <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" required className="hidden"
                  onChange={e => setCvFile(e.target.files?.[0] ?? null)} />
                <button type="button" onClick={() => fileRef.current?.click()}
                  className="w-full px-4 py-3 rounded-xl border-2 border-dashed border-gray-200 hover:border-[#c8f135] active:border-[#c8f135] transition-colors flex items-center justify-center gap-2 text-sm font-semibold text-gray-400 hover:text-[#0b1940] active:text-[#0b1940]">
                  <Upload className="w-4 h-4" />
                  {cvFile ? <span className="text-[#0b1940] truncate max-w-[240px]">{cvFile.name}</span> : "Upload PDF or Word document"}
                </button>
              </div>

              {/* Cover Letter */}
              <div>
                <label className="block text-xs font-bold text-[#0b1940] mb-1.5 tracking-wide">Cover Letter</label>
                <textarea value={form.cover} onChange={set("cover")} rows={4} placeholder="Tell us why you'd be a great fit..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0b1940] placeholder:text-gray-300 focus:outline-none focus:border-[#c8f135] focus:ring-2 focus:ring-[#c8f135]/20 transition-all resize-none" />
              </div>

              <button type="submit"
                className="w-full py-3.5 font-black text-sm rounded-xl text-[#0b1940] hover:brightness-110 active:scale-[0.98] transition-all mt-1"
                style={{ background: accent, boxShadow: `0 6px 20px ${accent}35` }}>
                Submit Application
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}

const benefits = [
  { icon: Heart,   title: "People First",       desc: "We invest in our people. Competitive pay, flexible hours, and a culture that puts wellbeing front and centre." },
  { icon: Zap,     title: "Fast Learning",       desc: "Work on real projects from day one. No busywork — just meaningful challenges that grow your career." },
  { icon: Globe,   title: "Diverse Clients",     desc: "Our work spans industries and geographies. Every project is a new world to learn from." },
  { icon: Award,   title: "Excellence Culture",  desc: "We're proud of what we build. Our team cares deeply about quality and holds each other to a high standard." },
];

const openings = [
  {
    title: "Full Stack Developer Intern",
    studio: "Creotech",
    type: "Internship",
    location: "Remote / Sri Lanka",
    dept: "Software Engineering",
    description: "We're looking for a motivated Full Stack Developer Intern to join A'MIS Creotech and contribute to real client projects from day one. You'll work alongside senior developers building web applications, learning modern development practices, and gaining hands-on experience in a fast-paced creative tech environment.",
    responsibilities: [
      "Assist in developing and maintaining web applications using React and Node.js",
      "Write clean, maintainable code following team standards and best practices",
      "Collaborate with designers to translate UI/UX wireframes into functional features",
      "Participate in code reviews and contribute constructive feedback",
      "Debug and resolve issues across the full stack",
      "Contribute to internal tooling and client-facing projects",
    ],
    requirements: [
      "Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or related field",
      "Solid understanding of HTML, CSS, and JavaScript (ES6+)",
      "Familiarity with React.js or another modern frontend framework",
      "Basic knowledge of Node.js / Express or a backend language",
      "Understanding of RESTful APIs and how to consume them",
      "Familiarity with Git and version control workflows",
      "Strong problem-solving mindset and eagerness to learn",
      "Good communication skills — written and verbal",
    ],
    niceToHave: [
      "Experience with TypeScript",
      "Exposure to databases (MySQL, PostgreSQL, or MongoDB)",
      "Knowledge of Tailwind CSS or similar utility-first CSS frameworks",
      "Any personal or academic projects to showcase",
    ],
  },
  {
    title: "WordPress Developer Intern",
    studio: "Creotech",
    type: "Internship",
    location: "Remote / Sri Lanka",
    dept: "Web Development",
    description: "A'MIS Creotech is looking for an enthusiastic WordPress Developer Intern to help build and maintain client websites. You'll work on real projects — customising themes, developing plugins, and optimising performance — under the guidance of our senior development team.",
    responsibilities: [
      "Build and customise WordPress websites for clients across various industries",
      "Develop and modify themes using PHP, HTML, CSS, and JavaScript",
      "Create and maintain custom plugins to extend WordPress functionality",
      "Optimise websites for speed, SEO, and mobile responsiveness",
      "Manage content migrations and database updates",
      "Troubleshoot and resolve issues on live WordPress sites",
      "Collaborate with designers to implement pixel-perfect layouts",
    ],
    requirements: [
      "Currently pursuing or recently completed a degree in Computer Science, IT, or a related field",
      "Solid understanding of WordPress — themes, plugins, and the admin dashboard",
      "Proficiency in HTML, CSS, and basic JavaScript",
      "Familiarity with PHP and WordPress template hierarchy",
      "Experience with page builders such as Elementor or WPBakery",
      "Basic understanding of SEO best practices",
      "Familiarity with Git or version control",
      "Good attention to detail and willingness to learn",
    ],
    niceToHave: [
      "Experience with WooCommerce or e-commerce WordPress setups",
      "Knowledge of Advanced Custom Fields (ACF) or custom post types",
      "Familiarity with web hosting environments (cPanel, FTP, SSL)",
      "Any WordPress sites built or contributed to",
    ],
  },
];

const studioColors: Record<string, string> = { Creotech: "#c8f135", Captura: "#38bdf8", Cinemix: "#a78bfa" };

export function CareersPage() {
  const [applyJob, setApplyJob] = useState<typeof openings[0] | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <PageNav current="CAREERS" />

      {/* ── HERO ── */}
      <section className="relative bg-[#0b1940] overflow-hidden flex flex-col" style={{ minHeight: "100vh" }}>
        <div className="absolute top-0 left-0 right-0 h-[3px] z-30 bg-[#c8f135]" />

        <div className="absolute inset-0">
          <img src={_imgs["/assets/careers-1.jpg"]}
            alt="A'MIS Careers" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, #0b1940 0%, #0b1940 40%, rgba(11,25,64,0.70) 58%, rgba(11,25,64,0.2) 80%, rgba(11,25,64,0.05) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, #0b1940, transparent)" }} />
        </div>

        <div className="relative z-10 flex-1 flex items-center" style={{ paddingTop: 72 }}>
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-12 lg:py-16">
            <div className="max-w-xl lg:max-w-2xl">
              <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#c8f135]" />
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#c8f135]">Join Our Team</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.93] tracking-tighter mb-5">
                Work With<br />People Who<br /><span className="text-[#c8f135]">Care.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }}
                className="text-white/55 text-base leading-relaxed mb-8 max-w-md">
                We're always looking for talented, passionate people to join our studios. If you love your craft and want to do the best work of your career — we'd love to meet you.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.18 }} className="flex flex-wrap gap-3">
                <a href="#openings" className="inline-flex items-center gap-2 px-6 py-3 font-black text-sm rounded-lg bg-[#c8f135] text-[#0b1940] hover:brightness-110 transition-all"
                  style={{ boxShadow: "0 6px 20px #c8f13535" }}>
                  View Open Roles <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="#/about" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-bold text-sm rounded-lg hover:border-white/50 hover:bg-white/5 transition-all">
                  About Us <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

      </section>

      {/* ── WHY JOIN US ── */}
      <section className="py-16 md:py-28 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-[#c8f135]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">Why A'MIS Group</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0b1940] tracking-tight">Why Work With Us.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-6 md:p-8 border border-gray-100 rounded-2xl hover:border-[#c8f135]/40 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#c8f135]/10 flex items-center justify-center mb-5 group-hover:bg-[#c8f135] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#c8f135] group-hover:text-[#0b1940] transition-colors duration-300" />
                  </div>
                  <h3 className="text-[#0b1940] font-black text-lg mb-3">{b.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CULTURE STRIP ── */}
      <section className="grid grid-cols-1 sm:grid-cols-3 h-auto sm:h-72">
        {[
          _imgs["/assets/about-team.jpg"],
          _imgs["/assets/contact-hero.jpg"],
          _imgs["/assets/careers-2.jpg"],
        ].map((src, i) => (
          <div key={i} className="relative overflow-hidden h-48 sm:h-full">
            <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-[#0b1940]/20" />
          </div>
        ))}
      </section>

      {/* ── OPEN ROLES ── */}
      <section id="openings" className="py-16 md:py-28 px-6 lg:px-16 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-[#c8f135]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">Open Positions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0b1940] tracking-tight">Open Positions.</h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {openings.map((job, i) => (
              <motion.div key={job.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-[#c8f135]/40 hover:shadow-lg transition-all duration-300 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#c8f135]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Briefcase className="w-5 h-5 text-[#c8f135]" />
                  </div>
                  <div>
                    <h3 className="text-[#0b1940] font-black text-lg mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded" style={{ background: `${studioColors[job.studio]}18`, color: studioColors[job.studio] }}>{job.studio}</span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-50 px-2.5 py-1 rounded border border-gray-100">
                        <Clock className="w-3 h-3" /> {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-50 px-2.5 py-1 rounded border border-gray-100">
                        <MapPin className="w-3 h-3" /> {job.location}
                      </span>
                      <span className="text-xs font-semibold text-gray-400 px-2.5 py-1">{job.dept}</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setApplyJob(job)} className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#0b1940] text-white font-bold text-xs rounded hover:bg-[#0d2050] active:bg-[#0d2050] active:scale-95 transition-all duration-150">
                  Apply Now <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN APPLICATION ── */}
      <section className="py-24 px-6 lg:px-16 bg-[#0b1940]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#c8f135]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#c8f135]/60 uppercase">Open Application</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Don't see the right role?</h2>
            <p className="text-white/50 text-base leading-relaxed max-w-md">
              We're always interested in meeting talented people. Send us your portfolio and tell us what you're great at.
            </p>
          </div>
          <a href="mailto:careers@amisgroups.com" className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#c8f135] text-[#0b1940] font-black text-sm rounded hover:bg-[#d5f84a] transition-colors">
            Send Your Portfolio <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />

      <AnimatePresence>
        {applyJob && <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} />}
      </AnimatePresence>
    </div>
  );
}
