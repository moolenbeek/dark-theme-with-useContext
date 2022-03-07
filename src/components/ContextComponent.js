import { useTheme, useThemeUpdate } from "../ThemeContext"

export default function ContextComponent() {

  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem'
  }

  return (
    <>
      <div style={themeStyles}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis leo et leo sagittis, ut tincidunt nulla hendrerit. Cras cursus massa ut placerat luctus. Quisque euismod aliquam felis, nec eleifend risus imperdiet sit amet. Donec sed libero nibh. Sed fermentum mauris nec massa posuere, sed tempor ligula sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean ante eros, consectetur vel lobortis sit amet, iaculis non eros. Nunc rutrum, justo ac vehicula consectetur, sem felis tincidunt ipsum, et imperdiet arcu tellus sit amet nunc. Morbi justo nunc, volutpat vel iaculis non, malesuada nec enim.</div>
      <button id='button' onClick={toggleTheme}>Toggle Theme</button>
    </>
  )
}