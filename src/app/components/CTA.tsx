import { motion } from "motion/react";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function CTA() {
  return (
    <section className="py-28 px-6 lg:px-16 bg-[#0b1940]" id="contact">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#c8f135]" />
              <span className="text-xs font-bold tracking-[0.25em] text-white/40 uppercase">Get In Touch</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
              Ready to Build<br />
              <span className="text-[#c8f135]">Something Great?</span>
            </h2>

            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-md">
              Tell us about your project. We'll get back to you within one business day with a clear path forward.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: "info@amisgroups.com" },
                { icon: Phone, label: "077 003 1808" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-white/60">
                  <div className="w-9 h-9 rounded border border-white/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#c8f135]" />
                  </div>
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — simple form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-[#c8f135]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-[#c8f135]/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="What's your project about?"
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-[#c8f135]/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us more..."
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-[#c8f135]/50 transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#c8f135] text-[#0b1940] font-black text-sm tracking-wide rounded hover:bg-[#d5f84a] transition-colors"
              >
                Send Message <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
