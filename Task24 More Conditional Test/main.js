/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array.*/
// Define Variable
var potato = "potato";
var uppercasePotato = "POTATO";
var sixteen = 16;
var twenty = 20;
var vegetable = ["Onion", "Potato", "Tomato", "Chilli"];
//• Tests for equality and inequality with strings
console.log("potato is equal to potato?");
console.log(potato == "potato");
console.log("\npotato is not equal to potato");
console.log(potato != "potato");
//• Tests using the lower case function
console.log("\nIs potato is equal to potato after converting to lowercase?");
console.log(uppercasePotato.toLowerCase() == "POTATO");
console.log("\nIS poatao is not equal to potato after converting to lowercas?");
console.log(uppercasePotato.toLowerCase() != "potato");
//Numerical Test
// Equal and not Equal;
console.log("\nsixteen is equal to sixteen");
console.log(16 == 16);
console.log("\nTwenty is not equal Twenty");
console.log(20 != 20);
// greater than and less than,
console.log("\nTwenty is greater then sixteen");
console.log(twenty > 16);
console.log("\nsixteen is less then five");
console.log(sixteen < 5);
//greater than or equal to, and less than or equal to
console.log("\ntwenty is grether or equal to sixteen");
console.log(twenty >= 16);
console.log("\nsixteen is less then or eeual to Nine");
console.log(sixteen <= 9);
//• Tests using "and" and "or" operators
//using && (and)
console.log("\nTwenty is not equal to sixteen and twenty greather then sixteen");
console.log(twenty != 16 && twenty > 16);
console.log("\nTwenty is not equal to sixteen and sixteen is greater then twenty");
console.log(twenty != 16 && 16 > 20);
//using || (or)
console.log("\nsixteen is equal to sixteen and twenty less then sixteen");
console.log(sixteen == 16 || 20 < 16);
console.log("\ntwenty greather then thirty and sixteen is not equal to sixteen");
console.log(twenty > 30 || 16 != 16);
// Test whether an item is in a array
console.log("\n Chilli include in my vegetable array");
console.log(vegetable.includes("Chilli"));
console.log("\n Chilli is not include in my vegetable array");
console.log(!vegetable.includes("Chilli"));
