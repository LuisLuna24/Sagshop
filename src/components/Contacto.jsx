// src/components/Contacto.jsx
import { useState } from "react";

const WHATSAPP = "521XXXXXXXXXX"; // reemplaza con tu numero
const EMAIL = "contacto@sagstore.com";
const INSTAGRAM = "@sagstore";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const texto = `Hola SAG Store!%0ANombre: ${form.nombre}%0AEmail: ${form.email}%0AMensaje: ${form.mensaje}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${texto}`, "_blank");
    setEnviado(true);
  };

  return (
    <section id="contacto" className="bg-black border-t border-white/10 py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Info */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-6">
              Escribenos
            </p>
            <h2 className="text-[clamp(36px,5vw,72px)] font-black uppercase tracking-[-0.01em] text-white leading-none mb-10"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Contacto
            </h2>

            <p className="text-[12px] tracking-[0.05em] text-white/40 leading-relaxed font-light mb-14 max-w-xs">
              Para pedidos, informacion sobre disponibilidad o cualquier consulta, estamos disponibles por WhatsApp, email o redes sociales.
            </p>

            {/* Datos de contacto */}
            <div className="space-y-0 border border-white/10">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer"
                className="flex items-center justify-between px-6 py-5 border-b border-white/10 hover:bg-white/[0.03] transition-colors duration-200 group">
                <div>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-white/25 mb-1">WhatsApp</p>
                  <p className="text-[12px] tracking-[0.1em] text-white/70 group-hover:text-white transition-colors">
                    +52 1 XX XXXX XXXX
                  </p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white/20 group-hover:text-white/60 transition-colors">
                  <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a href={`mailto:${EMAIL}`}
                className="flex items-center justify-between px-6 py-5 border-b border-white/10 hover:bg-white/[0.03] transition-colors duration-200 group">
                <div>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-white/25 mb-1">Email</p>
                  <p className="text-[12px] tracking-[0.1em] text-white/70 group-hover:text-white transition-colors">
                    {EMAIL}
                  </p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white/20 group-hover:text-white/60 transition-colors">
                  <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <div className="flex items-center justify-between px-6 py-5">
                <div>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-white/25 mb-1">Instagram</p>
                  <p className="text-[12px] tracking-[0.1em] text-white/70">{INSTAGRAM}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div>
            {enviado ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-20">
                <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
                  <rect x="7" y="7" width="22" height="22" stroke="white" strokeWidth="1.8" fill="none" />
                  <line x1="0" y1="18" x2="36" y2="18" stroke="white" strokeWidth="1.8" />
                  <line x1="18" y1="0" x2="18" y2="36" stroke="white" strokeWidth="1.8" />
                </svg>
                <p className="text-[11px] tracking-[0.3em] uppercase text-white/50">Mensaje enviado</p>
                <button onClick={() => setEnviado(false)}
                  className="text-[10px] tracking-[0.25em] uppercase text-white border border-white/20 px-6 py-2 hover:border-white/60 transition-all mt-4">
                  Nuevo mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-0 border border-white/10">

                <div className="border-b border-white/10">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="NOMBRE"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent px-6 py-5 text-[11px] tracking-[0.25em] uppercase text-white placeholder-white/20 outline-none focus:bg-white/[0.02] transition-colors"
                  />
                </div>

                <div className="border-b border-white/10">
                  <input
                    type="email"
                    name="email"
                    placeholder="EMAIL"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent px-6 py-5 text-[11px] tracking-[0.25em] uppercase text-white placeholder-white/20 outline-none focus:bg-white/[0.02] transition-colors"
                  />
                </div>

                <div className="border-b border-white/10">
                  <textarea
                    name="mensaje"
                    placeholder="MENSAJE"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-transparent px-6 py-5 text-[11px] tracking-[0.05em] text-white placeholder-white/20 outline-none resize-none focus:bg-white/[0.02] transition-colors"
                  />
                </div>

                <button type="submit"
                  className="w-full text-[10px] tracking-[0.3em] uppercase font-medium text-black bg-white px-6 py-5 hover:bg-white/80 transition-all duration-200">
                  Enviar por WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </section>
  );
}