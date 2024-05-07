import { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Login from './pages/Login'
import Register from './pages/Register'
import { ThemeContext } from './context/ThemeContext'
import Motivation from './pages/Motivation'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <ThemeContext.Provider value={{darkTheme,setDarkTheme}}>
    <main className={darkTheme ? "dark text-foreground bg-background":"light text-foreground bg-background"}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/motivation" element={<Motivation/>}/>
      </Routes>
    </main>
    </ThemeContext.Provider>
  )
}

export default App
