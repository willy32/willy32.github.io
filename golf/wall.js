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
                target.y + target.r >= this.y &&
                target.y + target.r < this.y + this.h &&
                target.x + target.r > this.x &&
                target.x - target.r < this.x + this.w
                ){
                    target.y = this.y - target.r;
                    target.vY *= -1;
            }
            else if(
                target.y - target.r <= this.y + this.h &&
                target.y - target.r > this.y &&
                target.x + target.r > this.x &&
                target.x - target.r < this.x + this.w
                ){
                    target.y = this.y + target.r + this.h;
                    target.vY *= -1;
            }
            else if(
                target.x + target.r >= this.x &&
                target.x + target.r < this.x + this.w &&
                target.y + target.r > this.y &&
                target.y - target.r < this.y + this.h
                ){
                    target.x = this.x - target.r;
                    target.vX *= -1;
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