var socket = io();

socket.on('connection', (data) => {
    console.log(data);
});

socket.on('playerdata', (data) => {

    let enemyData = JSON.parse(data);

    let exists = false
    if(enemyData[1] == null){
        return;
    }
    enemyList.forEach(enemy => {
        if(enemy == enemyData[1]){
            exists = true;
        }
    });
    if(!exists){
        enemyList.push(enemyData[1]);
    }
    enemies[enemyData[1]] = enemyData[0];

});
socket.on('bulletdata', (data) => {
    //enemies = [];
    let enemyData = JSON.parse(data);
    //enemies.push(enemyData[0]);
    //ebullets = enemyData;
    ebullets.push(new Bullet(enemyData.x, enemyData.y, enemyData.vX, enemyData.vY, enemyData.r, enemyData.color));
    //console.log(ebullets);
});
socket.on('disconnected', (data) => {
    delete enemies[data];
    enemyList.forEach((ene, index) => {
        if(ene == data){
            enemyList.splice(index, 1);
        }
    });
});

function SendPlayerData(data) {
    let completeData = data;
    completeData.push(socket.id);
    //console.log(completeData);
    socket.emit('playerdata', JSON.stringify(completeData));
}
function SendBulletData(data) {
    //console.log(data);
    //console.log(bullets);
    socket.emit('bulletdata', JSON.stringify(data));
}