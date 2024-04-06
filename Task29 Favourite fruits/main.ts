/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas.*/



//_____CREATE A ARRAY___

let favourite_Fruits = ["Mango", "Grapes", "Cherry"];

//____USING 5 INDEPENDENT IF STATEMENT___

if (favourite_Fruits.includes("Mango")){
    console.log("My most favourite fruit is Mango");
}

if (favourite_Fruits.includes("Cherry")){
    console.log("My most favourite fruit is Cherry");
}

if (favourite_Fruits.includes("Apple")){
    console.log("My most favourite fruit is Apple");
}

if (favourite_Fruits.includes("Grapes")){
    console.log("My most favourite fruit is Grapes");
}

if (favourite_Fruits.includes("Orange")){
    console.log("My most favourite fruit is Orange");
}