// src/components/CatalogoCard.jsx
import toast from 'react-hot-toast';

export default function CatalogoCard({ title, description, price = null, imageUrl, pdfUrl }) {

    const handleDownloadRequest = () => {
        toast((t) => (
            <div className="flex flex-col gap-3 p-1">
                <div className="flex items-center gap-2">
                    <span className="text-xl">📄</span>
                    <p className="text-sm font-semibold text-gray-800">
                        ¿Descargar catálogo de {title}?
                    </p>
                </div>
                <div className="flex gap-2 justify-end">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="px-3 py-1.5 text-xs font-bold text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        CANCELAR
                    </button>
                    <a
                        href={pdfUrl}
                        download
                        onClick={() => toast.dismiss(t.id)}
                        className="px-4 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all active:scale-95"
                    >
                        DESCARGAR
                    </a>
                </div>
            </div>
        ), {
            duration: 5000,
            position: 'bottom-center',
            style: {
                borderRadius: '1.25rem',
                border: '1px solid #f3f4f6',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            },
        });
    };

    return (
        <div className="group relative w-full max-w-[280px] bg-white border border-gray-100 rounded-[2.5rem] p-3 shadow-sm hover:shadow-xl transition-all duration-300">
            {/* Contenedor de Imagen / Preview */}
            <div className="relative aspect-square w-full mb-4 overflow-hidden rounded-[2rem] bg-gray-50">
                <img 
                    src={imageUrl || "/placeholder-product.png"} 
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge de Precio */}
                {price && (
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                        <span className="text-sm font-bold text-blue-600">{price}</span>
                    </div>
                )}
            </div>

            {/* Información del Producto */}
            <div className="px-2 pb-2">
                <h3 className="text-lg font-bold text-gray-800 truncate leading-tight">
                    {title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2 h-8">
                    {description}
                </p>

                {/* Botón de Acción Principal */}
                <button
                    onClick={handleDownloadRequest}
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-gray-200 active:scale-95"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Descargar Catálogo
                </button>
            </div>
        </div>
    );
}