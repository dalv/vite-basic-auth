// @ts-nocheck

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRoutes'
import { AuthProvider } from './utils/AuthContext'
import { ThemeProvider } from "@/components/theme-provider"
import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
          <AuthProvider>
            <Header/>
            <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route element={<PrivateRoutes />}>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
              </Route>
            </Routes>
          </AuthProvider>
      </Router>
    </ThemeProvider>
  )
}

export default App
