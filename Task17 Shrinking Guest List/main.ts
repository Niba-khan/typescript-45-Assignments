/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

//  Define guestlist array
let guestlist = ["Niba", "Kinza", "maha", "Haram"];

// guest dont come
let dontcome = guestlist[0];

// print the name of guest dont come 
console.log(dontcome,"nh ah sakti hain");

// Add or remove value gor guest list
guestlist.splice(0,1,"Sonia");

//print the message:
console.log("good news ! we have found a bigger table for dinner");

// Add a new guest starting of index array
guestlist.unshift("sumaira");

// Add a new guest ending of index array
guestlist.push("unzila");

// get a middle index of guest list array
let middleindex: number = Math.floor(guestlist.length/2);

//Add a new guest middle of index array
guestlist.splice(middleindex, 0, "Nayab");

// print a message for update guest list
console.log("update for our guestlist");

// sending a invitation message to our guest one by one with their name:
guestlist.forEach(oneguest => console.log(`salam ${oneguest} "i want to invite for dinner`));

// print a message that only two guest can be invite for dinner:
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");

//using while loop to remove guest:
while(guestlist.length > 2){
    let removedGuest = guestlist.pop();
    console.log(`sorry ${removedGuest} I can invite you to dinner`)
}

//sending a invitation to the last 2 guest:
console.log("Invitation to the last 2 Guests");

guestlist.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner `));

//remove last two guest:
guestlist.pop();
guestlist.pop();

console.log("Empty List:", guestlist)