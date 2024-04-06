//
function sandwish() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("sandwish order");
    for (var n = 0; n < item.length; n++) {
        console.log("-".concat(item[n]));
    }
}
console.log("Enjoy your sandwish with khan zadi");
sandwish('capsicum', 'chicken', 'cheese');
sandwish('Tikka', 'Malai', 'BBQ');
sandwish('mayo souce', 'Beef', 'egg');
