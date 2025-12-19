import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Puzzle, RotateCcw, Trophy } from 'lucide-react'

function PuzzleGame() {
  const { t } = useTranslation()
  const [puzzle, setPuzzle] = useState([])
  const [solved, setSolved] = useState(false)
  const [moves, setMoves] = useState(0)

  useEffect(() => {
    initializePuzzle()
  }, [])

  const initializePuzzle = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, null]
    const shuffled = [...numbers].sort(() => Math.random() - 0.5)
    setPuzzle(shuffled)
    setSolved(false)
    setMoves(0)
  }

  const handleTileClick = (index) => {
    if (solved) return

    const emptyIndex = puzzle.indexOf(null)
    const row = Math.floor(index / 3)
    const col = index % 3
    const emptyRow = Math.floor(emptyIndex / 3)
    const emptyCol = emptyIndex % 3

    // Check if clicked tile is adjacent to empty space
    const isAdjacent = 
      (row === emptyRow && Math.abs(col - emptyCol) === 1) ||
      (col === emptyCol && Math.abs(row - emptyRow) === 1)

    if (isAdjacent) {
      const newPuzzle = [...puzzle]
      newPuzzle[emptyIndex] = puzzle[index]
      newPuzzle[index] = null
      setPuzzle(newPuzzle)
      setMoves(moves + 1)
      checkSolved(newPuzzle)
    }
  }

  const checkSolved = (currentPuzzle) => {
    const solution = [1, 2, 3, 4, 5, 6, 7, 8, null]
    const isSolved = currentPuzzle.every((val, idx) => val === solution[idx])
    if (isSolved) {
      setSolved(true)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-3 sm:p-4 md:p-6">
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#603814] flex items-center gap-2">
            <Puzzle className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            {t('puzzlesTitle')}
          </h2>
          <button
            onClick={initializePuzzle}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#f9f3d8] hover:bg-[#c4996c] text-[#603814] rounded-lg transition-colors text-sm sm:text-base"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t('reset') || 'إعادة تعيين'}</span>
          </button>
        </div>

        <div className="mb-4 sm:mb-6 text-center">
          <p className="text-base sm:text-lg text-[#603814] mb-2">
            {t('moves') || 'عدد الحركات:'} <span className="font-bold text-[#c4996c]">{moves}</span>
          </p>
        </div>

        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 bg-[#f9f3d8] p-3 sm:p-4 rounded-xl">
            {puzzle.map((number, index) => (
              <button
                key={index}
                onClick={() => handleTileClick(index)}
                className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg font-bold text-lg sm:text-xl md:text-2xl transition-all ${
                  number === null
                    ? 'bg-[#c4996c] cursor-default opacity-50'
                    : 'bg-[#603814] hover:bg-[#4e2d10] text-[#f9f3d8] shadow-md hover:shadow-lg active:scale-95'
                }`}
                disabled={number === null || solved}
              >
                {number}
              </button>
            ))}
          </div>
        </div>

        {solved && (
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 sm:p-6 text-center mb-4 sm:mb-6">
            <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 mx-auto mb-2" />
            <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-2">
              {t('congratulations') || 'تهانينا!'}
            </h3>
            <p className="text-sm sm:text-base text-green-600">
              {t('puzzleSolved') || 'لقد حللت اللغز بنجاح!'} ({moves} {t('moves') || 'حركة'})
            </p>
          </div>
        )}

        <div className="bg-[#f9f3d8] rounded-lg p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-[#603814] text-center">
            {t('puzzleInstructions') || 'انقر على القطع المجاورة للمربع الفارغ لتحريكها. هدفك هو ترتيب الأرقام من 1 إلى 8.'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PuzzleGame

