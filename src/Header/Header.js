import { Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
function Header() {
    const navigate=useNavigate()
  return (
    <Box sx={{width:"100%",height:"80px",display:"flex", justifyContent:"space-between",alignItems:"center",px:"20px",color:"rgb(0, 88, 255)"}}>
        <Box onClick={()=>{navigate("/")}} sx={{cursor:"pointer",fontSize:"25px",fontWeight:"700"}} >
        MarketPlace
        </Box>

      <NavBar/>

    </Box>
    
  )
}

export default Header