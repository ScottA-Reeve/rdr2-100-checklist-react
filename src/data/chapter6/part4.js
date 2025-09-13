// src/data/chapter6/part4.js
const chapter6Part4 = {
  introText: [
    "Travel to Valentine to trigger the next Jim Boy Calloway encounter by speaking with the barman. This unlocks the next stage of 'The Noblest of Men, and a Woman' in Saint Denis.",
    "Collect Francis Sinclair’s letter from the station to continue 'Geology for Beginners.' If the letter hasn’t arrived yet, sleep at the hotel to advance time.",
    "Outside Valentine station, complete Sharpshooter Challenge 9 by shooting three hats off in one Dead Eye sequence. Do not paint targets — just aim manually to avoid killing them.",
    "Escape southward to clear any wanted level, then ride to Twin Stack Pass to complete Sharpshooter Challenge 10 by killing three flying birds with consecutive scoped rifle shots.",
    "Visit Francis Sinclair in Big Valley to complete 'Geology for Beginners.' After the cutscene, re-enter the cabin to collect the missable Old Brass Compass (useful for crafting, though not required for 100%).",
    "Travel to Bayou NWA to catch three fish needed to finish Survivalist 10: Bullhead Catfish, Longnose Gar, and Channel Catfish. Collect at least 7 Oleander Sage in preparation for Herbalist 8.",
    "Head to Saint Denis to trigger 'The Noblest of Men, and a Woman – III' followed by 'Goodbye, Dear Friend' with Sadie.",
    "Call in at Willard’s Rest to finish Charlotte’s storyline, then conclude 'The Noblest of Men, and a Woman – IV' in Annesburg. Don’t forget to collect Calloway’s Revolver, which is missable.",
    "Return to Beaver Hollow to complete 'The Fine Art of Conversation.'"
  ],

  activities: [
    {
      type: "Stranger Mission",
      name: "The Noblest of Men, and a Woman – II",
      location: "Valentine, New Hanover",
      icon: "JBC",
      notes: ["Short cutscene encounter with the barman to advance the questline."],
      link: "https://www.ign.com/wikis/red-dead-redemption-2/The_Noblest_of_Men,_and_a_Woman"
    },
    {
      type: "Mail",
      name: "Pick up Francis Sinclair’s Letter",
      location: "Valentine, New Hanover",
      icon: "",
      notes: [
        "Triggers the final stage of 'Geology for Beginners.'",
        "If not available, sleep for a day or two to let the letter arrive."
      ],
      link: "https://www.ign.com/wikis/red-dead-redemption-2/Geology_for_Beginners"
    },
    {
      type: "Challenge",
      name: "Sharpshooter 9 — Shoot 3 hats off in one Dead Eye use",
      location: "Valentine, New Hanover",
      icon: "",
      notes: [
        "Do not paint targets — manually aim at hats to avoid killing NPCs.",
        "If NPC spawns don’t line up, leave the area and return until two men appear near the station."
      ],
      link: "https://www.ign.com/wikis/red-dead-redemption-2/Sharpshooter_Challenge"
    },
    {
      type: "Challenge",
      name: "Sharpshooter 10 — Kill 3 flying birds with 3 scoped rifle shots",
      location: "Twin Stack Pass, New Hanover",
      icon: "",
      notes: [
        "Use a Rolling Block Rifle or Carcano Rifle.",
        "Complete without missing to finish Sharpshooter Challenge 10."
      ],
      link: "https://www.ign.com/wikis/red-dead-redemption-2/Sharpshooter_Challenge"
    },
    {
      type: "Stranger Mission",
      name: "Geology for Beginners – II",
      location: "Big Valley, West Elizabeth",
      icon: "FS",
      notes: [
        "Complete Sinclair’s questline.",
        "Re-enter the cabin after the cutscene to collect the missable Old Brass Compass."
      ],
      link: "https://www.ign.com/wikis/red-dead-redemption-2/Geology_for_Beginners"
    },
    {
      type: "Non-100%",
      name: "Collect the Old Brass Compass",
      location: "Big Valley, West Elizabeth",
      icon: "",
      notes: [
        "Missable item rewarded after 'Geology for Beginners.'",
        "Required for crafting the Raven Claw Talisman (not tied to 100%)."
      ],
      link: ""
    },
    {
      type: "Survivalist Challenge",
      name: "Catch a Longnose Gar",
      location: "Lagras, Lemoyne",
      icon: "",
      notes: ["Use Swamp Lure during daytime for higher catch rates."],
      link: ""
    },
    {
      type: "Survivalist Challenge",
      name: "Catch a Bullhead Catfish",
      location: "Bayou NWA, Lemoyne",
      icon: "",
      notes: ["Found in small ponds — use bait rather than lure."],
      link: ""
    },
    {
      type: "Survivalist Challenge",
      name: "Catch a Channel Catfish",
      location: "Kamassa River, Lemoyne",
      icon: "",
      notes: ["Look in deeper water near bends in the river."],
      link: ""
    },
    {
      type: "Preparation",
      name: "Collect Oleander Sage",
      location: "Bayou NWA, Lemoyne",
      icon: "",
      notes: [
        "Ensure you have at least 7 Oleander for Herbalist Challenge 8.",
        "Commonly found along the Kamassa River."
      ],
      link: ""
    },
    {
      type: "Stranger Mission",
      name: "The Noblest of Men, and a Woman – III",
      location: "Saint Denis, Lemoyne",
      icon: "JBC",
      notes: ["Another cutscene stage in the Calloway questline."],
      link: "https://www.ign.com/wikis/red-dead-redemption-2/The_Noblest_of_Men,_and_a_Woman"
    },
    {
      type: "Story Mission",
      name: "Goodbye, Dear Friend",
      location: "Saint Denis, Lemoyne",
      icon: "SA",
      notes: ["Help Sadie Adler finally take down Colm O’Driscoll."],
      tips: [
        "Gold Medal: Kill 8 lawmen while escaping the gallows.",
        "Gold Medal: Complete with at least 80% accuracy.",
        "Gold Medal: Complete without taking any health items."
      ],
      link: "https://www.ign.com/wikis/red-dead-redemption-2/Goodbye,_Dear_Friend"
    },
    {
      type: "Stranger Mission",
      name: "The Widow of Willard’s Rest – III",
      location: "Willard’s Rest, New Hanover",
      icon: "CB",
      notes: ["Final encounter with Charlotte to conclude her storyline."],
      link: "https://www.ign.com/wikis/red-dead-redemption-2/The_Widow_of_Willard%27s_Rest"
    },
    {
      type: "Stranger Mission",
      name: "The Noblest of Men, and a Woman – IV",
      location: "Annesburg, New Hanover",
      icon: "JBC",
      notes: [
        "Final duel in the Calloway questline.",
        "Pick up Calloway’s Revolver after the mission — it is missable."
      ],
      link: "https://www.ign.com/wikis/red-dead-redemption-2/The_Noblest_of_Men,_and_a_Woman"
    },
    {
      type: "Story Mission",
      name: "The Fine Art of Conversation",
      location: "Beaver Hollow, New Hanover",
      icon: "T",
      notes: ["Dutch discusses plans with Eagle Flies."],
      tips: [
        "Gold Medal: Kill 2 Pinkertons with Dead Eye.",
        "Gold Medal: Complete within 9 minutes 30 seconds.",
        "Gold Medal: Get 80% accuracy."
      ],
      link: "https://www.ign.com/wikis/red-dead-redemption-2/The_Fine_Art_of_Conversation"
    }
  ],

  outroText: [
    "This section wraps up several challenge lines: Sharpshooter 10 is complete, and Survivalist 10 is nearly finished.",
    "The Old Brass Compass and Calloway’s Revolver are both missable, so make sure you collect them.",
    "Arthur’s honour and relationship arcs are reinforced here with the Charlotte storyline and Calloway finale."
  ]
};

export default chapter6Part4;
