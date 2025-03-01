//Primitive(Call By Value => The orignal data is not changed the change is made in the copy of the data)

// 7 types : String, Number, Boolean, null(not Zero), undfined, Symbol(to make the value unique), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//Symbol will make sure that they both are diffrent will study in detail while studying react
const id = Symbol('123')
const anotherId = Symbol('123')

console.log((id===anotherId));

const bigNumber = 3342534532632563254n;//Big Int

// Reference(Non-Primitive => Direct refernce to the memory is allocated)

//Array, Objects, Functions
//array
const heros = ["shaktiman", "naagraj", "doga"];
//object
let myObj = {
    name: "ayush",
    age: 20,
}
//function
const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof bigNumber);
console.log(typeof myFunction);
myFunction();

