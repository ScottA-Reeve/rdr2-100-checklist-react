// src/App.jsx
import React from "react";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white font-serif"
      style={{ backgroundImage: "url('/western_background.jpg')" }}
    >
      {/* Overlay for better text readability */}
      <div className="min-h-screen bg-black/60 flex flex-col items-center justify-center px-6 py-12">
        
        <h1 className="text-5xl font-bold mb-6 text-center font-[Cinzel]">
          Red Dead Redemption 2 - 100% Checklist
        </h1>

        <div className="max-w-3xl bg-black/70 p-6 rounded-lg shadow-lg space-y-6">
          {/* Intro Section */}
          <section>
            <h2 className="text-3xl font-semibold mb-2 font-[Cinzel]">Intro</h2>
            <p className="text-lg leading-relaxed">
              Welcome to the <span className="font-bold">RDR2 100% Completion Checklist</span>.
              This guide is designed to help you track every task, challenge, and collectible
              you’ll need to achieve full completion in <em>Red Dead Redemption 2</em>. 
              Whether you’re a newcomer or returning for another run, this will keep you on track.
            </p>
          </section>

          {/* Overall Strategy Section */}
          <section>
            <h2 className="text-3xl font-semibold mb-2 font-[Cinzel]">
              Overall Strategy
            </h2>
            <p className="text-lg leading-relaxed">
              To complete the game efficiently, it’s best to tackle the main story while
              gradually working through side activities. Some challenges and collectibles
              become easier later in the game, so plan accordingly. Focus on story missions
              first, then branch into exploration and hunting once you’ve unlocked the full map.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
