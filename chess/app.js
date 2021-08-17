const boardSize = {"x":800, "y":800};
let board = [
    ["br","bh","bb","bq","bk","bb","bh","br"],
    ["bp","bp","bp","bp","bp","bp","bp","bp"],
    ["  ","  ","  ","  ","  ","  ","  ","  ",],
    ["  ","  ","  ","  ","  ","  ","  ","  ",],
    ["  ","  ","  ","  ","  ","  ","  ","  ",],
    ["  ","  ","  ","  ","  ","  ","  ","  ",],
    ["wp","wp","wp","wp","wp","wp","wp","wp"],
    ["wr","wh","wb","wq","wk","wb","wh","wr"],
]
let tileSize = {"x":boardSize.x / 8, "y":boardSize.y / 8}
let canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = boardSize.x;
canvas.height = boardSize.y;

const tileColor = ["#EBEBD0", "#6B894A"];

function DrawBoard(context){
    
    for(col = 0; col < 8; col++){
        let num = 0;
        if(col % 2 == 0){
            num = 0;
        }else{
            num = 1;
        }
        
        for(row = 0; row < 8; row++){

            if((row + num) % 2 == 0){
                context.fillStyle=tileColor[0];
            }else{
                context.fillStyle=tileColor[1];
            }
            context.fillRect(row * tileSize.x, col * tileSize.y, tileSize.x, tileSize.y);
        }
    }    
}

function DrawPieces(context){
    
    for (let col = 0; col < 8; col++) {
        for (let row = 0; row < 8; row++) {
            if(board[col][row] == "bp"){
                let img = new Image();
                img.src = "images/bp.png";
                context.drawImage(img, row * tileSize.x, col * tileSize.y, tileSize.x, tileSize.y);
            }
            if(board[col][row] == "wp"){
                let img = new Image();
                img.src = "images/wp.png";
                context.drawImage(img, row * tileSize.x, col * tileSize.y, tileSize.x, tileSize.y);
            }
            if(board[col][row] == "bb"){
                let img = new Image();
                img.src = "images/bb.png";
                context.drawImage(img, row * tileSize.x, col * tileSize.y, tileSize.x, tileSize.y);
            }
            if(board[col][row] == "wb"){
                let img = new Image();
                img.src = "images/wb.png";
                context.drawImage(img, row * tileSize.x, col * tileSize.y, tileSize.x, tileSize.y);
            }
            if(board[col][row] == "bk"){
                let img = new Image();
                img.src = "images/bk.png";
                context.drawImage(img, row * tileSize.x, col * tileSize.y, tileSize.x, tileSize.y);
            }
            if(board[col][row] == "wk"){
                let img = new Image();
                img.src = "images/wk.png";
                context.drawImage(img, row * tileSize.x, col * tileSize.y, tileSize.x, tileSize.y);
            }
            if(board[col][row] == "bq"){
                let img = new Image();
                img.src = "images/bq.png";
                context.drawImage(img, row * tileSize.x, col * tileSize.y, tileSize.x, tileSize.y);
            }
            if(board[col][row] == "wq"){
                let img = new Image();
                img.src = "images/wq.png";
                context.drawImage(img, row * tileSize.x, col * tileSize.y, tileSize.x, tileSize.y);
            }
            if(board[col][row] == "br"){
                let img = new Image();
                img.src = "images/br.png";
                context.drawImage(img, row * tileSize.x, col * tileSize.y, tileSize.x, tileSize.y);
            }
            if(board[col][row] == "wr"){
                let img = new Image();
                img.src = "images/wr.png";
                context.drawImage(img, row * tileSize.x, col * tileSize.y, tileSize.x, tileSize.y);
            }
            if(board[col][row] == "bh"){
                let img = new Image();
                img.src = "images/bh.png";
                context.drawImage(img, row * tileSize.x, col * tileSize.y, tileSize.x, tileSize.y);
            }
            if(board[col][row] == "wh"){
                let img = new Image();
                img.src = "images/wh.png";
                context.drawImage(img, row * tileSize.x, col * tileSize.y, tileSize.x, tileSize.y);
            }

            if(board[col][row] == "np"){
                let img = new Image();
                img.src = "images/np.png";
                context.drawImage(img, row * tileSize.x, col * tileSize.y, tileSize.x, tileSize.y);
            }
        }
        
    }
}

