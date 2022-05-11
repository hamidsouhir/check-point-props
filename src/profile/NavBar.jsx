import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

function NavBar() {
  return (
    <div>
        <AppBar position="static">
  <Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
      Playstation.Store
    </Typography>
  </Toolbar>
</AppBar>
    </div>
  )
}

export default NavBar 
