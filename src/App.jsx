import { useState } from 'react'
import './App.css'
import { Taskprovider } from './context/Taskcontext'
import { Toggleprovider } from './context/Toggletheme'
import { Filterprovider } from './context/Filtercontext'
import Taskinput from './component/Taskinput'
import Navbar from './component/Navbar'
import Task from './component/Task'
import Filter from './component/Filter'

function App() {


  return (
    <>
     <Taskprovider>
      <Toggleprovider>
        <Filterprovider>
        <Navbar/>
        <Taskinput/>
        <Filter/>
        <Task/>

        </Filterprovider>
      </Toggleprovider>
     </Taskprovider>
    </>
  )
}

export default App
