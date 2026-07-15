import React from 'react'
import { usetheme } from '../context/Toggletheme'
import './Navbar.css'

function Navbar() {
    const {state, dispatch} = usetheme();

  return (
    <nav className={`navbar ${state.darkmode ? "dark" : "light"}`}>
      <h1>Smart Task Manager</h1>

      <button
        className="theme-btn"
        onClick={() =>
          dispatch({
            type: "TOGGLE_MODE",
          })
        }
      >
        {state.darkmode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  )
}

export default Navbar
