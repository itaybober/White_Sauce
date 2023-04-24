import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Itay_Testing from "./Itay_Folder/Itay_Testing";
// import reactTutorial from "./Itay_Folder/react tutorial";
// import main_page from "./Pages/main_page";
import reportWebVitals from './reportWebVitals';
// import FirebaseTest from "./Achsaf_Folder/FirebaseTest";
// import Chwazi from "./Achsaf_Folder/Chwazi";
// import Demo from "./Achsaf_Folder/Demo";
// import Dugma from "./Pages/Dugma";
// import Survival_mission from "./Pages/Survival_mission";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Filters from "./Pages/filters";
import Mainpage from "./Pages/main_page";
// import Itay_Testing from "./Itay_Folder/Itay_Testing";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(

  <React.StrictMode>
      <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <Itay_Testing />
          </ThemeProvider>
      </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
