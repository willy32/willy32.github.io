let fruits = new Array(); //Creates an empty array


console.log(fruits);


fruits.push("Banana"); //Adds the string "Banana" to the array

fruits.push("Potato");

fruits.push("Berry");

fruits.push("Grape");

fruits.push("Apple");

console.log(fruits);
 
fruits.pop(); //Removes the last object of the array (Apple)

console.log(fruits);

fruits.shift(); //Removes the first object of the array (Banana)

console.log(fruits);


fruits.splice(0, 1, "Orange"); //Replaces the first object with "Orange"

console.log(fruits);
