//playTurn(index)
//It should take one parameter which is a zero-based index to your grid,
//indicating where the current player's token should be played.
//It should return a boolean value to indicate whether the move was
//allowed or not - true if it was successful, false otherwise
//e.g. if the square is already taken or the game is over.

var board = []
var playerOneMoves = [];
var playerTwoMoves = [];
var playerOneMovesStr = ""
var playerTwoMovesStr = ""

function playTurn(index) { //playTurn(0)
  if (!board.includes(index)) { //board [1,2]
    board.push(index)
    return true
  }
  return false
}

//isGameOver()
//It should return a true or false if the game is over.
function isGameOver() {
  if (whoWon()) {
    return true
  }
  return false
}

//whoWon()
//It should return 0 if the game is not yet finished.
//Else it should return either 1 or 2 depending on which player one.
//It should return 3 if the game is a draw.

//assumption1: player one makes the first move
//assumption2: both players will play till the 9th move (draw) until a winner is declared
function whoWon() {
  var waysToWin = ["0,1,2","3,4,5","6,7,8","0,4,8","2,4,6","0,3,6","1,4,7","2,5,8"]
  if (board.length === 0) {
    return 0
  }
  else if (board.length === 9) {
    return 3
  }
  else if (board.length % 2 !== 0) {
    playerOneMoves.push(board[board.length-1])
    playerOneMovesStr = playerOneMoves.sort().join()
    for (var i=0; i<waysToWin.length; i++) {
      if (playerOneMovesStr.includes(waysToWin[i])) {
        return 1
      }
    }
    return 0
  }
  else if (board.length % 2 === 0) {
    playerTwoMoves.push(board[board.length-1])
    playerTwoMovesStr = playerTwoMoves.sort().join()
    for (var i=0; i<waysToWin.length; i++) {
      if (playerTwoMovesStr.includes(waysToWin[i])) {
        return 2
      }
    }
    return 0
  }
}
//restart()
//It should restart the game so it can be played again.
//It is assumed that the turns of the player will be automatically changed after an allowed move.
//The application will console log all the passed or failed test.
function restart() {
  board = []
  playerOneMovesStr = ""
  playerTwoMovesStr = ""
  playerOneMoves = []
  playerTwoMoves = []
}
