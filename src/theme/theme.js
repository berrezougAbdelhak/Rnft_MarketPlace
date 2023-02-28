import { Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    fontFamily:["Roboto","Arial","sans-serif"].join(",") ,
    palette: {
        primary: {
            main:"#325BE2"
        }

    },
    typography:{
        l: {
            fontSize: "15px",
            
            lineHeight: "16px",
          },
        lBold: {
            fontSize: "15px",
            fontWeight: "700",
            lineHeight: "16px",
          },
    }


})