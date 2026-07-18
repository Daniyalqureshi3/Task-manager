import React from 'react'
import { usetheme } from '../context/Toggletheme'
import { useFilter } from '../context/Filtercontext';
import './Filter.css'

function Filter() {
    const{state:setting} =usetheme();
    const {state, dispatch} = useFilter();
  return (
    <div className={`task-button ${setting.darkmode ? "dark" : "light"}`}>
        <button onClick={()=> dispatch({
        type:"SET_FILTER", payload:"ALL"
      })}>ALL</button>
      {/*  */}
      <button onClick={()=> dispatch({
        type:"SET_FILTER", payload:"DONE"
      })}>DONE</button>
      <button onClick={()=> dispatch({
        type:"SET_FILTER", payload:"PENDING"
      })}>PENDING</button>
    </div>
  )
}

export default Filter
