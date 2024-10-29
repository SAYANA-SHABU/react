import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Btn = () => {
    var[name,setname]=useState()
    const  react =()=>{
        setname("React")
   }
   const  ang=()=>{
    setname("Angular")
}
const view =()=>{
    setname("Vue")
}
useEffect(()=>{
    ang()
},[])//use effect funtion
  return (
    <div>
        <Typography variant='h4'>Welcome to <br></br>{name}</Typography><br></br>
        <Button variant='contained' onClick={react} color='primary'>React</Button>&nbsp;&nbsp;&nbsp;
        <Button variant='contained' onClick={ang}  color='secondary'>Angular</Button>&nbsp;&nbsp;&nbsp;
        <Button variant='contained'onClick={view}  color='success'>Vue</Button>
    </div>
  )
}

export default Btn