// Block which moves from the top
class Block{
    
    constructor(block_coordinates){
        this.block_coordinates = block_coordinates;
        this.current_block_move = true; // can be moved from current position
        this.current_block_right = true; // can be moved from current position to right
        this.current_block_left = true; // can be moved from current position to left
        this.moveRightLeft();
    
    }

    moveRightLeft(){
        rightButton.addEventListener("click", () => {
            this.moveRight();
            this.current_block_left = true; // can be moved from current position
        });

        leftButton.addEventListener("click", () => {
            this.moveLeft();
            this.current_block_right = true; // can be moved from current position
        });
    }

    moveRight() {
        for (let h = boardHeight - 1; h >= 0; h--) {
            for (let w = boardWidth - 1; w >= 0; w--) {
                for (let i = 0; i < this.block_coordinates.length; i++) {
                    if (this.block_coordinates[i][0] === h && this.block_coordinates[i][1] === w && this.current_block_move && this.current_block_right) {
                        console.log(" h - 1 w + 1", boardArray[h - 1][w + 1])
                        console.log("w + 1", w + 1)
                        console.log("boardWidth",boardWidth)
                        console.log(this.current_block_right)
                        if (w + 1 === boardWidth){ // condition to stop move the block to the right
                            
                            this.current_block_right = false;
                            console.log("Break ", w + 1)
                            break; // Prevents a block from right to continue falling after the block is it's place
                        }
                        else if (w + 1 < boardWidth && boardArray[h][w + 1] === 0) {
                            console.log("move Right");
                            boardArray[h][w + 1] = 1;
                            boardArray[h][w] = 0;
                            this.block_coordinates[i][1]++; // change the initial array with coordinates
                        }
                    }
                }
            }
        }
    }

    moveLeft() {
        for (let h = boardHeight - 1; h >= 0; h--) {
            for (let w = boardWidth - 1; w >= 0; w--) {
                for (let i = 0; i < this.block_coordinates.length; i++) {
                    if (this.block_coordinates[i][0] === h && this.block_coordinates[i][1] === w && this.current_block_move) {
                        if (w - 1 >= 0 && boardArray[h][w - 1] === 0) {
                            console.log("move Left");
                            boardArray[h][w - 1] = 1;
                            boardArray[h][w] = 0;
                            this.block_coordinates[i][1]--; // change the initial array with coordinates
                        }
                        console.log("Click!");
                    }
                }
            }
        }
    }

    moveDown(){
        for (let h = boardHeight - 1; h >= 0 ; h--) {
            for (let w = boardWidth - 1; w >= 0; w--) {
                for (let i = 0; i < this.block_coordinates.length; i++) {
                    if ((this.block_coordinates[i][0] === h && this.block_coordinates[i][1] === w) && this.current_block_move ){ // move from current positio

                        if (boardHeight > h + 1 && boardArray[h + 1][w] !== 1){ // check if h + 1 is 0
                            boardArray[h + 1][w] = 1
                            boardArray[h][w] = 0
                            this.block_coordinates[i][0]++ // change the instial array with coordinates
                            //console.log("Found ", h + 1)
                            if ( w !== 29 && boardArray[h + 1][w - 1] === 1){
                                // Break when there is a block on the left is 1 because we count from bottom right
                                this.current_block_move = false;
                                //console.log("Break ", w)
                                break; // Prevents a block from left to continue falling after the block is it's place
                            }
                        }
                        else if ((h + 1 >= boardHeight) || (boardArray[h + 1][w] === 1)){ 
                            // Break when there is one block below or nothing
                            this.current_block_move = false;
                            //console.log("Break ", h + 1)
                            break; //
                        }
                    }
                }
            }
        }
        
    }

    
}
        
