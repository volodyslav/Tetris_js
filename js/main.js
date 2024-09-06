const boardContainer = document.querySelector('#boardContainer');
boardContainer.style.width = tileSize  * boardWidth + "px";
boardContainer.style.height = tileSize  * boardHeight + "px";
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

drawTiles();