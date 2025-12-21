import React from 'react'
import { useTranslation } from 'react-i18next'
import { BookOpen } from 'lucide-react'

function Footer() {
  const { t } = useTranslation()
  
  return (
    <footer className="bg-brown-900 text-beige-200 py-6 sm:py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center mb-3 sm:mb-4">
          <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 ml-1 sm:ml-2" />
          <span className="text-lg sm:text-xl font-bold">{t('siteName')}</span>
        </div>
        <p className="text-xs sm:text-sm opacity-70">جميع الحقوق محفوظة &copy; 2025</p>
      </div>
    </footer>
  )
}

export default Footer

