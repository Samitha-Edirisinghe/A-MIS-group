import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";
import { useState } from "react";
import amisLogo from "@/imports/A_MIS_group_T.png";

const quickLinks = [
  { name: "About Us", href: "#/about" },
  { name: "Services", href: "#/services" },
  { name: "Portfolio", href: "#/portfolio" },
  { name: "Careers", href: "#/careers" },
  { name: "FAQ", href: "#/faq" },
  { name: "Contact Us", href: "#contact" },
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

const WhatsAppIcon = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.858L0 24l6.335-1.508A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.846 0-3.575-.484-5.072-1.332l-.363-.215-3.762.896.955-3.671-.236-.378A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/1EMAeHbzJJ/?mibextid=wwXIfr",
    label: "Facebook",
    color: "hover:bg-blue-600",
  },
  {
    icon: WhatsAppIcon,
    href: "https://wa.me/0762688365",
    label: "WhatsApp",
    color: "hover:bg-green-500",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/amisgroup/",
    label: "LinkedIn",
    color: "hover:bg-blue-700",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/a_mis_group",
    label: "Instagram",
    color: "hover:bg-pink-600",
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubscribe = () => {
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 2000);
    }
  };

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
                A'MIS Group is a creative tech company
                delivering innovative software, stunning
                visuals, cinematic videos, and engaging digital
                experiences.
              </p>
              <div className="space-y-3">
                {[
                  {
                    icon: Mail,
                    label: "info@amisgroups.com",
                    href: "mailto:info@amisgroups.com",
                  },
                  {
                    icon: Phone,
                    label: "076 268 8365",
                    href: "tel:0762688365",
                  },
                  {
                    icon: MapPin,
                    label: "179, Nagolla Rd, Matale, Sri Lanka",
                    href: "https://maps.app.goo.gl/FwbSxptVLeGwF9L77",
                  },
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
            <h4 className="text-base font-bold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white active:text-white transition-all duration-200 inline-flex items-center gap-2.5 group text-sm"
                  >
                    <span className="text-[#c8f135] text-base leading-none transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
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
            <h4 className="text-base font-bold mb-6 text-white">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-white/50 hover:text-white active:text-white transition-all duration-200 inline-flex items-center gap-2.5 group text-sm"
                  >
                    <span className="text-[#c8f135] text-base leading-none transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
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
            <h4 className="text-base font-bold mb-6 text-white">
              Stay Updated
            </h4>
            <p className="text-white/55 mb-6 leading-relaxed text-sm">
              Subscribe to get the latest news, updates, and
              exclusive offers from A'MIS Group.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/15 text-white placeholder:text-white/35 focus:border-[#c8f135] focus:outline-none pr-14 pl-4 py-3 rounded-xl text-sm transition-colors duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSubscribe}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#c8f135] hover:bg-[#d5f84a] rounded-lg flex items-center justify-center text-[#0b1940] transition-all duration-200 shadow-lg shadow-[#c8f135]/20"
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </div>
            <div className="h-6 mt-2">
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-[#c8f135] text-sm font-bold"
                >
                  Thank You! Form submitted successfully.
                </motion.p>
              )}
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
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
              ].map((item) => (
                <a
                  key={item}
                  href={
                    item === "Privacy Policy"
                      ? "#/privacy"
                      : item === "Terms of Service"
                        ? "#/terms"
                        : "#/cookies"
                  }
                  className="text-white/35 hover:text-[#c8f135] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}