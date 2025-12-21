import React, { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { User, Lock, Baby, Users, ArrowRight } from 'lucide-react'
import { loginUser } from '../utils/auth'

function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [shake, setShake] = useState(false)

  const userType = location.state?.userType || 'child'
  const isChild = userType === 'child'

  const themeGradient = isChild ? 'from-orange-500 to-amber-500' : 'from-indigo-600 to-blue-600'
  const themeShadow = isChild ? 'shadow-orange-500/20' : 'shadow-indigo-500/20'

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // Try to login with saved users
    const result = loginUser(username, password, userType)
    
    if (result.success) {
      // Ensure all data is saved before navigation
      setTimeout(() => {
        navigate('/dashboard')
      }, 100)
    } else {
      // Fallback to demo credentials for backward compatibility
      const validCredentials = {
        parents: '542002',
        child: '542002'
      }

      const expectedUsername = userType === 'parent' ? 'parents' : 'child'
      const expectedPassword = validCredentials[expectedUsername]

      if (username === expectedUsername && password === expectedPassword) {
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('userType', userType)
        // Save demo user data
        localStorage.setItem('currentUser', JSON.stringify({
          id: 'demo',
          username: username,
          userType: userType
        }))
        // Ensure all data is saved before navigation
        setTimeout(() => {
          navigate('/dashboard')
        }, 100)
      } else {
        setError(result.message || t('invalidCredentials'))
        setShake(true)
        setTimeout(() => setShake(false), 500)
      }
    }
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow min-h-screen relative overflow-hidden bg-gradient-to-br from-[#fdfbf7] via-[#f5efe6] to-[#e6dcc6]">
        <div className={`absolute top-0 left-0 w-[500px] h-[500px] ${isChild ? 'bg-orange-200/20' : 'bg-blue-200/20'} rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none`}></div>
        <div className={`absolute bottom-0 right-0 w-[500px] h-[500px] ${isChild ? 'bg-amber-100/30' : 'bg-indigo-100/30'} rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none`}></div>

        <section className="relative z-10 min-h-[85vh] flex items-center justify-center p-4 sm:p-6 fade-in">
          <div className={`bg-white/70 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-md border ${error ? 'border-red-300' : 'border-white/50'} relative overflow-hidden transition-all duration-300 ${shake ? 'animate-shake' : ''}`}>
            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${themeGradient}`}></div>

            <div className="text-center mb-8">
              <div className={`inline-flex p-4 rounded-2xl mb-5 shadow-lg ${isChild ? 'bg-orange-50 text-orange-600' : 'bg-indigo-50 text-indigo-600'} transition-colors duration-300`}>
                {isChild ? (
                  <Baby className="w-8 h-8 sm:w-10 sm:h-10" />
                ) : (
                  <Users className="w-8 h-8 sm:w-10 sm:h-10" />
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#603814] tracking-tight">
                {isChild ? t('childLoginTitle') : t('parentLoginTitle')}
              </h2>
              <p className="text-[#603814] mt-2 font-medium opacity-80">
                {isChild ? t('childLoginSubtitle') : t('parentLoginSubtitle')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#603814] mr-1">{t('username')}</label>
                <div className="relative group">
                  <div className={`absolute right-3 top-3.5 transition-colors duration-300 ${isChild ? 'group-focus-within:text-orange-500' : 'group-focus-within:text-indigo-500'} text-[#c4996c]`}>
                    <User className="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder={isChild ? t('childUsernamePlaceholder') : t('parentUsernamePlaceholder')} 
                    className={`w-full bg-white px-4 py-3 pr-11 rounded-xl border border-[#f9f3d8] outline-none transition-all duration-300 focus:ring-2 focus:bg-white focus:border-transparent ${isChild ? 'focus:ring-orange-200' : 'focus:ring-indigo-200'} placeholder:text-[#c4996c] text-[#603814] font-medium`}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#603814] mr-1">{t('password')}</label>
                <div className="relative group">
                  <div className={`absolute right-3 top-3.5 transition-colors duration-300 ${isChild ? 'group-focus-within:text-orange-500' : 'group-focus-within:text-indigo-500'} text-[#c4996c]`}>
                    <Lock className="w-5 h-5" />
                  </div>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t('passwordPlaceholder')} 
                    className={`w-full bg-white px-4 py-3 pr-11 rounded-xl border border-[#f9f3d8] outline-none transition-all duration-300 focus:ring-2 focus:bg-white focus:border-transparent ${isChild ? 'focus:ring-orange-200' : 'focus:ring-indigo-200'} placeholder:text-[#c4996c] text-[#603814] font-medium`}
                    required
                  />
                </div>
              </div>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg p-3 text-center font-medium animate-pulse">
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                className={`w-full py-3.5 px-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl transform active:scale-[0.98] transition-all duration-300 bg-gradient-to-r ${themeGradient} ${themeShadow}`}
              >
                {t('submit')}
              </button>

              <div className="text-center">
                <p className="text-[#603814] text-sm mb-2">ليس لديك حساب؟</p>
                <Link 
                  to="/signup" 
                  state={{ userType }}
                  className="flex items-center justify-center gap-2 text-[#603814] text-sm font-medium hover:text-[#4e2d10] transition-colors py-2"
                >
                  <span>إنشاء حساب جديد</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <button 
                type="button" 
                onClick={() => navigate('/user-type')} 
                className="w-full flex items-center justify-center gap-2 text-[#c4996c] text-sm font-medium hover:text-[#603814] transition-colors py-2"
              >
                <span>{t('changeUserType')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default Login
