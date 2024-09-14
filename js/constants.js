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



// block elements
const blocks = [
    lineBlock,
    squareBlock,
    tBlockReversed,
    tBlock,
    [
        [1, 1],
        [0, 1],
        [0, 1]
    ],
    sBlock,
    zBlock,
    jBlock,
    [
        [1, 1, 1],
        [1, 0, 0]
    ],
    lBlock,
    [
        [1, 1, 1],
        [0, 0, 1]
    ],
    [
        [1, 0, 0],
        [1, 1, 1]
    ],
    iBlock
]

// Colors
const colors = [
    "green-color",
    "red-color",
    "orange-color"
]

function randomBlock(){
    // Random block
    return blocks[Math.floor(Math.random() * blocks.length)]
}

function randomColor(){
    // Random color
    return colors[Math.floor(Math.random() * colors.length)]
}
