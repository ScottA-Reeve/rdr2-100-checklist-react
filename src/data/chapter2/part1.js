// src/data/chapter2/part1.js
const chapter2Part1 = {
  introText: [
    "Don’t jump into the story missions straight away! There are some easy challenges close by — completing these early will save you time later when camp moves.",
    "Your first goals: finish skinning deer, shoot some birds, and gather Yarrow herbs east of camp. You’ll also unlock the Dinosaur Bones quest nearby.",
    "Although not required for 100%, picking up the Limpany gold bar is an easy $500 and helps with early purchases like the Varmint Rifle."
  ],
  activities: [
    {
      id: 1,
      type: "Challenge",
      name: "Master Hunter 1 — Skin 3/3 deer",
      location: "Twin Stack Pass, New Hanover",
      icon: "H",
      notes: ["You already skinned 1 in Chapter 1. Two more can be found east of Horseshoe Overlook."]
    },
    {
      id: 2,
      type: "Challenge",
      name: "Sharpshooter 1 — Kill 3 flying birds",
      location: "Twin Stack Pass, New Hanover",
      icon: "H",
      notes: ["Shoot any flying bird. Easy to complete while hunting deer."]
    },
    {
      id: 3,
      type: "Challenge",
      name: "Herbalist 1 — Pick 6 Yarrow",
      location: "Twin Stack Pass, New Hanover",
      icon: "H",
      notes: ["Discard Hosea’s starter herbs if needed. Clumps of 3 grow in the area."]
    },
    {
      id: 4,
      type: "Stranger Mission",
      name: "A Test of Faith — Dinosaur Bones",
      location: "The Heartlands, New Hanover",
      icon: "?",
      notes: ["Deborah MacGuiness gives you the quest. More Yarrow grows right next to her wagon."]
    },
    {
      id: 5,
      type: "Optional",
      name: "Loot Gold Bar",
      location: "Limpany, New Hanover",
      icon: "-",
      notes: ["Inside the Sheriff’s office box. Worth $500 at a fence."]
    },
    {
      id: 6,
      type: "Story Mission",
      name: "Who is Not Without Sin",
      location: "Flatneck Station, New Hanover",
      icon: "RS",
      notes: ["Meet Reverend Swanson. Play poker here to progress Gambler Challenge 1."],
      tips: [
        "Win 5 poker hands without folding — likely scripted to guarantee wins.",
        "Gold Medal: Finish within 2 minutes, win without losing a hand."
      ],
      link: "https://www.ign.com/wikis/red-dead-redemption-2/Who_is_Not_Without_Sin"
    },
    {
      id: 7,
      type: "Stranger Mission",
      name: "Smoking and Other Hobbies",
      location: "Flatneck Station, New Hanover",
      icon: "?",
      notes: ["Unlocks cigarette cards collection."]
    },
    {
      id: 8,
      type: "Stranger Mission",
      name: "All That Glitters — Jack Hall Treasure",
      location: "NW of Flatneck Station, New Hanover",
      icon: "?",
      notes: ["Buy the first Jack Hall Gang treasure map from a stranger. Unlocks Explorer Challenge 1."]
    },
    {
      id: 9,
      type: "Explorer Challenge",
      name: "Jack Hall Treasure Map 1",
      location: "Caliban’s Seat, New Hanover",
      icon: "H",
      notes: ["Completes Explorer Challenge 1."]
    },
    {
      id: 10,
      type: "Optional",
      name: "Sell Gold Bar",
      location: "Fence, North of Rhodes",
      icon: "-",
      notes: ["Boosts finances early. Buy the Varmint Rifle while here."]
    },
    {
      id: 11,
      type: "Gambler Challenge",
      name: "Blackjack — Double Down Wins (5)",
      location: "Rhodes Saloon, New Hanover",
      icon: "H",
      notes: ["Keep doubling down until you’ve won 5 times."],
    },
    {
      id: 12,
      type: "Weapons",
      name: "Buy Varmint Rifle",
      location: "Gun Store, Rhodes",
      icon: "H",
      notes: ["Essential for hunting small animals. Don’t rob the basement yet — that’s used for a Bandit Challenge later."]
    },
    {
      id: 13,
      type: "Explorer Challenge",
      name: "Jack Hall Treasure Map 2",
      location: "Caliban’s Seat, New Hanover",
      icon: "H",
      notes: ["Follow the first treasure clue to collect the second map."]
    }
  ],
  outroText: [
    "By the end of Part I, you’ll have several challenges started or completed, early money from the Limpany gold bar, and key equipment like the Varmint Rifle.",
    "You’re also set up with multiple Stranger missions and treasure maps that will carry forward through Chapter 2."
  ]
};

export default chapter2Part1;