function Update(timestamp){
    CheckUpgrade();


    DrawBoard(context);
    DrawPieces(context);
    requestAnimationFrame(Update);
}
requestAnimationFrame(Update);

function CheckUpgrade(){
    for(i = 0; i < board[0].length; i++){
        if(board[0][i] == "wp"){
            board[0][i] = prompt("Select a piece (wr, wh, wb, wq):");
        }
    }
    for(i = 0; i < board[7].length; i++){
        if(board[7][i] == "bp"){
            board[7][i] = prompt("Select a piece (br, bh, bb, bq):");
        }
    }
}

function MovePiece(x,y,tx,ty){
    board[ty][tx] = board[y][x];
    board[y][x] = "  ";
}

let selectedTile = null;
let selectedPiece = "";
canvas.addEventListener("click", (e) => {
    selectedTile = {"x" : Math.floor(e.clientX / tileSize.x), "y" : Math.floor(e.clientY / tileSize.y)};
    selectedTile.piece = board[selectedTile.y][selectedTile.x];
    if(selectedPiece == "" && selectedTile.piece != "  "){
        selectedPiece = selectedTile;
    }else{
        if(selectedPiece.piece.split("")[0] != selectedTile.piece.split("")[0]){
            let validMove = CheckValidMove(selectedTile, selectedPiece, board);
            if(validMove){
                MovePiece(selectedPiece.x, selectedPiece.y, selectedTile.x, selectedTile.y);
            }
        }
        selectedPiece = "";
    }
});

