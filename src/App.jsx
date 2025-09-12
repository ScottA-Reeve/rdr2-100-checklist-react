import React from "react";
import IntroSection from "./components/IntroSection";
import SectionPlaceholder from "./components/SectionPlaceholder";
import BackToTopButton from "./components/BackToTopButton";
import OverallStrategy from "./components/OverallStrategy";
import ChapterChecklist from "./components/ChapterChecklist"; // ✅ import
import chapter1Data from "./data/chapter1Data"; // ✅ import

function App() {
  return (
    <div className="min-h-screen bg-rdr2-bg bg-fixed bg-center bg-cover text-white font-serif overflow-y-auto scroll-smooth">
      {/* Overlay container */}
      <div className="min-h-screen bg-black/60 flex flex-col items-center px-6 py-12">
        <h1 className="text-5xl font-bold mb-12 text-center font-[Cinzel]">
          Red Dead Redemption 2 - 100% Checklist
        </h1>

        {/* ✅ Intro Section */}
        <IntroSection />

        {/* ✅ Overall Strategy Section */}
        <SectionPlaceholder id="overall-strategy" title="Overall Strategy">
          <OverallStrategy />
        </SectionPlaceholder>

        {/* ✅ Chapter 1 Checklist */}
        <SectionPlaceholder id="chapter-1" title="Chapter 1">
          <ChapterChecklist title="Chapter 1" activities={chapter1Data} />
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
