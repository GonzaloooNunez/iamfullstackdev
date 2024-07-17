import React, { useState } from "react";

const InputCreate = () => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task.trim()) {
      try {
        const response = await fetch("http://localhost:3001/create", {
          // Ajusta la URL según tu backend
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: task }),
        });

        if (response.ok) {
          console.log("Task created successfully");
          setTask(""); // Limpiar el input
        } else {
          console.error("Failed to create task");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default InputCreate;
