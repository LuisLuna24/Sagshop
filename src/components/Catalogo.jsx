// src/components/Catalogo.jsx

const MARCAS = [
  {
    id: 1,
    nombre: "THIRTY ONE",
    temporada: "2026 — 2027",
    descripcion: "Gorras premium con estilo urbano",
    pdf: "/catalogos/thirty-one.pdf",
  },
  {
    id: 2,
    nombre: "BAEZ",
    temporada: "2026 — 2027",
    descripcion: "Diseño editorial con identidad propia",
    pdf: "/catalogos/baez.pdf",
  },
  {
    id: 3,
    nombre: "INNEDIT",
    temporada: "2026 — 2027",
    descripcion: "Moda contemporanea y atrevida",
    pdf: "/catalogos/innedit.pdf",
  },
  {
    id: 4,
    nombre: "BARBAS HATS",
    temporada: "2026 — 2027",
    descripcion: "Estilo clasico con acabados modernos",
    pdf: "/catalogos/barbas-hats.pdf",
  },
  {
    id: 5,
    nombre: "DANDY HATS",
    temporada: "2026 — 2027",
    descripcion: "El refinamiento hecho accesorio",
    pdf: "/catalogos/dandy-hats.pdf",
  },
  {
    id: 6,
    nombre: "RUDE AWAKENINGS",
    temporada: "2026 — 2027",
    descripcion: "Streetwear con actitud sin filtros",
    pdf: "/catalogos/rude-awakenings.pdf",
  },
];

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
      <path d="M6 1v7M3 5.5l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SagMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 36 36" fill="none">
      <rect x="7" y="7" width="22" height="22" stroke="white" strokeWidth="2" fill="none" />
      <line x1="0" y1="18" x2="36" y2="18" stroke="white" strokeWidth="2" />
      <line x1="18" y1="0" x2="18" y2="36" stroke="white" strokeWidth="2" />
    </svg>
  );
}

export default function Catalogo() {
  return (
    <section id="catalogo" className="bg-black py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-4">
              Temporada 2026 / 2027
            </p>
            <h2 className="text-[clamp(36px,6vw,80px)] font-black uppercase tracking-[-0.01em] text-white leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Catalogos
            </h2>
          </div>
          <p className="text-[11px] tracking-[0.15em] uppercase text-white/35 max-w-xs leading-relaxed">
            Descarga el catalogo de cada marca disponible en SAG Store
          </p>
        </div>

        {/* Grid de marcas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {MARCAS.map((marca, i) => (
            <div key={marca.id}
              className="group relative bg-black p-10 flex flex-col justify-between min-h-[280px] hover:bg-white/[0.03] transition-colors duration-300 cursor-pointer">

              {/* Numero */}
              <div className="flex items-start justify-between mb-8">
                <span className="text-[10px] tracking-[0.3em] text-white/20 font-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase text-white/20">
                  {marca.temporada}
                </span>
              </div>

              {/* Logo placeholder + nombre */}
              <div className="flex-1 flex flex-col justify-center mb-8">
                <div className="mb-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <SagMark />
                </div>
                <h3 className="text-[clamp(20px,3vw,28px)] font-black uppercase tracking-[0.08em] text-white leading-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {marca.nombre}
                </h3>
                <p className="text-[10px] tracking-[0.15em] uppercase text-white/35 mt-2 font-light">
                  {marca.descripcion}
                </p>
              </div>

              {/* Boton descarga */}
              <a href={marca.pdf} download
                className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-medium text-white border border-white/20 px-4 py-2 w-fit group-hover:border-white/60 group-hover:bg-white group-hover:text-black transition-all duration-300">
                <DownloadIcon />
                Descargar
              </a>

              {/* Linea decorativa hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </section>
  );
}