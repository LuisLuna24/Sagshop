// src/components/Hero.jsx
import { useEffect, useRef } from "react";

function SagIconLarge() {
  return (
    <svg width="80" height="80" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="7" width="22" height="22" stroke="white" strokeWidth="1.8" fill="none" />
      <line x1="0" y1="18" x2="36" y2="18" stroke="white" strokeWidth="1.8" />
      <line x1="18" y1="0" x2="18" y2="36" stroke="white" strokeWidth="1.8" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">

      {/* Grid decorativo de fondo */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
      />

      {/* Linea horizontal central */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-white/5" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* Icono */}
        <div className="mb-10 opacity-90">
          <SagIconLarge />
        </div>

        {/* Titulo marquee */}
        <div className="overflow-hidden w-screen mb-2">
          <p className="whitespace-nowrap text-[clamp(56px,12vw,160px)] font-black uppercase tracking-[-0.02em] text-white leading-none animate-marquee"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            CATALOGO&nbsp;&nbsp;CATALOGO&nbsp;&nbsp;CATALOGO&nbsp;&nbsp;CATALOGO&nbsp;&nbsp;
          </p>
        </div>

        {/* Subtitulo */}
        <p className="text-[11px] tracking-[0.4em] uppercase text-white/40 mb-12 font-light">
          Temporada 2026 — 2027
        </p>

        {/* SAG STORE grande */}
        <h1 className="text-[clamp(40px,8vw,96px)] font-black uppercase tracking-[0.15em] text-white leading-none mb-6"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          SAG STORE
        </h1>

        <p className="text-[11px] tracking-[0.3em] uppercase text-white/50 mb-14 max-w-xs font-light leading-relaxed">
          Las mejores marcas de gorras y accesorios en un solo lugar
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a href="#catalogo"
            className="text-[10px] tracking-[0.3em] uppercase font-medium text-black bg-white px-8 py-3 hover:bg-white/80 transition-all duration-200">
            Ver Catalogo
          </a>
          <a href="#contacto"
            className="text-[10px] tracking-[0.3em] uppercase font-medium text-white border border-white/30 px-8 py-3 hover:border-white/70 transition-all duration-200">
            Contacto
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[9px] tracking-[0.3em] uppercase text-white/25">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/25 to-transparent" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
          display: inline-block;
        }
      `}</style>
    </section>
  );
}