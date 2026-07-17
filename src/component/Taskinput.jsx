import React, { useState } from "react";
import { usetask } from "../context/Taskcontext";
import { usetheme } from "../context/Toggletheme";
import "./Input.css"

function Taskinput() {
    const { dispatch } = usetask();
    const { state: setting } = usetheme();

    const [text, settext] = useState("");
    const [date, setDate] = useState("");
    const [priority, setPriority] = useState("");

    const handleadd = () => {
        if (!text.trim()) return;

        dispatch({
            type: "ADD_TASK",
            payload: {
                text: text,
                priority: priority,
                date: new Date().toLocaleDateString()
            }
        });

        settext("");
        setDate("");
        setPriority("low");
    };

    return (
        <div
            style={{
                background: setting.darkmode ? "#000" : "#fff",
                color: setting.darkmode ? "#fff" : "#000",
            }}>
            <input
                type="text"
                value={text}
                onChange={(e) => settext(e.target.value)}
                placeholder="Enter Task"
            />
            <input
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
/>
<select
    value={priority}
    onChange={(e) => setPriority(e.target.value)}
>
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>
</select>

            <button onClick={handleadd}>
                Add Task
            </button>
        </div>
    );
}

export default Taskinput;