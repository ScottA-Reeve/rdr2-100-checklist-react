export default function App() {
  return (
    <div className="min-h-screen bg-rdr2-bg text-rdr2-text font-spectral">
      {/* Header */}
      <header className="bg-black border-b-4 border-red-900 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-cinzel text-center py-6 tracking-wide">
          Red Dead Redemption 2 — 100% Completion Guide
        </h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-10 space-y-10">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-cinzel mb-4">Introduction</h2>
          <p className="leading-relaxed mb-4">
            This guide is designed to help you achieve <strong>100% completion</strong> in 
            <em> Red Dead Redemption 2</em> as efficiently as possible. Unlike many other guides, 
            this walkthrough focuses on the <span className="italic">optimal order</span> for completing 
            each requirement, saving you significant time and frustration.
          </p>
          <p className="leading-relaxed mb-4">
            By combining collectibles, challenges, and side activities while you’re already in the 
            right area, you’ll minimize backtracking and repetitive grinding. Additionally, this guide 
            highlights missions where certain challenges can be completed far more easily than in free roam.
          </p>
          <p className="leading-relaxed">
            Having achieved 100% completion multiple times, I estimate that following this strategy will 
            save you at least <strong>10 hours</strong> of playtime — possibly more — while letting you 
            enjoy the story and world more thoroughly.
          </p>
        </section>

        {/* Table of Contents */}
        <section>
          <h2 className="text-3xl font-cinzel mb-4">Table of Contents</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>A) Overall Strategy</li>
            <li>B) Chapter 1</li>
            <li>C) Chapter 2</li>
            <li>D) Chapter 3</li>
            <li>E) Chapter 4</li>
            <li>F) Chapter 5</li>
            <li>G) Chapter 6</li>
            <li>H) Epilogues Part 1 &amp; 2</li>
            <li>I) Summary and Acknowledgements</li>
          </ul>
        </section>

        {/* Overall Strategy */}
        <section>
          <h2 className="text-3xl font-cinzel mb-4">Overall Strategy</h2>
          <p className="leading-relaxed mb-4">
            Red Dead Redemption 2 has a huge list of activities for 100% completion — missions, 
            collectibles, challenges, compendium entries, and more. But there’s significant overlap 
            between these requirements, meaning you can be smart about when and how you complete them.
          </p>
          <p className="leading-relaxed mb-4">
            For example, Gambler challenges overlap with required table games, and Survivalist challenge 
            10 automatically covers the “catch 10 fish” requirement. This guide helps you plan which tasks 
            can be safely ignored, which will happen naturally, and which require careful timing.
          </p>
          <p className="leading-relaxed">
            Some activities are <strong>much easier before Chapter 6 ends</strong>, while others can only 
            be finished in the Epilogue. By planning accordingly, you’ll avoid unnecessary grind and make 
            your path to 100% as smooth as possible.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-center py-4 border-t-4 border-red-900">
        <p className="text-sm font-spectral">
          © 2025 RDR2 100% Checklist Guide — Created by Scott
        </p>
      </footer>
    </div>
  )
}
