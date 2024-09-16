const boardContainer = document.querySelector('#boardContainer');
boardContainer.style.width = tileSize  * boardWidth + "px"; // width
boardContainer.style.height = tileSize  * boardHeight + "px"; // height

const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');
const spaceButton = document.querySelector('#space');

let block = null; // block to be displayed

let color = randomColor();
let blockSquare = randomBlock();

let posBlock = []; // display the color of the block
let posBlockColor = []; // display the color of the block square

// Function to draw tiles on the board. Clears the board first, then draws new tiles from current position.
function drawTiles(){
    boardContainer.innerHTML = ""; // clear the board first
    for (let i = 0; i < boardWidth; i++){ // Draw tiles from current position
        for (let j = 0; j < boardHeight; j++){
            const tile = document.createElement("div");
            tile.classList.add("tile");
            tile.style.top = j * tileSize + "px";
            tile.style.left = i * tileSize + "px";
            tile.style.width = tileSize + "px";
            tile.style.height = tileSize + "px";
            boardContainer.appendChild(tile);
        }
    }
}

// Function to draw tiles on the board
function drawBlock(){
    for (let h = 0; h < boardArray.length; h++){
        for (let w = 0; w < boardArray.length; w++){
            if (boardArray[h][w] === 1){
                const tile = document.createElement("div");
                tile.classList.add("tile-block");
                //tile.classList.add(color)
                saveBlockColor(tile, h, w)
                tile.style.top = h * tileSize + "px";
                tile.style.left = w * tileSize + "px";
                tile.style.width = tileSize + "px";
                tile.style.height = tileSize + "px";
                boardContainer.appendChild(tile);
            }
        }
    }
}

function saveBlockColor(tile, h, w){
    // Draw tile and tile's color based the coordinates 
    if (posBlock.length > 0){
        for (let i = 0; i < posBlock.length; i++){ // all posBlock [[], []]
            for (let j = 0; j < posBlock[i].length; j++){ // [], []
                if (h === posBlock[i][j][0] && w === posBlock[i][j][1]){ // h and w in one []
                    tile.classList.add(colors[posBlockColor[i]]) // color of []
                }
            }
        }
    }
}

// Change 0 to 1
function changeBoard(){
    let currentBlockCoordinates = [] // bottom right block is first
    let blockName = null; // name of the current    block

    posBlockColor.push(Math.floor(Math.random() * colors.length)); // save coordinates color for later operations
    // Iter through block height and width
    for (let h = 0; h < blockSquare.length; h++){
        for (let w = 0; w < blockSquare[0].length; w++){
            if (blockSquare[h][w] === 1){ // Check if we have 1 in the block
                boardArray[h][w + boardMiddle - 1] = blockSquare[h][w]; // change
                currentBlockCoordinates.unshift([h, w + boardMiddle - 1]); // save coordinates for further operations
                //console.log("Height and width", h, w, w + boardMiddle-1);
                blockName = blockSquare; // name
            }
        }
    }
    
    console.log("Current block coordinates", currentBlockCoordinates)
    block = new Block(currentBlockCoordinates, blockName);
    block.current_block_move = true; // set the current block as movable
    block.countBlocks = 0;
    posBlock.push(currentBlockCoordinates);

    console.log("Block square", posBlock);
    console.log("Block square color", posBlockColor);
}

function resetBlock(){
    block = null; // reset the current block
    changeBoard(); // change new block
    blockSquare = randomBlock();
    color = randomColor();
}
// First call
changeBoard();
drawTiles();
drawBlock();


// Move block down every second
setInterval(() => {
    block.moveDown();
    drawTiles();
    drawBlock();

    if (block.current_block_move === false){
        resetBlock(); // reset block if it can't move down anymore
    }
}, 300)


