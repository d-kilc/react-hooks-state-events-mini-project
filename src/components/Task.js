import React from "react";

function Task({text, category, handleTaskDelete}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      {/* call event handler with task text so we can find that same task and delete it */}
      <button className="delete" onClick={(e) => handleTaskDelete(text)}>X</button>
    </div>
  );
}

export default Task
