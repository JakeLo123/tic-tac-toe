# design and abstraction
take this instance method on the tic-tac-toe `Game` class
```
  evaluateMove = function () {
    if (
      this.rowWin() ||
      this.columnWin() ||
      this.leftDiagonalWin() ||
      this.rightDiagonalWin()
    ) {
      return 'winner!';
    } else return 'play';
  };
```
take method `rowWin`. Initially, I wrote the method like this...
```
rowWin = function (row, value) {
  const board = this.board;

  let rowToEvaluate = board[row];
  for (let space of row) {
    if (space !== value) return false;
  }
  return true;
};
```

The above method must be called with a row and value. In other words, it must know about the last move.
It would be great to have all the data pertaining to the last move--row, col, and value--in one place.
Here is how I did that.

We will create a factory function `Move` that spits out our data in a nice little object like so:
```
const Move = (row, col, value) => {
  const move = new Object();
  move.row = row;
  move.col = col;
  move.value = value;
  return move;
};
```

Class `Game` will now have a `moves` attribute--which will be a stack of moves.
Every time a move is made, we will push it onto the stack like so:
```this.moves.push(Move(row, col, value))```

Now we can access the last move from anywhere inside game, and the data will be the same.
```
// instance method
lastMove = function() {
  return this.moves[this.moves.length - 1]
}
```

Now when we evaluate a row, we don't have to pass it any arguments.
```
rowWin = function () {
  const board = this.board;
  const lastMove = this.lastMove();

  let row = board[lastMove.row];
  for (let space of row) {
    if (space !== lastMove.value) return false;
  }
  return true;
};
```

We have abstracted the details of a move.
