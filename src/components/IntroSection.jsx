// src/components/IntroSection.jsx
import React from "react";

function IntroSection() {
  return (
    <section className="mb-12 text-white">
      <h2 className="text-3xl font-bold mb-6">Introduction</h2>
      <p className="mb-4">
        The goal of this guide is simple: to help you achieve{" "}
        <strong>100% completion in Red Dead Redemption 2</strong> as efficiently as possible.
      </p>
      <p className="mb-4">
        Unlike many guides that just list requirements, this walkthrough is carefully ordered so that
        missions, challenges, and collectibles are tackled together — right when you’re already in the
        right location. This means far fewer return trips, less wasted time, and a much smoother journey
        toward the <strong>“Best in the West”</strong> achievement/trophy.
      </p>
      <p className="mb-4">
        On average, an unplanned run for 100% can easily stretch well past 100 hours. By following this
        structured approach, you’ll cut that time dramatically while still enjoying the story and world
        in a natural order.
      </p>

      {/* ✅ Fix: close <p> before starting the <ul> */}
      <p className="mb-2">Each chapter section contains:</p>
      <ul className="list-disc ml-6 mt-2 mb-8 space-y-1">
        <li>
          <strong>Story mission guidance</strong> (including Gold Medal tips)
        </li>
        <li>
          <strong>Challenges and side activities</strong> you can complete nearby
        </li>
        <li>
          <strong>Collectibles and unique items</strong> grouped for efficiency
        </li>
      </ul>

      <p className="mb-8">
        The result is a guide that respects both your time and the game’s flow, ensuring you see everything
        RDR2 has to offer without unnecessary backtracking.
      </p>

      {/* Table of Contents */}
      <div className="table-of-contents">
        <h3 className="text-2xl font-bold mb-4">Table of Contents</h3>
        <ul className="space-y-2 list-disc ml-5">
          <li>
            <a href="#overall-strategy" className="hover:text-yellow-400 transition-colors">
              I) Overall Strategy
            </a>
          </li>
          <li>
            <a href="#chapter-1" className="hover:text-yellow-400 transition-colors">
              II) Chapter 1
            </a>
          </li>
          <li>
            <a href="#chapter-2" className="hover:text-yellow-400 transition-colors">
              III) Chapter 2
            </a>
          </li>
          <li>
            <a href="#chapter-3" className="hover:text-yellow-400 transition-colors">
              IV) Chapter 3
            </a>
          </li>
          <li>
            <a href="#chapter-4" className="hover:text-yellow-400 transition-colors">
              V) Chapter 4
            </a>
          </li>
          <li>
            <a href="#chapter-5" className="hover:text-yellow-400 transition-colors">
              VI) Chapter 5
            </a>
          </li>
          <li>
            <a href="#chapter-6" className="hover:text-yellow-400 transition-colors">
              VII) Chapter 6
            </a>
          </li>
          <li>
            <a href="#epilogue" className="hover:text-yellow-400 transition-colors">
              VIII) Epilogues Part 1 &amp; 2
            </a>
          </li>
          <li>
            <a href="#summary" className="hover:text-yellow-400 transition-colors">
              IX) Summary &amp; Acknowledgements
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default IntroSection;
