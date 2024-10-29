import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
   var [name,setname]=useState()
   var [val,setvalue]=useState()
   const  handInput =(e)=>{
        console.log(e.target.value)
        setname(e.target.value)
   }
 
   const  change=()=>{
    setvalue(name)
}
  return (
    <div>
        <Typography variant='h4'> Welcome {val}</Typography><br></br>
        <TextField variant='outlined' label='Enter the name' onChange={handInput}></TextField><br></br><br></br>
        <button onClick={change}>Done</button>
    </div> 
  )
}

export default StateBasics