function CheckValidMove(selectedTile, selectedPiece, board){
    let validMove = false;
    if(selectedPiece.piece == "bp"){
        let distenceBetween = {
            "x": selectedTile.x - selectedPiece.x,
            "y": selectedTile.y - selectedPiece.y
        };

        if(selectedPiece.y == 1 && distenceBetween.x == 0){
            if(Math.abs(distenceBetween.y) < 3){
                validMove = true;
            }
        }else{
            if(Math.abs(distenceBetween.y) < 2 && distenceBetween.x == 0){
                validMove = true;
            }
        }
        if(Math.sign(distenceBetween.y) == -1){
            validMove = false;
        }
        if((distenceBetween.x == 1 && distenceBetween.y == 1) || (distenceBetween.x == -1 && distenceBetween.y == 1)){
            console.log("Hi");
            if(selectedTile.piece != "  "){
                validMove = true;
            }
            if(distenceBetween.y == 1 || distenceBetween.y == -1){
                
            }
        }
    }



    if(selectedPiece.piece == "wp"){
        let distenceBetween = {
            "x": selectedTile.x - selectedPiece.x,
            "y": selectedTile.y - selectedPiece.y
        };

        if(selectedPiece.y == 6 && distenceBetween.x == 0){
            if(Math.abs(distenceBetween.y) < 3){
                if(board[selectedPiece.y - 1][selectedPiece.x] == "  "){
                    validMove = true;
                }
            }
        }else{
            if(Math.abs(distenceBetween.y) < 2 && distenceBetween.x == 0){
                validMove = true;
            }
        } 
        
        if(Math.sign(distenceBetween.y) == -1){
            for(i = -1; i > distenceBetween.y; i--){
                if(board[selectedPiece.y + i][selectedPiece.x] != "  "){
                    validMove = false;
                }
            }
        }
        if(board[selectedPiece.y - 1][selectedPiece.x] != "  "){
            validMove = false;
        }
        if((distenceBetween.x == 1 && distenceBetween.y == -1) || (distenceBetween.x == -1 && distenceBetween.y == -1)){
            console.log("Hi");
            if(selectedTile.piece != "  "){
                validMove = true;
            }
            if(distenceBetween.y == 1 || distenceBetween.y == -1){
                
            }
        }


        if(Math.sign(distenceBetween.y) == 1){
            validMove = false;
        }
    }





    if(selectedPiece.piece == "bb"){
        let distenceBetween = {
            "x": selectedTile.x - selectedPiece.x,
            "y": selectedTile.y - selectedPiece.y
        };
        let angle = Math.abs(Math.round(Math.atan(distenceBetween.x/distenceBetween.y) * 180 / Math.PI));
        if(angle == 45){
            validMove = true;
        }


        
    }
    if(selectedPiece.piece == "wb"){
        let distenceBetween = {
            "x": selectedTile.x - selectedPiece.x,
            "y": selectedTile.y - selectedPiece.y
        };
        let angle = Math.abs(Math.round(Math.atan(distenceBetween.x/distenceBetween.y) * 180 / Math.PI));
        if(angle == 45){
            validMove = true;
        }


        if(Math.sign(distenceBetween.x) == 1 && Math.sign(distenceBetween.y) == 1){
            for(i = 1; i < distenceBetween.x; i++){
                if(board[selectedPiece.y + i][selectedPiece.x + i] != "  "){
                    validMove = false;
                }
            }
        }
        if(Math.sign(distenceBetween.x) == 1 && Math.sign(distenceBetween.y) == -1){
            for(i = 1; i < distenceBetween.x; i++){
                if(board[selectedPiece.y - i][selectedPiece.x + i] != "  "){
                    validMove = false;
                }
            }
        }

        if(Math.sign(distenceBetween.x) == -1 && Math.sign(distenceBetween.y) == -1){
            for(i = -1; i > distenceBetween.x; i--){
                if(board[selectedPiece.y + i][selectedPiece.x + i] != "  "){
                    validMove = false;
                }
            }
        }
        if(Math.sign(distenceBetween.x) == -1 && Math.sign(distenceBetween.y) == 1){
            for(i = -1; i > distenceBetween.x; i--){
                if(board[selectedPiece.y - i][selectedPiece.x + i] != "  "){
                    validMove = false;
                }
            }
        }
    }
    if(selectedPiece.piece == "bk"){
        let distenceBetween = {
            "x": selectedTile.x - selectedPiece.x,
            "y": selectedTile.y - selectedPiece.y
        };
        if((distenceBetween.x < 2 && distenceBetween.x > -2) && (distenceBetween.y < 2 && distenceBetween.y > -2)){
            validMove = true;
        }
        if((distenceBetween.x == 2 && board[selectedPiece.y][selectedPiece.x + 3] == "br" && distenceBetween.y == 0)){
            validMove = true;
            board[selectedPiece.y][selectedPiece.x + 3] = "  ";
            board[selectedPiece.y][selectedPiece.x + 1] = "br"
        }else{
            if(distenceBetween.x == -2 && board[selectedPiece.y][selectedPiece.x - 3] == "br"  && distenceBetween.y == 0){
                validMove = true;
                board[selectedPiece.y][selectedPiece.x - 3] = "  ";
                board[selectedPiece.y][selectedPiece.x - 1] = "br"
            }
        }
    }
    if(selectedPiece.piece == "wk"){
        let distenceBetween = {
            "x": selectedTile.x - selectedPiece.x,
            "y": selectedTile.y - selectedPiece.y
        };
        if((distenceBetween.x < 2 && distenceBetween.x > -2) && (distenceBetween.y < 2 && distenceBetween.y > -2)){
            validMove = true;
        }



        if((distenceBetween.x == 2 && board[selectedPiece.y][selectedPiece.x + 3] == "wr" && distenceBetween.y == 0)){
            validMove = true;
            board[selectedPiece.y][selectedPiece.x + 3] = "  ";
            board[selectedPiece.y][selectedPiece.x + 1] = "wr"
        }else{
            if(distenceBetween.x == -2 && board[selectedPiece.y][selectedPiece.x - 3] == "wr"  && distenceBetween.y == 0){
                validMove = true;
                board[selectedPiece.y][selectedPiece.x - 3] = "  ";
                board[selectedPiece.y][selectedPiece.x - 1] = "wr"
            }
        }
    }
    if(selectedPiece.piece == "bq"){
        let distenceBetween = {
            "x": selectedTile.x - selectedPiece.x,
            "y": selectedTile.y - selectedPiece.y
        };
        let angle = Math.abs(Math.round(Math.atan(distenceBetween.x/distenceBetween.y) * 180 / Math.PI));
        if((selectedPiece.x == selectedTile.x || selectedPiece.y == selectedTile.y) || angle == 45){
            validMove = true;
        }

        if(angle == 0 || angle == 90){
            if(Math.sign(distenceBetween.x) == 1){
                for(i = 1; i < distenceBetween.x; i++){
                    if(board[selectedPiece.y][selectedPiece.x + i] != "  "){
                        validMove = false;
                    }
                }
            }
            if(Math.sign(distenceBetween.x) == -1){
                for(i = -1; i > distenceBetween.x; i--){
                    if(board[selectedPiece.y][selectedPiece.x + i] != "  "){
                        validMove = false;
                    }
                }
            }
    
            if(Math.sign(distenceBetween.y) == 1){
                for(i = 1; i < distenceBetween.y; i++){
                    if(board[selectedPiece.y + i][selectedPiece.x] != "  "){
                        validMove = false;
                    }
                }
            }
            if(Math.sign(distenceBetween.y) == -1){
                for(i = -1; i > distenceBetween.y; i--){
                    if(board[selectedPiece.y + i][selectedPiece.x] != "  "){
                        validMove = false;
                    }
                }
            }
        }
        if(angle == 45){
            if(Math.sign(distenceBetween.x) == 1 && Math.sign(distenceBetween.y) == 1){
                for(i = 1; i < distenceBetween.x; i++){
                    if(board[selectedPiece.y + i][selectedPiece.x + i] != "  "){
                        validMove = false;
                    }
                }
            }
            if(Math.sign(distenceBetween.x) == 1 && Math.sign(distenceBetween.y) == -1){
                for(i = 1; i < distenceBetween.x; i++){
                    if(board[selectedPiece.y - i][selectedPiece.x + i] != "  "){
                        validMove = false;
                    }
                }
            }
    
            if(Math.sign(distenceBetween.x) == -1 && Math.sign(distenceBetween.y) == -1){
                for(i = -1; i > distenceBetween.x; i--){
                    if(board[selectedPiece.y + i][selectedPiece.x + i] != "  "){
                        validMove = false;
                    }
                }
            }
            if(Math.sign(distenceBetween.x) == -1 && Math.sign(distenceBetween.y) == 1){
                for(i = -1; i > distenceBetween.x; i--){
                    if(board[selectedPiece.y - i][selectedPiece.x + i] != "  "){
                        validMove = false;
                    }
                }
            }
        }
    }
    if(selectedPiece.piece == "wq"){
        let distenceBetween = {
            "x": selectedTile.x - selectedPiece.x,
            "y": selectedTile.y - selectedPiece.y
        };
        let angle = Math.abs(Math.round(Math.atan(distenceBetween.x/distenceBetween.y) * 180 / Math.PI));
        if((selectedPiece.x == selectedTile.x || selectedPiece.y == selectedTile.y) || angle == 45){
            validMove = true;
        }


        if(angle == 0 || angle == 90){
            if(Math.sign(distenceBetween.x) == 1){
                for(i = 1; i < distenceBetween.x; i++){
                    if(board[selectedPiece.y][selectedPiece.x + i] != "  "){
                        validMove = false;
                    }
                }
            }
            if(Math.sign(distenceBetween.x) == -1){
                for(i = -1; i > distenceBetween.x; i--){
                    if(board[selectedPiece.y][selectedPiece.x + i] != "  "){
                        validMove = false;
                    }
                }
            }
    
            if(Math.sign(distenceBetween.y) == 1){
                for(i = 1; i < distenceBetween.y; i++){
                    if(board[selectedPiece.y + i][selectedPiece.x] != "  "){
                        validMove = false;
                    }
                }
            }
            if(Math.sign(distenceBetween.y) == -1){
                for(i = -1; i > distenceBetween.y; i--){
                    if(board[selectedPiece.y + i][selectedPiece.x] != "  "){
                        validMove = false;
                    }
                }
            }
        }
        if(angle == 45){
            if(Math.sign(distenceBetween.x) == 1 && Math.sign(distenceBetween.y) == 1){
                for(i = 1; i < distenceBetween.x; i++){
                    if(board[selectedPiece.y + i][selectedPiece.x + i] != "  "){
                        validMove = false;
                    }
                }
            }
            if(Math.sign(distenceBetween.x) == 1 && Math.sign(distenceBetween.y) == -1){
                for(i = 1; i < distenceBetween.x; i++){
                    if(board[selectedPiece.y - i][selectedPiece.x + i] != "  "){
                        validMove = false;
                    }
                }
            }
    
            if(Math.sign(distenceBetween.x) == -1 && Math.sign(distenceBetween.y) == -1){
                for(i = -1; i > distenceBetween.x; i--){
                    if(board[selectedPiece.y + i][selectedPiece.x + i] != "  "){
                        validMove = false;
                    }
                }
            }
            if(Math.sign(distenceBetween.x) == -1 && Math.sign(distenceBetween.y) == 1){
                for(i = -1; i > distenceBetween.x; i--){
                    if(board[selectedPiece.y - i][selectedPiece.x + i] != "  "){
                        validMove = false;
                    }
                }
            }
        }
    }
    if(selectedPiece.piece == "br"){
        let distenceBetween = {
            "x": selectedTile.x - selectedPiece.x,
            "y": selectedTile.y - selectedPiece.y
        };
        if(selectedPiece.x == selectedTile.x || selectedPiece.y == selectedTile.y){
            validMove = true;
        }

        //Checks for collisions
        if(Math.sign(distenceBetween.x) == 1){
            for(i = 1; i < distenceBetween.x; i++){
                if(board[selectedPiece.y][selectedPiece.x + i] != "  "){
                    validMove = false;
                }
            }
        }
        if(Math.sign(distenceBetween.x) == -1){
            for(i = -1; i > distenceBetween.x; i--){
                if(board[selectedPiece.y][selectedPiece.x + i] != "  "){
                    validMove = false;
                }
            }
        }

        if(Math.sign(distenceBetween.y) == 1){
            for(i = 1; i < distenceBetween.y; i++){
                if(board[selectedPiece.y + i][selectedPiece.x] != "  "){
                    validMove = false;
                }
            }
        }
        if(Math.sign(distenceBetween.y) == -1){
            for(i = -1; i > distenceBetween.y; i--){
                if(board[selectedPiece.y + i][selectedPiece.x] != "  "){
                    validMove = false;
                }
            }
        }
        //
    }
    if(selectedPiece.piece == "wr"){
        let distenceBetween = {
            "x": selectedTile.x - selectedPiece.x,
            "y": selectedTile.y - selectedPiece.y
        };
        if(selectedPiece.x == selectedTile.x || selectedPiece.y == selectedTile.y){
            validMove = true;

        //Checks for collisions
        if(Math.sign(distenceBetween.x) == 1){
            for(i = 1; i < distenceBetween.x; i++){
                if(board[selectedPiece.y][selectedPiece.x + i] != "  "){
                    validMove = false;
                }
            }
        }
        if(Math.sign(distenceBetween.x) == -1){
            for(i = -1; i > distenceBetween.x; i--){
                if(board[selectedPiece.y][selectedPiece.x + i] != "  "){
                    validMove = false;
                }
            }
        }

        if(Math.sign(distenceBetween.y) == 1){
            for(i = 1; i < distenceBetween.y; i++){
                if(board[selectedPiece.y + i][selectedPiece.x] != "  "){
                    validMove = false;
                }
            }
        }
        if(Math.sign(distenceBetween.y) == -1){
            for(i = -1; i > distenceBetween.y; i--){
                if(board[selectedPiece.y + i][selectedPiece.x] != "  "){
                    validMove = false;
                }
            }
        }
        //
        }
    }
    if(selectedPiece.piece == "bh"){
        let distenceBetween = {
            "x": selectedTile.x - selectedPiece.x,
            "y": selectedTile.y - selectedPiece.y
        };
        let angle = Math.abs(Math.round(Math.atan(distenceBetween.x/distenceBetween.y) * 180 / Math.PI));
        if((angle == 27 || angle == 63) && (Math.abs(distenceBetween.x) < 3 && Math.abs(distenceBetween.y) < 3)){
            validMove = true;
        }
    }
    if(selectedPiece.piece == "wh"){
        let distenceBetween = {
            "x": selectedTile.x - selectedPiece.x,
            "y": selectedTile.y - selectedPiece.y
        };
        let angle = Math.abs(Math.round(Math.atan(distenceBetween.x/distenceBetween.y) * 180 / Math.PI));
        if((angle == 27 || angle == 63) && (Math.abs(distenceBetween.x) < 3 && Math.abs(distenceBetween.y) < 3)){
            validMove = true;
        }
    }

    if(selectedPiece.piece == "np"){
        validMove = true;
    }
    return validMove;
}