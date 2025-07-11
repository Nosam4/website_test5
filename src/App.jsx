import { useState, useEffect, useCallback } from 'react'
import Header from './components/Header'
import PlayerInput from './components/PlayerInput'
import GuessTable from './components/GuessTable'
import Footer from './components/Footer'
import Modal from './components/Modal'
import ConfettiComponent from './components/ConfettiComponent'
import { gameLogic } from './utils/gameLogic'
import { playerData } from './data/playerData'

function App() {
  const [currentModal, setCurrentModal] = useState(() => {
    const hasSeenModal = localStorage.getItem('hasSeenInfoModal')
    return hasSeenModal ? null : 'info'
  })  
  const [difficulty, setDifficulty] = useState('easy')
  const [guesses, setGuesses] = useState([])
  const [guessesRemaining, setGuessesRemaining] = useState(6)
  const [secretPlayer, setSecretPlayer] = useState(null)
  const [gameWon, setGameWon] = useState(false)
  const [gameLost, setGameLost] = useState(false)
  const [scores, setScores] = useState({ easy: 0, normal: 0, hard: 0 })
  const [timer, setTimer] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [colorBlindMode, setColorBlindMode] = useState(false)

  useEffect(() => {
    initializeGame()
  }, [difficulty])

  useEffect(() => {
    let interval = null
    if (isTimerRunning) {
      interval = setInterval(() => setTimer(t => t + 1), 1000)
    } else if (!isTimerRunning && timer !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isTimerRunning, timer])

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault()
    const handleKeyDown = (e) => {
      const ctrlShiftKey = (key) => e.ctrlKey && e.shiftKey && e.key.toUpperCase() === key
      if (
        e.keyCode === 123 || // F12
        ctrlShiftKey('I') ||
        ctrlShiftKey('J') ||
        ctrlShiftKey('C') ||
        (e.ctrlKey && e.key.toUpperCase() === 'U')
      ) {
        e.preventDefault()
      }
    }
  
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)
  
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  

  const initializeGame = useCallback(() => {
    const newSecretPlayer = gameLogic.selectRandomPlayer(playerData, difficulty)
    setSecretPlayer(newSecretPlayer)
    setGuesses([])
    setGuessesRemaining(6)
    setGameWon(false)
    setGameLost(false)
    setTimer(0)
    setIsTimerRunning(true)
  }, [difficulty])  

  const handlePlayerGuess = (playerName) => {
    if (guessesRemaining <= 0 || gameWon || gameLost) return
    const player = playerData.find(p => p.name === playerName)
    if (!player) return

    const guessResult = gameLogic.processGuess(player, secretPlayer)
    setGuesses(prev => [...prev, guessResult])
    setGuessesRemaining(prev => prev - 1)

    if (guessResult.isCorrect) {
      setGameWon(true)
      setIsTimerRunning(false)
      setScores(prev => ({ ...prev, [difficulty]: prev[difficulty] + 1 }))
      setCurrentModal('score')
      triggerConfetti()
    } else if (guessesRemaining <= 1) {
      setGameLost(true)
      setIsTimerRunning(false)
      setCurrentModal('score')
    }
  }

  const resetGame = useCallback(() => {
    initializeGame()
    setCurrentModal(null)
  }, [initializeGame])  

  const formatTime = (seconds) => `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`

  const modalContent = {
    info: {
      title: "How to Play",
      content: (
        <div className="flex flex-col gap-3 text-blue-100 text-sm sm:text-base leading-relaxed">
          <p>🎯 <strong>Your goal:</strong> Find the <em>Secret Player</em> in 6 guesses or less.</p>
          <div>
            <p className="font-semibold">🕹️ How to Make a Guess:</p>
            <ol className="pl-5 list-decimal mt-1">
              <li>Click the dropdown arrow <strong>(↓)</strong> or type in the player name</li>
              <li>Click on a name from the grid to select</li>
              <li>Click <strong>SUBMIT</strong> to lock in your guess</li>
            </ol>
          </div>
          <div>
            <p className="font-semibold">🎨 Color Codes:</p>
            <ul className="pl-5 list-disc mt-1">
              <li className="text-green-400">🟩 <strong>Green</strong> = Correct Guess!</li>
              <li className="text-yellow-400">🟨 <strong>Yellow</strong> = Close! Within <em>2 units</em></li>
              <li className="text-red-400">🟥 <strong>Red</strong> = Incorrect</li>
            </ul>
          </div>
          <button 
            onClick={() => setCurrentModal(null)}
            className="bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-3 px-6 rounded-lg mb-6 mx-auto block transition duration-200 hover:ring-4 hover:ring-green-300 hover:ring-opacity-80"
          >
            🔥 Good luck and have fun!
          </button>
        </div>
      )
    },
    about: {
      title: "Inspiration",
      content: (
        <div className="text-blue-100 leading-relaxed space-y-4 text-center text-sm sm:text-base">
          <p>This game was inspired by Duke basketball fandom and the spirit of K-Ville.</p>
          <p>We wanted to make a fun, strategic challenge where fans guess former players based on career stats and eras.</p>
          <p>Built with 💙 by a fellow Cameron Crazie.</p>
        </div>
      )
    },
    leaderboard: {
      title: "🏆 Leaderboard",
      content: (
        <div className="text-blue-100 leading-relaxed space-y-4 text-center text-sm sm:text-base">
          <p>Coming soon: Global rankings and daily top scorers!</p>
          <p>You’ll be able to see how your skills compare to other fans.</p>
          <p>Check back soon!</p>
        </div>
      )
    },
    score: {
      title: "GO DUKE",
      content: (
        <div className="text-center text-white">
          <button
            onClick={resetGame}
            className="bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-3 px-6 rounded-lg mb-6 mx-auto block transition duration-200 hover:ring-4 hover:ring-green-300 hover:ring-opacity-80">
            RESET GAME
          </button>

          {secretPlayer && (
            <div className="bg-white/10 p-5 rounded-xl mb-5">
              <div className="text-xl font-bold mb-2">{secretPlayer.name}</div>
              {secretPlayer.instagram && (
                <div className="mb-1">
                  <a href={secretPlayer.instagram} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-[#C13584] hover:underline transition duration-200">
                    @{secretPlayer.name}
                  </a>
                </div>
              )}
              {secretPlayer.fact && (
                <div className="italic text-blue-100">{secretPlayer.fact}</div>
              )}
            </div>
          )}

          <table className="w-full border-collapse bg-white/10 text-white rounded-xl overflow-hidden text-center">
            <thead>
              <tr className="bg-blue-900/80">
                <th className="py-2 px-4 font-bold">Difficulty</th>
                <th className="py-2 px-4 font-bold">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2">Easy</td><td>{scores.easy}</td></tr>
              <tr><td className="py-2">Normal</td><td>{scores.normal}</td></tr>
              <tr><td className="py-2">Hard</td><td>{scores.hard}</td></tr>
            </tbody>
          </table>
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-start p-5 bg-gradient-to-br from-[#001a57] to-[#003d82] text-white">
      <div className="w-full max-w-6xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
        <Header 
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          guessesRemaining={guessesRemaining}
          timer={formatTime(timer)}
          onModalOpen={setCurrentModal}
          onTimerToggle={() => setIsTimerRunning(!isTimerRunning)}
          resetGame={resetGame}
          colorBlindMode={colorBlindMode}
          setColorBlindMode={setColorBlindMode}
        />
        <PlayerInput 
          key={guesses.length === 0 ? 'new-game' : 'playing'}
          onPlayerGuess={handlePlayerGuess}
          playerData={playerData}
          difficulty={difficulty}
          guesses={guesses}
          disabled={gameWon || gameLost || guessesRemaining <= 0}
        />
        <GuessTable 
          guesses={guesses}
          colorBlindMode={colorBlindMode}
          />
        <ConfettiComponent active={gameWon} />
        <Footer onModalOpen={setCurrentModal} />
        {currentModal && modalContent[currentModal] && (
          <Modal
            isOpen={true}
            onClose={() => setCurrentModal(null)}
            title={modalContent[currentModal].title}
          >
            {modalContent[currentModal].content}
          </Modal>
        )}
      </div>
    </div>
  )
}

export default App
