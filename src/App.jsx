// src/App.jsx
import React, { useEffect, useState } from "react";
import IntroSection from "./components/IntroSection";
import BackToTopButton from "./components/BackToTopButton";
import OverallStrategy from "./components/OverallStrategy";
import ChapterChecklist from "./components/ChapterChecklist";
import ProgressOverview from "./components/ProgressOverview";
import CollapsibleSection from "./components/CollapsibleSection";

// Data imports
import chapter1Data from "./data/chapter1Data";
import chapter2Part1 from "./data/chapter2/part1";
import chapter2Part2 from "./data/chapter2/part2";
import chapter2Part3 from "./data/chapter2/part3";
import chapter2Part4 from "./data/chapter2/part4";
import chapter2Part5 from "./data/chapter2/part5";
import chapter2Part6 from "./data/chapter2/part6";
import chapter2Part7 from "./data/chapter2/part7";

// ✅ Chapter 3 imports
import chapter3Part1 from "./data/chapter3/part1";
import chapter3Part2 from "./data/chapter3/part2";
import chapter3Part3 from "./data/chapter3/part3";
import chapter3Part4 from "./data/chapter3/part4";
import chapter3Part5 from "./data/chapter3/part5";
import chapter3Part6 from "./data/chapter3/part6";
import chapter3Part7 from "./data/chapter3/part7";
import chapter3Part8 from "./data/chapter3/part8";
import chapter3Part9 from "./data/chapter3/part9";

// ✅ Chapter 4 imports
import chapter4Part1 from "./data/chapter4/part1";
import chapter4Part2 from "./data/chapter4/part2";
import chapter4Part3 from "./data/chapter4/part3";
import chapter4Part4 from "./data/chapter4/part4";
import chapter4Part5 from "./data/chapter4/part5";
import chapter4Part6 from "./data/chapter4/part6";

// ✅ Chapter 5 import
import chapter5Data from "./data/chapter5Data";

