import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirebaseTest from "./Achsaf_Folder/FirebaseTest";
import Chwazi from "./Achsaf_Folder/Chwazi";
import Demo from "./Achsaf_Folder/Demo";
import Dugma from "./Pages/Dugma";
import Background from "./Components/Background";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Background angle={100} color1={"green"} color2={"yellow"}>
          <Dugma />
      </Background>
      {/*<App />*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();