import React, { useState } from "react";

export default function ChapterChecklist({
  title,
  activities,
  checked,
  onToggle,
  onCheckAll,
  onUncheckAll,
  introText = [],
  outroText = [],
}) {
  const [expandedRows, setExpandedRows] = useState({});

  const toggleTips = (idx) => {
    setExpandedRows((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const completed = checked.filter(Boolean).length;
  const total = activities.length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  const getField = (item, ...keys) => {
    for (const k of keys) {
      if (item && Object.prototype.hasOwnProperty.call(item, k)) {
        return item[k] ?? "-";
      }
    }
    return "-";
  };

  return (
    <section className="w-full bg-black/70 p-6 rounded-2xl shadow-md space-y-6">
      {/* Intro */}
      {introText.length > 0 && (
        <div className="text-gray-200 leading-relaxed space-y-4">
          {introText.map((p, i) => (
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
              <th className="px-4 py-2 border border-gray-600 text-left">
                Activity
              </th>
              <th className="px-4 py-2 border border-gray-600 text-left">
                Name / Details
              </th>
              <th className="px-4 py-2 border border-gray-600 text-left">
                Location
              </th>
              <th className="px-4 py-2 border border-gray-600 text-left">
                Map Icon
              </th>
              <th className="px-4 py-2 border border-gray-600 text-left">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {activities.map((item, idx) => {
              const key = item.id ?? idx;
              const isChecked = checked[idx] || false;
              const hasTips = Array.isArray(item.tips) && item.tips.length > 0;
              const isExpanded = expandedRows[idx] || false;

              // Icon styling by type
              let iconClasses = "";
              if (item.type === "Story Mission" || item.type === "Story")
                iconClasses = "bg-yellow-500 text-black";
              else if (item.type === "Stranger Mission")
                iconClasses = "bg-white text-black";
              else if (
                item.type === "Challenge" ||
                item.type.includes("Expert") ||
                item.type.includes("Hunter")
              )
                iconClasses = "bg-red-600 text-white";

              return (
                <tr
                  key={key}
                  className={`${
                    isChecked
                      ? "bg-green-900/30"
                      : "bg-black/10 hover:bg-black/20"
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
                    {item.icon && (
                      <span
                        className={`inline-flex items-center justify-center h-7 w-7 rounded-full font-bold ${iconClasses}`}
                      >
                        {item.icon}
                      </span>
                    )}
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
                        >
                          {isExpanded ? "Hide Tips" : "Show Gold Medal Tips"}
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
      {outroText.length > 0 && (
        <div className="text-gray-200 leading-relaxed space-y-4">
          {outroText.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}
    </section>
  );
}
