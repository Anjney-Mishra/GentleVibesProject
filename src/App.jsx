import { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Login from './pages/Login'
import Register from './pages/Register'
import { ThemeContext } from './context/ThemeContext'
import Motivation from './pages/Motivation'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from './context/UserContext'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <ThemeContext.Provider value={{darkTheme,setDarkTheme}}>
    <main className={darkTheme ? "dark text-foreground bg-background":"light text-foreground bg-background"}>
      <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/motivation" element={<Motivation/>}/>
      </Routes>
      </UserContextProvider>
      <Toaster/>
    </main>
    </ThemeContext.Provider>
  )
}

export default App
