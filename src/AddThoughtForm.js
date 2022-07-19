import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "./utilities";

export default function AddThoughtForm(props) {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);

  const handleTextChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newThought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    };

    if (text.length > 0) {
      props.addThought(newThought);
      setError("");
    } else {
      setError("Error");
    }
    setText("");
  };

  return (
    <form onClick={handleSubmit} className="AddThoughtForm">
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        aria-label="What's on your mind"
        placeholder="Whats on your mind?"
        className="form-control"
        id={error}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">
          Add
        </button>
      </div>
    </form>
  );
}
