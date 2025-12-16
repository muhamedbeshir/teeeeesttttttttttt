import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { Layers, ShieldCheck, Clock, Smartphone } from 'lucide-react'

function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleEnter = () => {
    navigate('/user-type')
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow relative">
        <section className="fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 flex flex-col-reverse md:flex-row items-center">
            <div className="w-full md:w-1/2 text-right">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brown-900 mb-4 sm:mb-6 leading-tight">
                {t('siteName')} <br /> <span className="text-brown-500">{t('siteTagline')}</span>
              </h1>
              <p className="text-base sm:text-lg text-brown-700 mb-6 sm:mb-8 leading-relaxed max-w-lg">
                {t('siteDescription')}
              </p>
              <button 
                onClick={handleEnter}
                className="bg-brown-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-brown-800 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto"
              >
                {t('startJourney')}
              </button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center mb-8 sm:mb-10 md:mb-0">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-beige-200 rounded-full flex items-center justify-center animate-float shadow-inner">
                <Layers className="w-32 h-32 sm:w-40 sm:h-40 text-brown-700 opacity-80" />
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-brown-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-24 h-24 sm:w-32 sm:h-32 bg-brown-900 rounded-full opacity-10"></div>
              </div>
            </div>
          </div>
          
          {/* Features Strip */}
          <div className="bg-white py-8 sm:py-12 border-t border-brown-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-brown-100 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
                <div className="w-12 h-12 bg-beige-200 rounded-lg flex items-center justify-center mx-auto mb-4 text-brown-700">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brown-900 mb-2">{t('safeEnvTitle')}</h3>
                <p className="text-sm sm:text-base text-brown-600">{t('safeEnvDesc')}</p>
              </div>
              <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-brown-100 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
                <div className="w-12 h-12 bg-beige-200 rounded-lg flex items-center justify-center mx-auto mb-4 text-brown-700">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brown-900 mb-2">{t('available247Title')}</h3>
                <p className="text-sm sm:text-base text-brown-600">{t('available247Desc')}</p>
              </div>
              <div className="p-4 sm:p-6 sm:col-span-2 md:col-span-1 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-brown-100 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
                <div className="w-12 h-12 bg-beige-200 rounded-lg flex items-center justify-center mx-auto mb-4 text-brown-700">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brown-900 mb-2">{t('easyUseTitle')}</h3>
                <p className="text-sm sm:text-base text-brown-600">{t('easyUseDesc')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
