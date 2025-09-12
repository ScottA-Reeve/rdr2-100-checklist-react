// src/App.jsx
import React, { useEffect, useState } from "react";
import IntroSection from "./components/IntroSection";
import BackToTopButton from "./components/BackToTopButton";
import OverallStrategy from "./components/OverallStrategy";
import ChapterChecklist from "./components/ChapterChecklist";
import ProgressOverview from "./components/ProgressOverview";
import CollapsibleSection from "./components/CollapsibleSection";
import chapter1Data from "./data/chapter1Data";

function App() {
  // ✅ Shared progress state
  const [progress, setProgress] = useState({});

  // Load saved progress
  useEffect(() => {
    const stored = {};
    const chapters = [
      { key: "chapter1", total: chapter1Data.activities.length },
    ];
    chapters.forEach(({ key, total }) => {
      const saved = JSON.parse(
        localStorage.getItem(`rdr2_check_${key}_checked`) || "[]"
      );
      stored[key] = saved.length ? saved : new Array(total).fill(false);
    });
    setProgress(stored);
  }, []);

  // Save progress when it changes
  useEffect(() => {
    Object.entries(progress).forEach(([key, checked]) => {
      localStorage.setItem(
        `rdr2_check_${key}_checked`,
        JSON.stringify(checked)
      );
    });
  }, [progress]);

  // Toggle handler
  const handleToggle = (chapterKey, index) => {
    setProgress((prev) => {
      const updated = [...(prev[chapterKey] || [])];
      updated[index] = !updated[index];
      return { ...prev, [chapterKey]: updated };
    });
  };

  // Check all handler
  const handleCheckAll = (chapterKey, total) => {
    setProgress((prev) => ({
      ...prev,
      [chapterKey]: new Array(total).fill(true),
    }));
  };

  // Uncheck all handler
  const handleUncheckAll = (chapterKey, total) => {
    setProgress((prev) => ({
      ...prev,
      [chapterKey]: new Array(total).fill(false),
    }));
  };

  return (
    <div className="min-h-screen bg-rdr2-bg bg-fixed bg-center bg-cover text-white font-serif scroll-smooth">
      <div className="min-h-screen bg-black/60 flex">
        {/* ✅ Sidebar */}
        <aside className="hidden lg:block w-72 p-6 border-r border-gray-700 sticky top-0 self-start h-screen overflow-y-auto">
          <ProgressOverview
            chapters={[
              {
                key: "chapter1",
                title: "Chapter 1",
                total: chapter1Data.activities.length,
                checked: progress.chapter1 || [],
              },
              { key: "chapter2", title: "Chapter 2", total: 0, checked: [] },
              { key: "chapter3", title: "Chapter 3", total: 0, checked: [] },
              { key: "chapter4", title: "Chapter 4", total: 0, checked: [] },
              { key: "chapter5", title: "Chapter 5", total: 0, checked: [] },
              { key: "chapter6", title: "Chapter 6", total: 0, checked: [] },
              { key: "epilogues", title: "Epilogues", total: 0, checked: [] },
            ]}
          />
        </aside>

        {/* ✅ Main content */}
        <main className="flex-1 px-6 py-12 space-y-12">
          <h1 className="text-5xl font-bold mb-12 text-center font-[Cinzel]">
            Red Dead Redemption 2 - 100% Checklist
          </h1>

          {/* Intro */}
          <div className="w-full bg-black/70 p-6 rounded-2xl shadow-md text-gray-200 leading-relaxed">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <IntroSection />
          </div>

          {/* Overall Strategy */}
          <div className="w-full bg-black/70 p-6 rounded-2xl shadow-md text-gray-200 leading-relaxed">
            <h2 className="text-2xl font-bold mb-4">Overall Strategy</h2>
            <OverallStrategy />
          </div>

          {/* Chapter 1 */}
          <CollapsibleSection title="Chapter 1" defaultOpen>
            <ChapterChecklist
              title="Chapter 1"
              activities={chapter1Data.activities}
              checked={progress.chapter1 || []}
              onToggle={(index) => handleToggle("chapter1", index)}
              onCheckAll={() =>
                handleCheckAll("chapter1", chapter1Data.activities.length)
              }
              onUncheckAll={() =>
                handleUncheckAll("chapter1", chapter1Data.activities.length)
              }
              introText={chapter1Data.introText}
              outroText={chapter1Data.outroText}
            />
          </CollapsibleSection>

          {/* Other chapters */}
          <CollapsibleSection title="Chapter 2">
            <p>Placeholder for Chapter 2 guide content.</p>
          </CollapsibleSection>
          <CollapsibleSection title="Chapter 3">
            <p>Placeholder for Chapter 3 guide content.</p>
          </CollapsibleSection>
          <CollapsibleSection title="Chapter 4">
            <p>Placeholder for Chapter 4 guide content.</p>
          </CollapsibleSection>
          <CollapsibleSection title="Chapter 5">
            <p>Placeholder for Chapter 5 guide content.</p>
          </CollapsibleSection>
          <CollapsibleSection title="Chapter 6">
            <p>Placeholder for Chapter 6 guide content.</p>
          </CollapsibleSection>
          <CollapsibleSection title="Epilogues Part 1 & 2">
            <p>Placeholder for Epilogues guide content.</p>
          </CollapsibleSection>
          <CollapsibleSection title="Summary & Acknowledgements">
            <p>Placeholder for summary and acknowledgements.</p>
          </CollapsibleSection>
        </main>
      </div>
      <BackToTopButton />
    </div>
  );
}

export default App;
