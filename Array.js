// const milItem = ["Vat", "Vorta", "Fish", "Mutton", "vegetable"];

// if(milItem.includes("polao")){
//     console.log("Tumi khaber ta niye asio")
// }else if(milItem.includes("payes")){
//     console.log("Olpo kicu niye asio")
// }else if(milItem.includes("Vat")){
//     console.log("10 takar vat niye asio")
// }else if(milItem.includes("Mutton")){
//     console.log("40tk r mutton niye asio")
// }else{
//     console.log("kicu aner dorker ni")
// }


// Task One 
const fruits = ["Mango","Apple","Banana","Jack Fruit","Coconut"];
console.log(fruits[3]) //I declare 3rd elements
fruits[2] = "jambura"; // 2 number index e value add korlam
console.log(fruits)

// Task Two

const touristPlace = ["Rangamati", "Bandarbon", "Sreemongol"];
console.log(touristPlace) //Sob gula show korlam
touristPlace.push("Sajek"); // Last e akta value add korlam
console.log(touristPlace); // output e dekhalam
touristPlace.push("Sent martin","Cox's Bazer"); // 2 ta value add korlam
console.log(touristPlace); // sob gula value dekhalm
touristPlace.pop() //
console.log(touristPlace); // Final sob gula array show korlam


// Task 3

const books = ["Javascript Book","React Book", "Next Js Book", "MongoDB Book"];
if(books.includes("Javascript Book")){
    console.log("Yes I got the book")
}else{
    console.log("No I don't got the book")
}
console.log(Array.isArray(books))
