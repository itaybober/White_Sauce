import React from "react";
import "./App.css";
import GameManager from "./Pages/GameManager";
import Background from "./Components/Background";

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
