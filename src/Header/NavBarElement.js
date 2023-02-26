import { Box } from '@mui/material'
import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
function NavBarElement(props) {
    const navigate=useNavigate()
    const {pathname}=useLocation()
  return (

    <Box onClick={()=>{navigate(props.path)}} sx={{display:"flex",flexDirection:"column",mx:"20px", cursor:"pointer"}}>
            {props.text}
        {/* { pathname===props.path &&<Box sx={{width:"100%", height:"2px", bgcolor:"white",mt:"2px"}}>
        </Box> 
        }     */}
        
    </Box>

        
  )
}

export default NavBarElement