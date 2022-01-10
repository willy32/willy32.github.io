class GolfBall{
    constructor(x, y, vX, vY, angle, speed, r, color, name, checkCollition = []){
        this.x = x;
        this.y = y;
        this.vX = vX;
        this.vY = vY;
        this.angle = angle;
        this.speed = speed;
        this.r = r;
        this.color = color;
        this.name = name;
        this.checkCollition = checkCollition;
    }

    Update(){
        // Friction
        if(this.vX < 0.2 && this.vY < 0.2 && this.vX > -0.2 && this.vY > -0.2){
            this.vX = 0;
            this.vY = 0;
        }
        this.vX *= 0.98;
        this.vY *= 0.98;

        // Moves the Ball
        this.x += this.vX;
        this.y += this.vY;
    }

    Draw(context){
        /** @type {CanvasRenderingContext2D} */
        context.fillStyle = this.color;

        // Draws Circle
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        context.fill();
        context.closePath();
    }
}

export {GolfBall};