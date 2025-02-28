const accountId = 144553;
let accountEmail = "ayush@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur" //You can declare a variable in this way too but never declare variable like this.
let accountState;

// accountId = 2 // not allowed

accountEmail="as@yahoo.com";
accountPassword = "2124212";
accountCity = "Bengaluru";

// console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]); //To print multiple variables in the form of a table together


