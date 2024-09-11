// Block which moves from the top
class Block{
    constructor(block_coordinates){
        this.block_coordinates = block_coordinates;
        this.current_block_move = true; // can be moved from current position
    }

    moveDown(){
        for (let h = boardHeight - 1; h >= 0 ; h--) {
            for (let w = boardWidth - 1; w >= 0; w--) {
                for (let i = 0; i < this.block_coordinates.length; i++) {
                    if ((this.block_coordinates[i][0] === h && this.block_coordinates[i][1] === w) && this.current_block_move ){ // move from current position
                        if (boardHeight > h + 1 && boardArray[h + 1][w] !== 1){ // check if h + 1 is 0
                            boardArray[h + 1][w] = 1
                            boardArray[h][w] = 0
                            this.block_coordinates[i][0]++ // move down
                            console.log("Found ", h + 1)
                            if ( w !== 29 &&boardArray[h + 1][w - 1] === 1){
                                // Break when there is a block on the right or left of the block below or nothing
                                this.current_block_move = false;
                                console.log("Break ", w)
                                break; // Prevents a block from left to continue falling after the block is it's place
                            }
                            
                        }
                        else if ((h + 1 >= boardHeight) || (boardArray[h + 1][w] === 1)){ 
                            // Break when there is one block below or nothing
                            this.current_block_move = false;
                            console.log("Break ", h + 1)
                            break; //
                        }
                    }
                }
            }
        }
        //console.log(this.current_block_move)
    }
}
