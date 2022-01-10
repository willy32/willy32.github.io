const htmlBoard = document.getElementsByClassName("tile");

console.log(htmlBoard);

let board = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ']
];
const X = "./images/red.png";
const O = "./images/blue.png";
let turn = 0;


DrawBoard(board);

function DrawBoard(board) {
    let position = 0;
    board.forEach(row => {
        row.forEach(tile => {
            if(tile == "X"){
                htmlBoard[position].innerHTML = '<img src="' + X + '"/>';
            }
            if(tile == "O"){
                htmlBoard[position].innerHTML = '<img src="' + O + '"/>';
            }

            position++;
        });
    });
}

function CheckWinner(board){
    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board[0].length; column++) {
            let tile = board[row][column];

            if(tile == "X"){
                let count = 1;
                count = 1;

                // Checks Verticly
                for(let i = 1; i < 4; i++){
                    if(column + i >= board[0].length) break;
                    if(board[row][column + i] != "X"){
                        //console.log(count);
                        break;
                    }
                    if(board[row][column + i] == "X"){
                        count++;
                        if(count == 4){
                            console.log("WAOW");
                            alert(X + " is the winner!");
                        } 
                    }
                }
                count = 1;
                // Checks Horizontaly
                for(let i = 1; i < 4; i++){
                    if(row + i >= board.length) break;
                    if(board[row + i][column] != "X"){
                        break;
                    }
                    if(board[row + i][column] == "X"){
                        count++;
                        console.log(count);
                        if(count == 4) {
                            console.log("REEEEEEEEEEEEE");
                            alert(X + " is the winner!");
                        }
                    }
                }
                count = 1;
                // Checks Diagonaly
                for(let i = 1; i < 4; i++){
                    if(row + i >= board.length) break;
                    if(column + i >= board[0].length) break;

                    if(board[row + i][column + i] != "X"){
                        //console.log(count);
                        break;
                    }
                    if(board[row + i][column + i] == "X"){
                        count++;
                        //console.log(count);
                        //console.log(board[row + 1][column + 1]);
                        if(count == 4) {
                            console.log("REEEBA");
                            alert(X + " is the winner!");
                        }
                    }
                }
            }

            if(tile == "O"){
                let count = 1;
            
                // Checks Verticly
                for(let i = 1; i < 4; i++){
                    if(column + i >= board[0].length) break;
                    if(board[row][column + i] != "O"){
                        //console.log(count);
                        break;
                    }
                    if(board[row][column + i] == "O"){
                        count++;
                        if(count == 4){
                            console.log("WAOW");
                            alert(O + " is the winner!");
                        } 
                    }
                }
                count = 1;
                // Checks Horizontaly
                for(let i = 1; i < 4; i++){
                    if(row + i >= board.length) break;
                    if(board[row + i][column] != "O"){
                        //console.log(count);
                        break;
                    }
                    if(board[row + i][column] == "O"){
                        count++;
                        //console.log(row);
                        //console.log(board[row + 1][column]);
                        if(count == 4) {
                            console.log("REEEEEEEEEEEEE");
                            alert(O + " is the winner!");
                        }
                    }
                }
                count = 1;
                // Checks Diagonaly
                for(let i = 1; i < 4; i++){
                    if(row + i >= board.length) break;
                    if(column + i >= board[0].length) break;
            
                    if(board[row + i][column + i] != "O"){
                        //console.log(count);
                        break;
                    }
                    if(board[row + i][column + i] == "O"){
                        count++;
                        //console.log(count);
                        //console.log(board[row + i][column + i]);
                        if(count == 4) {
                            console.log("REEEBA");
                            alert(O + " is the winner!");
                        }
                    }
                }
            }
            
        }
        
    }
}

document.getElementById("grid").addEventListener("click", (eve) => {
    if(eve.target.id == "grid" || eve.target.tagName == "IMG"){
        return;
    }

    let column = 0;
    let row = board.length - 1;


    eve.target.innerHTML = "neger";
    for (let i = 0; i < htmlBoard.length; i++) {
        if(htmlBoard[i].innerHTML == "neger"){
            column = i % 7;
            htmlBoard[i].innerHTML = "";
        }
    }
    for(let i = 0; i < board.length; i++){
        if(board[i][column] == "X" || board[i][column] == "O"){
            row = i - 1;
            break;
        }
    }

    if(turn == 0){
        board[row][column] = "X";
        turn = 1;
    }else{
        if(turn == 1){
            board[row][column] = "O";
            turn = 0;
        }
    }
    DrawBoard(board);
    CheckWinner(board);
});