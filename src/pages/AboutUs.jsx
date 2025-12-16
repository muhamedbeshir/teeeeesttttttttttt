import React from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'

function AboutUs() {
  const { t } = useTranslation()

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <section className="fade-in">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brown-900 mb-4 sm:mb-6">{t('aboutUs')}</h1>
              <div className="prose prose-sm sm:prose-base md:prose-lg text-brown-800 leading-relaxed max-w-none">
                <p>{t('aboutText')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default AboutUs

