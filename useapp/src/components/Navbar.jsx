import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar sx={{background: 'rgb(12,13,24)',
background: 'linear-gradient(90deg, rgba(12,13,24,1) 0%, rgba(187,37,87,1) 48%, rgba(1,10,11,1) 100%)'}}>
            <Toolbar>
                <Typography variant='h5'>My_App</Typography>
                <Link to='/s'>
                <Button variant='contained' sx={{marginLeft:'650px',backgroundColor:'white',color:'black'}}>State</Button>
                </Link>
                <Link to='/c'>
                <Button variant='contained' sx={{backgroundColor:'white',color:'black',marginLeft:'7px'}}>Counder</Button>
                
                </Link>
                <Link to='/w'>
                <Button variant='contained' sx={{backgroundColor:'white',color:'black',marginLeft:'7px'}}>Name</Button>
                
                </Link>
            </Toolbar>
        </AppBar>
        <br></br><br></br>
    </div>
  )
}

export default Navbar