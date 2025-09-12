export default function App() {
  return (
    <div className="min-h-screen bg-rdr2-bg bg-cover bg-center text-white flex flex-col items-center justify-center">
      {/* Dark overlay for readability */}
      <div className="bg-black/60 p-8 rounded-2xl shadow-2xl text-center max-w-2xl">
        <h1 className="text-5xl font-cinzel text-rdr2-red drop-shadow-lg mb-4">
          RDR2 100% Checklist
        </h1>
        <p className="text-lg font-spectral text-rdr2-gold mb-6">
          Track your journey through the wild west and achieve true 100% completion.
        </p>

        <button className="px-6 py-3 bg-rdr2-red text-white font-cinzel text-lg rounded-xl shadow-lg hover:bg-red-800 transition">
          Start Tracking
        </button>
      </div>
    </div>
  );
}
