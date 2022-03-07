import React from "react"
import ContextComponent from "./components/ContextComponent"
import './styles/App.css'
import { ThemeProvider } from "./ThemeContext"

export const ThemeContext = React.createContext()

export default function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ContextComponent />
      </ThemeProvider>
    </div>
  );
}