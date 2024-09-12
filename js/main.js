const boardContainer = document.querySelector('#boardContainer');
boardContainer.style.width = tileSize  * boardWidth + "px"; // width
boardContainer.style.height = tileSize  * boardHeight + "px"; // height

const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');

let block = null; // block to be displayed
// Function to draw tiles on the board. Clears the board first, then draws new tiles from current position.
function drawTiles(){
    boardContainer.innerHTML = ''; // Clear board container
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
                tile.style.backgroundColor = color; // change the background color
                tile.style.top = h * tileSize + "px";
                tile.style.left = w * tileSize + "px";
                tile.style.width = tileSize + "px";
                tile.style.height = tileSize + "px";
                boardContainer.appendChild(tile);
            }
        }
    }
}

// Change 0 to 1
function changeBoard(){
    let currentBlockCoordinates = [] // bottom right block is first
    // Iter through block height and width
    for (let h = 0; h < blockSquare.length; h++){
        for (let w = 0; w < blockSquare[0].length; w++){
            if (blockSquare[h][w] === 1){ // Check if we have 1 in the block
                boardArray[h][w + boardMiddle - 1] = blockSquare[h][w]; // change
                currentBlockCoordinates.unshift([h, w + boardMiddle - 1]); // save coordinates for further operations
                //console.log("Height and width", h, w, w + boardMiddle-1);
            }
        }
    }
    console.log("Current block coordinates", currentBlockCoordinates)
    block = new Block(currentBlockCoordinates);
    block.current_block_move = true; // set the current block as movable
}

function resetBlock(){
    block = null; // reset the current block
    changeBoard(); // change new block
}

changeBoard();
drawTiles();
drawBlock();



// Move block down every second
setInterval(() => {
    block.moveDown();
    drawTiles();
    drawBlock();
    // if (block.current_block_move === false){
    //     resetBlock(); // reset block if it can't move down anymore
    //     console.log("Game Over!") // print a message when the game is over
    // }
}, 1200)


