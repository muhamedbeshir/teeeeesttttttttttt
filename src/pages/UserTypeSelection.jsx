import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { Baby, Users, ChevronLeft } from 'lucide-react'

function UserTypeSelection() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleUserTypeClick = (type) => {
    setTimeout(() => {
      navigate('/signup', { state: { userType: type } })
    }, 150)
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow min-h-screen relative overflow-hidden bg-gradient-to-br from-[#fdfbf7] via-[#f5efe6] to-[#e6dcc6]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brown-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <section className="relative z-10 min-h-[85vh] flex flex-col items-center justify-center p-4 sm:p-6">
          <div className="text-center mb-8 sm:mb-14 space-y-2 sm:space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-brown-900 tracking-tight">
              {t('selectUserTypeTitle')}
            </h2>
            <p className="text-brown-600 text-sm sm:text-lg font-medium max-w-xs sm:max-w-2xl mx-auto leading-relaxed">
              {t('selectUserTypeSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:gap-10 w-full max-w-5xl px-4">
            <div 
              onClick={() => handleUserTypeClick('child')} 
              className="group relative bg-white/80 backdrop-blur-lg p-6 sm:p-10 rounded-3xl border border-brown-200 shadow-[0_14px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_24px_60px_rgba(120,53,15,0.25)] cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-white"
            >
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ChevronLeft className="text-brown-400" />
              </div>
              
              <div className="w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-tr from-orange-100 to-amber-50 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Baby className="w-14 h-14 sm:w-20 sm:h-20 text-brown-700 group-hover:text-orange-600 transition-colors duration-300" />
              </div>
              
              <h3 className="text-lg sm:text-2xl font-bold text-brown-900 mb-2 sm:mb-3">{t('childCardTitle')}</h3>
              <p className="text-brown-600 text-xs sm:text-base leading-relaxed sm:leading-relaxed max-w-[12rem] sm:max-w-none mx-auto">
                {t('childCardDesc')}
              </p>
              
              <div className="mt-6 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-0 group-hover:w-full bg-orange-400 transition-all duration-500 ease-out"></div>
              </div>
            </div>

            <div 
              onClick={() => handleUserTypeClick('parent')} 
              className="group relative bg-white/80 backdrop-blur-lg p-6 sm:p-10 rounded-3xl border border-brown-200 shadow-[0_14px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_24px_60px_rgba(120,53,15,0.25)] cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-white"
            >
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ChevronLeft className="text-brown-400" />
              </div>

              <div className="w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Users className="w-14 h-14 sm:w-20 sm:h-20 text-brown-700 group-hover:text-indigo-600 transition-colors duration-300" />
              </div>
              
              <h3 className="text-lg sm:text-2xl font-bold text-brown-900 mb-2 sm:mb-3">{t('parentCardTitle')}</h3>
              <p className="text-brown-600 text-xs sm:text-base leading-relaxed sm:leading-relaxed max-w-[12rem] sm:max-w-none mx-auto">
                {t('parentCardDesc')}
              </p>

              <div className="mt-6 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-0 group-hover:w-full bg-indigo-500 transition-all duration-500 ease-out"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default UserTypeSelection
