class Player {
    constructor(name, age, lenght, health, x, y){
        this.name = name;
        this.age = age;
        this.lenght = lenght;
        this.health = health;
        this.x = x;
        this.y = y;
        this.alive = true;

    }
    Damage(amount){
        this.health = this.health - amount
    }
    Kill(){
        this.alive = false;   
    }

}

let John = new Player("John", 23, 170, 200, 0, 0)

console.log(John);

console.log(John.health);

John.Damage(70);

console.log(John.health);

John.Kill();

console.log(John.alive);