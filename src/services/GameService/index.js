class GameService {
  static RULES = ({
    rock: { name: 'Rock', defeats: 'scissors' },
    paper: { name: 'Paper', defeats: 'rock' },
    scissors: { name: 'Scissors', defeats: 'paper' },
  })

  static getComputerChoice = () => {
    const choices = Object.keys(this.getRules())

    return choices[Math.floor((Math.random() * choices.length))]
  }

  static decide = (fPlayer, sPlayer, fChoice, sChoice) => {
    if (fChoice === sChoice) {
      return 'DRAW';
    }

    const fChoiceRule = this.RULES[fChoice];

    if (fChoiceRule.defeats === sChoice) {
      return `${fPlayer} WIN`
    }

    return `${sPlayer} WIN`
  }

  static validatePlayer = async (room, username, choice) => {
    if (!Object.keys(this.RULES).includes(choice)) {
      throw Error('Choice does not exists').message
    }

    const {
      playerOneUsername, playerTwoUsername, playerOneChoice, playerTwoChoice,
    } = room

    if (playerOneUsername === username) {
      if (!playerOneChoice) {
        return 'firstPlayer'
      }

      throw Error('You cannot choose other choice again').message
    }

    if (playerTwoUsername === username) {
      if (!playerTwoChoice) {
        return 'secondPlayer'
      }

      throw Error('You cannot choose other choice again').message
    }

    throw Error('You are not player in this room').message
  }

  static getResult = async (game) => {
    const {
      playerOneUsername, playerTwoUsername, playerOneChoice, playerTwoChoice,
    } = game

    if (playerOneChoice && playerTwoChoice) {
      const result = this.decide(
        playerOneUsername, playerTwoUsername, playerOneChoice, playerTwoChoice,
      )

      return result
    }

    return null
  }
}

export default GameService
