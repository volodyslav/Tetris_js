// Block which moves from the top
class Block{
    
    constructor(block_coordinates, blockName){
        this.block_coordinates = block_coordinates;
        this.blockName = blockName; // board name for debugging purposes
        this.current_block_move = true; // can be moved from current position
        this.current_block_right = true; // can be moved from current position to right
        this.current_block_left = true; // can be moved from current position to left
        this.#moveRightLeft();
        
        this.countBlocks = 0; // number of blocks one in one vertical line
        this.countBlocksRight = 0; // number touches other blocks or the walls when move right
        this.countBlocksLeft = 0; // when move left
    }

    #moveRightLeft(){
        document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowRight") {
                this.#moveRight();
                this.current_block_left = true; // can be moved from current position
            }
            if (e.key === "ArrowLeft") {
                this.#moveLeft();
                this.current_block_right = true; // can be moved from current position
            }
            if (e.key === " ") {
                this.#changeBlock();
            }
        })

        rightButton.addEventListener("click", () => {
            this.#moveRight();
            this.current_block_left = true; // can be moved from current position
        });

        leftButton.addEventListener("click", () => {
            this.#moveLeft();
            this.current_block_right = true; // can be moved from current position
        });

        spaceButton.addEventListener("click", () => {
            this.#changeBlock();
            
        });
    }

    #changeBlock(){
        let newBlockSquare;
        let last_coordinates = this.block_coordinates[0];
        let sizeRotation; // controls width when rotation in oreder prevent left ot right rotation
        let canRotate = false; // check if width more than allowed
        let boardRotateOne; // check if rotation can be done if there is no w + 1 === 0
        switch(this.blockName){
            case lineBlock:
                newBlockSquare = iBlock;
                sizeRotation = 3;
                boardRotateOne = 1
                break;
            case squareBlock:
                // No change for square block
                return;
            default:
                console.error("Unsupported block shape");
                return;
                
        }

        outerLoop: for (let h = boardHeight - 1; h >= 0; h--) {
            for (let w = boardWidth - 1; w >= 0; w--) {
                for (let i = 0; i < this.block_coordinates.length; i++) {
                    if (this.block_coordinates[i][0] === h && this.block_coordinates[i][1] === w && this.current_block_move && w < boardWidth - sizeRotation){  
                        for (let j = 1; j <= sizeRotation + 1; j++){ // if any of the block w + 1 === break everything
                            if (boardArray[h][w + j] === 1){
                                canRotate = false;
                                break outerLoop; // break everything
                            }
                        }
                        boardArray[h][w] = 0;
                        canRotate = true; // the width is okay
                        this.blockName = newBlockSquare; // change block name

                    }
                }
            }
        }

        
        console.log("Cleared previous", this.block_coordinates)
        if (canRotate){
            for (let h = 0; h < newBlockSquare.length; h++){
                for (let w = 0; w < newBlockSquare[0].length; w++){
                    if (newBlockSquare[h][w] === 1){ // Check if we have 1 in the block
                        
                        console.log("Rotate", [h + last_coordinates[0], w + last_coordinates[1]])
                        boardArray[last_coordinates[0]][last_coordinates[1]] = newBlockSquare[h][w]; // change
                        this.block_coordinates.unshift([h + last_coordinates[0], w + last_coordinates[1]]); // save coordinates for further operations
                        this.block_coordinates.pop();// delete previous coordinates
                    }
                }
            }
            console.log("after added", this.block_coordinates)
            drawTiles();
            drawBlock();
        }
        
    }

    #checkRightMove(){
        this.countBlocksRight = 0; // reinit
        this.current_block_right = true; // can be moved from current position
        for (let h = boardHeight - 1; h >= 0; h--) {
            for (let w = boardWidth - 1; w >= 0; w--) {
                for (let i = 0; i < this.block_coordinates.length; i++) {
                    if (this.block_coordinates[i][0] === h && this.block_coordinates[i][1] === w && this.current_block_move && this.current_block_right) {
                        if (w + 1 < boardWidth && boardArray[h][w + 1] === 1){
                            this.countBlocksRight++; // count blocks in one horizontal line to right
                        }
                        if (w + 1 >= boardWidth){
                            this.countBlocksRight++;
                        }
                    }
                }
            }
        }
    }

    #moveRight() {
        this.#checkRightMove();
        for (let h = boardHeight - 1; h >= 0; h--) {
            for (let w = boardWidth - 1; w >= 0; w--) {
                for (let i = 0; i < this.block_coordinates.length; i++) {
                    if (this.block_coordinates[i][0] === h && this.block_coordinates[i][1] === w && this.current_block_move && this.current_block_right) { // chekc amount of touches to the right
                        if (boardWidth > w + 1 && boardArray[h][w + 1] !== 1){
                            //console.log("Block count Right = ", this.countBlocksRight)
                            if ((this.blockName === squareBlock || this.blockName === sBlock || this.blockName === zBlock || this.blockName === tBlock || this.blockName === jBlock || this.blockName === lBlock || this.blockName === tBlockReversed || this.blockName === jBlockReversed || this.blockName === jBlockReversed2 || this.blockName === lBlockReversed2) && this.countBlocksRight > 2){
                                this.current_block_right = false;
                                break;
                            }
                            else if ((this.blockName === lineBlock) && this.countBlocksRight >= 1){
                                this.current_block_right = false;
                                break;
                            }
                            else if ((this.blockName === lBlockReversed) && this.countBlocksRight > 1){
                                this.current_block_right = false;
                                break;
                            }
                            else if ((this.blockName === iBlock) && this.countBlocksRight > 3){
                                this.current_block_right = false;
                                break;
                            }
                            else {
                                boardArray[h][w + 1] = 1;
                                boardArray[h][w] = 0;
                                this.block_coordinates[i][1]++; // change the initial array with coordinates
                            }
                        }else if (w + 1 >= boardWidth){
                            this.current_block_right = false;
                            break;
                        }
                    }
                }
            }
        }
    }

    #checkLeftMove(){
        this.countBlocksLeft = 0; // reinit
        this.current_block_left = true; // can be moved from current position
        for (let h = 0; h < boardHeight; h++) {
            for (let w = 0; w < boardWidth; w++) {
                for (let i = this.block_coordinates.length - 1; i >= 0 ; i--) {
                    if (this.block_coordinates[i][0] === h && this.block_coordinates[i][1] === w && this.current_block_move && this.current_block_left){
                        if (w - 1 >= 0 && boardArray[h][w - 1] === 1){
                            this.countBlocksLeft++; // count blocks in one horizontal line to right
                        }
                        if (w === 0){
                            this.countBlocksLeft++;
                        }
                    } 
                }
            }
        }
    }

    #moveLeft() {
        this.#checkLeftMove();
        for (let h = 0; h < boardHeight; h++) {
            for (let w = 0; w < boardWidth; w++) {
                for (let i = this.block_coordinates.length - 1; i >= 0 ; i--) {
                    if (this.block_coordinates[i][0] === h && this.block_coordinates[i][1] === w && this.current_block_move && this.current_block_left) {
                        if ( w - 1 >= 0 && boardArray[h][w - 1] !== 1){
                            console.log("Block count left = ", this.countBlocksLeft)
                            if ((this.blockName === squareBlock || this.blockName === sBlock || this.blockName === zBlock || this.blockName === tBlock || this.blockName === jBlock || this.blockName === lBlock || this.blockName === tBlockReversed || this.blockName === jBlockReversed || this.blockName === jBlockReversed2 || this.blockName === lBlockReversed2) && this.countBlocksLeft > 2){
                                this.current_block_left = false;
                                break;
                            }
                            else if ((this.blockName === lineBlock) && this.countBlocksLeft >= 1){
                                this.current_block_left = false;
                                break;
                            }
                            else if ((this.blockName === lBlockReversed) && this.countBlocksLeft > 1){
                                this.current_block_left = false;
                                break;
                            }
                            else if ((this.blockName === iBlock) && this.countBlocksLeft > 3){
                                this.current_block_left = false;
                                break;
                            }
                            else {
                                boardArray[h][w - 1] = 1;
                                boardArray[h][w] = 0;
                                this.block_coordinates[i][1]--; // change the initial array with coordinates
                            }
                        }else if (w === 0){
                            this.current_block_left = false;
                            break;
                        }
                    }
                }
            }
        }
    }

    #checkCountMoveDown(){
        for (let h = boardHeight - 1; h >= 0 ; h--) {
            for (let w = boardWidth - 1; w >= 0; w--) {
                for (let i = 0; i < this.block_coordinates.length; i++) {
                    if ((this.block_coordinates[i][0] === h && this.block_coordinates[i][1] === w) && this.current_block_move){
                       if (h + 1 < boardHeight && boardArray[h + 1][w] === 1){
                            this.countBlocks++; // count blocks in one vertical line
                       }
                    }
                }
            }
        }
    }


    moveDown(){
        this.#checkCountMoveDown();
        for (let h = boardHeight - 1; h >= 0 ; h--) {
            for (let w = boardWidth - 1; w >= 0; w--) {
                for (let i = 0; i < this.block_coordinates.length; i++) {
                    if ((this.block_coordinates[i][0] === h && this.block_coordinates[i][1] === w) && this.current_block_move ){ // move from current positio
                        if (boardHeight > h + 1 && boardArray[h + 1][w] !== 1){ // check if h + 1 is 0
                            if ((this.blockName === sBlock || this.blockName === zBlock || this.blockName === lBlock || this.blockName === lBlockReversed2 || this.blockName === jBlockReversed2 || this.blockName === jBlockReversed || this.blockName === jBlock || this.blockName === tBlock || this.blockName === tBlockReversed) && this.countBlocks > 1){ // break if more vertical blocks
                                this.current_block_move = false;
                                break;
                            }
                            else if (this.blockName === iBlock && this.countBlocks >= 1){ // break if more vertical blocks
                                this.current_block_move = false;
                                break;
                            }
                            else if (this.blockName === squareBlock && this.countBlocks > 2){ // break if more vertical blocks
                                this.current_block_move = false;
                                break;
                            }
                            else if (this.blockName === lBlockReversed && this.countBlocks > 2){ // break if more vertical blocks
                                this.current_block_move = false;
                                break;
                            }else{
                                boardArray[h + 1][w] = 1
                                boardArray[h][w] = 0
                                this.block_coordinates[i][0]++ // change the instial array with coordinates 
                                this.countBlocks = 0; // reset countBlocks for next moveDown
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
        
