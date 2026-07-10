import { motion } from "motion/react";
import {
  Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram,
  ArrowRight, Send,
} from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";
import amisLogo from "@/imports/A_MIS_group_T.png";

const quickLinks = [
  { name: "About Us", href: "#/about" },
  { name: "Services", href: "#/services" },
  { name: "Portfolio", href: "#/portfolio" },
  { name: "Careers", href: "#/careers" },
  { name: "FAQ", href: "#/faq" },
  { name: "Contact Us", href: "#/contact" },
];

const services = [
  { name: "Software Development", href: "#/creotech" },
  { name: "Web Design & Dev", href: "#/creotech" },
  { name: "Mobile App Dev", href: "#/creotech" },
  { name: "UI/UX Design", href: "#/creotech" },
  { name: "Marketing", href: "#/creotech" },
  { name: "Photography", href: "#/captura" },
  { name: "Video Production", href: "#/cinemix" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#060e2a] text-white pt-24 pb-8 px-6 lg:px-8 relative overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200, 241, 53, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200, 241, 53, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8f135]/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">

          {/* Company info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <img
                  src={amisLogo}
                  alt="A'MIS GROUP"
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-white/55 mb-8 leading-relaxed text-sm">
                A'MIS Group is a creative tech company delivering innovative software, stunning visuals, cinematic videos, and engaging digital experiences.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Mail, label: "info@amisgroups.com", href: "mailto:info@amisgroups.com" },
                  { icon: Phone, label: "076 268 8365", href: "tel:0762688365" },
                  { icon: MapPin, label: "179, Nagolla Rd, Matale, Sri Lanka", href: "https://maps.app.goo.gl/FwbSxptVLeGwF9L77" },
                ].map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 text-white/60 hover:text-[#c8f135] active:text-[#c8f135] transition-colors group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#c8f135]/10 transition-colors shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-base font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white active:text-white transition-all duration-200 inline-flex items-center gap-2.5 group text-sm"
                  >
                    <span className="text-[#c8f135] text-base leading-none transition-transform duration-200 group-hover:translate-x-1">→</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-base font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-white/50 hover:text-white active:text-white transition-all duration-200 inline-flex items-center gap-2.5 group text-sm"
                  >
                    <span className="text-[#c8f135] text-base leading-none transition-transform duration-200 group-hover:translate-x-1">→</span>
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-base font-bold mb-6 text-white">Stay Updated</h4>
            <p className="text-white/55 mb-6 leading-relaxed text-sm">
              Subscribe to get the latest news, updates, and exclusive offers from A'MIS Group.
            </p>
            <div className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/15 text-white placeholder:text-white/35 focus:border-[#c8f135] pr-12 py-3 md:py-6 rounded-xl"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#c8f135] hover:bg-[#d5f84a] rounded-lg flex items-center justify-center text-[#0b1940] transition-all duration-200 shadow-lg shadow-[#c8f135]/20"
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 rounded-xl bg-white/5 ${social.color} flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-transparent group`}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-white/8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/35 text-sm">
              © 2026 A'MIS Group Pvt Ltd. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <a
                  key={item}
                  href={item === "Privacy Policy" ? "#/privacy" : item === "Terms of Service" ? "#/terms" : "#/cookies"}
                  className="text-white/35 hover:text-[#c8f135] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Back to top */}
        <motion.a
          href="#"
          className="absolute right-8 -top-6 w-14 h-14 bg-[#c8f135] hover:bg-[#d5f84a] rounded-full flex items-center justify-center shadow-2xl shadow-[#c8f135]/30 transition-all duration-300 group"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowRight className="w-6 h-6 text-[#0b1940] -rotate-90 group-hover:-translate-y-1 transition-transform" />
        </motion.a>
      </div>
    </footer>
  );
}