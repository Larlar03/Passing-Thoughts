import React, { useState } from "react";
import ReactDOM from "react-dom";
import { generateId, getNewExpirationTime } from "./utilities";
import AddThoughtForm from "./AddThoughtForm";
import Thought from "./Thought";

function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "This is a place for your passing thoughts.",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought) => {
    setThoughts((prev) => [...prev, thought]);
  };

  const removeThought = (thoughtIdToRemove) => {
    setThoughts(thoughts.filter((thought) => thought.id !== thoughtIdToRemove));
  };

  return (
    <div className="App">
      <div className="Container">
        <header>
          <h1>Passing Thoughts</h1>
        </header>
        <main>
          <AddThoughtForm addThought={addThought} />
          <ul className="thoughts">
            {thoughts.map((thought) => (
              <Thought
                key={thought.id}
                thought={thought}
                removeThought={removeThought}
              />
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}

export default App;
