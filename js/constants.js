const boardWidth = 20; // default width of the board
const boardHeight = 30; // default height of the board
const tileSize = 20; // default tile size

const boardMiddle = boardWidth / 2; // default middle of the board

let boardArray = Array.from({ length: boardHeight }, () => [Array.from({ length: boardWidth }, () => 0)]);  // array of board elements

console.log(boardArray);
console.log(boardMiddle);




const blockSquare = [
    [1, 1],
    [1, 1]
]

const blocks = [
   blockSquare, 
]