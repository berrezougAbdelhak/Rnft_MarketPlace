import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
function Header() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: "20px",
        color: "rgb(0, 88, 255)",
      }}
    >
      <Box
        onClick={() => {
          navigate("/");
        }}
        sx={{display:"flex", alignItems:"center",  cursor: "pointer", fontSize: "25px", fontWeight: "700" }}
      >
        <img
          src="https://opensea.io/static/images/logos/opensea.svg"
          alt="OpenSea logo"
          width="50px"
        />
        <Typography color="common.black" fontSize={"25px"} fontWeight="700" sx={{ml:1,mt:0.5}}>
          OpenSea
        </Typography>
        
      </Box>

      <NavBar />
      
    </Box>
  );
}

export default Header;
