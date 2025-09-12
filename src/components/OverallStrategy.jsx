import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const sections = [
  {
    title: "Full Completion Checklist",
    content: `Here’s the complete list of activities required for 100% completion. Many of these overlap, so some will automatically be checked off as you progress.

Missions & Events:
- All Story Missions
- 10 Strangers
- 5 Bounties
- 25 Chance Encounters
- Bushwhacked
- 6 Gang Hideouts

Collectibles:
- 1 Point of Interest
- 9 Graves
- 144 Cigarette Cards
- 30 Dinosaur Bones
- 13 Legendary Fish
- All Exotics
- 10 Rock Carvings
- All Hunting Requests
- 1 Treasure Hunter Chain
- 20 Dreamcatchers

Compendium:
- 50 Animals
- 10 Equipment
- 10 Fish
- 6 Gangs
- 10 Horses
- 20 Plants
- 48 Weapons

Player:
- Max Health, Stamina & Dead Eye
- Horse Bonding Level 4
- All 9 Challenges Completed

Miscellaneous:
- 5 Shacks
- 5 Legendary Animals
- 4 Table Games
- 5 Ranters, Ravers, and Campaigners
- 1 Bath
- 1 Show
- 1 Theater
- 6 Recipes crafted (one of each type)
- 4 Robberies: Coach, Home, Shop, Train`,
  },
  {
    title: "Superfluous Tasks (Auto-Completed)",
    content: `Some activities are covered by challenges and don’t need to be planned separately:
- 10 Fish → Survivalist 10
- 10 Horses → Horseman 10
- 20 Plants → Herbalist 9
- 4 Table Games → Gambler Challenges
- 6 Recipes crafted → Challenges & missions
- 1 Treasure Hunter Chain → Explorer Challenge`,
  },
  {
    title: "Tasks You’ll Complete Naturally",
    content: `These happen organically while progressing:
- All Story Missions
- 25 Chance Encounters (watch for white map dots)
- Bushwhacked (ambush event)
- 50 Animals (study whenever possible)
- 10 Equipment (unlocked via story)
- 6 Gangs (via story)
- Horse Bonding Level 4
- 5 Ranters, Ravers, and Campaigners (approach white dots)`,
  },
  {
    title: "Before Chapter 6 Ends",
    content: `Aim to complete these before the story transition:
- 10 Stranger Missions
- 5 Bounties
- 1 Point of Interest
- 144 Cigarette Cards
- All Exotics
- 10 Rock Carvings
- 20 Dreamcatchers
- 5 Shacks
- 5 Legendary Animals
- 1 Bath, 1 Show, 1 Theater
- 4 Robberies (Coach, Home, Shop, Train)
- Bandit, Explorer, Gambler, Master Hunter, Sharpshooter, Survivalist & Weapons Expert Challenges`,
  },
  {
    title: "Complete Across Chapter 6",
    content: `Some tasks start before Chapter 6 but finish after:
- 30 Dinosaur Bones
- 13 Legendary Fish
- All Hunting Requests (first 4 before Chapter 6)
- Herbalist Challenges (1–8 before, 9 after unless using exploit)
- Horseman Challenges (1–8 before, 9 easier post-Chapter 6)`,
  },
  {
    title: "After Chapter 6",
    content: `These are only possible after the story shift:
- 9 Graves
- Max Health, Stamina & Dead Eye (requires completing all challenges + reinforced gear)
- 6 Gang Hideouts (4 during story, 2 after Chapter 6)
- 48 Weapons (majority before, mop-up later)`,
  },
  {
    title: "Essential Early Priorities",
    content: `- Kill the Legendary Buck early and craft the Buck Antler Trinket. It boosts pelt quality and saves huge amounts of time on hunting tasks.
- Craft the Legend of the East Satchel as early as possible. It isn’t required for 100%, but makes life much easier by expanding carrying capacity.
  - Requires completing “Money Lending and Other Sins II” to unlock Pearson’s Leather Working Tools.
  - Donate perfect pelts you get early to Pearson.
- If you skip the Satchel, postpone Herbalist 7 & 8 and Smoking and Other Hobbies until the Epilogue.`,
  },
  {
    title: "Special Notes",
    content: `The Exotics:
- Exotic birds don’t need perfect pelts. Use Dead Eye + repeater.
- Challenge is sheer numbers. Don’t grind one location — corpses block respawns. Mix it up with other activities and return later.

Hunting Requests:
- Activate early and complete opportunistically. Many require 3-star pelts.
- Some spawn spots are better than others — use guides.

Gambler Challenge 8:
- Win Blackjack 3 times with exactly 5 cards.
- Pure luck, very low probability.
- Save it for downtime (TV, podcasts, etc.).
- ⚠️ In-game text is misleading — “hit three times” doesn’t mean splitting hands. Must be 5 cards in one hand.

Other Considerations:
- At the end of Chapter 6:
  - You lose cash, consumables, and horses.
  - You keep valuables, trinkets, and Gold Bars.
- Preparation tips:
  - Buy remaining weapons.
  - Stockpile Premium Cigarettes.
  - Save Gold Bars for post-Chapter 6 wealth.
- Stranger Missions: only 10 required. “The Veteran” is best saved for after Chapter 6 (reward is a good horse, otherwise wasted).`,
  },
];

export default function OverallStrategy() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Overall Strategy</h1>
      {sections.map((section, index) => (
        <div
          key={index}
          className="rounded-2xl shadow-md border bg-white dark:bg-gray-900 p-4"
        >
          <button
            className="flex justify-between items-center w-full text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-semibold text-lg">{section.title}</span>
            {openIndex === index ? <ChevronDown /> : <ChevronRight />}
          </button>
          {openIndex === index && (
            <p className="mt-3 whitespace-pre-line text-gray-700 dark:text-gray-300">
              {section.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
