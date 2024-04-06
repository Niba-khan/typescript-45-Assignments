//
var guestlist = ["Niba", "Kinza", "Maha", "Sonia"];
var dontcome = guestlist[1];
console.log(dontcome, "nh ah sakti");
guestlist.splice(1, 1, "Haram");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ",i want to invite for dinner ")); });
