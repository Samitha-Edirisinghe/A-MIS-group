import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Menu, X, MapPin, Mail, Clock, Phone } from "lucide-react";
import amisLogo from "@/imports/A_MIS_group_T.png";
import { SearchOverlay } from "./SearchOverlay";

const navLinks = [
  { name: "HOME",        href: "#/" },
  { name: "ABOUT US",   href: "#/about" },
  { name: "SERVICE",    href: "#/services" },
  { name: "PORTFOLIO",  href: "#/portfolio" },
  { name: "CAREERS",    href: "#/careers" },
  { name: "CONTACT US", href: "#/contact" },
];

const contactInfo = [
  { icon: MapPin, text: "179, Nagolla Rd, Matale, Sri Lanka" },
  { icon: Mail,   text: "info@amisgroups.com" },
  { icon: Clock,  text: "Mon–Friday, 09am – 05pm" },
  { icon: Phone,  text: "076 268 8365" },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
  { label: "WhatsApp", href: "#", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.858L0 24l6.335-1.508A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.846 0-3.575-.484-5.072-1.332l-.363-.215-3.762.896.955-3.671-.236-.378A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg> },
  { label: "YouTube",  href: "#", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.96-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg> },
  { label: "LinkedIn", href: "#", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isDrawerOpen]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDrawerOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  const [currentHash, setCurrentHash] = useState(window.location.hash || "#/");
  useEffect(() => {
    const onHash = () => setCurrentHash(window.location.hash || "#/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const isActive = (href: string) => {
    if (href === "#/") return currentHash === "#/" || currentHash === "" || currentHash === "#";
    return currentHash === href;
  };

  const textColor = isScrolled ? "text-[#0b1940]" : "text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/95 backdrop-blur-2xl shadow-xl shadow-black/8" : "bg-[#0b1940]/80 backdrop-blur-xl"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px] gap-6">
            <a href="#/" className="flex items-center shrink-0 group">
              <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.2 }}>
                <img src={amisLogo} alt="A'MIS GROUP" className={`h-10 w-auto object-contain transition-all duration-300 ${isScrolled ? "" : "brightness-0 invert"}`} />
              </motion.div>
            </a>

            <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {navLinks.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.a key={link.name} href={link.href} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i, duration: 0.4 }}
                    className={`relative px-4 py-2 text-[12px] font-bold tracking-[0.08em] transition-colors duration-200 group ${
                      active ? "text-[#c8f135]" : `${textColor} hover:text-[#c8f135]`
                    }`}>
                    {link.name}
                    <span className={`absolute bottom-0 left-4 right-4 h-[2px] bg-[#c8f135] transition-transform duration-300 origin-left rounded-full ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`} />
                  </motion.a>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <motion.a href="#/contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center px-5 py-2.5 rounded-md font-black text-[11px] tracking-[0.12em] bg-[#c8f135] text-[#0b1940] hover:bg-[#d5f84a] transition-all duration-200 shadow-lg shadow-[#c8f135]/20">
                GET IN TOUCH
              </motion.a>

                <button onClick={() => setIsSearchOpen(true)}
                className={`p-2 rounded-full border transition-all duration-200 ${isScrolled ? "border-gray-200 text-[#0b1940] hover:border-[#c8f135] hover:text-[#c8f135]" : "border-white/20 text-white hover:border-[#c8f135] hover:text-[#c8f135]"}`}>
                <Search className="w-4 h-4" />
              </button>

              <button onClick={() => setIsDrawerOpen(true)}
                className={`p-2 rounded-full border transition-all duration-200 ${isScrolled ? "border-gray-200 text-[#0b1940] hover:border-[#c8f135] hover:text-[#c8f135]" : "border-white/20 text-white hover:border-[#c8f135] hover:text-[#c8f135]"}`}>
                <Menu className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <button onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 rounded-full border transition-all duration-200 ${isScrolled ? "border-gray-200 text-[#0b1940] hover:border-[#c8f135] hover:text-[#c8f135]" : "border-white/20 text-white hover:border-[#c8f135] hover:text-[#c8f135]"}`}>
                <Search className="w-4 h-4" />
              </button>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 ${textColor}`}>
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <SearchOverlay open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Right drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              onClick={() => setIsDrawerOpen(false)} className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm" />
            <motion.aside key="drawer" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[340px] max-w-[90vw] bg-[#0b1940] flex flex-col overflow-y-auto">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#c8f135]/5 blur-3xl pointer-events-none" />
              <div className="flex items-center justify-between px-8 pt-8 pb-6">
                <a href="#/" onClick={() => setIsDrawerOpen(false)}>
                  <img src={amisLogo} alt="A'MIS GROUP" className="h-9 w-auto object-contain brightness-0 invert" />
                </a>
                <motion.button onClick={() => setIsDrawerOpen(false)} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }}
                  className="w-10 h-10 rounded-full bg-[#c8f135] flex items-center justify-center text-[#0b1940] shadow-lg shadow-[#c8f135]/30">
                  <X className="w-4 h-4" strokeWidth={3} />
                </motion.button>
              </div>
              <div className="mx-8 h-px bg-white/8" />
              <p className="px-8 pt-7 pb-2 text-white/55 text-[13px] font-semibold tracking-wide leading-relaxed uppercase">
                A'MIS Group is a creative tech company delivering innovative software, stunning visuals, cinematic videos, and engaging digital experiences.
              </p>
              <div className="px-8 pt-7">
                <h3 className="text-white text-xl font-black mb-6">Contact Info</h3>
                <ul className="flex flex-col gap-5">
                  {contactInfo.map(({ icon: Icon, text }, i) => (
                    <motion.li key={text} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + i * 0.07 }} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-full border border-[#c8f135]/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-[#c8f135]" />
                      </div>
                      <span className="text-white/70 text-[14px] leading-snug pt-1">{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="px-8 pt-10 pb-10 mt-auto">
                <div className="flex items-center gap-3">
                  {socialLinks.map((s, i) => (
                    <motion.a key={s.label} href={s.href} aria-label={s.label} initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.55 + i * 0.06 }}
                      whileHover={{ scale: 1.12 }}
                      className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#c8f135] hover:text-[#0b1940] hover:border-[#c8f135] active:bg-[#c8f135] active:text-[#0b1940] transition-colors duration-200">
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-6 right-8 w-3 h-3 rounded-full bg-[#c8f135]" />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 lg:hidden bg-[#0b1940]/97 backdrop-blur-xl flex flex-col items-center justify-center gap-7">
            {navLinks.map((link, index) => (
              <motion.a key={link.name} href={link.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.07 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl font-bold tracking-widest transition-colors duration-150 ${isActive(link.href) ? "text-[#c8f135]" : "text-white hover:text-[#c8f135] active:text-[#c8f135]"}`}>
                {link.name}
              </motion.a>
            ))}
            <motion.a href="#/contact" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: navLinks.length * 0.07 }}
              onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-8 py-3 rounded-md bg-[#c8f135] text-[#0b1940] font-black text-sm tracking-widest">
              GET IN TOUCH
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
