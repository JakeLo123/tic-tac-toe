const evaluateTicTacToe = require('./tic-tac-toe');

const empty = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

const midGame = [
  ['x', 'o', ''],
  ['x', '', ''],
  ['o', '', '']
];

const winnerDiagonal = [
  ['x', 'o', ''],
  ['x', 'x', 'o'],
  ['o', '', 'x']
];

const winnerBackwardsDiagonal = [
  ['x', 'x', 'o'],
  ['x', 'o', 'o'],
  ['o', '', 'x']
];

const winnerVertical = [
  ['x', 'o', ''],
  ['x', 'o', 'x'],
  ['o', 'o', 'x']
];

const winnerHorizontal = [
  ['x', 'x', ''],
  ['x', 'o', 'x'],
  ['o', 'o', 'o']
];

const draw = [
  ['x', 'o', 'o'],
  ['x', 'o', 'o'],
  ['o', 'x', 'x']
];

describe('evaluateTicTacToe', () => {
  it('should correctly evaluate the board', () => {
    expect(evaluateTicTacToe(empty)).toBeUndefined();
    expect(evaluateTicTacToe(midGame)).toBeUndefined();
    expect(evaluateTicTacToe(winnerDiagonal)).toBe('x');
    expect(evaluateTicTacToe(winnerBackwardsDiagonal)).toBe('o');
    expect(evaluateTicTacToe(winnerVertical)).toBe('o');
    expect(evaluateTicTacToe(winnerHorizontal)).toBe('o');
    expect(evaluateTicTacToe(draw)).toBe('draw');
  });
});
