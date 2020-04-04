const { assert, expect } = require('chai');
const Game = require('../game/game.js');

describe('game', () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });

  describe('makeBoard', () => {
    it('should return a new board', () => {
      expect(game.board).to.deep.equal([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
    });
  });

  describe('validMove', () => {
    it('should return true when a move is valid', () => {
      expect(game.validMove(0, 0)).to.equal(true);
    });
    it('should return false when a move is invalid', () => {
      game.board[0][0] = 'x';
      expect(game.validMove(0, 0)).to.equal(false);
    });
  });

  describe('markSpace', () => {
    it('should change the value of a space on the board', () => {
      const board = game.board;
      game.markSpace(1, 1, 'X');
      assert.equal(board[1][1], 'X');
    });
    it("should cache the game's last move", () => {
      game.markSpace(1, 1, 'X');
      expect(game.lastMove()).to.deep.equal({
        row: 1,
        col: 1,
        value: 'X',
      });
    });
    it('should not mark a space if it is already marked', () => {
      const board = game.board;
      game.markSpace(1, 1, 'X');
      game.markSpace(1, 1, 'O');
      assert.equal(board[1][1], 'X');
    });
  });

  describe('evaluateMove', () => {
    it('if a player has won horizonatlly', () => {
      game.markSpace(0, 0, 'X');
      expect(game.evaluateMove()).to.equal('play');
      game.markSpace(0, 1, 'X');
      expect(game.evaluateMove()).to.equal('play');
      game.markSpace(0, 2, 'X');
      expect(game.evaluateMove()).to.equal('winner!');
    });
    it('if a player has won vertically', () => {
      game.markSpace(0, 0, 'X');
      expect(game.evaluateMove()).to.equal('play');
      game.markSpace(1, 0, 'X');
      expect(game.evaluateMove()).to.equal('play');
      game.markSpace(2, 0, 'X');
      expect(game.evaluateMove()).to.equal('winner!');
    });
    it('if a player has won on left diagonal', () => {
      game.markSpace(0, 0, 'X');
      expect(game.evaluateMove()).to.equal('play');
      game.markSpace(1, 1, 'X');
      expect(game.evaluateMove()).to.equal('play');
      game.markSpace(2, 2, 'X');
      expect(game.evaluateMove()).to.equal('winner!');
    });
    it('if a player has won on right diagonal', () => {
      game.markSpace(2, 0, 'X');
      expect(game.evaluateMove()).to.equal('play');
      game.markSpace(1, 1, 'X');
      expect(game.evaluateMove()).to.equal('play');
      game.markSpace(0, 2, 'X');
      expect(game.evaluateMove()).to.equal('winner!');
    });
    it('if there is a draw', () => {
      game.markSpace(0, 0, 'O');
      expect(game.evaluateMove()).to.equal('play');
      game.markSpace(0, 1, 'X');
      expect(game.evaluateMove()).to.equal('play');
      game.markSpace(0, 2, '0');
      expect(game.evaluateMove()).to.equal('play');
      game.markSpace(1, 0, 'O');
      expect(game.evaluateMove()).to.equal('play');
      game.markSpace(1, 1, 'X');
      expect(game.evaluateMove()).to.equal('play');
      game.markSpace(1, 2, 'X');
      expect(game.evaluateMove()).to.equal('play');
      game.markSpace(2, 0, 'X');
      expect(game.evaluateMove()).to.equal('play');
      game.markSpace(2, 1, 'O');
      expect(game.evaluateMove()).to.equal('play');
      game.markSpace(2, 2, 'X');
      expect(game.evaluateMove()).to.equal('draw');
    });
  });
});
