import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counterapp = () => {
  var[val,valchange]=useState(0)
    const  add =()=>{
        valchange(val+1)
   }
   const  sub =()=>{
    valchange(val-1)
}
  return (
    <div>
    
        <Typography variant='h4'>Count:<br></br>{val}</Typography><br></br>
        <Button variant='contained' onClick={add} color='success'>+</Button>&nbsp;&nbsp;
        <Button variant='contained' onClick={sub} color='error'>-</Button>
    </div>
  )
}

export default Counterapp