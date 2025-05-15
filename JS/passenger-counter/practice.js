// document.getElementById("count").innerText = 5

let count = 0;

console.log(count);

// 1. Create a variable, myAge, and set its value to your age
let myAge = 22;

// 2. Log the myAge variable to the console
console.log(myAge);

// cmd+k+c
// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge
// 3. Log myDogAge to the console

let humanDogRatio = 7;

let myDogAge = myAge * humanDogRatio;
console.log(myDogAge);

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
let bonusPoints = 50;
let inc1 = bonusPoints * 2;
// Decrease it down to 25, and then finally increase it to 70
let dec1 = bonusPoints / 2;
let inc2 = bonusPoints + 20;

// Create a function (you decide the name) that logs out the number 42 to the console
function Hi() {
  console.log(hello);
}
// Call/invoke the function
Hi();

// Create a function that logs out the sum of all the lap times
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function logLapTime() {
  let totalTime = lap1 + lap2 + lap3;
  console.log(totalTime);
}

console.log(totalTime);

//logLapTime()

// Create a function that increments the lapsCompleted variable with one
// Run it three times

let lapsCompleted = 0;

function incrementLap() {
  lapsCompleted = lapsCompleted + 1;
}

incrementLap();
incrementLap();
incrementLap();

console.log(lapsCompleted);

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

// Create a variable, message, that stores the string: "You have tree new notifications"
let username = "hubbali";

let message = console.log(username + "," + message);

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "
let firstName = Yamraj;
let greetings = "Hi, i'm yamraj";

// let myGreeting = firstName + greetings;
// console.log(myGreeting);

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console
// let myGreeting = firstName + greetings;
// console.log(myGreeting);

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
{
  /* <html>
    <head>
    </head>
    <body>
        <p id="welcome-el"></p>
        <script src="index.js"></script>
    </body>
</html> */
}

let welcomeEl = document.getElementById("welcome-el");

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

let myName = "Joker";
let greeting = "Welcome back ";

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + myName;

// += symbol means you dont have to write the same variable twice
let welcomeEl = document.getElementById("welcome-el");

let nem = "Per Harald Borgen";
let newGreeting = "Welcome back ";

welcomeEl.innerText = newGreeting + nem;

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1
// welcomeEl.innerText = welcomeEl + "👋" instead of writing this :-
welcomeEl.innerText += "👋";
