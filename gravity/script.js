let velocity = 0.5;
let vy = velocity;
let ball = document.getElementById("ball");
let y = 800;

ball.style.bottom = y + "px";



let loop = () => {
    setInterval(() => {
        if(FixPX(ball.style.bottom) <= 0){
            vy *= -0.8;
            ball.style.bottom = (y - vy) + "px";
        }else{
            console.log("Hmmmm");
            ball.style.bottom = (y - vy) + "px";
            vy += velocity * 0.1;
        }
        y = FixPX(ball.style.bottom);
    }, 5);
};

loop();

function FixPX(data) {
    return parseInt(data.replace("px", ""));
}