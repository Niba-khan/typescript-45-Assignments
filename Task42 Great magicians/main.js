"use strict";
/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
Object.defineProperty(exports, "__esModule", { value: true });
//__Define Functions___
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
//__define an array__
let magicians_names = ["khan zadi", "farooq", "Naheed"];
let great_magicians = make_great(magicians_names);
show_magicians(great_magicians);
