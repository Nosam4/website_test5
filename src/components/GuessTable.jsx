function GuessTable({ guesses, colorBlindMode }) {
  const maxGuesses = 6

  const getCellClass = (value) => {
    if (!value) return ''
  
    if (colorBlindMode) {
      switch (value.status) {
        case 'correct': return 'bg-[#785EF0]/30 text-[#785EF0] font-extrabold text-shadow'
        case 'close': return 'bg-[#FFB000]/30 text-[#FFB000] font-extrabold text-shadow'
        case 'wrong': return 'bg-[#DC267F]/30 text-[#DC267F] font-extrabold text-shadow'
        default: return ''
      }
    } else {
      switch (value.status) {
        case 'correct': return 'bg-green-400/30 text-green-400 font-bold'
        case 'close': return 'bg-yellow-400/30 text-yellow-400 font-bold'
        case 'wrong': return 'bg-red-400/30 text-red-400'
        default: return ''
      }
    }
  }  

  const renderGuessRow = (guess, index) => {
    const cellBase =
      'px-1 py-1 text-center border-b border-white/10 text-xs sm:text-sm md:text-base lg:text-lg font-medium whitespace-nowrap'

    if (!guess) {
      return (
        <tr key={index}>
          {[...Array(7)].map((_, i) => (
            <td key={i} className={cellBase}></td>
          ))}
        </tr>
      )
    }

    return (
      <tr key={index}>
        <td className={`w-[25%] ${cellBase} ${getCellClass(guess.player)}`}>{guess.player.value}</td>
        <td className={`w-[15%] ${cellBase} ${getCellClass(guess.decade)}`}>{guess.decade.value}</td>
        <td className={`w-[15%] ${cellBase} ${getCellClass(guess.firstYear)}`}>{guess.firstYear.value}</td>
        <td className={`w-[10%] ${cellBase} ${getCellClass(guess.numYears)}`}>{guess.numYears.value}</td>
        <td className={`w-[10%] ${cellBase} ${getCellClass(guess.position)}`}>{guess.position.value}</td>
        <td className={`w-[10%] ${cellBase} ${getCellClass(guess.height)}`}>{guess.height.value}</td>
        <td className={`w-[10%] ${cellBase} ${getCellClass(guess.number)}`}>{guess.number.value}</td>
      </tr>
    )
  }

  return (
    <table className="w-full table-fixed border-collapse mb-8 bg-white/5 rounded-xl shadow-xl text-xs sm:text-sm md:text-base lg:text-lg">
      <thead>
        <tr className="bg-blue-900/80 text-white text-center">
          <th className="px-1 py-2 w-[25%] border-b-2 border-white/20 whitespace-nowrap">Player</th>
          <th className="px-1 py-2 w-[15%] border-b-2 border-white/20 whitespace-nowrap">Decade</th>
          <th className="px-1 py-2 w-[15%] border-b-2 border-white/20 whitespace-nowrap">
            <span className="block sm:hidden">Start</span>
            <span className="hidden sm:block">First Year</span>
          </th>
          <th className="px-1 py-2 w-[10%] border-b-2 border-white/20 whitespace-nowrap">
            <span className="block sm:hidden">Yrs</span>
            <span className="hidden sm:block"># of Years</span>
          </th>
          <th className="px-1 py-2 w-[10%] border-b-2 border-white/20 whitespace-nowrap">
            <span className="block sm:hidden">Pos</span>
            <span className="hidden sm:block">Position</span>
          </th>
          <th className="px-1 py-2 w-[10%] border-b-2 border-white/20 whitespace-nowrap">
            <span className="block sm:hidden">Ht</span>
            <span className="hidden sm:block">Height</span>
          </th>
          <th className="px-1 py-2 w-[10%] border-b-2 border-white/20 whitespace-nowrap">
            <span className="block sm:hidden">#</span>
            <span className="hidden sm:block">Number</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: maxGuesses }, (_, index) =>
          renderGuessRow(guesses[index], index)
        )}
      </tbody>
    </table>
  )
}

export default GuessTable
