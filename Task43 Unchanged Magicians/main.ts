/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/


//__Define Functions___
function show_magicians(magicians: string[]){
    magicians.forEach(name =>console.log(name));

 
}

function make_great(magicians: string[]){
 return magicians.map(name => `The Great ${name}`);
}


//__define an array__

let magicians_names = ["khan zadi","farooq", "Naheed"];

//___copy original array___

let copy_magicians_names = magicians_names.slice()

//__Modify the coopied array___

let copy_great_magicians = make_great(copy_magicians_names);

// show original and copied array

//original;
show_magicians(magicians_names);

// copied;
show_magicians(copy_great_magicians );
