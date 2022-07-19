import React, { useEffect } from "react";

export default function Thought(props) {
  const handleRemoveClick = () => {
    props.removeThought(props.thought.id);
  };

  useEffect(() => {
    const timeRemaining = props.thought.expiresAt - Date.now();
    const timeout = setTimeout(() => {
      props.removeThought(props.thought.id);
    }, timeRemaining);
    return () => {
      clearTimeout(timeout);
    };
  }, [props.thought]);

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{props.thought.text}</div>
    </li>
  );
}
