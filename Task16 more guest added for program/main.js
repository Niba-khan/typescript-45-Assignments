//
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
