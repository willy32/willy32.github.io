function CheckThree(num1:number, num2:number, num3:number){
    if((num1 > 50 && num1 < 100) && (num2 > 50 && num2 < 100) && (num3 > 50 && num3 < 100)) return true;
    else return false;
}

console.log(CheckThree(2, 54, 70));
console.log(CheckThree(70, 54, 70));
console.log(CheckThree(2, 54, 700));