const { json } = require('express');
const express = require('express');
const app = express();
const fs = require('fs');

const port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({
    extended: true
}));
app.use(json());

app.get('/getLeaderboard', (req, res) => {
    let leaderboard = fs.readFileSync(__dirname + '/leaderboard.json');
    leaderboard = JSON.parse(leaderboard);
    res.json(leaderboard);
});
app.post('/postLeaderboard', (req, res) => {
    let currentPlayer = req.body;
    let leaderboard = fs.readFileSync(__dirname + '/leaderboard.json');
    leaderboard = JSON.parse(leaderboard);

    
    for(let i = 0; i < leaderboard.length; i++){
        if(leaderboard[i].score < currentPlayer.score){
            leaderboard.splice(i, 0 , currentPlayer);
            break;
        }
    }
    try{
       if(currentPlayer.score < leaderboard[leaderboard.length - 1].score){
            leaderboard.push(currentPlayer);
        } 
    }catch(ex){
        leaderboard.push(currentPlayer);
    }
    
    fs.writeFileSync(__dirname + '/leaderboard.json', JSON.stringify(leaderboard));
});

app.listen(port, () => console.log("Listening on port " + port));