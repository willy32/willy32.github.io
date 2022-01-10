const documentBoard = document.getElementById("board");
const menustrip = document.getElementById("menustrip");
const btnSolve = document.getElementById("btnSolve");
const lblSolution = document.getElementById("lblSolution");
let selectedTile = document.getElementById("board");
selectedTile = "";

let tempBoard = [
    ["o", " ", "g", " ", "p"],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", "y"],
    [" ", "r", " ", " ", " "]
];

let memorybank = [];
class Board{
    constructor(board = [[" ", " ", " ", " ", " "],[" ", " ", " ", " ", " "],[" ", " ", " ", " ", " "],[" ", " ", " ", " ", " "],[" ", " ", " ", " ", " "]], moves = "", generation = 0){
        this.board = JSON.parse(JSON.stringify(board));
        this.subBoards = [];
        this.moves = moves;
        this.complete = false;
        this.playerPiece = 'r';
        this.goalPos = {x: 2, y: 2};
        this.generation = generation;

        if(this.board[this.goalPos.y][this.goalPos.x] == this.playerPiece) this.complete = true;
        if(this.complete){
            console.log(this.moves + "done");
            let node = document.createElement("p");
            node.innerHTML = this.moves.replaceAll("down", '⬇️').replaceAll("up", '⬆️').replaceAll("left", '⬅️').replaceAll("right", '➡️') + "done";

            lblSolution.appendChild(node);
        }
    }
    GenerateGeneration(){
        this.board.forEach((row, y) => {
            row.forEach((data, x) => {
                if(data != " "){
                    let result = this.Move(this.board, x, y, "left");
                    if(result.validMove){
                        let recursive = false;
                        
                        for(let i = 0; i < memorybank.length; i++){
                            if(JSON.stringify(memorybank[i]) == JSON.stringify(result.board)){
                                recursive = true;
                            }
                        }

                        if(!recursive){
                            memorybank.push(result.board);
                            this.subBoards.push(new Board(result.board, this.moves + data + "(" + result.direction + ") => ", this.generation + 1));
                        }
                    }

                    result = this.Move(this.board, x, y, "right");
                    if(result.validMove){
                        let recursive = false;
                        
                        for(let i = 0; i < memorybank.length; i++){
                            if(JSON.stringify(memorybank[i]) == JSON.stringify(result.board)){
                                recursive = true;
                            }
                        }

                        if(!recursive){
                            memorybank.push(result.board);
                            this.subBoards.push(new Board(result.board, this.moves + data + "(" + result.direction + ") => ", this.generation + 1));
                        }
                    }

                    result = this.Move(this.board, x, y, "up");
                    if(result.validMove){
                        let recursive = false;
                        
                        for(let i = 0; i < memorybank.length; i++){
                            if(JSON.stringify(memorybank[i]) == JSON.stringify(result.board)){
                                recursive = true;
                            }
                        }

                        if(!recursive){
                            memorybank.push(result.board);
                            this.subBoards.push(new Board(result.board, this.moves + data + "(" + result.direction + ") => ", this.generation + 1));
                        }
                    }

                    result = this.Move(this.board, x, y, "down");
                    if(result.validMove){
                        let recursive = false;
                        
                        for(let i = 0; i < memorybank.length; i++){
                            if(JSON.stringify(memorybank[i]) == JSON.stringify(result.board)){
                                recursive = true;
                            }
                        }

                        if(!recursive){
                            memorybank.push(result.board);
                            this.subBoards.push(new Board(result.board, this.moves + data + "(" + result.direction + ") => ", this.generation + 1));
                        }
                    }
                }
            });

        });
    }
    GenerateAllBoards(){
        if(!this.complete) this.GenerateGeneration();
        for(let i = 0; i < this.subBoards.length; i++){
            this.subBoards[i].GenerateAllBoards();
        }
        /*
        this.subBoards.forEach(subBoard => {
            subBoard.GenerateAllBoards();
        });*/
    }
    
