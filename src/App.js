
import Header from "./Header/Header";
import { BrowserRouter} from 'react-router-dom';
import { Box } from "@mui/material";
import Router from "./router/Router";
import { ThemeProvider } from "@mui/system";
import { theme } from "./theme/theme";

function App() {
   

  return (
    <ThemeProvider theme={theme}>
      
      <BrowserRouter>
      <Box sx={{display:"flex", flexDirection:"column",minHeight:"100vh"}}>
        <Header/>
        <Box sx={{ px: 2 }}>
              <Router />
         </Box>
      </Box>
      
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App