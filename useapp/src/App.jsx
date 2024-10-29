import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Counterapp from './components/Counterapp'
import Btn from './components/Btn'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/c' element= {<Counterapp/>}></Route>
    <Route path='/s' element= {<StateBasics/>}></Route>
    <Route path='/w' element= {<Btn/>}></Route>
    </Routes>
    </>
  )
}

export default App
