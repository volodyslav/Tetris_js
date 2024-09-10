const boardContainer = document.querySelector('#boardContainer');
boardContainer.style.width = tileSize  * boardWidth + "px";
boardContainer.style.height = tileSize  * boardHeight + "px";
let block = null;
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
                tile.style.backgroundColor = "green"; // change the background color
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
    let currentBlockCoordinates = []
    // Iter through block height and width
    for (let h = 0; h < blockSquare.length; h++){
        for (let w = 0; w < blockSquare[0].length; w++){
            boardArray[h][w + boardMiddle - 1] = 1;
            currentBlockCoordinates.unshift([h, w + boardMiddle - 1]); // save coordinates for further operations
            console.log("Height and width", h, w, w + boardMiddle-1);
        }
    }
    console.log("Current block coordinates", currentBlockCoordinates)
    block = new Block(currentBlockCoordinates);
}



changeBoard();
drawTiles();
drawBlock();

// Move block down every second
setInterval(() => {
    block.moveDown();
    drawTiles();
    drawBlock();
}, 400)

