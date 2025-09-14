import React from "react";

function TopProgressBar({ done, total }) {
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-md">
      <div className="h-3 bg-gray-700">
        <div
          className="h-3 bg-yellow-600"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className="text-center text-xs text-white py-0.5">
        {done}/{total} ({percent}%)
      </div>
    </div>
  );
}

export default TopProgressBar;
