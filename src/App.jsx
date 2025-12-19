import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LoadingScreen from './components/LoadingScreen'
import Footer from './components/Footer'
import Home from './pages/Home'
import UserTypeSelection from './pages/UserTypeSelection'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import ChoicePage from './pages/ChoicePage'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import './i18n/config'
import './styles/global.css'

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  return isLoggedIn ? children : <Navigate to="/user-type" />
}

function App() {
  const [showLoading, setShowLoading] = useState(true)
  const { i18n } = useTranslation()

  useEffect(() => {
    const lang = i18n.language || 'ar'
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', lang)
  }, [i18n])

  if (showLoading) {
    return <LoadingScreen onComplete={() => setShowLoading(false)} />
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user-type" element={<UserTypeSelection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/choice/:id"
            element={
              <PrivateRoute>
                <ChoicePage />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App

