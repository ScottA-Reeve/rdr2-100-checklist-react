import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete all story missions", done: false },
    { id: 2, text: "Find all cigarette cards", done: false },
    { id: 3, text: "Discover all gang hideouts", done: false },
    { id: 4, text: "Hunt legendary animals", done: false },
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "serif" }}>
      <h1>Red Dead Redemption 2 - 100% Checklist</h1>
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
    </div>
  );
}

export default App;
