import React from "react";

function IntroSection() {
  return (
    <section className="w-full space-y-6 text-gray-200 leading-relaxed">
      <h2 className="text-3xl md:text-4xl font-bold font-[Cinzel] text-center mb-6">
        Introduction & Table of Contents
      </h2>

      <p className="text-lg">
        The purpose of this guide is to provide a clear, efficient strategy to
        achieve <span className="font-bold">100% completion</span> in{" "}
        <em>Red Dead Redemption 2</em>.
      </p>

      <p className="text-lg">
        Unlike many walkthroughs, this guide focuses on the{" "}
        <span className="font-bold">optimal order of completion</span>. Without
        a plan, chasing the <em>Best in the West</em> Achievement/Trophy can
        easily exceed 100 hours. By carefully combining tasks, challenges, and
        collectibles while you are already in the right location, you’ll
        dramatically cut down on unnecessary backtracking. The guide also
        highlights missions where challenges can be completed far more easily
        than in free roam.
      </p>

      <p className="text-lg">
        Make no mistake: compared to earlier Rockstar titles like{" "}
        <em>GTA IV</em>, <em>EFLC</em>, <em>RDR1</em>, or <em>GTA V</em>,
        achieving 100% here is a far greater challenge.
      </p>

      <p className="text-lg">This guide also provides:</p>
      <ul className="list-disc list-inside space-y-1 text-lg">
        <li>Gold Medal objectives for missions</li>
        <li>Tips and notes to make progress smoother</li>
        <li>
          Time savings — expect to cut at least{" "}
          <span className="font-bold">10 hours</span>, often more
        </li>
        <li>
          Reduced repetition and retries, helping you avoid frustration and
          enjoy the journey more fully
        </li>
      </ul>

      <p className="text-lg">
        While we’ll focus only on tasks required for 100%, we’ll also suggest
        optional side activities that make the main quest easier.
      </p>

      <p className="text-lg italic">
        ⚠️ <span className="font-bold">Spoiler Warning:</span> Some spoilers are
        unavoidable when discussing 100% completion. Read on at your own risk if
        you’re new to the story.
      </p>

      <div>
        <h3 className="text-2xl font-semibold font-[Cinzel] mb-4">
          📑 Table of Contents
        </h3>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <a href="#overall-strategy" className="hover:underline">
              I) Overall Strategy
            </a>
          </li>
          <li>
            <a href="#chapter-1" className="hover:underline">
              II) Chapter 1
            </a>
          </li>
          <li>
            <a href="#chapter-2" className="hover:underline">
              III) Chapter 2
            </a>
          </li>
          <li>
            <a href="#chapter-3" className="hover:underline">
              IV) Chapter 3
            </a>
          </li>
          <li>
            <a href="#chapter-4" className="hover:underline">
              V) Chapter 4
            </a>
          </li>
          <li>
            <a href="#chapter-5" className="hover:underline">
              VI) Chapter 5
            </a>
          </li>
          <li>
            <a href="#chapter-6" className="hover:underline">
              VII) Chapter 6
            </a>
          </li>
          <li>
            <a href="#epilogues" className="hover:underline">
              VIII) Epilogues Part 1 &amp; 2
            </a>
          </li>
          <li>
            <a href="#summary" className="hover:underline">
              IX) Summary &amp; Acknowledgements
            </a>
          </li>
        </ul>
        <p className="text-sm text-gray-300 mt-3 italic">
          *The Overall Strategy explains why order matters, which tasks to keep
          in mind from the very beginning, and how planning ahead makes the road
          to 100% much easier.
        </p>
      </div>

      <p className="text-lg">
        If you’re planning to follow this guide, I strongly recommend reading
        this introduction. It explains the{" "}
        <span className="font-bold">logic behind the approach</span>, ensuring
        you understand why certain choices will save you both time and
        frustration.
      </p>
    </section>
  );
}

export default IntroSection;
