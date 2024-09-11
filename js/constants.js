const boardWidth = 20; // default width of the board
const boardHeight = 30; // default height of the board
const tileSize = 20; // default tile size

const boardMiddle = boardWidth / 2; // default middle of the board

let boardArray = Array.from({ length: boardHeight }, () => [Array.from({ length: boardWidth }, () => 0)]);  // array of board elements

// block elements
const blocks = [
    [
        [1],
        [1],
        [1],
        [1],
    ],
    [
        [1, 1],
        [1, 1]
    ],
    [
        [1, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 1, 0],
        [1, 1, 1]
    ],
    [
        [1, 1],
        [0, 1],
        [0, 1]
    ],
    [
        [0, 1, 1],
        [1, 1, 0]
    ],
    [
        [1, 1, 0],
        [0, 1, 1]
    ],
    [
        [1, 1, 1],
        [1, 0, 0]
    ],
    [
        [0, 0, 1],
        [1, 1, 1]
    ],
    [
        [1, 1, 1],
        [0, 0, 1]
    ],
    [
        [1, 0, 0],
        [1, 1, 1]
    ],
    [
        [1], [1], [1], [1]
    ]
]
// Random block
const blockSquare = blocks[Math.floor(Math.random() * blocks.length)]