    Move(board, x, y, direction){
        let validMove = false;
        let resultBoard = JSON.parse(JSON.stringify(board));

        switch(direction){
            case "left":
                if(x - 1 < 0) break;
                if(resultBoard[y][x - 1] != " ") break;
                for(let i = x - 1; i >= 0; i--){
                    if(resultBoard[y][i] != " "){
                        validMove = true;
                        resultBoard[y][i + 1] = resultBoard[y][x];
                        resultBoard[y][x] = " ";
                        break;
                    }
                }
            break;
            case "right":
                if(x + 1 >= resultBoard[0].length) break;
                if(resultBoard[y][x + 1] != " ") break;
                for(let i = x + 1; i < resultBoard[0].length; i++){
                    if(resultBoard[y][i] != " "){
                        validMove = true;
                        resultBoard[y][i - 1] = resultBoard[y][x];
                        resultBoard[y][x] = " ";
                        break;
                    }
                }
            break;
            case "up":
                if(y - 1 < 0) break;
                if(resultBoard[y - 1][x] != " ") break;
                for(let i = y - 1; i >= 0; i--){
                    if(resultBoard[i][x] != " "){
                        validMove = true;
                        resultBoard[i + 1][x] = resultBoard[y][x];
                        resultBoard[y][x] = " ";
                        break;
                    }
                }
            break;
            case "down":
                if(y + 1 >= resultBoard.length) break;
                if(resultBoard[y + 1][x] != " ") break;
                for(let i = y + 1; i < resultBoard[0].length; i++){
                    if(resultBoard[i][x] != " "){
                        validMove = true;
                        resultBoard[i - 1][x] = resultBoard[y][x];
                        resultBoard[y][x] = " ";
                        break;
                    }
                }
            break;
            default:
                validMove = false;
            break;
        }

        return {validMove: validMove, board: resultBoard, direction: direction};
    }
}

function SolveBoard(aboard = [[]]) {
    let board = new Board(aboard, "", 0);

    let date = new Date();

    console.log(board);
    
    board.GenerateAllBoards();
    console.log(board);

    console.log(new Date().getTime() - date.getTime());
}

documentBoard.addEventListener('click', (eve) => {
    if(eve.target.id != "board"){
        if(eve.target.className == ""){
            menustrip.style.left = (eve.x - 10).toString() + "px";
            menustrip.style.top = (eve.y - 10).toString() + "px";
            menustrip.style.visibility = "visible";
            console.log(eve.target);
            selectedTile = eve.target;
        }else{
            menustrip.style.left = (eve.x - 10).toString() + "px";
            menustrip.style.top = (eve.y - 10).toString() + "px";
            menustrip.style.visibility = "visible";
            console.log(eve.target);
            selectedTile = eve.target.parentElement;
        }
    }
});
menustrip.addEventListener('click', (eve) => {
    if(eve.target.className != "menustrip"){
        switch(eve.target.className){
            case "blank":
                selectedTile.innerHTML = "";
            break;
            case "custom":
                menustrip.style.visibility = "hidden";
            break;
            case "red":
                selectedTile.innerHTML = "";
                var node = document.createElement("div");
                node.className = eve.target.className;
                selectedTile.appendChild(node);
            break;
            case "green":
                selectedTile.innerHTML = "";
                var node = document.createElement("div");
                node.className = eve.target.className;
                selectedTile.appendChild(node);
            break;
            case "blue":
                selectedTile.innerHTML = "";
                var node = document.createElement("div");
                node.className = eve.target.className;
                selectedTile.appendChild(node);
            break;
            case "purple":
                selectedTile.innerHTML = "";
                var node = document.createElement("div");
                node.className = eve.target.className;
                selectedTile.appendChild(node);
            break;
            case "orange":
                selectedTile.innerHTML = "";
                var node = document.createElement("div");
                node.className = eve.target.className;
                selectedTile.appendChild(node);
            break;
            case "yellow":
                selectedTile.innerHTML = "";
                var node = document.createElement("div");
                node.className = eve.target.className;
                selectedTile.appendChild(node);
            break;
        }
    }
});
btnSolve.addEventListener('click', () => {
    lblSolution.innerHTML = "";
    let board = [
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "]
    ];

    let i = 0;
    for(let y = 0; y < 5; y++){
        for(let x = 0; x < 5; x++){
            if(documentBoard.children[i].innerHTML.includes("red")) board[y][x] = "r";
            if(documentBoard.children[i].innerHTML.includes("green")) board[y][x] = "g";
            if(documentBoard.children[i].innerHTML.includes("blue")) board[y][x] = "b";
            if(documentBoard.children[i].innerHTML.includes("purple")) board[y][x] = "p";
            if(documentBoard.children[i].innerHTML.includes("orange")) board[y][x] = "o";
            if(documentBoard.children[i].innerHTML.includes("yellow")) board[y][x] = "y";

            i++;
        }
    }

    console.log(board);

    SolveBoard(board);
});