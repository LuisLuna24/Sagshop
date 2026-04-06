// src/components/Nosotros.jsx

const STATS = [
  { valor: "6+", label: "Marcas exclusivas" },
  { valor: "2", label: "Temporadas activas" },
  { valor: "100%", label: "Calidad premium" },
  { valor: "1", label: "Solo lugar" },
];

function SagIconMed() {
  return (
    <svg width="48" height="48" viewBox="0 0 36 36" fill="none">
      <rect x="7" y="7" width="22" height="22" stroke="white" strokeWidth="1.8" fill="none" />
      <line x1="0" y1="18" x2="36" y2="18" stroke="white" strokeWidth="1.8" />
      <line x1="18" y1="0" x2="18" y2="36" stroke="white" strokeWidth="1.8" />
    </svg>
  );
}

export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-black border-t border-white/10 py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Layout asimetrico */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Columna izquierda */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-6">
              Quienes somos
            </p>
            <h2 className="text-[clamp(36px,5vw,72px)] font-black uppercase tracking-[-0.01em] text-white leading-none mb-10"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Inversion<br />Inteligente
            </h2>

            <div className="space-y-6 mb-14">
              <p className="text-[12px] tracking-[0.05em] text-white/50 leading-relaxed font-light">
                SAG Store nace con una vision clara: reunir las mejores marcas de gorras y accesorios en un solo espacio, ofreciendo calidad premium con acceso directo al catalogo de cada temporada.
              </p>
              <p className="text-[12px] tracking-[0.05em] text-white/50 leading-relaxed font-light">
                Trabajamos directamente con las marcas para garantizar autenticidad, variedad y los mejores precios del mercado. Cada pieza en nuestro catalogo pasa por una cuidadosa seleccion.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-px bg-white/10">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-black p-6">
                  <p className="text-[clamp(28px,4vw,48px)] font-black text-white leading-none mb-1"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {stat.valor}
                  </p>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-white/30 font-light">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — visual */}
          <div className="relative flex items-center justify-center">

            {/* Marco exterior */}
            <div className="relative w-full max-w-sm aspect-square border border-white/10 flex items-center justify-center">

              {/* Marco interior */}
              <div className="absolute inset-6 border border-white/5" />

              {/* Contenido central */}
              <div className="relative z-10 flex flex-col items-center text-center gap-6">
                <SagIconMed />
                <div>
                  <p className="text-[clamp(32px,5vw,56px)] font-black uppercase tracking-[0.2em] text-white leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    SAG<br />STORE
                  </p>
                  <p className="text-[9px] tracking-[0.35em] uppercase text-white/25 mt-3">
                    Est. 2026
                  </p>
                </div>
              </div>

              {/* Esquinas decorativas */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/40" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/40" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/40" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/40" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </section>
  );
}