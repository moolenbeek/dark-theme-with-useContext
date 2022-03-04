import React, { useState } from "react";
import ContextComponent from "./components/ContextComponent";

export const ThemeContext = React.createContext();

const App = () => {

  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ContextComponent />
      </ThemeContext.Provider>
    </>
  );
}

export default App;