// ✅ Chapter 6 placeholders
import chapter6Part1 from "./data/chapter6/part1";
import chapter6Part2 from "./data/chapter6/part2";
import chapter6Part3 from "./data/chapter6/part3";
import chapter6Part4 from "./data/chapter6/part4";
import chapter6Part5 from "./data/chapter6/part5";

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
      // ✅ Chapter 3
      { key: "chapter3Part1", total: chapter3Part1.activities.length },
      { key: "chapter3Part2", total: chapter3Part2.activities.length },
      { key: "chapter3Part3", total: chapter3Part3.activities.length },
      { key: "chapter3Part4", total: chapter3Part4.activities.length },
      { key: "chapter3Part5", total: chapter3Part5.activities.length },
      { key: "chapter3Part6", total: chapter3Part6.activities.length },
      { key: "chapter3Part7", total: chapter3Part7.activities.length },
      { key: "chapter3Part8", total: chapter3Part8.activities.length },
      { key: "chapter3Part9", total: chapter3Part9.activities.length },
      // ✅ Chapter 4
      { key: "chapter4Part1", total: chapter4Part1.activities.length },
      { key: "chapter4Part2", total: chapter4Part2.activities.length },
      { key: "chapter4Part3", total: chapter4Part3.activities.length },
      { key: "chapter4Part4", total: chapter4Part4.activities.length },
      { key: "chapter4Part5", total: chapter4Part5.activities.length },
      { key: "chapter4Part6", total: chapter4Part6.activities.length },
      // ✅ Chapter 5
      { key: "chapter5", total: chapter5Data.activities.length },
      // ✅ Chapter 6
      { key: "chapter6Part1", total: chapter6Part1.activities.length },
      { key: "chapter6Part2", total: chapter6Part2.activities.length },
      { key: "chapter6Part3", total: chapter6Part3.activities.length },
      { key: "chapter6Part4", total: chapter6Part4.activities.length },
      { key: "chapter6Part5", total: chapter6Part5.activities.length },
    ];

    chapters.forEach(({ key, total }) => {
      stored[key] = loadCheckedArray(key, total);
    });

    setProgress(stored);
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
              { key: "chapter1", title: "Chapter 1", total: chapter1Data.activities.length, checked: progress.chapter1 || [] },
              {
                key: "chapter2",
                title: "Chapter 2",
                children: [
                  { key: "chapter2Part1", title: "Part I", total: chapter2Part1.activities.length, checked: progress.chapter2Part1 || [] },
                  { key: "chapter2Part2", title: "Part II", total: chapter2Part2.activities.length, checked: progress.chapter2Part2 || [] },
                  { key: "chapter2Part3", title: "Part III", total: chapter2Part3.activities.length, checked: progress.chapter2Part3 || [] },
                  { key: "chapter2Part4", title: "Part IV", total: chapter2Part4.activities.length, checked: progress.chapter2Part4 || [] },
                  { key: "chapter2Part5", title: "Part V", total: chapter2Part5.activities.length, checked: progress.chapter2Part5 || [] },
                  { key: "chapter2Part6", title: "Part VI", total: chapter2Part6.activities.length, checked: progress.chapter2Part6 || [] },
                  { key: "chapter2Part7", title: "Part VII", total: chapter2Part7.activities.length, checked: progress.chapter2Part7 || [] },
                ],
              },
              {
                key: "chapter3",
                title: "Chapter 3",
                children: [
                  { key: "chapter3Part1", title: "Part I", total: chapter3Part1.activities.length, checked: progress.chapter3Part1 || [] },
                  { key: "chapter3Part2", title: "Part II", total: chapter3Part2.activities.length, checked: progress.chapter3Part2 || [] },
                  { key: "chapter3Part3", title: "Part III", total: chapter3Part3.activities.length, checked: progress.chapter3Part3 || [] },
                  { key: "chapter3Part4", title: "Part IV", total: chapter3Part4.activities.length, checked: progress.chapter3Part4 || [] },
                  { key: "chapter3Part5", title: "Part V", total: chapter3Part5.activities.length, checked: progress.chapter3Part5 || [] },
                  { key: "chapter3Part6", title: "Part VI", total: chapter3Part6.activities.length, checked: progress.chapter3Part6 || [] },
                  { key: "chapter3Part7", title: "Part VII", total: chapter3Part7.activities.length, checked: progress.chapter3Part7 || [] },
                  { key: "chapter3Part8", title: "Part VIII", total: chapter3Part8.activities.length, checked: progress.chapter3Part8 || [] },
                  { key: "chapter3Part9", title: "Part IX", total: chapter3Part9.activities.length, checked: progress.chapter3Part9 || [] },
                ],
              },
              {
                key: "chapter4",
                title: "Chapter 4",
                children: [
                  { key: "chapter4Part1", title: "Part I", total: chapter4Part1.activities.length, checked: progress.chapter4Part1 || [] },
                  { key: "chapter4Part2", title: "Part II", total: chapter4Part2.activities.length, checked: progress.chapter4Part2 || [] },
                  { key: "chapter4Part3", title: "Part III", total: chapter4Part3.activities.length, checked: progress.chapter4Part3 || [] },
                  { key: "chapter4Part4", title: "Part IV", total: chapter4Part4.activities.length, checked: progress.chapter4Part4 || [] },
                  { key: "chapter4Part5", title: "Part V", total: chapter4Part5.activities.length, checked: progress.chapter4Part5 || [] },
                  { key: "chapter4Part6", title: "Part VI", total: chapter4Part6.activities.length, checked: progress.chapter4Part6 || [] },
                ],
              },
              { key: "chapter5", title: "Chapter 5", total: chapter5Data.activities.length, checked: progress.chapter5 || [] },
              {
                key: "chapter6",
                title: "Chapter 6",
                children: [
                  { key: "chapter6Part1", title: "Part I", total: chapter6Part1.activities.length, checked: progress.chapter6Part1 || [] },
                  { key: "chapter6Part2", title: "Part II", total: chapter6Part2.activities.length, checked: progress.chapter6Part2 || [] },
                  { key: "chapter6Part3", title: "Part III", total: chapter6Part3.activities.length, checked: progress.chapter6Part3 || [] },
                  { key: "chapter6Part4", title: "Part IV", total: chapter6Part4.activities.length, checked: progress.chapter6Part4 || [] },
                  { key: "chapter6Part5", title: "Part V", total: chapter6Part5.activities.length, checked: progress.chapter6Part5 || [] },
                ],
              },
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
              onCheckAll={() => handleCheckAll("chapter1", chapter1Data.activities.length)}
              onUncheckAll={() => handleUncheckAll("chapter1", chapter1Data.activities.length)}
              introText={chapter1Data.introText}
              outroText={chapter1Data.outroText}
            />
          </CollapsibleSection>

          {/* Chapter 2 (all 7 parts) */}
          <CollapsibleSection title="Chapter 2">
            {[chapter2Part1, chapter2Part2, chapter2Part3, chapter2Part4, chapter2Part5, chapter2Part6, chapter2Part7].map((data, i) => (
              <CollapsibleSection key={`chapter2Part${i + 1}`} title={`Part ${i + 1}`} defaultOpen={i === 0}>
                <ChapterChecklist
                  title={`Chapter 2 - Part ${i + 1}`}
                  activities={data}
                  checked={progress[`chapter2Part${i + 1}`] || []}
                  onToggle={(index) => handleToggle(`chapter2Part${i + 1}`, index)}
                  onCheckAll={() => handleCheckAll(`chapter2Part${i + 1}`, data.activities.length)}
                  onUncheckAll={() => handleUncheckAll(`chapter2Part${i + 1}`, data.activities.length)}
                />
              </CollapsibleSection>
            ))}
          </CollapsibleSection>

          {/* Chapter 3 */}
          <CollapsibleSection title="Chapter 3">
            {[chapter3Part1, chapter3Part2, chapter3Part3, chapter3Part4, chapter3Part5, chapter3Part6, chapter3Part7, chapter3Part8, chapter3Part9].map((data, i) => (
              <CollapsibleSection key={`chapter3Part${i + 1}`} title={`Part ${i + 1}`} defaultOpen={i === 0}>
                <ChapterChecklist
                  title={`Chapter 3 - Part ${i + 1}`}
                  activities={data}
                  checked={progress[`chapter3Part${i + 1}`] || []}
                  onToggle={(index) => handleToggle(`chapter3Part${i + 1}`, index)}
                  onCheckAll={() => handleCheckAll(`chapter3Part${i + 1}`, data.activities.length)}
                  onUncheckAll={() => handleUncheckAll(`chapter3Part${i + 1}`, data.activities.length)}
                />
              </CollapsibleSection>
            ))}
          </CollapsibleSection>

          {/* Chapter 4 */}
          <CollapsibleSection title="Chapter 4">
            {[chapter4Part1, chapter4Part2, chapter4Part3, chapter4Part4, chapter4Part5, chapter4Part6].map((data, i) => (
              <CollapsibleSection key={`chapter4Part${i + 1}`} title={`Part ${i + 1}`} defaultOpen={i === 0}>
                <ChapterChecklist
                  title={`Chapter 4 - Part ${i + 1}`}
                  activities={data}
                  checked={progress[`chapter4Part${i + 1}`] || []}
                  onToggle={(index) => handleToggle(`chapter4Part${i + 1}`, index)}
                  onCheckAll={() => handleCheckAll(`chapter4Part${i + 1}`, data.activities.length)}
                  onUncheckAll={() => handleUncheckAll(`chapter4Part${i + 1}`, data.activities.length)}
                />
              </CollapsibleSection>
            ))}
          </CollapsibleSection>

          {/* Chapter 5 */}
          <CollapsibleSection title="Chapter 5" defaultOpen>
            <ChapterChecklist
              title="Chapter 5"
              activities={chapter5Data}
              checked={progress.chapter5 || []}
              onToggle={(index) => handleToggle("chapter5", index)}
              onCheckAll={() => handleCheckAll("chapter5", chapter5Data.activities.length)}
              onUncheckAll={() => handleUncheckAll("chapter5", chapter5Data.activities.length)}
              introText={chapter5Data.introText}
              outroText={chapter5Data.outroText}
            />
          </CollapsibleSection>

          {/* Chapter 6 */}
          <CollapsibleSection title="Chapter 6">
            {[chapter6Part1, chapter6Part2, chapter6Part3, chapter6Part4, chapter6Part5].map((data, i) => (
              <CollapsibleSection key={`chapter6Part${i + 1}`} title={`Part ${i + 1}`} defaultOpen={i === 0}>
                <ChapterChecklist
                  title={`Chapter 6 - Part ${i + 1}`}
                  activities={data}
                  checked={progress[`chapter6Part${i + 1}`] || []}
                  onToggle={(index) => handleToggle(`chapter6Part${i + 1}`, index)}
                  onCheckAll={() => handleCheckAll(`chapter6Part${i + 1}`, data.activities.length)}
                  onUncheckAll={() => handleUncheckAll(`chapter6Part${i + 1}`, data.activities.length)}
                />
              </CollapsibleSection>
            ))}
          </CollapsibleSection>

          {/* Epilogues */}
          <CollapsibleSection title="Epilogues Part 1 & 2"><p>Placeholder for Epilogues guide content.</p></CollapsibleSection>
          <CollapsibleSection title="Summary & Acknowledgements"><p>Placeholder for summary and acknowledgements.</p></CollapsibleSection>
        </main>
      </div>
      <BackToTopButton />
    </div>
  );
}

export default App;
