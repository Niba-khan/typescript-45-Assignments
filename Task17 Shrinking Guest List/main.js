var guestlist = ["Niba", "Kinza", "maha", "Haram"];
var dontcome = guestlist[0];
console.log(dontcome, "nh ah sakti hain");
guestlist.splice(0, 1, "Sonia");
console.log("good news ! we have found a bigger table for dinner");
guestlist.unshift("sumaira");
guestlist.push("unzila");
var middleindex = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, "Nayab");
console.log("update for our guestlist");
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, " \"i want to invite for dinner")); });
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("sorry ".concat(removedGuest, " I can invite you to dinner"));
}
console.log("Invitation to the last 2 Guests");
guestlist.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner ")); });
guestlist.pop();
guestlist.pop();
console.log("Empty List:", guestlist);
