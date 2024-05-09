import { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Login from './pages/Login'
import Register from './pages/Register'
import { ThemeContext } from './context/ThemeContext'
import Motivation from './pages/Motivation'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from './context/UserContext'
import Test from './pages/Test'
import ProtectedRoutes from './utils/ProtectedRoutes'
import ContributorLogin from './pages/ContributerLogin'
import ContributorRegister from './pages/ContributerRegister'

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
        <Route element={<ProtectedRoutes/>}>
        <Route path="/motivation" element={<Motivation/>}/>
        </Route>
        <Route path="/test" element={<Test/>}/>
        <Route path="/contributorlogin" element={<ContributorLogin/>}/>
        <Route path="/contributorregister" element={<ContributorRegister/>}/>
      </Routes>
      </UserContextProvider>
      <Toaster/>
    </main>
    </ThemeContext.Provider>
  )
}

export default App
