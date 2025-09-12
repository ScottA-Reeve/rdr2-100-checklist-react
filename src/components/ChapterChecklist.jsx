// src/components/ChapterChecklist.jsx
import React, { useEffect, useState } from "react";

/**
 * ChapterChecklist
 * Props:
 *  - title: string (used for display + storage key)
 *  - activities: array of objects (each object may contain keys like:
 *      activity, name, location, mapIcon, notes, id
 *    notes may be a string or an array of strings)
 */
export default function ChapterChecklist({ title = "Chapter", activities = [] }) {
  // storage key derived from title (safe)
  const storageKey = `rdr2_check_${(title || "chapter").replace(/\s+/g, "_").toLowerCase()}_checked`;

  // initialize checked state from localStorage if possible, otherwise false array
  const [checked, setChecked] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          // normalize length to activities.length
          if (parsed.length === activities.length) return parsed;
          if (parsed.length < activities.length) return [...parsed, ...Array(activities.length - parsed.length).fill(false)];
          return parsed.slice(0, activities.length);
        }
      }
    } catch (e) {
      // ignore parse errors
      // eslint-disable-next-line no-console
      console.warn("Failed to load saved progress:", e);
    }
    return Array(activities.length).fill(false);
  });

  // if activities length changes after mount, adjust checked array to match
  useEffect(() => {
    setChecked((prev) => {
      if (!Array.isArray(prev)) return Array(activities.length).fill(false);
      if (prev.length === activities.length) return prev;
      if (prev.length < activities.length) return [...prev, ...Array(activities.length - prev.length).fill(false)];
      return prev.slice(0, activities.length);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activities.length]);

  // persist to localStorage whenever checked changes
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn("Failed to save progress:", e);
    }
  }, [checked, storageKey]);

  // helpers
  const toggleCheck = (index) => {
    setChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const checkAll = () => setChecked(Array(activities.length).fill(true));
  const uncheckAll = () => setChecked(Array(activities.length).fill(false));

  const completed = checked.filter(Boolean).length;
  const total = activities.length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  // safe field getter: try several likely keys and fallback to '-'
  const getField = (item, ...keys) => {
    for (const k of keys) {
      if (item && Object.prototype.hasOwnProperty.call(item, k) && item[k] !== null && item[k] !== undefined) {
        return item[k];
      }
    }
    return "-";
  };

  return (
    <section className="w-full bg-black/70 p-6 rounded-2xl shadow-md">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-sm text-gray-300 mt-1">
            {completed}/{total} completed ({percent}%)
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={checkAll}
            className="px-3 py-1 rounded-md bg-green-600 hover:bg-green-700 text-white text-sm"
            type="button"
          >
            Check All
          </button>
          <button
            onClick={uncheckAll}
            className="px-3 py-1 rounded-md bg-red-600 hover:bg-red-700 text-white text-sm"
            type="button"
          >
            Uncheck All
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="w-full bg-gray-700 rounded-full h-4 relative overflow-hidden">
          <div
            className="bg-yellow-600 h-4 rounded-full transition-all duration-300"
            style={{ width: `${percent}%` }}
          />
          <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
            {percent}%
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-md overflow-hidden">
          <thead>
            <tr className="bg-yellow-700 text-black">
              <th className="px-4 py-2 text-left">✔</th>
              <th className="px-4 py-2 text-left">Activity</th>
              <th className="px-4 py-2 text-left">Name / Details</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Map Icon</th>
              <th className="px-4 py-2 text-left">Notes</th>
            </tr>
          </thead>

          <tbody>
            {activities.map((item, idx) => {
              const key = item && (item.id ?? item.name ?? idx);
              const activityText = getField(item, "activity", "Activity", "type", "Type");
              const nameText = getField(item, "name", "Name", "title", "Title");
              const locationText = getField(item, "location", "Location");
              const mapIconText = getField(item, "mapIcon", "MapIcon", "icon", "Icon", "map_icon");

              const notes = item && item.notes !== undefined && item.notes !== null ? item.notes : "-";

              return (
                <tr
                  key={key}
                  className={`border-b border-gray-600 ${
                    checked[idx] ? "bg-green-900/30" : "bg-black/10 hover:bg-black/20"
                  }`}
                >
                  <td className="px-4 py-2 align-top">
                    <input
                      type="checkbox"
                      checked={!!checked[idx]}
                      onChange={() => toggleCheck(idx)}
                      className="h-4 w-4 accent-yellow-600"
                    />
                  </td>

                  <td className="px-4 py-2 align-top font-medium">{activityText}</td>
                  <td className="px-4 py-2 align-top">{nameText}</td>
                  <td className="px-4 py-2 align-top">{locationText}</td>
                  <td className="px-4 py-2 align-top">{mapIconText}</td>

                  <td className="px-4 py-2 align-top text-sm text-gray-200">
                    {Array.isArray(notes) ? (
                      <ul className="list-disc list-inside space-y-1">
                        {notes.map((n, i) => (
                          <li key={i}>{n}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="whitespace-pre-line">{String(notes)}</p>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
