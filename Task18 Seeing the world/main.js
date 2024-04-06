var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var contriesToVisit = ["China", "Bangkok", "Amrica", "Diziland"];
console.log("original order:", contriesToVisit);
console.log("Alphabetical Order:", __spreadArray([], contriesToVisit, true).sort());
console.log("Still in Original Order;", contriesToVisit);
console.log("Reverse Order:", __spreadArray([], contriesToVisit, true).reverse());
console.log("Still in Original Order;", contriesToVisit);
console.log("Origina Array Reversed:", contriesToVisit.reverse());
console.log("Back to original order:", contriesToVisit.reverse());
console.log("Sorted in Alphabetical Order:", contriesToVisit.sort());
console.log("Origina Array Reversed:", contriesToVisit.reverse());
