// src/components/ChapterChecklist.jsx
import React, { useEffect, useState } from "react";

export default function ChapterChecklist({
  title,
  activities,
  checked = [],
  onToggle = () => {},
  onCheckAll = () => {},
  onUncheckAll = () => {},
  introText = [],
  outroText = [],
}) {
  // storage key for expanded tips toggles
  const titleKey = title ? title.replace(/[^a-z0-9]/gi, "_") : "unknown";
  const expandKey = `rdr2_expand_${titleKey}`;

  // expandedRows stores which rows (by index) show gold medal tips
  const [expandedRows, setExpandedRows] = useState({});

  // load saved expand state
  useEffect(() => {
    try {
      const saved = localStorage.getItem(expandKey);
      if (saved) {
        setExpandedRows(JSON.parse(saved));
      }
    } catch (e) {
      setExpandedRows({});
    }
  }, [expandKey]);

  // internal toggle that saves to localStorage
  const toggleTips = (idx) => {
    setExpandedRows((prev) => {
      const next = { ...prev, [idx]: !prev[idx] };
      try {
        localStorage.setItem(expandKey, JSON.stringify(next));
      } catch (e) {}
      return next;
    });
  };

  // Support two shapes:
  // 1) activities = [ ... ] (array)
  // 2) activities = { activities: [...], introText: [...], outroText: [...] } (object)
  const dataObj =
    activities && !Array.isArray(activities) ? activities : null;

  const items = Array.isArray(activities)
    ? activities
    : dataObj?.activities ?? dataObj?.items ?? [];

  const finalIntro =
    (introText && introText.length > 0)
      ? introText
      : dataObj?.introText ?? [];

  const finalOutro =
    (outroText && outroText.length > 0)
      ? outroText
      : dataObj?.outroText ?? [];

  // completed count (checked array is managed by App)
  const completed = items.reduce(
    (acc, _, i) => (Array.isArray(checked) && checked[i] ? acc + 1 : acc),
    0
  );

  const total = items.length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  const getField = (item, ...keys) => {
    for (const k of keys) {
      if (item && Object.prototype.hasOwnProperty.call(item, k)) {
        return item[k] ?? "-";
      }
    }
    return "-";
  };

  // helper to render RDR2-like map icons (string codes)
  const renderMapIcon = (icon) => {
    if (!icon || icon === "-") return <span className="text-gray-400">-</span>;
    let bg = "bg-gray-600 text-white";
    const ic = String(icon).toUpperCase();
    if (ic === "RS") bg = "bg-yellow-500 text-black";
    else if (ic === "H") bg = "bg-red-600 text-white";
    else if (ic === "U") bg = "bg-blue-600 text-white";
    else if (ic === "LS") bg = "bg-green-600 text-white";
    else if (ic === "ML") bg = "bg-pink-500 text-white";
    else if (ic === "K") bg = "bg-purple-600 text-white";
    else if (ic === "?") bg = "bg-white text-black";
    else if (ic === "BOUNTY" || ic === "B") bg = "bg-orange-600 text-black";
    return (
      <span
        className={`inline-flex items-center justify-center h-7 w-7 rounded-full font-bold text-xs ${bg}`}
      >
        {icon}
      </span>
    );
  };

  return (
    <section className="w-full bg-black/70 p-6 rounded-2xl shadow-md space-y-6">
      {/* Intro */}
      {finalIntro.length > 0 && (
        <div className="text-gray-200 leading-relaxed space-y-4">
          {finalIntro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-sm text-gray-300 mt-1">
            {completed}/{total} completed ({percent}%)
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onCheckAll}
            className="px-3 py-1 bg-green-700 hover:bg-green-600 text-sm rounded-md"
          >
            Check All
          </button>
          <button
            onClick={onUncheckAll}
            className="px-3 py-1 bg-red-700 hover:bg-red-600 text-sm rounded-md"
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
        <table className="w-full border border-gray-600 rounded-md overflow-hidden">
          <thead>
            <tr className="bg-yellow-700 text-black">
              <th className="px-4 py-2 border border-gray-600 text-left">✔</th>
              <th className="px-4 py-2 border border-gray-600 text-left">Activity</th>
              <th className="px-4 py-2 border border-gray-600 text-left">Name / Details</th>
              <th className="px-4 py-2 border border-gray-600 text-left">Location</th>
              <th className="px-4 py-2 border border-gray-600 text-left">Map Icon</th>
              <th className="px-4 py-2 border border-gray-600 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => {
              const key = item.id ?? idx;
              const isChecked = (Array.isArray(checked) && checked[idx]) || false;
              const hasTips = Array.isArray(item.tips) && item.tips.length > 0;
              const isExpanded = expandedRows[idx] || false;

              return (
                <tr
                  key={key}
                  className={`${
                    isChecked ? "bg-green-900/30" : "bg-black/10 hover:bg-black/20"
                  }`}
                >
                  <td className="px-4 py-2 border border-gray-600 align-top">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => onToggle(idx)}
                      className="h-4 w-4 accent-yellow-600"
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-600 align-top">
                    {getField(item, "type")}
                  </td>
                  <td className="px-4 py-2 border border-gray-600 align-top">
                    {getField(item, "name", "title")}
                  </td>
                  <td className="px-4 py-2 border border-gray-600 align-top">
                    {getField(item, "location")}
                  </td>
                  <td className="px-4 py-2 border border-gray-600 align-top">
                    {renderMapIcon(getField(item, "icon"))}
                  </td>
                  <td className="px-4 py-2 border border-gray-600 align-top text-sm text-gray-200">
                    {/* Notes */}
                    {Array.isArray(item.notes) ? (
                      <ul className="list-disc list-inside space-y-1">
                        {item.notes.map((n, i) => (
                          <li key={i}>{n}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{String(item.notes || "-")}</p>
                    )}

                    {/* Tips toggle */}
                    {hasTips && (
                      <div className="mt-2">
                        <button
                          onClick={() => toggleTips(idx)}
                          className="text-xs text-yellow-400 hover:underline"
                          aria-expanded={isExpanded}
                        >
                          {isExpanded ? "Hide Gold Medal Tips" : "Show Gold Medal Tips"}
                        </button>

                        {isExpanded && (
                          <div className="mt-2 p-2 bg-black/40 rounded-md border border-yellow-600">
                            <h4 className="font-semibold text-yellow-400 mb-1">
                              Gold Medal Tips
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-300">
                              {item.tips.map((tip, i) => (
                                <li key={i}>{tip}</li>
                              ))}
                            </ul>
                            {item.link && (
                              <p className="mt-2">
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:underline text-sm"
                                >
                                  View Full IGN Walkthrough
                                </a>
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Outro */}
      {finalOutro.length > 0 && (
        <div className="text-gray-200 leading-relaxed space-y-4">
          {finalOutro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}
    </section>
  );
}
