import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Gamepad2, RotateCcw, Trophy, Star } from 'lucide-react'

function SimpleGame() {
  const { t } = useTranslation()
  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedPairs, setMatchedPairs] = useState([])
  const [score, setScore] = useState(0)
  const [gameWon, setGameWon] = useState(false)

  const symbols = ['🌟', '🎈', '🎨', '🎵', '🎪', '🎭', '🎯', '🎲']

  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    const gameCards = [...symbols, ...symbols]
      .sort(() => Math.random() - 0.5)
      .map((symbol, index) => ({
        id: index,
        symbol,
        isFlipped: false,
        isMatched: false
      }))
    setCards(gameCards)
    setFlippedCards([])
    setMatchedPairs([])
    setScore(0)
    setGameWon(false)
  }

  const handleCardClick = (cardId) => {
    const card = cards[cardId]
    
    if (card.isMatched || card.isFlipped || flippedCards.length === 2) {
      return
    }

    const newCards = [...cards]
    newCards[cardId].isFlipped = true
    setCards(newCards)

    const newFlippedCards = [...flippedCards, cardId]
    setFlippedCards(newFlippedCards)

    if (newFlippedCards.length === 2) {
      const [firstId, secondId] = newFlippedCards
      const firstCard = cards[firstId]
      const secondCard = cards[secondId]

      if (firstCard.symbol === secondCard.symbol) {
        // Match found
        setTimeout(() => {
          const updatedCards = [...newCards]
          updatedCards[firstId].isMatched = true
          updatedCards[secondId].isMatched = true
          setCards(updatedCards)
          setMatchedPairs([...matchedPairs, firstCard.symbol])
          setScore(score + 10)
          setFlippedCards([])

          if (matchedPairs.length + 1 === symbols.length) {
            setGameWon(true)
          }
        }, 500)
      } else {
        // No match
        setTimeout(() => {
          const updatedCards = [...newCards]
          updatedCards[firstId].isFlipped = false
          updatedCards[secondId].isFlipped = false
          setCards(updatedCards)
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-3 sm:p-4 md:p-6">
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#603814] flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            {t('gamesTitle')}
          </h2>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="bg-[#f9f3d8] px-3 sm:px-4 py-2 rounded-lg flex-1 sm:flex-none">
              <span className="text-[#603814] font-bold text-sm sm:text-base">{t('score') || 'النقاط:'} {score}</span>
            </div>
            <button
              onClick={initializeGame}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#f9f3d8] hover:bg-[#c4996c] text-[#603814] rounded-lg transition-colors text-sm sm:text-base"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t('reset') || 'إعادة تعيين'}</span>
            </button>
          </div>
        </div>

        {gameWon && (
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 sm:p-6 text-center mb-4 sm:mb-6">
            <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 mx-auto mb-2" />
            <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-2">
              {t('congratulations') || 'تهانينا!'}
            </h3>
            <p className="text-sm sm:text-base text-green-600">
              {t('gameWon') || 'لقد فزت باللعبة!'} {t('finalScore') || 'النقاط النهائية:'} {score}
            </p>
          </div>
        )}

        <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`aspect-square rounded-lg font-bold text-2xl sm:text-3xl md:text-4xl transition-all duration-300 ${
                card.isFlipped || card.isMatched
                  ? 'bg-[#f9f3d8] scale-100'
                  : 'bg-[#603814] hover:bg-[#4e2d10] text-[#f9f3d8] scale-95 hover:scale-100 active:scale-95'
              } ${card.isMatched ? 'opacity-50 cursor-default' : 'cursor-pointer shadow-md hover:shadow-lg'}`}
              disabled={card.isMatched}
            >
              {card.isFlipped || card.isMatched ? card.symbol : '?'}
            </button>
          ))}
        </div>

        <div className="bg-[#f9f3d8] rounded-lg p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-[#603814] text-center">
            {t('matchingGameInstructions') || 'انقر على البطاقات لقلبها وابحث عن الأزواج المتطابقة. حاول إيجاد جميع الأزواج بأقل عدد من المحاولات!'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SimpleGame

