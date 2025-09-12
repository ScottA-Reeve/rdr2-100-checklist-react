import React from "react";
import IntroSection from "./components/IntroSection";
import SectionPlaceholder from "./components/SectionPlaceholder";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <div className="min-h-screen bg-rdr2-bg bg-cover bg-center text-white font-serif overflow-y-auto scroll-smooth">
      {/* Overlay container */}
      <div className="min-h-screen bg-black/60 flex flex-col items-center px-6 py-12">
        <h1 className="text-5xl font-bold mb-12 text-center font-[Cinzel]">
          Red Dead Redemption 2 - 100% Checklist
        </h1>

        {/* ✅ Intro Section */}
        <IntroSection />

        {/* ✅ Placeholders for navigation targets */}
        <SectionPlaceholder id="overall-strategy" title="Overall Strategy">
          <p>
            This section will explain the rationale for task ordering and why it
            makes the quest much easier. It will also highlight tasks worth
            keeping in mind from the very beginning of your playthrough.
          </p>
        </SectionPlaceholder>

        <SectionPlaceholder id="chapter-1" title="Chapter 1">
          <p>Placeholder for Chapter 1 guide content.</p>
        </SectionPlaceholder>

        <SectionPlaceholder id="chapter-2" title="Chapter 2">
          <p>Placeholder for Chapter 2 guide content.</p>
        </SectionPlaceholder>

        <SectionPlaceholder id="chapter-3" title="Chapter 3">
          <p>Placeholder for Chapter 3 guide content.</p>
        </SectionPlaceholder>

        <SectionPlaceholder id="chapter-4" title="Chapter 4">
          <p>Placeholder for Chapter 4 guide content.</p>
        </SectionPlaceholder>

        <SectionPlaceholder id="chapter-5" title="Chapter 5">
          <p>Placeholder for Chapter 5 guide content.</p>
        </SectionPlaceholder>

        <SectionPlaceholder id="chapter-6" title="Chapter 6">
          <p>Placeholder for Chapter 6 guide content.</p>
        </SectionPlaceholder>

        <SectionPlaceholder id="epilogues" title="Epilogues Part 1 & 2">
          <p>Placeholder for Epilogues guide content.</p>
        </SectionPlaceholder>

        <SectionPlaceholder id="summary" title="Summary & Acknowledgements">
          <p>Placeholder for summary and acknowledgements.</p>
        </SectionPlaceholder>
      </div>

      {/* ✅ Floating Back to Top Button */}
      <BackToTopButton />
    </div>
  );
}

export default App;
