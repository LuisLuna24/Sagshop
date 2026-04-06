// src/components/Navbar.jsx
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Catalogo", href: "/catalogo" },
  { label: "Marcas", href: "/marcas" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

const linkClass = "relative block px-4 h-[64px] leading-[64px] text-[10px] tracking-[0.25em] uppercase font-medium text-white/60 hover:text-white transition-colors duration-200 after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300";

const mobileLinkClass = "block px-8 py-3 text-[10px] tracking-[0.25em] uppercase font-medium text-white/50 border-l-2 border-transparent hover:text-white hover:border-white hover:pl-10 transition-all duration-200";

const btnClass = "flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-medium text-black bg-white px-5 py-2 hover:bg-white/80 transition-all duration-200";

const btnMobileClass = "flex items-center justify-center gap-2 w-full text-[10px] tracking-[0.25em] uppercase font-medium text-black bg-white py-3 hover:bg-white/80 transition-all duration-200";

const CTA_LABEL = "Descargar Catalogo";

const DownloadIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6 1v7M3 5.5l3 3 3-3M1 10h10" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function SagIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="7" width="22" height="22" stroke="white" strokeWidth="2.2" fill="none" />
      <line x1="0" y1="18" x2="36" y2="18" stroke="white" strokeWidth="2.2" />
      <line x1="18" y1="0" x2="18" y2="36" stroke="white" strokeWidth="2.2" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/98 backdrop-blur-sm" : "bg-black"} border-b border-white/10`}>

      {/* Desktop */}
      <div className="max-w-7xl mx-auto px-8 h-[64px] flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <SagIcon />
          <span className="text-[13px] tracking-[0.35em] text-white font-medium uppercase">
            SAG STORE
          </span>
        </a>

        {/* Links desktop */}
        <ul className="hidden lg:flex items-center">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={linkClass}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Boton catalogo desktop */}
        <div className="hidden lg:flex items-center">
          <a href="/catalogo.pdf" download className={btnClass}>
            <DownloadIcon />
            {CTA_LABEL}
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${isOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${isOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Menu mobile */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-black border-t border-white/10 ${isOpen ? "max-h-[400px]" : "max-h-0"}`}>
        <ul className="py-4">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={mobileLinkClass} onClick={() => setIsOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-8 pb-6 pt-2 border-t border-white/10">
          <a href="/catalogo.pdf" download className={btnMobileClass}>
            <DownloadIcon />
            {CTA_LABEL}
          </a>
        </div>
      </div>

    </nav>
  );
}