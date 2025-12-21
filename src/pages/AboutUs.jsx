import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { BookOpen, Target, Users, Award, Heart, ArrowLeft } from 'lucide-react'

function AboutUs() {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const isArabic = i18n.language === 'ar'

  return (
    <>
      <Navbar />
      <main className="flex-grow min-h-screen bg-[#f9f3d8]">
        <section className="fade-in py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#603814] mb-3 sm:mb-4">
                {t('aboutTitle')}
              </h1>
              {t('aboutSubtitle') && (
                <p className="text-lg sm:text-xl text-[#c4996c]">
                  {t('aboutSubtitle')}
                </p>
              )}
            </div>

            {/* Section 1: Who We Are */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 mb-6 sm:mb-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#f9f3d8] rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-[#603814]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#603814]">
                  {t('aboutSection1')}
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#603814] leading-relaxed">
                {t('aboutSection1Text')}
              </p>
            </div>

            {/* Section 2: Vision */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 mb-6 sm:mb-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#f9f3d8] rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 text-[#603814]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#603814]">
                  {t('aboutSection2')}
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#603814] leading-relaxed">
                {t('aboutSection2Text')}
              </p>
            </div>

            {/* Section 3: Mission */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 mb-6 sm:mb-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#f9f3d8] rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#603814]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#603814]">
                  {t('aboutSection3')}
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#603814] leading-relaxed">
                {t('aboutSection3Text')}
              </p>
            </div>

            {/* Section 4: What Makes Us Special */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 mb-6 sm:mb-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#f9f3d8] rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[#603814]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#603814]">
                  {t('aboutSection4')}
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#603814] leading-relaxed mb-4">
                {t('aboutSection4Text')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#c4996c] text-xl mt-1">✓</span>
                  <span className="text-base sm:text-lg text-[#603814]">{t('aboutFeature1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c4996c] text-xl mt-1">✓</span>
                  <span className="text-base sm:text-lg text-[#603814]">{t('aboutFeature2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c4996c] text-xl mt-1">✓</span>
                  <span className="text-base sm:text-lg text-[#603814]">{t('aboutFeature3')}</span>
                </li>
                {t('aboutFeature4') && (
                  <li className="flex items-start gap-3">
                    <span className="text-[#c4996c] text-xl mt-1">✓</span>
                    <span className="text-base sm:text-lg text-[#603814]">{t('aboutFeature4')}</span>
                  </li>
                )}
                <li className="flex items-start gap-3">
                  <span className="text-[#c4996c] text-xl mt-1">✓</span>
                  <span className="text-base sm:text-lg text-[#603814]">{t('aboutFeature5')}</span>
                </li>
              </ul>
            </div>

            {/* Section 5: Join Us */}
            <div className="bg-gradient-to-r from-[#603814] to-[#c4996c] rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  {t('aboutSection5')}
                </h2>
              </div>
              <button 
                onClick={() => navigate('/signup')}
                className="mt-6 bg-white text-[#603814] px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-[#f9f3d8] transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2 mx-auto"
              >
                <span>{t('startJourney')}</span>
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default AboutUs
