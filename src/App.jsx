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
    <div
      style={{
        padding: "2rem",
        fontFamily: "serif",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <h1>Red Dead Redemption 2 - 100% Completion Guide</h1>

      {/* --- Introduction Section --- */}
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          The purpose of this guide is to provide a strategy for achieving 100%
          completion in <strong>Red Dead Redemption 2</strong> as efficiently as
          possible.
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
        <p>
          <a href="#toc">⬇️ Go to Table of Contents</a>
        </p>
      </section>

      {/* --- Table of Contents --- */}
      <section id="toc">
        <h2>Table of Contents</h2>
        <ol>
          <li>
            <a href="#strategy">A) Overall Strategy *</a>
          </li>
          <li>
            <a href="#chapter1">B) Chapter 1</a>
          </li>
          <li>
            <a href="#chapter2">C) Chapter 2</a>
          </li>
          <li>
            <a href="#chapter3">D) Chapter 3</a>
          </li>
          <li>
            <a href="#chapter4">E) Chapter 4</a>
          </li>
          <li>
            <a href="#chapter5">F) Chapter 5</a>
          </li>
          <li>
            <a href="#chapter6">G) Chapter 6</a>
          </li>
          <li>
            <a href="#epilogues">H) Epilogues Part 1 &amp; 2</a>
          </li>
          <li>
            <a href="#summary">I) Summary &amp; Acknowledgements</a>
          </li>
        </ol>
        <p>
          <em>
            *The strategy section explains the logic behind this order and
            highlights early tasks you should keep in mind from the very start
            of your playthrough.
          </em>
        </p>
      </section>

      {/* --- Placeholder Sections --- */}
      <section id="strategy">
        <h2>Overall Strategy</h2>
        <p>🔜 Content coming soon...</p>
        <p>
          <a href="#toc">⬆️ Back to Table of Contents</a>
        </p>
      </section>
      <section id="chapter1">
        <h2>Chapter 1</h2>
        <p>🔜 Content coming soon...</p>
        <p>
          <a href="#toc">⬆️ Back to Table of Contents</a>
        </p>
      </section>
      <section id="chapter2">
        <h2>Chapter 2</h2>
        <p>🔜 Content coming soon...</p>
        <p>
          <a href="#toc">⬆️ Back to Table of Contents</a>
        </p>
      </section>
      <section id="chapter3">
        <h2>Chapter 3</h2>
        <p>🔜 Content coming soon...</p>
        <p>
          <a href="#toc">⬆️ Back to Table of Contents</a>
        </p>
      </section>
      <section id="chapter4">
        <h2>Chapter 4</h2>
        <p>🔜 Content coming soon...</p>
        <p>
          <a href="#toc">⬆️ Back to Table of Contents</a>
        </p>
      </section>
      <section id="chapter5">
        <h2>Chapter 5</h2>
        <p>🔜 Content coming soon...</p>
        <p>
          <a href="#toc">⬆️ Back to Table of Contents</a>
        </p>
      </section>
      <section id="chapter6">
        <h2>Chapter 6</h2>
        <p>🔜 Content coming soon...</p>
        <p>
          <a href="#toc">⬆️ Back to Table of Contents</a>
        </p>
      </section>
      <section id="epilogues">
        <h2>Epilogues Part 1 &amp; 2</h2>
        <p>🔜 Content coming soon...</p>
        <p>
          <a href="#toc">⬆️ Back to Table of Contents</a>
        </p>
      </section>
      <section id="summary">
        <h2>Summary &amp; Acknowledgements</h2>
        <p>🔜 Content coming soon...</p>
        <p>
          <a href="#toc">⬆️ Back to Table of Contents</a>
        </p>
      </section>

      {/* --- Checklist Section --- */}
      <section id="checklist">
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
        <p>
          <a href="#toc">⬆️ Back to Table of Contents</a>
        </p>
      </section>
    </div>
  );
}

export default App;
