import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, Heart, Zap, Globe, Award, MapPin, Clock, Briefcase } from "lucide-react";
import { PageNav } from "../components/PageNav";
import { Footer } from "../components/Footer";

const benefits = [
  { icon: Heart,   title: "People First",       desc: "We invest in our people. Competitive pay, flexible hours, and a culture that puts wellbeing front and centre." },
  { icon: Zap,     title: "Fast Learning",       desc: "Work on real projects from day one. No busywork — just meaningful challenges that grow your career." },
  { icon: Globe,   title: "Diverse Clients",     desc: "Our work spans industries and geographies. Every project is a new world to learn from." },
  { icon: Award,   title: "Excellence Culture",  desc: "We're proud of what we build. Our team cares deeply about quality and holds each other to a high standard." },
];

const openings = [
  { title: "Senior Full-Stack Developer", studio: "Creotech", type: "Full-time", location: "Melbourne / Remote", dept: "Engineering" },
  { title: "UI/UX Designer",             studio: "Creotech", type: "Full-time", location: "Melbourne",          dept: "Design" },
  { title: "Digital Marketing Specialist",studio: "Creotech", type: "Full-time", location: "Melbourne / Remote", dept: "Marketing" },
  { title: "Commercial Photographer",    studio: "Captura",  type: "Full-time", location: "Melbourne",          dept: "Photography" },
  { title: "Video Editor",               studio: "Cinemix",  type: "Full-time", location: "Melbourne",          dept: "Post-Production" },
  { title: "Motion Graphics Designer",   studio: "Cinemix",  type: "Contract",  location: "Remote",             dept: "Motion" },
];

const studioColors: Record<string, string> = { Creotech: "#c8f135", Captura: "#38bdf8", Cinemix: "#a78bfa" };

export function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageNav current="CAREERS" />

      {/* ── HERO ── */}
      <section className="relative bg-[#0b1940] overflow-hidden flex flex-col" style={{ minHeight: "100vh" }}>
        <div className="absolute top-0 left-0 right-0 h-[3px] z-30 bg-[#c8f135]" />

        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1681949103006-70066fb25dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
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
          "https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
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
            <h2 className="text-4xl md:text-5xl font-black text-[#0b1940] tracking-tight">Current Openings.</h2>
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
                <a href="#/contact" className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#0b1940] text-white font-bold text-xs rounded hover:bg-[#0d2050] transition-colors">
                  Apply Now <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
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
    </div>
  );
}
