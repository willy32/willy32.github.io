function CalculateAge() {
    let age = parseInt(document.getElementById("txtAge").value);
    let days = 0;

    console.log("Age: " + age);

    days = age * 365;
    console.log("Days: " + age + " * 365 = " + days);

    document.getElementById("txtDays").value = days;
}
function ResetAge() {
    document.getElementById("txtAge").value = "";
    document.getElementById("txtDays").value = "";
}