import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react"; // ✅ for toggle icons

/**
 * CollapsibleSection
 * Props:
 *  - title: string
 *  - defaultOpen: boolean (optional)
 *  - children: content inside
 */
export default function CollapsibleSection({ title, defaultOpen = false, children }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full bg-black/70 rounded-2xl shadow-md">
      {/* Header */}
      <button
        className="w-full flex items-center justify-between px-4 py-3 text-left font-bold text-xl hover:bg-black/40 rounded-t-2xl"
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
      >
        <span>{title}</span>
        {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
      </button>

      {/* Content */}
      {isOpen && <div className="p-4 border-t border-gray-700">{children}</div>}
    </div>
  );
}
