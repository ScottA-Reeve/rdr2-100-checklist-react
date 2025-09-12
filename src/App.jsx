import { useState, useEffect } from "react";

function App() {
  const tasks = [
    "Complete all story missions",
    "Find all 144 cigarette cards",
    "Discover all animals",
    "Complete all stranger missions",
    "Win all minigames at least once",
  ];

  const [checked, setChecked] = useState(() => {
    // Load progress from localStorage
    const saved = localStorage.getItem("progress");
    return saved ? JSON.parse(saved) : Array(tasks.length).fill(false);
  });

  useEffect(() => {
    // Save progress whenever it changes
    localStorage.setItem("progress", JSON.stringify(checked));
  }, [checked]);

  const toggle = (i) => {
    setChecked((prev) =>
      prev.map((val, index) => (index === i ? !val : val))
    );
  };

  const progress = Math.round(
    (checked.filter(Boolean).length / tasks.length) * 100
  );

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1 style={{ color: "darkred" }}>Red Dead Redemption 2 – 100% Checklist</h1>

      <progress value={progress} max="100" style={{ width: "100%" }} />
      <p>{progress}% complete</p>

      {tasks.map((task, i) => (
        <div key={i} style={{ margin: "0.5rem 0" }}>
          <label>
            <input
              type="checkbox"
              checked={checked[i]}
              onChange={() => toggle(i)}
            />
            {task}
          </label>
        </div>
      ))}
    </div>
  );
}

export default App;
