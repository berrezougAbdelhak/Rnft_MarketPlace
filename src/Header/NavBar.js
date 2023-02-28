import { Box } from "@mui/material";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavBarElement from "./NavBarElement";
function NavBar() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        
        fontSize: "20px",
        display: "flex",
        fontWeight: "700",
        mx: "40px",
      }}
    >
      <NavBarElement path={"/collection"} text={"Mes collection"} />
    </Box>
  );
}

export default NavBar;
