console.log("2" >1);
console.log("02" > 1);//Automatically converts it to a number

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
/*The reason is that an equality check == and comparisons > < >= <= work diffrently.
Comparisons convert null to a number, trating it as 0.
That's why null>=0 is true and null > 0 is false 
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//===

console.log("2" === 3);
