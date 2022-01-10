class Wall{
    constructor(x, y, w, h, rotation, bounce, color, checkCollition = []){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.rotation = rotation;
        this.bounce = bounce;
        this.color = color;
        this.checkCollition = checkCollition;
    }

    Update(){
        this.checkCollition.forEach((target, index) => {
            if(
                target.y + target.r > this.y &&
                target.y - target.r < this.y + this.h &&
                target.x + target.r > this.x &&
                target.x - target.r < this.x + this.w
                ){
                target.vY *= -1;
            }
        });
    }

    Draw(context){
        /** @type {CanvasRenderingContext2D} */

        // Style
        context.fillStyle = this.color;

        // Draws Rectangle
        context.beginPath();
        context.fillRect(this.x, this.y, this.w, this.h);
        context.closePath();
    }
}

export {Wall};