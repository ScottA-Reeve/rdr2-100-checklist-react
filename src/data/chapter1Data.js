// src/data/chapter1Data.js

const chapter1Data = {
  introText: [
    `Chapter 1 is fairly limited. Most of the missions auto-start, and the weather won't allow you to leave camp on your own in free-roam - your horse will collapse and die rapidly in the cold.`,
    `However, there are a couple of challenges to look out for within the missions. There's a slight choice you have to make on the order of the missions here, which doesn't materially affect your quest for 100%, but does influence the ease of getting gold.`,
    `The mission "Old Friends" unlocks the use of Dead Eye, and you can do this before "The Aftermath of Genesis" if you prefer as Dead Eye will make it slightly easier to get a clean kill on the deer. However, in terms of chronology and story authenticity, it feels to me more likely Arthur would go out in search of food first, hence the chosen order below.`,
  ],

  outroText: [
    `You will also get the first of 6 gangs automatically added, some weapons, equipment and animals to the compendium however you play. Other than that, this is very much a case of enjoying some introductory missions.`,
  ],

  activities: [
    {
      type: "Story Mission",
      name: "Outlaws from the West",
      location: "Colter",
      icon: "A",
      notes: "This is the introduction mission, cannot be missed.",
      tips: [
        "Take no damage during the shootout",
        "Loot 6 or more items",
        "Clear the barn fight quickly",
      ],
      link: "https://www.ign.com/wikis/red-dead-redemption-2/Outlaws_from_the_West",
    },
    {
      type: "Story Mission",
      name: "Enter, Pursued by a Memory",
      location: "Colter",
      icon: "J",
      notes: "Introduces horse mechanics.",
      tips: [
        "Kill all wolves without taking damage",
        "Return to camp within 1 minute 30 seconds",
      ],
      link: "https://www.ign.com/wikis/red-dead-redemption-2/Enter,_Pursued_by_a_Memory",
    },
    {
      type: "Story Mission",
      name: "The Aftermath of Genesis",
      location: "Colter",
      icon: "C",
      notes: "Learn hunting basics, hunt deer.",
      tips: [
        "Kill each deer with a clean shot",
        "Kill 2 deer with one use of Dead Eye",
      ],
      link: "https://www.ign.com/wikis/red-dead-redemption-2/The_Aftermath_of_Genesis",
    },
    {
      type: "Master Hunter 1",
      name: "Skin 1/3 Deer",
      location: "Colter",
      icon: "",
      notes: "Challenge started automatically at the end of this mission",
    },
    {
      type: "Story Mission",
      name: "Old Friends",
      location: "Colter",
      icon: "M",
      notes: "First big shootout.",
      tips: [
        "Catch and hogtie Kieran within 45 seconds",
        "Kill 3 O’Driscolls with a single Dead Eye use",
        "Complete the mission with at least 80% accuracy",
      ],
      link: "https://www.ign.com/wikis/red-dead-redemption-2/Old_Friends",
    },
    {
      type: "Story Mission",
      name: "Who the Hell is Leviticus Cornwall?",
      location: "Colter",
      icon: "D",
      notes: "Train robbery tutorial.",
      tips: [
        "Save Lenny when he hangs from the train",
        "Get 10 headshots",
        "Complete the mission without taking any health items",
      ],
      link: "https://www.ign.com/wikis/red-dead-redemption-2/Who_the_Hell_is_Leviticus_Cornwall%3F",
    },
    {
      type: "Weapons Expert 1",
      name: "Kill 1/3 Enemies with a Knife",
      location: "Railway Track, Ambarino",
      icon: "",
      notes:
        "During the mission, don't send Lenny to kill the second guard on the train, run up and stab him",
    },
    {
      type: "Story Mission",
      name: "Eastward Bound",
      location: "Colter",
      icon: "D",
      notes: "Leads you out of the snowy mountains.",
      tips: ["Complete within 6 minutes"],
      link: "https://www.ign.com/wikis/red-dead-redemption-2/Eastward_Bound",
    },
  ],
};

export default chapter1Data;
