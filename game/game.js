const Move = require('./move');

class Game {
  constructor() {
    this.board = this.newBoard();
    this.moves = [];
  }
  newBoard = () => {
    return [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
  };

  getSpaceValue = function (row, col) {
    return this.board[row][col];
  };

  validMove = function (row, col) {
    let space = this.getSpaceValue(row, col);
    return space === 0;
  };

  markSpace = function (row, col, value) {
    if (this.validMove(row, col)) {
      this.board[row][col] = value;
      this.moves.push(Move(row, col, value));
    } else {
      return 'not so fast, buddy';
    }
  };

  evaluateMove = function () {
    if (this.moves.length === 9) return 'draw';
    if (
      this.rowWin() ||
      this.columnWin() ||
      this.leftDiagonalWin() ||
      this.rightDiagonalWin()
    ) {
      return 'winner!';
    } else return 'play';
  };

  // private

  lastMove = () => {
    return this.moves[this.moves.length - 1];
  };

  rowWin = function () {
    const board = this.board;
    const lastMove = this.lastMove();

    let row = board[lastMove.row];
    for (let space of row) {
      if (space !== lastMove.value) return false;
    }
    return true;
  };

  columnWin = function () {
    const board = this.board;
    const lastMove = this.lastMove();

    for (let row of board) {
      if (row[lastMove.col] !== lastMove.value) return false;
    }
    return true;
  };

  leftDiagonalWin = function () {
    const board = this.board;
    const lastMove = this.lastMove();

    let row = 0;
    let col = 0;
    while (row < 3 && col < 3) {
      if (board[row][col] !== lastMove.value) return false;
      row++;
      col++;
    }
    return true;
  };

  rightDiagonalWin = function () {
    const board = this.board;
    const lastMove = this.lastMove();

    let row = 0;
    let col = 2;
    while (row < 3 && col > -1) {
      if (board[row][col] !== lastMove.value) return false;
      row++;
      col--;
    }
    return true;
  };
}

module.exports = Game;
