let student = {
    first: "Mark",
    last: "Marley",
    age: 18,
    height: 175,
    cockSize: 69,
    GrabInfo: function () {
      return "First Name: " + this.first + "\nLast name: " + this.last + "\nAge: " + this.age + "\nHeight: " + this.height;  
    },
};

if(student.age >= 18 && student.age <= 35){
    console.log("Yes");
}
let text = "";
switch (1){
    case 0:
        text = "weekend";
        break;
    case 5:
        text = "weekend";
        break;
    case 6:
        text = "weekend";
        break;
    default:
        text = "weekday";
        break;
}
console.log(text);