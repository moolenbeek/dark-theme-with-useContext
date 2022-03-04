import React, { useState } from "react";
import ContextComponent from "./components/ContextComponent";
import './styles/App.css'

export const ThemeContext = React.createContext();

const App = () => {

  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={darkTheme}>
        <ContextComponent />
        <button id='button' onClick={toggleTheme}>Toggle Theme</button>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;