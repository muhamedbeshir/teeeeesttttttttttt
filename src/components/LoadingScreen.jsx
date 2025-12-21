import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function LoadingScreen({ onComplete }) {
  const [opacity, setOpacity] = useState(1)
  const { t } = useTranslation()

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0)
      setTimeout(() => {
        onComplete()
      }, 500)
    }, 5000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div 
      className="fixed inset-0 bg-[#f9f3d8] z-[9999] flex justify-center items-center flex-col transition-opacity duration-500"
      style={{ opacity }}
    >
      <div className="animate-float mb-4">
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="w-24 h-24 sm:w-32 sm:h-32 object-contain" />
      </div>
      <h1 className="text-2xl font-bold text-[#603814] mb-3">
        {t('siteDescription')}
      </h1>
      <div className="w-48 h-2 bg-[#c4996c] rounded-full overflow-hidden">
        <div className="h-full bg-[#603814] animate-pulse" style={{ width: '100%' }}></div>
      </div>
      <p className="mt-2 text-sm text-[#603814]">
        {t('loading')}
      </p>
    </div>
  )
}

export default LoadingScreen

