import React, { useState } from "react";
import { usetheme } from "../context/Toggletheme";
import { usetask } from "../context/Taskcontext";
import { useFilter } from "../context/Filtercontext";

function Task() {
  const { state: setting } = usetheme();
  const { state, dispatch } = usetask();
   const{state:filterstate} = useFilter();
   const [view, setView] = useState();

       const filtrertask = state.task.filter((task)=>{
        if(filterstate.filter === "DONE") return task.complete
        if (filterstate.filter === "PENDING") return !task.complete
        return true; 
    })



  return (
    <div
      style={{
        background: setting.darkmode ? "#000" : "#fff",
        color: setting.darkmode ? "#fff" : "#000",
      }}
    >
      <button onClick={() => setView("list")}>List View</button>

<button onClick={() => setView("grid")}>Grid View</button>
      {/*  */}
      <div
        style={{
    display: "grid",
    gridTemplateColumns:
      view === "grid" ? "repeat(3, 1fr)" : "1fr",
    gap: "15px",
  }}
      >
              {filtrertask.map((task) => (
        <div key={task.id}>
          <h3
    style={{
        textDecoration: task.complete ? "line-through" : "none",
        color: task.complete ? "gray" : "inherit"
    }}
>
    {task.text}
</h3>
          <p>{task.priority}</p>
          <p>{task.date}</p>
          <div>
            <input
              type="checkbox"
              checked={task.complete}
              onChange={() =>dispatch({type: "TOGGLE_TASK",payload: task.id,})}/>
            {/*  */}
            <button
    onClick={() => {
        const updatedText = prompt("Edit Task", task.text);

        if (updatedText) {
            dispatch({
                type: "EDIT_TASK",
                payload: {
                    id: task.id,
                    text: updatedText
                }
            });
        }
    }}
>
    Edit
</button>

            <button
              onClick={() => {dispatch({ type: "DELETE_TASK", payload: task.id });}}>delete
            </button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Task;
