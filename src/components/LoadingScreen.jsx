import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function LoadingScreen({ onComplete }) {
  const [opacity, setOpacity] = useState(1)
  const [tipIndex, setTipIndex] = useState(0)
  const { i18n, t } = useTranslation()

  const isArabic = i18n.language === 'ar'
  const tips = isArabic
    ? [
        'كتالوج تساعد طفلك على التعلم بطريقة ممتعة وبسيطة.',
        'يمكن لولي الأمر متابعة تقدم الطفل من لوحة تحكم سهلة.',
        'المحتوى التعليمي في كتالوج مناسب لمختلف الأعمار.'
      ]
    : [
        'Catalog helps your child learn in a fun, simple way.',
        'Parents can track progress from an easy dashboard.',
        'Catalog content is designed for different age groups.'
      ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0)
      setTimeout(() => {
        onComplete()
      }, 500)
    }, 5000)

    return () => clearTimeout(timer)
  }, [onComplete])

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length)
    }, 1800)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isArabic])

  return (
    <div 
      className="fixed inset-0 bg-[#f9f3d8] z-[9999] flex justify-center items-center flex-col transition-opacity duration-500"
      style={{ opacity }}
    >
      <div className="animate-float mb-4">
        <img src="/logo.png" alt="Logo" className="w-24 h-24 sm:w-32 sm:h-32 object-contain" />
      </div>
      <h1 className="text-2xl font-bold text-[#603814] mb-3">
        {t('siteName')}
      </h1>
      <div className="w-48 h-2 bg-[#c4996c] rounded-full overflow-hidden">
        <div className="h-full bg-[#603814] animate-pulse" style={{ width: '100%' }}></div>
      </div>
      <p className="mt-2 text-sm text-[#603814]">
        {t('loading')}
      </p>
      <p className="mt-3 text-xs sm:text-sm text-[#603814] max-w-xs text-center leading-relaxed">
        {tips[tipIndex]}
      </p>
    </div>
  )
}

export default LoadingScreen

