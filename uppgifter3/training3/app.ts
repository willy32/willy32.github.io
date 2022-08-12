let arr:string[] = ["Volvo", "BMW", "Honda"]

DrawArray(arr);

function DrawArray(arr:string[]):void{
    
    let list = document.getElementById("list");
    
    list.innerHTML = "";
    arr.forEach((element:string) => {
        list.innerHTML += `<h3>${element}</h3>`;
    });
}

let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        switch(button.textContent){
            case "Push":
                arr.push((<HTMLInputElement>document.getElementById("txtText")).value);
            break;
            case "Unshift":
                arr.unshift((<HTMLInputElement>document.getElementById("txtText")).value);
            break;
            case "Pop":
                arr.pop();
            break;
        }
        DrawArray(arr);
    });
});