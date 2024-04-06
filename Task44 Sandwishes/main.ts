//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.



function sandwish(...item: string[]): void{
    console.log("sandwish order");
    for (let n = 0; n < item.length; n++){
    console.log(`-${item[n]}`);
    }
}
console.log("Enjoy your sandwish with khan zadi");

sandwish('capsicum', 'chicken', 'cheese')
sandwish('Tikka', 'Malai', 'BBQ')
sandwish('mayo souce', 'Beef', 'egg')

