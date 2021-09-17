# Challenge

Write a function that accepts a tic-tac-toe board as a parameter and evaluates the game.

Return value:

- `undefined` if the game is a draw
- `"draw"` if the game is a draw
- `"x"` or `"o"` if the respective player has won

function evaluateTicTacToe(board: string[][]): "x" | "o" | "draw" | undefined {
//
}

## types

- board

  - a tic-tac-toe board represented by an array of arrays. Each cell has a value of `""` by default -- otherwise marked by `"x"`, or `"o"`

  ```
  //  example of a fresh board:
  [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]
  ```

  ```
  // example of a board in play
  [
    ["x", "o", ""],
    ["x", "", ""],
    ["o", "", ""]
  ]
  ```

  ```
  // example of a winning board
  [
    ["x", "o", ""],
    ["x", "x", "o"],
    ["o", "", "x"]
  ]
  ```
