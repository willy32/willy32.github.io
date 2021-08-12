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
const tileSize = {"x":boardSize.x / 8, "y":boardSize.y / 8}
const canvas = document.querySelector("#game");
const context = canvas.getContext("2d");
canvas.width = boardSize.x;
canvas.height = boardSize.y;

const tileColor = ["white","black"]

function DrawBoard(context){
    
    for(col = 0; col < 8; col++){
        let num = 0;
        if(col % 2 == 0){
            num = 0;
        }else{
            num = 1;
        }
        console.log(tileSize);
        
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
                img.src = "bp.png";
                console.log(img);

                context.fillStyle='yellow';
                
                context.fillRect(row * tileSize.x, col * tileSize.y, tileSize.x, tileSize.y);
                context.drawImage(img, 100, 100, 100, 100);
                
            }
        }
        
    }
}

//DrawBoard(context);
DrawPieces(context);
let img = new Image();
img.src = "wp.png";
context.drawImage(img, 100, 100);
