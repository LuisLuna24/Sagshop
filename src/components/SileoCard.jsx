// src/components/SileoCard.jsx
import { sileo } from "sileo";
// 1. ESTA ES LA LÍNEA QUE FALTA:
import toast from 'react-hot-toast'; 

export default function SileoCard({ title, icon, description }) {

    const handleObtenerClick = () => {
        // Ahora la función 'toast' ya existe en este archivo
        toast.success(`¡${title} obtenido con éxito!`, {
            style: {
                borderRadius: '1rem',
                background: '#333',
                color: '#fff',
            },
        });
    };

    return (
        <div className="bg-white/70 backdrop-blur-md border border-white/20 rounded-3xl p-4 shadow-xl flex items-center gap-4 transition-transform active:scale-95">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white shadow-lg">
                {icon}
            </div>
            <div className="flex-1">
                <h3 className="font-bold text-gray-800">{title}</h3>
                <p className="text-xs text-gray-500">{description}</p>
            </div>
            <button
                onClick={handleObtenerClick}
                className="bg-gray-200/50 px-4 py-1 rounded-full text-blue-600 font-bold text-sm hover:bg-gray-200 transition-colors"
            >
                OBTENER
            </button>
        </div>
    );
}