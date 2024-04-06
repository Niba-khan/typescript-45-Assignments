/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
 
// Define variable
let alienColour = "green";

// using if and else if statement

// version 1
if(alienColour === "green"){
    console.log("(version1) player earned 5 points.");
} 
else if(alienColour === "yellow"){
  console.log("player earned 10 points.");
}
else if(alienColour === "red"){
     console.log("player earned 15 points.");
};

//version 2
let alienColour2 = "yellow";

if(alienColour2 === "green"){
    console.log(" player earned 5 points.");
} 
else if(alienColour2 === "yellow"){
  console.log("(Version 2)player earned 10 points.");
}
else if(alienColour2 === "red"){
     console.log("player earned 15 points.");
};
//Version3
let alienColour3 = "red";

if(alienColour3 === "green"){
    console.log(" player earned 5 points.");
} 
else if(alienColour3 === "yellow"){
  console.log("(Version 2) player earned 10 points.");
}
else if(alienColour3 === "red"){
     console.log("(Version 3) player earned 15 points.");
};

