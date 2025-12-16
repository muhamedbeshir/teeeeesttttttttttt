import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { Calendar, FileText, BarChart, Library, Sparkles, ArrowLeft, Baby, Users, BookOpen, Gamepad2, Moon, LogOut, Plus, FileBarChart, Clock, Trophy, Target } from 'lucide-react'

function Dashboard() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const userType = localStorage.getItem('userType')
  const isChild = userType === 'child'
  const userName = isChild ? t('childNickname') : t('parentNickname')

  const themeGradient = isChild 
    ? 'from-orange-500 to-amber-500 shadow-orange-500/20' 
    : 'from-indigo-600 to-blue-600 shadow-indigo-500/20'

  const childActivities = [
    { 
      id: 1, 
      title: t('dashChildColorsTitle'), 
      icon: BookOpen, 
      desc: t('dashChildColorsDesc'), 
      color: 'text-orange-600', 
      bg: 'bg-orange-50 group-hover:bg-orange-500',
      progress: 75
    },
    { 
      id: 2, 
      title: t('dashChildGamesTitle'), 
      icon: Gamepad2, 
      desc: t('dashChildGamesDesc'), 
      color: 'text-blue-600', 
      bg: 'bg-blue-50 group-hover:bg-blue-500',
      progress: 60
    },
    { 
      id: 3, 
      title: t('dashChildStoriesTitle'), 
      icon: Moon, 
      desc: t('dashChildStoriesDesc'), 
      color: 'text-purple-600', 
      bg: 'bg-purple-50 group-hover:bg-purple-500',
      progress: 45
    }
  ]

  const parentStats = {
    completedLessons: 24,
    timeSpent: i18n.language === 'ar' ? '12 ساعة' : '12 hours',
    lastActivity: i18n.language === 'ar' ? 'قبل ساعتين' : '2 hours ago',
    overallProgress: 75
  }

  const recentActivities = [
    { id: 1, activity: t('dashRecent1'), time: t('dashRecentTime1'), icon: BookOpen },
    { id: 2, activity: t('dashRecent2'), time: t('dashRecentTime2'), icon: Gamepad2 },
    { id: 3, activity: t('dashRecent3'), time: t('dashRecentTime2'), icon: Moon },
    { id: 4, activity: t('dashRecent4'), time: t('dashRecentTime3'), icon: Target }
  ]

  const choices = isChild ? childActivities : [
    { 
      id: 1, 
      title: t('dashSummaryTitle'), 
      icon: BarChart, 
      desc: t('dashSummaryDesc'), 
      color: 'text-indigo-600', 
      bg: 'bg-indigo-50 group-hover:bg-indigo-600',
      badge: `${parentStats.completedLessons} ${t('dashLessonsLabel')}`
    },
    { 
      id: 2, 
      title: t('dashRecentTitle'), 
      icon: Clock, 
      desc: t('dashRecentDesc'), 
      color: 'text-blue-600', 
      bg: 'bg-blue-50 group-hover:bg-blue-600',
      badge: '4'
    },
    { 
      id: 3, 
      title: t('dashReportsTitle'), 
      icon: FileBarChart, 
      desc: t('dashReportsDesc'), 
      color: 'text-purple-600', 
      bg: 'bg-purple-50 group-hover:bg-purple-600',
      badge: t('dashUpdatedLabel')
    },
    { 
      id: 4, 
      title: t('dashAddChildTitle'), 
      icon: Plus, 
      desc: t('dashAddChildDesc'), 
      color: 'text-emerald-600', 
      bg: 'bg-emerald-50 group-hover:bg-emerald-600',
      badge: t('dashSoonLabel')
    }
  ]

  const handleChoiceClick = (id, title) => {
    if (!isChild && id === 4) return
    navigate(`/choice/${id}`, { state: { title } })
  }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userType')
    navigate('/user-type')
  }

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      navigate('/user-type')
    }
  }, [navigate])

  return (
    <>
      <Navbar />
      <main className="flex-grow min-h-screen bg-[#f8f6f2]">
        <section className="fade-in py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className={`relative overflow-hidden rounded-3xl p-8 sm:p-12 mb-10 text-white shadow-2xl bg-gradient-to-r ${themeGradient}`}>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 opacity-90">
                  {isChild ? <Baby className="w-5 h-5" /> : <Users className="w-5 h-5" />}
                  <span className="text-sm font-medium">{t('dashWelcomeBadge')}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">{t('dashWelcomeTitle', { name: userName })}</h2>
                <p className="text-white/80 text-lg max-w-xl">
                  {isChild ? t('dashChildIntro') : t('dashParentIntro')}
                </p>
              </div>
              <div className="flex items-center gap-4">
                {!isChild && (
                  <div className="hidden md:flex flex-col items-center gap-2 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    <Trophy className="w-8 h-8" />
                    <span className="text-2xl font-bold">{parentStats.completedLessons}</span>
                    <span className="text-xs opacity-90">{t('dashLessonsCompleted')}</span>
                  </div>
                )}
                <div className="hidden md:block">
                  <div className="w-24 h-24 rounded-full border-4 border-white/30 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-xl font-bold">{parentStats.overallProgress}%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3"></div>
          </div>

          {!isChild && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-brown-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-brown-600 text-sm font-medium">{t('dashCardLessonsTitle')}</span>
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                </div>
                <p className="text-3xl font-bold text-brown-900">{parentStats.completedLessons}</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-brown-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-brown-600 text-sm font-medium">{t('dashCardTimeTitle')}</span>
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-brown-900">{parentStats.timeSpent}</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-brown-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-brown-600 text-sm font-medium">{t('dashCardLastTitle')}</span>
                  <Sparkles className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-lg font-bold text-brown-900">{parentStats.lastActivity}</p>
              </div>
            </div>
          )}

          {isChild && (
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-brown-50 mb-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-brown-900">{t('dashChildProgressTitle')}</h3>
                <span className="text-2xl font-bold text-orange-600">{parentStats.overallProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-orange-500 to-amber-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${parentStats.overallProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-brown-600 mt-2">{t('dashChildProgressDesc')}</p>
            </div>
          )}

          {!isChild && (
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-brown-50 mb-10">
              <h3 className="text-xl font-bold text-brown-900 mb-4">{t('dashRecentSectionTitle')}</h3>
              <div className="space-y-3">
                {recentActivities.map((activity) => {
                  const IconComponent = activity.icon
                  return (
                    <div key={activity.id} className="flex items-center gap-4 p-3 bg-brown-50 rounded-lg hover:bg-brown-100 transition-colors">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-brown-900">{activity.activity}</p>
                        <p className="text-sm text-brown-600">{activity.time}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          <div className={`grid grid-cols-1 ${isChild ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'} gap-6 mb-10`}>
            {choices.map((choice) => {
              const IconComponent = choice.icon
              return (
                <div
                  key={choice.id}
                  onClick={() => handleChoiceClick(choice.id, choice.title)}
                  className={`group bg-white p-6 rounded-2xl shadow-[0_5px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgb(0,0,0,0.08)] transition-all duration-300 ${choice.id === 4 && !isChild ? 'cursor-not-allowed opacity-60' : 'cursor-pointer hover:-translate-y-2'} border border-brown-50 relative overflow-hidden`}
                >
                  {choice.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded-full font-bold group-hover:bg-brown-100 group-hover:text-brown-700 transition-colors">
                        {choice.badge}
                      </span>
                    </div>
                  )}

                  <div className={`w-14 h-14 ${choice.bg} rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 shadow-sm`}>
                    <IconComponent className={`w-7 h-7 ${choice.color} group-hover:text-white transition-colors duration-500`} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-brown-700 transition-colors">
                    {choice.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {choice.desc}
                  </p>

                  {isChild && choice.progress !== undefined && (
                    <div className="mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${choice.color.replace('text-', 'bg-')}`}
                          style={{ width: `${choice.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{choice.progress}%</p>
                    </div>
                  )}

                  {(!isChild || choice.id !== 4) && (
                    <div className="flex items-center text-sm font-semibold text-brown-400 group-hover:text-brown-700 transition-colors gap-2">
                      <span>{choice.id === 4 && !isChild ? t('dashSoonLabel') : t('dashViewDetails')}</span>
                      <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

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
