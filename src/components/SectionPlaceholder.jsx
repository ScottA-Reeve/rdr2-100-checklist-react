import React from "react";

function SectionPlaceholder({ id, title, children }) {
  return (
    <section
      id={id}
      className="max-w-4xl bg-black/60 p-6 md:p-10 rounded-xl shadow-lg space-y-4 mb-12 scroll-mt-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold font-[Cinzel] mb-4">
        {title}
      </h2>
      <div className="text-lg leading-relaxed">{children}</div>
    </section>
  );
}

export default SectionPlaceholder;
