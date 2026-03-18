// ex 01
let fruits = ["pomme","banane","orange"];
console.log(fruits[0]);
console.log(fruits[1]);

// ex 02

let colors = ["red","green"];
colors.push("purple");
console.log(colors.length);

// ex 03

let person = {
    name : "alice",
    age : 26,
    city : "Paris"
}
console.log(person.name);

//ex 04

let animals = ["dog","cat","lion","tiger"];
animals.forEach(animal => {
    console.log(animal)
})

//ex 05

let courses = [{
    name : "cyber Security",
    price : 29.99
},{
    name : "Math",
    price : 23.56
},{
    name : "Geography",
    price : 122.1
}]
function calculateTotalPrice(array){
    let sum = 0
    array.forEach(item =>{
        sum += item.price
    })
    return sum
}

courses.forEach( course => {
    console.log("name :" + course.name);
    console.log("price :" + course.price);
})
console.log("Total price " + calculateTotalPrice(courses));

