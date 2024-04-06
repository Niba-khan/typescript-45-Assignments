/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/

//  Define guestlist array
let guestlist = ["Niba", "Kinza", "maha", "Haram"];

// guest dont come
let dontcome = guestlist[0];
console.log(dontcome,"nh ah sakti hain");

// print the name of guest dont come 
guestlist.splice(0,1,"Sonia");

// Add or remove value gor guest list
console.log("good news ! we have found a bigger table for dinner");

//print the message:
guestlist.unshift("sumaira");

// Add a new guest starting of index array
guestlist.push("unzila");

// get a middle index of guest list array
let middleindex: number = Math.floor(guestlist.length/2);

//Add a new guest middle of index array
guestlist.splice(middleindex, 0, "Nayab");

// print a message for update guest list
console.log("update for our guestlist");

// sending a invitation message to our guest one by one with their name:
guestlist.forEach(oneguest => console.log(`salam ${oneguest} "i want to invite for dinner`));