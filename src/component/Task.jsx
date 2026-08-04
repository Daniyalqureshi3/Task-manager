import React, { useState, useEffect } from "react";
import { usetheme } from "../context/Toggletheme";
import { usetask } from "../context/Taskcontext";
import { useFilter } from "../context/Filtercontext";
import "./Task.css";

function Task() {
  const { state: setting } = usetheme();
  const { state, dispatch } = usetask();
  const { state: filterstate } = useFilter();
  const [view, setView] = useState(
      localStorage.getItem("view") || "list"
  );
useEffect(() => {
  localStorage.setItem("view", view);
}, [view]);


  const filtrertask = state.task.filter((task) => {
    if (filterstate.filter === "DONE") return task.complete;
    if (filterstate.filter === "PENDING") return !task.complete;
    return true;
  });

  return (
    <div className={`task-container ${setting.darkmode ? "dark" : "light"}`}>
      <div className="view-buttons">
        <button onClick={() => setView("list")}>📋 List View</button>
        <button onClick={() => setView("grid")}>🔲 Grid View</button>
      </div>

      <div className={view === "grid" ? "task-grid" : "task-list"}>
        {filtrertask.map((task) => (
          <div key={task.id} className="task-card">
            <h3
              style={{
                textDecoration: task.complete ? "line-through" : "none",
                color: task.complete ? "gray" : "inherit",
              }}
            >
              {task.text}
            </h3>

            <p>
              <strong>Priority:</strong> {task.priority}
            </p>

            <p>
              <strong>Date:</strong> {task.date}
            </p>

            <div className="task-actions">
              <input
                type="checkbox"
                checked={task.complete}
                onChange={() =>
                  dispatch({
                    type: "TOGGLE_TASK",
                    payload: task.id,
                  })
                }
              />

              <button
                onClick={() => {
                  const updatedText = prompt("Edit Task", task.text);

                  if (updatedText) {
                    dispatch({
                      type: "EDIT_TASK",
                      payload: {
                        id: task.id,
                        text: updatedText,
                      },
                    });
                  }
                }}
              >
                Edit
              </button>

              <button
                onClick={() =>
                  dispatch({
                    type: "DELETE_TASK",
                    payload: task.id,
                  })
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;
