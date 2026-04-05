export default function Saludador({ nombre }) {
  return (
    <div className="p-4 bg-blue-100 rounded-lg">
      <h1 className="text-xl">¡Hola, {nombre}!</h1>
      <button 
        onClick={() => alert('¡Click desde React!')}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Presióname
      </button>
    </div>
  );
}