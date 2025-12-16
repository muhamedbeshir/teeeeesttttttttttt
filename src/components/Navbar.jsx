import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { BookOpen, Globe, LogIn, LogOut, Menu, X, Home, Info, Mail, Baby, Users } from 'lucide-react'

function Navbar() {
  const { i18n, t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userType, setUserType] = useState(null)
  const menuRef = useRef(null)

  // تحديث حالة تسجيل الدخول عند تغيير المسار
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
    setIsLoggedIn(loggedIn)
    if (loggedIn) {
      setUserType(localStorage.getItem('userType'))
    } else {
      setUserType(null)
    }
  }, [location.pathname])

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar'
    i18n.changeLanguage(newLang)
    document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', newLang)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userType')
    setIsLoggedIn(false)
    setUserType(null)
    navigate('/user-type')
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const isArabic = i18n.language === 'ar'

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-brown-500/10 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/') }>
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-brown-700 ml-1 sm:ml-2" />
            <span className="text-lg sm:text-xl font-bold text-brown-900">{t('siteName')}</span>
          </div>
          
          <div className={`hidden md:flex items-center ${isArabic ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            <Link to="/" className="text-brown-700 hover:text-brown-900 transition font-medium">{t('home')}</Link>
            <Link to="/about" className="text-brown-700 hover:text-brown-900 transition font-medium">{t('aboutUs')}</Link>
            <Link to="/contact" className="text-brown-700 hover:text-brown-900 transition font-medium">{t('contactUs')}</Link>
            <button onClick={toggleLanguage} className="flex items-center text-brown-700 hover:text-brown-900">
              <Globe className="w-4 h-4 ml-1" />
              {isArabic ? 'EN' : 'AR'}
            </button>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {isLoggedIn && userType && (
              <div className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full ${userType === 'child' ? 'bg-orange-100 text-orange-700' : 'bg-indigo-100 text-indigo-700'} text-sm font-medium`}>
                {userType === 'child' ? (
                  <>
                    <Baby className="w-4 h-4" />
                    <span>{t('childLabel')}</span>
                  </>
                ) : (
                  <>
                    <Users className="w-4 h-4" />
                    <span>{t('parentLabel')}</span>
                  </>
                )}
              </div>
            )}
            {!isLoggedIn ? (
              <button 
                onClick={() => navigate('/user-type')} 
                className="bg-brown-700 hover:bg-brown-800 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-full transition shadow-lg flex items-center text-sm sm:text-base"
              >
                <LogIn className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                <span className="hidden xs:inline">{t('login')}</span>
              </button>
            ) : (
              <button 
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-full transition shadow-lg flex items-center text-sm sm:text-base"
              >
                <LogOut className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                <span className="hidden xs:inline">{t('logout')}</span>
              </button>
            )}
            <button 
              className="md:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 text-brown-700"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-brown-500/10 bg-white/95 backdrop-blur-md">
          <div className="px-4 py-3 sm:py-4 space-y-1 sm:space-y-2">
            {isLoggedIn && userType && (
              <div className={`flex items-center gap-2 px-3 py-2 rounded-lg mb-2 ${userType === 'child' ? 'bg-orange-50 text-orange-700' : 'bg-indigo-50 text-indigo-700'} text-sm font-medium`}>
                {userType === 'child' ? (
                  <>
                    <Baby className="w-4 h-4" />
                    <span>{t('childLabel')}</span>
                  </>
                ) : (
                  <>
                    <Users className="w-4 h-4" />
                    <span>{t('parentLabel')}</span>
                  </>
                )}
              </div>
            )}
            <Link to="/" className="flex items-center text-brown-700 hover:text-brown-900 transition py-2.5 sm:py-2 text-sm sm:text-base" onClick={closeMenu}>
              <Home className="w-5 h-5 ml-2" />
              {t('home')}
            </Link>
            <Link to="/about" className="flex items-center text-brown-700 hover:text-brown-900 transition py-2.5 sm:py-2 text-sm sm:text-base" onClick={closeMenu}>
              <Info className="w-5 h-5 ml-2" />
              {t('aboutUs')}
            </Link>
            <Link to="/contact" className="flex items-center text-brown-700 hover:text-brown-900 transition py-2.5 sm:py-2 text-sm sm:text-base" onClick={closeMenu}>
              <Mail className="w-5 h-5 ml-2" />
              {t('contactUs')}
            </Link>
            <button onClick={toggleLanguage} className="flex items-center text-brown-700 hover:text-brown-900 transition py-2.5 sm:py-2 w-full text-right text-sm sm:text-base">
              <Globe className="w-5 h-5 ml-2" />
              {isArabic ? 'EN' : 'AR'}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
