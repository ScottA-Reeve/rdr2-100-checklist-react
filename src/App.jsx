// src/App.jsx
import React, { useEffect, useState } from "react";
import IntroSection from "./components/IntroSection";
import BackToTopButton from "./components/BackToTopButton";
import OverallStrategy from "./components/OverallStrategy";
import ChapterChecklist from "./components/ChapterChecklist";
import ProgressOverview from "./components/ProgressOverview";
import CollapsibleSection from "./components/CollapsibleSection";

// Data imports (ensure these files exist)
import chapter1Data from "./data/chapter1Data";
import chapter2Part1 from "./data/chapter2/part1";
import chapter2Part2 from "./data/chapter2/part2";
import chapter2Part3 from "./data/chapter2/part3";
import chapter2Part4 from "./data/chapter2/part4";
import chapter2Part5 from "./data/chapter2/part5";
import chapter2Part6 from "./data/chapter2/part6";
import chapter2Part7 from "./data/chapter2/part7";

function App() {
  const [progress, setProgress] = useState({});

  // Helper to safely parse saved checked arrays and normalize length
  const loadCheckedArray = (key, total) => {
    try {
      const raw = localStorage.getItem(`rdr2_check_${key}_checked`);
      if (!raw) return new Array(total).fill(false);
      const arr = JSON.parse(raw);
      if (!Array.isArray(arr)) return new Array(total).fill(false);
      // normalize length
      const result = new Array(total).fill(false);
      for (let i = 0; i < Math.min(arr.length, total); i++) {
        result[i] = !!arr[i];
      }
      return result;
    } catch (e) {
      return new Array(total).fill(false);
    }
  };

  // Load saved progress (on mount)
  useEffect(() => {
    const stored = {};
    const chapters = [
      { key: "chapter1", total: chapter1Data.activities.length },
      { key: "chapter2Part1", total: chapter2Part1.activities.length },
      { key: "chapter2Part2", total: chapter2Part2.activities.length },
      { key: "chapter2Part3", total: chapter2Part3.activities.length },
      { key: "chapter2Part4", total: chapter2Part4.activities.length },
      { key: "chapter2Part5", total: chapter2Part5.activities.length },
      { key: "chapter2Part6", total: chapter2Part6.activities.length },
      { key: "chapter2Part7", total: chapter2Part7.activities.length },
    ];

    chapters.forEach(({ key, total }) => {
      stored[key] = loadCheckedArray(key, total);
    });

    setProgress(stored);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Save progress whenever it changes
  useEffect(() => {
    try {
      Object.entries(progress).forEach(([key, checked]) => {
        localStorage.setItem(`rdr2_check_${key}_checked`, JSON.stringify(checked));
      });
    } catch (e) {
      // ignore storage errors
    }
  }, [progress]);

  // Toggle handler
  const handleToggle = (chapterKey, index) => {
    setProgress((prev) => {
      const updated = [...(prev[chapterKey] || [])];
      // ensure length match (safe)
      if (index >= updated.length) {
        for (let i = updated.length; i <= index; i++) updated[i] = false;
      }
      updated[index] = !updated[index];
      return { ...prev, [chapterKey]: updated };
    });
  };

  // Check all / Uncheck all
  const handleCheckAll = (chapterKey, total) => {
    setProgress((prev) => ({ ...prev, [chapterKey]: new Array(total).fill(true) }));
  };
  const handleUncheckAll = (chapterKey, total) => {
    setProgress((prev) => ({ ...prev, [chapterKey]: new Array(total).fill(false) }));
  };

  return (
    <div className="min-h-screen bg-rdr2-bg bg-fixed bg-center bg-cover text-white font-serif scroll-smooth">
      <div className="min-h-screen bg-black/60 flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-72 p-6 border-r border-gray-700 sticky top-0 self-start h-screen overflow-y-auto">
          <ProgressOverview
            chapters={[
              {
                key: "chapter1",
                title: "Chapter 1",
                total: chapter1Data.activities.length,
                checked: progress.chapter1 || [],
              },
              {
                key: "chapter2",
                title: "Chapter 2",
                children: [
                  {
                    key: "chapter2Part1",
                    title: "Part I",
                    total: chapter2Part1.activities.length,
                    checked: progress.chapter2Part1 || [],
                  },
                  {
                    key: "chapter2Part2",
                    title: "Part II",
                    total: chapter2Part2.activities.length,
                    checked: progress.chapter2Part2 || [],
                  },
                  {
                    key: "chapter2Part3",
                    title: "Part III",
                    total: chapter2Part3.activities.length,
                    checked: progress.chapter2Part3 || [],
                  },
                  {
                    key: "chapter2Part4",
                    title: "Part IV",
                    total: chapter2Part4.activities.length,
                    checked: progress.chapter2Part4 || [],
                  },
                  {
                    key: "chapter2Part5",
                    title: "Part V",
                    total: chapter2Part5.activities.length,
                    checked: progress.chapter2Part5 || [],
                  },
                  {
                    key: "chapter2Part6",
                    title: "Part VI",
                    total: chapter2Part6.activities.length,
                    checked: progress.chapter2Part6 || [],
                  },
                  {
                    key: "chapter2Part7",
                    title: "Part VII",
                    total: chapter2Part7.activities.length,
                    checked: progress.chapter2Part7 || [],
                  },
                ],
              },
              { key: "chapter3", title: "Chapter 3", total: 0, checked: [] },
              { key: "chapter4", title: "Chapter 4", total: 0, checked: [] },
              { key: "chapter5", title: "Chapter 5", total: 0, checked: [] },
              { key: "chapter6", title: "Chapter 6", total: 0, checked: [] },
              { key: "epilogues", title: "Epilogues", total: 0, checked: [] },
            ]}
          />
        </aside>

        {/* Main content */}
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
              activities={chapter1Data}
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

          {/* Chapter 2 (nested parts) */}
          <CollapsibleSection title="Chapter 2">
            <CollapsibleSection title="Part I" defaultOpen>
              <ChapterChecklist
                title="Chapter 2 - Part I"
                activities={chapter2Part1}
                checked={progress.chapter2Part1 || []}
                onToggle={(index) => handleToggle("chapter2Part1", index)}
                onCheckAll={() =>
                  handleCheckAll("chapter2Part1", chapter2Part1.activities.length)
                }
                onUncheckAll={() =>
                  handleUncheckAll("chapter2Part1", chapter2Part1.activities.length)
                }
              />
            </CollapsibleSection>

            <CollapsibleSection title="Part II">
              <ChapterChecklist
                title="Chapter 2 - Part II"
                activities={chapter2Part2}
                checked={progress.chapter2Part2 || []}
                onToggle={(index) => handleToggle("chapter2Part2", index)}
                onCheckAll={() =>
                  handleCheckAll("chapter2Part2", chapter2Part2.activities.length)
                }
                onUncheckAll={() =>
                  handleUncheckAll("chapter2Part2", chapter2Part2.activities.length)
                }
              />
            </CollapsibleSection>

            {/* OTHER parts (III-VII) - add similarly if you have the part data files */}
            <CollapsibleSection title="Part III">
              <ChapterChecklist
                title="Chapter 2 - Part III"
                activities={chapter2Part3}
                checked={progress.chapter2Part3 || []}
                onToggle={(index) => handleToggle("chapter2Part3", index)}
                onCheckAll={() =>
                  handleCheckAll("chapter2Part3", chapter2Part3.activities.length)
                }
                onUncheckAll={() =>
                  handleUncheckAll("chapter2Part3", chapter2Part3.activities.length)
                }
              />
            </CollapsibleSection>

            <CollapsibleSection title="Part IV">
              <ChapterChecklist
                title="Chapter 2 - Part IV"
                activities={chapter2Part4}
                checked={progress.chapter2Part4 || []}
                onToggle={(index) => handleToggle("chapter2Part4", index)}
                onCheckAll={() =>
                  handleCheckAll("chapter2Part4", chapter2Part4.activities.length)
                }
                onUncheckAll={() =>
                  handleUncheckAll("chapter2Part4", chapter2Part4.activities.length)
                }
              />
            </CollapsibleSection>

            <CollapsibleSection title="Part V">
              <ChapterChecklist
                title="Chapter 2 - Part V"
                activities={chapter2Part5}
                checked={progress.chapter2Part5 || []}
                onToggle={(index) => handleToggle("chapter2Part5", index)}
                onCheckAll={() =>
                  handleCheckAll("chapter2Part5", chapter2Part5.activities.length)
                }
                onUncheckAll={() =>
                  handleUncheckAll("chapter2Part5", chapter2Part5.activities.length)
                }
              />
            </CollapsibleSection>

            <CollapsibleSection title="Part VI">
              <ChapterChecklist
                title="Chapter 2 - Part VI"
                activities={chapter2Part6}
                checked={progress.chapter2Part6 || []}
                onToggle={(index) => handleToggle("chapter2Part6", index)}
                onCheckAll={() =>
                  handleCheckAll("chapter2Part6", chapter2Part6.activities.length)
                }
                onUncheckAll={() =>
                  handleUncheckAll("chapter2Part6", chapter2Part6.activities.length)
                }
              />
            </CollapsibleSection>

            <CollapsibleSection title="Part VII">
              <ChapterChecklist
                title="Chapter 2 - Part VII"
                activities={chapter2Part7}
                checked={progress.chapter2Part7 || []}
                onToggle={(index) => handleToggle("chapter2Part7", index)}
                onCheckAll={() =>
                  handleCheckAll("chapter2Part7", chapter2Part7.activities.length)
                }
                onUncheckAll={() =>
                  handleUncheckAll("chapter2Part7", chapter2Part7.activities.length)
                }
              />
            </CollapsibleSection>
          </CollapsibleSection>

          {/* Other chapters */}
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
