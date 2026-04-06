// src/components/Footer.jsx

function SagIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
      <rect x="7" y="7" width="22" height="22" stroke="white" strokeWidth="2" fill="none" />
      <line x1="0" y1="18" x2="36" y2="18" stroke="white" strokeWidth="2" />
      <line x1="18" y1="0" x2="18" y2="36" stroke="white" strokeWidth="2" />
    </svg>
  );
}

const LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Catalogo", href: "#catalogo" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-14 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <SagIcon />
            <span className="text-[12px] tracking-[0.35em] text-white/60 uppercase font-medium">
              SAG STORE
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            {LINKS.map(({ label, href }) => (
              <a key={href} href={href}
                className="text-[10px] tracking-[0.25em] uppercase text-white/30 hover:text-white transition-colors duration-200">
                {label}
              </a>
            ))}
          </nav>

          {/* Copy */}
          <p className="text-[9px] tracking-[0.2em] uppercase text-white/20">
            2026 SAG Store
          </p>
        </div>
      </div>
    </footer>
  );
}