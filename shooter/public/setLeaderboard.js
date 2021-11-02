const lblLeaderboard = document.getElementById("leaderboard");
const lblPB = document.getElementById("personalbest");

fetch('http://10.111.1.215:3000/getLeaderboard', {

})
.then(res => res.json())
.then(data => {
    WriteLeaderboard(data);
});

function WriteLeaderboard(leaderboard){
    lblLeaderboard.innerHTML = "";

    let playerPos = 0;

    leaderboard.forEach((player) => {
        if(playerPos < 5){
            let node = document.createElement("p");
            node.innerText = player.name + ": " + player.score;
            lblLeaderboard.appendChild(node);
        }
        
        playerPos++;
    });
    let PB = JSON.parse(localStorage.getItem("personal"));

    lblPB.innerText = "PB:  " + PB.name + ": " + PB.score;
}

function SendScore(score, name) {
    let PB = JSON.parse(localStorage.getItem("personal"));
    let msg = {
        "name": name,
        "score": score
    };

    if(PB == null || PB.score < msg.score){
       localStorage.setItem("personal", JSON.stringify(msg)); 
    }
    

    fetch('http://10.111.1.215:3000/postLeaderboard', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(msg)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });
    fetch('http://10.111.1.215:3000/getLeaderboard', {

    })
    .then(res => res.json())
    .then(data => {
        WriteLeaderboard(data);
    });
}