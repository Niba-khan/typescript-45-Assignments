/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/
//___Define function___
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//__define an array___
var magicians_names = ["khanzadi", "Farooq", "NAheed"];
//__call the fuction___
show_magicians(magicians_names);
