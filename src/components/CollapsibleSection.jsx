// src/components/CollapsibleSection.jsx
import React, { useState, useEffect } from "react";

export default function CollapsibleSection({
  title,
  defaultOpen = false,
  children,
}) {
  const titleKey = title ? title.replace(/[^a-z0-9]/gi, "_") : "unknown";
  const storageKey = `rdr2_section_${titleKey}`;

  // ✅ Lazy initialization: read localStorage only once
  const [isOpen, setIsOpen] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved !== null) return saved === "true";
    } catch (e) {}
    return defaultOpen;
  });

  // ✅ Save whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, String(isOpen));
    } catch (e) {}
  }, [isOpen, storageKey]);

  return (
    <div className="bg-black/70 rounded-2xl shadow-md">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full text-left px-6 py-4 flex justify-between items-center text-xl font-semibold hover:bg-black/50 rounded-t-2xl"
      >
        <span>{title}</span>
        <span className="text-yellow-400">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t border-gray-700 space-y-6">
          {children}
        </div>
      )}
    </div>
  );
}
