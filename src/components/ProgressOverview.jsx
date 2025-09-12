// src/components/ProgressOverview.jsx
import React, { useEffect, useState } from "react";

export default function ProgressOverview({ chapters }) {
  // remember expanded/closed state for sidebar groups
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem("rdr2_progress_overview_expanded");
      if (saved) setExpanded(JSON.parse(saved));
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("rdr2_progress_overview_expanded", JSON.stringify(expanded));
    } catch (e) {}
  }, [expanded]);

  const toggleExpand = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const calcProgress = (checked = [], total = 0) => {
    const done = Array.isArray(checked) ? checked.filter(Boolean).length : 0;
    const percent = total > 0 ? Math.round((done / total) * 100) : 0;
    return { done, percent };
  };

  const renderChapter = (chapter) => {
    let totalDone = 0;
    let totalAll = 0;

    if (Array.isArray(chapter.children) && chapter.children.length > 0) {
      chapter.children.forEach((child) => {
        const done = Array.isArray(child.checked) ? child.checked.filter(Boolean).length : 0;
        totalDone += done;
        totalAll += child.total || 0;
      });
    } else {
      totalDone = Array.isArray(chapter.checked) ? chapter.checked.filter(Boolean).length : 0;
      totalAll = chapter.total || 0;
    }

    const percent = totalAll > 0 ? Math.round((totalDone / totalAll) * 100) : 0;

    return (
      <div key={chapter.key} className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer hover:text-yellow-400"
          onClick={() => chapter.children && toggleExpand(chapter.key)}
        >
          <span className="font-semibold">
            {chapter.title}
            {chapter.children && (
              <span className="ml-2 text-xs text-gray-400">
                {expanded[chapter.key] ? "▼" : "▶"}
              </span>
            )}
          </span>
          <span className="text-sm">
            {totalDone}/{totalAll} ({percent}%)
          </span>
        </div>

        <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
          <div className="bg-yellow-600 h-2 rounded-full" style={{ width: `${percent}%` }} />
        </div>

        {chapter.children && expanded[chapter.key] && (
          <div className="ml-4 mt-2 space-y-2">
            {chapter.children.map((child) => {
              const done = Array.isArray(child.checked) ? child.checked.filter(Boolean).length : 0;
              const childPercent = child.total > 0 ? Math.round((done / child.total) * 100) : 0;
              return (
                <div key={child.key}>
                  <div className="flex justify-between text-sm">
                    <span>{child.title}</span>
                    <span>{done}/{child.total} ({childPercent}%)</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: `${childPercent}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside>
      <h2 className="text-xl font-bold mb-6">Progress Overview</h2>
      <div>{chapters.map((ch) => renderChapter(ch))}</div>
    </aside>
  );
}
