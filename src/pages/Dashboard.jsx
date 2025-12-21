import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { ArrowLeft, Baby, Users, LogOut, Gamepad2, GraduationCap, UserCheck, Heart, Video, Book, Palette, Puzzle } from 'lucide-react'

function Dashboard() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  const userType = localStorage.getItem('userType') || 'child'
  const isChild = userType === 'child'
  
  // Get user name from stored user or use default
  let userName = isChild ? t('childNickname') : t('parentNickname')
  try {
    const currentUserStr = localStorage.getItem('currentUser')
    if (currentUserStr) {
      const currentUser = JSON.parse(currentUserStr)
      if (currentUser && currentUser.username) {
        userName = currentUser.username
      }
    }
  } catch (error) {
    console.error('Error parsing currentUser:', error)
  }

  const themeGradient = isChild 
    ? 'from-[#c4996c] to-[#603814] shadow-[#c4996c]/20' 
    : 'from-[#603814] to-[#c4996c] shadow-[#603814]/20'

  const childActivities = [
    { 
      id: 1, 
      title: t('childCoachingTitle'), 
      icon: GraduationCap, 
      desc: t('childCoachingDesc'), 
      color: 'text-orange-600', 
      bg: 'bg-orange-50 group-hover:bg-orange-500'
    },
    { 
      id: 2, 
      title: t('childPsychologistTitle'), 
      icon: Heart, 
      desc: t('childPsychologistDesc'), 
      color: 'text-pink-600', 
      bg: 'bg-pink-50 group-hover:bg-pink-500'
    },
    { 
      id: 3, 
      title: t('coloringGameTitle'), 
      icon: Palette, 
      desc: t('coloringGameDesc'), 
      color: 'text-purple-600', 
      bg: 'bg-purple-50 group-hover:bg-purple-500'
    },
    { 
      id: 4, 
      title: t('puzzlesTitle'), 
      icon: Puzzle, 
      desc: t('puzzlesDesc'), 
      color: 'text-blue-600', 
      bg: 'bg-blue-50 group-hover:bg-blue-500'
    },
    { 
      id: 5, 
      title: t('gamesTitle'), 
      icon: Gamepad2, 
      desc: t('gamesDesc'), 
      color: 'text-green-600', 
      bg: 'bg-green-50 group-hover:bg-green-500'
    },
    { 
      id: 6, 
      title: t('familyVideosTitle'), 
      icon: Video, 
      desc: t('familyVideosDesc'), 
      color: 'text-indigo-600', 
      bg: 'bg-indigo-50 group-hover:bg-indigo-500'
    }
  ]

  const parentChoices = [
    { 
      id: 5, 
      title: t('parentCoachingTitle'), 
      icon: GraduationCap, 
      desc: t('parentCoachingDesc'), 
      color: 'text-indigo-600', 
      bg: 'bg-indigo-50 group-hover:bg-indigo-600'
    },
    { 
      id: 6, 
      title: t('specialistTitle'), 
      icon: UserCheck, 
      desc: t('specialistDesc'), 
      color: 'text-blue-600', 
      bg: 'bg-blue-50 group-hover:bg-blue-600'
    },
    { 
      id: 7, 
      title: t('psychologistTitle'), 
      icon: Heart, 
      desc: t('psychologistDesc'), 
      color: 'text-pink-600', 
      bg: 'bg-pink-50 group-hover:bg-pink-600'
    },
    { 
      id: 8, 
      title: t('awarenessVideosTitle'), 
      icon: Video, 
      desc: t('awarenessVideosDesc'), 
      color: 'text-purple-600', 
      bg: 'bg-purple-50 group-hover:bg-purple-600'
    },
    { 
      id: 9, 
      title: t('awarenessBooksTitle'), 
      icon: Book, 
      desc: t('awarenessBooksDesc'), 
      color: 'text-emerald-600', 
      bg: 'bg-emerald-50 group-hover:bg-emerald-600'
    }
  ]

  const handleChoiceClick = (id, title) => {
    navigate(`/choice/${id}`, { state: { title } })
  }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userType')
    localStorage.removeItem('currentUser')
    navigate('/user-type')
  }

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    const storedUserType = localStorage.getItem('userType')
    
    if (isLoggedIn !== 'true' || !storedUserType) {
      navigate('/user-type')
    }
  }, [navigate])

  return (
    <>
      <Navbar />
      <main className="flex-grow min-h-screen bg-[#f9f3d8]">
        <section className="fade-in py-4 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className={`relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-6 sm:mb-8 md:mb-10 text-white shadow-2xl bg-gradient-to-r ${themeGradient}`}>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 opacity-90">
                  {isChild ? <Baby className="w-5 h-5" /> : <Users className="w-5 h-5" />}
                  <span className="text-sm font-medium">{t('dashWelcomeBadge')}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{t('dashWelcomeTitle', { name: userName })}</h2>
                {(isChild ? t('dashChildIntro') : t('dashParentIntro')) && (
                  <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-xl">
                    {isChild ? t('dashChildIntro') : t('dashParentIntro')}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-4">
              </div>
            </div>
            <div className={`absolute top-0 ${isArabic ? 'right-0' : 'left-0'} ${isArabic ? 'translate-x-1/2' : '-translate-x-1/2'} w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2`}></div>
            <div className={`absolute bottom-0 ${isArabic ? 'left-0' : 'right-0'} ${isArabic ? '-translate-x-1/3' : 'translate-x-1/3'} w-40 h-40 bg-white/10 rounded-full blur-2xl translate-y-1/3`}></div>
          </div>

          {!isChild && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-8 sm:mb-10">
              {parentChoices.map((choice) => {
                const IconComponent = choice.icon
                return (
                  <div
                    key={choice.id}
                    // Temporarily disabled - onClick handler removed
                    // onClick={() => handleChoiceClick(choice.id, choice.title)}
                    className="group bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-[0_2px_8px_rgba(96,56,20,0.08)] transition-all duration-300 cursor-default border border-[#f9f3d8] relative overflow-hidden"
                  >
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 ${choice.bg} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-500 group-hover:scale-110 shadow-sm`}>
                      <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 ${choice.color} group-hover:text-white transition-colors duration-500`} />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#603814] mb-2 group-hover:text-[#c4996c] transition-colors">
                      {choice.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                      {choice.desc}
                    </p>

                    {/* Temporarily hidden - View Details button for parent */}
                    <div className="hidden flex items-center text-xs sm:text-sm font-semibold text-[#c4996c] group-hover:text-[#603814] transition-colors gap-2">
                      <span>{t('dashViewDetails')}</span>
                      <ArrowLeft className={`w-3 h-3 sm:w-4 sm:h-4 transform transition-transform ${isArabic ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {isChild && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
              {childActivities.map((choice) => {
                const IconComponent = choice.icon
                return (
                  <div
                    key={choice.id}
                    onClick={() => handleChoiceClick(choice.id, choice.title)}
                    className="group bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-[0_2px_8px_rgba(96,56,20,0.08)] hover:shadow-[0_8px_24px_rgba(96,56,20,0.2)] transition-all duration-300 cursor-pointer hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f9f3d8] relative overflow-hidden"
                  >
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 ${choice.bg} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-500 group-hover:scale-110 shadow-sm`}>
                      <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 ${choice.color} group-hover:text-white transition-colors duration-500`} />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#603814] mb-2 group-hover:text-[#c4996c] transition-colors">
                      {choice.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                      {choice.desc}
                    </p>

                    <div className="flex items-center text-xs sm:text-sm font-semibold text-[#c4996c] group-hover:text-[#603814] transition-colors gap-2">
                      <span>{t('dashViewDetails')}</span>
                      <ArrowLeft className={`w-3 h-3 sm:w-4 sm:h-4 transform transition-transform ${isArabic ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          <div className="flex justify-center">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <LogOut className="w-5 h-5" />
              <span>{t('logout')}</span>
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default Dashboard
