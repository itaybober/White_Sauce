import React from 'react';
import logo from './logo.svg';
import './App.css';
import Survival_mission from "./Pages/Survival_mission";
import {ThemePage} from "./Pages/Theme_page";
import GameManager from "./Pages/GameManager";
import EndingPage from "./Pages/EndingPage";
import Background from "./Components/Background";
import galiLogo from "./Pages/images/gali_test_logo.png";



function App() {
    return (
        <div className="App">
            <Background>
                <GameManager />
            </Background>
        </div>
  );
}

export default App;
