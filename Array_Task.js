// Task One

const fruits = ["Banana", "Jack Fruit", "Mango", "Orange", "Apple"]; 
console.log(fruits[3]); // Declare 3rd Index
fruits[2] = "jambura"; // 2nd index e value add korlam
console.log(fruits) // Sob gula value show korlam

// Task Two

const touristPlace = ["Cox's Bazer", "Rangamati", "Sreemongol"];
touristPlace.push("SentMati"); // 1ta value add korlam
touristPlace.push("Bandarbon","Sajek") //2 ta value add korlam
console.log(touristPlace); // sob value show korlam
touristPlace.pop() // last value remove korlam
console.log(touristPlace); // sob value show korlam

// Task three

const books = ["Javascript Book", "React Book", "MongoDB Book"];
if(books.includes("Javascript Book")){
    console.log("Javascript Book ta Ase")
}else{
    console.log("Javascript Book ta Naaaiiii!!!")
}

// Task Four

if(Array.isArray(books)){
    console.log("Yes, It is Array")
}else{
    console.log("No It is Not Array")
}
// Task Five 
let boyFriend = ["Mamun", "Sifat", "Mijan", "Selim"];
let girlFriend = ["Rimu", "Mita", "Rumpa", "Selima"];

console.log(boyFriend.concat(girlFriend))