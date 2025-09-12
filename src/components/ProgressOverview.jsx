import React from "react";

export default function ProgressOverview({ chapters = [] }) {
  return (
    <div className="w-full space-y-6">
      <h2 className="text-2xl font-bold">Chapter Progress Overview</h2>
      <div className="space-y-4">
        {chapters.map(({ key, title, total, checked }) => {
          const completed = checked.filter(Boolean).length;
          const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
          return (
            <div key={key}>
              <div className="flex justify-between text-sm mb-1">
                <span>{title}</span>
                <span>
                  {completed}/{total} ({percent}%)
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 relative overflow-hidden">
                <div
                  className="bg-yellow-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
