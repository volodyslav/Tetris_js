// Block which moves from the top
class Block{
    constructor(block_coordinates){
        this.block_coordinates = block_coordinates;
        this.current_block_move = true; // can be moved from current position
    }

    moveDown(){
        for (let h = boardHeight; h >= 0 ; h--) {
            for (let w = boardWidth; w >= 0; w--) {
                for (let i = 0; i < this.block_coordinates.length; i++) {
                    if (this.block_coordinates[i][0] === h && this.block_coordinates[i][1] === w ){ // move from current position
                        if (boardHeight > h + 1 && boardArray[h + 1][w] !== 1){ // check if h + 1 is 0
                            boardArray[h + 1][w] = 1
                            boardArray[h][w] = 0
                            this.block_coordinates[i][0]++ // move down
                            console.log("Found " + h)
                        }else{
                            this.current_block_move = false;
                            break;
                        }
                    }
                }
            }
        }
    }
}
