const boardWidth = 20; // default width of the board
const boardHeight = 30; // default height of the board
const tileSize = 20; // default tile size

const boardMiddle = boardWidth / 2; // default middle of the board

let boardArray = Array.from({ length: boardHeight }, () => Array.from({ length: boardWidth }, () => 0));  // array of board elements

const lineBlock = [
    [1],
    [1],
    [1],
    [1],
]

const squareBlock = [
    [1, 1],
    [1, 1]
]

const tBlock = [
    [0, 1, 0],
    [1, 1, 1]
]
const tBlockReversed1 = [
    [1, 0],
    [1, 1],
    [1, 0]
]

const sBlock = [
    [0, 1, 1],
    [1, 1, 0]
];

const zBlock = [
    [1, 1, 0],
    [0, 1, 1]
];

const iBlock = [
    [1, 1, 1, 1]
];

const jBlock = [
    [1, 0, 0],
    [1, 1, 1]
];

const lBlock = [
    [0, 0, 1],
    [1, 1, 1]
];

const tBlockReversed = [
    [1, 1, 1],
    [0, 1, 0]
];

const lBlockReversed = [
    [1, 1],
    [0, 1],
    [0, 1]
];

const jBlockReversed = [
    [1, 1, 1],
    [1, 0, 0]
];

const jBlockReversed2 = [
    [1, 1, 1],
    [0, 0, 1]
];

const lBlockReversed2 =[
    [1, 0, 0],
    [1, 1, 1]
];

// block elements
const blocks = [
    lineBlock,
    squareBlock,
    tBlockReversed,
    tBlockReversed1,
    tBlock,
    lBlockReversed,
    sBlock,
    zBlock,
    jBlock,
    jBlockReversed,
    lBlock,
    jBlockReversed2,
    lBlockReversed2,
    iBlock
]

// Colors
const colors = [
    "green-color",
    "red-color",
    "orange-color",
    "blue-color",
    "black-color"
]

function randomBlock(){
    // Random block
    return blocks[Math.floor(Math.random() * blocks.length)]
}

function randomColor(){
    // Random color
    return colors[Math.floor(Math.random() * colors.length)]
}
