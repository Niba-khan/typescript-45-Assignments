/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/

//Creating a Array with a 5 values;
let userNames = ["Kinza","Niba", "Admin", "Maha", "Naheed"];

//Remove all values from our array;
userNames = []

//If statement for checking length for our array;
if (userNames.length === 0){
    console.log("your Array is Empty We need to find some users!");
}else{
    // If array is not empty Using Loop Array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ",thank you for logging in again."));
        }
    });
}
