import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Palette, RotateCcw, Download } from 'lucide-react'

function ColoringGame() {
  const { t } = useTranslation()
  const [selectedColor, setSelectedColor] = useState('#FF6B6B')
  const [selectedImage, setSelectedImage] = useState(0)

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
    '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B739', '#E74C3C',
    '#3498DB', '#2ECC71', '#F39C12', '#9B59B6', '#1ABC9C',
    '#E67E22', '#34495E', '#E91E63', '#00BCD4', '#FFC107',
    '#000000', '#FFFFFF', '#808080'
  ]

  // SVG coloring pages - صور تلوين جاهزة
  const coloringPages = [
    {
      id: 1,
      name: 'فراشة',
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M100,50 Q50,80 50,120 Q50,160 100,180 Q150,160 150,120 Q150,80 100,50 Z" fill="none" stroke="#000" strokeWidth="2" className="coloring-path" data-id="1"/>
          <circle cx="100" cy="120" r="20" fill="none" stroke="#000" strokeWidth="2" className="coloring-path" data-id="2"/>
          <path d="M100,50 Q80,70 70,90 Q60,110 50,120" fill="none" stroke="#000" strokeWidth="2" className="coloring-path" data-id="3"/>
          <path d="M100,50 Q120,70 130,90 Q140,110 150,120" fill="none" stroke="#000" strokeWidth="2" className="coloring-path" data-id="4"/>
          <path d="M50,120 Q40,140 50,160" fill="none" stroke="#000" strokeWidth="2" className="coloring-path" data-id="5"/>
          <path d="M150,120 Q160,140 150,160" fill="none" stroke="#000" strokeWidth="2" className="coloring-path" data-id="6"/>
        </svg>
      )
    },
    {
      id: 2,
      name: 'زهرة',
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="30" fill="none" stroke="#000" strokeWidth="2" className="coloring-path" data-id="1"/>
          <path d="M100,70 Q70,70 70,100 Q70,130 100,130 Q130,130 130,100 Q130,70 100,70" fill="none" stroke="#000" strokeWidth="2" className="coloring-path" data-id="2"/>
          <path d="M100,130 L100,180" fill="none" stroke="#000" strokeWidth="2" className="coloring-path" data-id="3"/>
          <path d="M100,130 Q80,150 60,160" fill="none" stroke="#000" strokeWidth="2" className="coloring-path" data-id="4"/>
          <path d="M100,130 Q120,150 140,160" fill="none" stroke="#000" strokeWidth="2" className="coloring-path" data-id="5"/>
        </svg>
      )
    },
    {
      id: 3,
      name: 'منزل',
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="60" y="100" width="80" height="80" fill="none" stroke="#000" strokeWidth="2" className="coloring-path" data-id="1"/>
          <path d="M50,100 L100,50 L150,100" fill="none" stroke="#000" strokeWidth="2" className="coloring-path" data-id="2"/>
          <rect x="80" y="130" width="20" height="30" fill="none" stroke="#000" strokeWidth="2" className="coloring-path" data-id="3"/>
          <rect x="110" y="120" width="20" height="20" fill="none" stroke="#000" strokeWidth="2" className="coloring-path" data-id="4"/>
        </svg>
      )
    },
    {
      id: 4,
      name: 'شجرة',
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M100,180 L100,120" fill="none" stroke="#000" strokeWidth="3" className="coloring-path" data-id="1"/>
          <circle cx="100" cy="80" r="40" fill="none" stroke="#000" strokeWidth="2" className="coloring-path" data-id="2"/>
          <circle cx="80" cy="70" r="25" fill="none" stroke="#000" strokeWidth="2" className="coloring-path" data-id="3"/>
          <circle cx="120" cy="70" r="25" fill="none" stroke="#000" strokeWidth="2" className="coloring-path" data-id="4"/>
        </svg>
      )
    }
  ]

  const [coloredPaths, setColoredPaths] = useState({})

  const handlePathClick = (e) => {
    const pathId = e.target.getAttribute('data-id')
    if (pathId) {
      setColoredPaths(prev => ({
        ...prev,
        [`${selectedImage}-${pathId}`]: selectedColor
      }))
    }
  }

  const handleReset = () => {
    setColoredPaths({})
  }

  const handleImageSelect = (index) => {
    setSelectedImage(index)
    // Reset colors when changing image
    const newColoredPaths = {}
    Object.keys(coloredPaths).forEach(key => {
      if (!key.startsWith(`${index}-`)) {
        newColoredPaths[key] = coloredPaths[key]
      }
    })
    setColoredPaths(newColoredPaths)
  }

  const currentImage = coloringPages[selectedImage]

  return (
    <div className="w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6">
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#603814] flex items-center gap-2">
            <Palette className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            {t('coloringGameTitle')}
          </h2>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#f9f3d8] hover:bg-[#c4996c] text-[#603814] rounded-lg transition-colors text-sm sm:text-base"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t('reset') || 'إعادة تعيين'}</span>
          </button>
        </div>

        {/* Image Selection */}
        <div className="mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold text-[#603814] mb-2 sm:mb-3">{t('selectImage') || 'اختر صورة:'}</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {coloringPages.map((page, index) => (
              <button
                key={page.id}
                onClick={() => handleImageSelect(index)}
                className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base transition-all ${
                  selectedImage === index
                    ? 'bg-[#603814] text-[#f9f3d8]'
                    : 'bg-[#f9f3d8] text-[#603814] hover:bg-[#c4996c]'
                }`}
              >
                {page.name}
              </button>
            ))}
          </div>
        </div>

        {/* Color Palette */}
        <div className="mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold text-[#603814] mb-2 sm:mb-3">{t('selectColor') || 'اختر اللون:'}</h3>
          <div className="flex flex-wrap gap-2">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg border-2 transition-all ${
                  selectedColor === color 
                    ? 'border-[#603814] scale-110 shadow-lg' 
                    : 'border-gray-300 hover:scale-105'
                }`}
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Coloring Area */}
        <div className="bg-[#f9f3d8] rounded-xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-inner">
            <div 
              className="w-full max-w-md mx-auto aspect-square cursor-pointer"
              onClick={handlePathClick}
            >
              {React.cloneElement(currentImage.svg, {
                children: React.Children.map(currentImage.svg.props.children, (child) => {
                  if (React.isValidElement(child)) {
                    const pathId = child.props['data-id']
                    const colorKey = `${selectedImage}-${pathId}`
                    const fillColor = coloredPaths[colorKey] || 'transparent'
                    return React.cloneElement(child, {
                      fill: fillColor,
                      onClick: (e) => {
                        e.stopPropagation()
                        setColoredPaths(prev => ({
                          ...prev,
                          [colorKey]: selectedColor
                        }))
                      }
                    })
                  }
                  return child
                })
              })}
            </div>
          </div>
        </div>

        <div className="bg-[#f9f3d8] rounded-lg p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-[#603814] text-center">
            {t('coloringGameInstructions') || 'انقر على أي جزء من الصورة لتلوينه باللون المحدد. استمتع بالتلوين!'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ColoringGame
