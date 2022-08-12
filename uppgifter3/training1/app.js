function checkThree(num1, num2, num3) {
    if ((num1 > 50 && num1 < 100) && (num2 > 50 && num2 < 100) && (num3 > 50 && num3 < 100))
        return true;
    else
        return false;
}
console.log(checkThree(2, 54, 70));
console.log(checkThree(70, 54, 70));
console.log(checkThree(2, 54, 700));
