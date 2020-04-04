const Move = (row, col, value) => {
  const move = new Object();
  move.row = row;
  move.col = col;
  move.value = value;
  return move;
};

module.exports = Move;
