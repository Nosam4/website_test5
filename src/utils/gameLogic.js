export const gameLogic = {
  selectRandomPlayer: (playerData, difficulty) => {
    // Filter players based on difficulty
    let filteredPlayers = playerData
    
    switch (difficulty) {
      case 'easy':
        // More well-known players (you can adjust this logic)
        filteredPlayers = playerData.filter(player => player.popularity >= 8)
        break
      case 'normal':
        // Less well-known players
        filteredPlayers = playerData.filter(player => player.popularity >= 5)
        break
      default:
        // Hard difficulty - all players
        filteredPlayers = playerData
    }
    
    const randomIndex = Math.floor(Math.random() * filteredPlayers.length)
    return filteredPlayers[randomIndex]
  },

  processGuess: (guessedPlayer, secretPlayer) => {
    const result = {
      player: { value: guessedPlayer.name, status: 'wrong' },
      decade: { value: guessedPlayer.decade, status: 'wrong' },
      firstYear: { value: guessedPlayer.firstYear, status: 'wrong' },
      numYears: { value: guessedPlayer.numYears, status: 'wrong' },
      position: { value: guessedPlayer.position, status: 'wrong' },
      height: { value: guessedPlayer.height, status: 'wrong' },
      number: { value: guessedPlayer.number, status: 'wrong' },
      isCorrect: false
    }

    // Check if it's the correct player
    if (guessedPlayer.name === secretPlayer.name) {
      Object.keys(result).forEach(key => {
        if (key !== 'isCorrect') {
          result[key].status = 'correct'
        }
      })
      result.isCorrect = true
      return result
    }

    // Check each attribute
    if (guessedPlayer.decade === secretPlayer.decade) {
      result.decade.status = 'correct'
    } else if (Math.abs(guessedPlayer.decade - secretPlayer.decade) <= 20) {
      result.decade.status = 'close'
    }

    if (guessedPlayer.firstYear === secretPlayer.firstYear) {
      result.firstYear.status = 'correct'
    } else if (Math.abs(guessedPlayer.firstYear - secretPlayer.firstYear) <= 2) {
      result.firstYear.status = 'close'
    }

    if (guessedPlayer.numYears === secretPlayer.numYears) {
      result.numYears.status = 'correct'
    } else if (Math.abs(guessedPlayer.numYears - secretPlayer.numYears) <= 2) {
      result.numYears.status = 'close'
    }

    if (guessedPlayer.position === secretPlayer.position) {
      result.position.status = 'correct'
    }

    if (guessedPlayer.height === secretPlayer.height) {
      result.height.status = 'correct'
    } else if (Math.abs(guessedPlayer.height - secretPlayer.height) <= 2) {
      result.height.status = 'close'
    } else if (Math.abs(guessedPlayer.height - secretPlayer.height) >= 89 &&
               Math.abs(guessedPlayer.height - secretPlayer.height) <= 90) {
      result.height.status = 'close'
    }    

    if (guessedPlayer.number === secretPlayer.number) {
      result.number.status = 'correct'
    } else if (Math.abs(guessedPlayer.number - secretPlayer.number) <= 2) {
      result.number.status = 'close'
    }

    return result
  }
}