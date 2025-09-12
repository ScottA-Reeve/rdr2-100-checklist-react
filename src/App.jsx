import { useState, useEffect } from "react";

function App() {
  const initialTasks = [
    { id: 1, text: "Complete all story missions", done: false },
    { id: 2, text: "Find all cigarette cards", done: false },
    { id: 3, text: "Discover all gang hideouts", done: false },
    { id: 4, text: "Hunt legendary animals", done: false },
  ];

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("rdr2-checklist");
    return saved ? JSON.parse(saved) : initialTasks;
  });

  useEffect(() => {
    localStorage.setItem("rdr2-checklist", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "serif", maxWidth: "800px", margin: "auto" }}>
      <h1>Red Dead Redemption 2 - 100% Completion Guide</h1>

      {/* --- Introduction Section --- */}
      <section>
        <h2>Introduction</h2>
        <p>
          The purpose of this guide is to provide a strategy for achieving 100%
          completion in <strong>Red Dead Redemption 2</strong> as efficiently
          as possible.
        </p>
        <p>
          Unlike many other guides, this one focuses on the{" "}
          <strong>optimal order</strong> to complete every requirement. Without
          planning, reaching the <em>"Best in the West"</em> Achievement/Trophy
          can easily take over 100 hours. By combining collectibles, challenges,
          and side tasks in the right locations, you’ll cut down on unnecessary
          travel and repetition. Certain missions also allow challenges to be
          completed more easily than in free roam — this guide points those out.
        </p>
        <p>
          Having personally reached 100% on multiple playthroughs, I estimate
          this method can save <strong>at least 10 hours</strong> — often more —
          while making the journey smoother and more enjoyable.
        </p>
        <p>
          The guide avoids unnecessary distractions but includes suggestions for
          optional activities that make the main quest much easier. Some{" "}
          <strong>spoilers</strong> are unavoidable, so proceed with caution if
          you are new to the story.
        </p>
      </section>

      {/* --- Table of Contents --- */}
      <section id="toc">
        <h2>Table of Contents</h2>
        <ol>
          <li><a href="#strategy">A) Overall Strategy *</a></li>
          <li><a href="#chapter1">B) Chapter 1</a></li>
          <li><a href="#chapter2">C) Chapter 2</a></li>
          <li><a href="#chapter3">D) Chapter 3</a></li>
          <li><a href="#chapter4">E) Chapter 4</a></li>
          <li><a href="#chapter5">F) Chapter 5</a></li>
          <li><a href="#chapter6">G) Chapter 6</a></li>
          <li><a href="#epilogues">H) Epilogues Part 1 &amp; 2</a></li>
          <li><a href="#summary">I) Summary &amp; Acknowledgements</a></li>
        </ol>
        <p>
          <em>
            *The strategy section explains the logic behind this order and
            highlights early tasks you should keep in mind from the very start
            of your playthrough.
          </em>
        </p>
      </section>

      {/* --- Overall Strategy Section --- */}
      <section id="strategy">
        <h2>A) Overall Strategy</h2>

        <p>
          Before diving into the story, it’s worth looking at the full list of
          activities required by the in-game 100% checklist. This can feel
          overwhelming at first, but many tasks overlap or happen naturally as
          you play.
        </p>

        <details>
          <summary><strong>Click to expand full checklist</strong></summary>
          <pre style={{ whiteSpace: "pre-wrap", marginTop: "1rem" }}>
Missions and Events:
 - Missions
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
 - Max Health, Stamina, Dead Eye
 - Horse Bonding Level 4
 - All 9 Challenges Completed

Miscellaneous:
 - 5 Shacks
 - 5 Legendary Animals
 - 4 Table Games
 - 5 Ranters, Ravers, Campaigners
 - 1 Bath
 - 1 Show
 - 1 Theater
 - 6 Recipes crafted
 - 4 Robberies: Coach, Home, Shop, Train
          </pre>
        </details>

        <h3>Superfluous Tasks</h3>
        <p>
          Some requirements are automatically covered by challenges or missions
          — so you don’t need to track them separately:
        </p>
        <ul>
          <li>10 Fish (covered by Survivalist 10)</li>
          <li>10 Horses (covered by Horseman 10)</li>
          <li>20 Plants (covered by Herbalist 9)</li>
          <li>4 Table Games (covered by Gambler challenges)</li>
          <li>6 Recipes crafted (covered naturally)</li>
          <li>Treasure Hunter Chain (covered by Explorer)</li>
        </ul>

        <h3>Tasks That Require No Planning</h3>
        <p>
          You’ll almost certainly complete these without thinking about it:
        </p>
        <ul>
          <li>All Story Missions</li>
          <li>25 Chance Encounters</li>
          <li>Bushwhacked (an ambush will happen naturally)</li>
          <li>50 Animals studied</li>
          <li>10 Equipment</li>
          <li>6 Gangs discovered</li>
          <li>Horse Bonding Level 4</li>
          <li>5 Ranters, Ravers, Campaigners</li>
        </ul>

        <h3>Key Timing Considerations</h3>
        <p>
          Some challenges are dramatically easier before the end of Chapter 6
          (e.g. Sharpshooter & Weapons Expert at Six Point Cabin). Others
          cannot be completed until the Epilogue. The strategy is to plan
          around these story milestones.
        </p>

        <h4>Complete before the end of Chapter 6:</h4>
        <ul>
          <li>10 Stranger Missions</li>
          <li>5 Bounties</li>
          <li>1 Point of Interest</li>
          <li>144 Cigarette Cards</li>
          <li>All Exotics</li>
          <li>10 Rock Carvings</li>
          <li>20 Dreamcatchers</li>
          <li>5 Shacks</li>
          <li>5 Legendary Animals</li>
          <li>1 Bath, 1 Show, 1 Theater</li>
          <li>4 Robberies (Coach, Home, Shop, Train)</li>
          <li>Bandit, Explorer, Gambler, Master Hunter, Sharpshooter, Survivalist, Weapons Expert Challenges</li>
        </ul>

        <h4>Best saved for after Chapter 6:</h4>
        <ul>
          <li>30 Dinosaur Bones</li>
          <li>13 Legendary Fish</li>
          <li>Hunting Requests (activate early, finish later)</li>
          <li>Herbalist 9</li>
          <li>Horseman 9</li>
        </ul>

        <h3>Special Notes</h3>
        <ul>
          <li><strong>Exotics:</strong> Break it up, don’t grind in one sitting — corpses stop respawns.</li>
          <li><strong>Hunting Requests:</strong> Activate early, complete opportunistically.</li>
          <li><strong>Gambler 8:</strong> One of the hardest — save it for downtime, patience required.</li>
          <li><strong>End of Chapter 6:</strong> You lose cash, consumables, and horses — spend wisely beforehand.</li>
        </ul>

        <p>
          <a href="#toc">⬆️ Back to Table of Contents</a>
        </p>
      </section>

      {/* --- Checklist Section --- */}
      <section>
        <h2>Quick Checklist (Demo)</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((task) => (
            <li key={task.id} style={{ margin: "0.5rem 0" }}>
              <label>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                />
                <span style={{ marginLeft: "0.5rem" }}>
                  {task.done ? <s>{task.text}</s> : task.text}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
