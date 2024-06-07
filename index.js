let x = 10;

// Relational
console.log(x < 3);
console.log(x <= 12);
console.log(x > 3);
console.log(x <= 3);

// Equality
// Strict Eqaulity Operator
console.log(x === 3);
console.log(x !== 3);

// Loose Equality Operator
console.log(x == 3);
console.log(3 == 3);

console.log(1 === 1);
console.log("1" === 1);

console.log(1 == 1);
console.log("1" == 1);

// Ternery Operator
// If a customer has more than 100 points,
// they are a 'gold' cutomer, otherwise,
// they ar a 'silver' customer.

let points = 110;
let type = points > 100 ? "gold" : "silver";

console.log(type);

// Logical AND (&&)
// Returns if both operands are TRUE
console.log(true && true);

// Logical OR (||)
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log("Eligible", eligibleForLoan);

//NOT (!)
let applicationRefused = !eligibleForLoan;
console.log("Application Refused", applicationRefused);

// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not falsy -> Truthy

// Short-circuting

let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);

// Bitwise Operators
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// R = 00000011

console.log(1 | 2); // Bit-wise OR
console.log(1 & 2); // Bit-wise AND

// Read, Write, and Execute
// 00000100
// 00000110
// 00000111

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;

let message = myPermission & readPermission ? "yes" : "no";

console.log(message);

// OPERATOR PRECEDENCE
let y = (2 + 3) * 4; // multiplication and division has precedence of addition and substraction
// let y = 2 + 3 * 4;

console.log(y);

let a = "red";
let b = "blue";

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

// IF..ELSE (conditinal statements)
// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 18;

if (hour >= 6 && hour < 12) console.log("Good morning");
else if (hour >= 12 && hour < 18) console.log("Good afternoon");
else console.log("Good evening");

//SWITCH AND CASE

let role; // Declare the variable role

role = "guest"; // Assign the string "guest" to the variable role

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
    break;
}

if (role === "moderator" && hour > 12) console.log("Guest");
else if (role === "moderator") console.log("Moderator");
else console.log("Unknown");

//LOOPS
// 4 TYPES; FOR, WHILE, DO...WHILE, FOR...IN, FOR...OF

//LOOPS/REPEATS PRACTICE
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");

// //FOR LOOP
// for (let i = 0; i < 5; i++) {
//   console.log("Hello World", i);
// }

// for (let i = 0; i <= 5; i++) {
//   console.log("Hello World", i);
// }

// for (let i = 1; i <= 5; i++) {
//   console.log("Hello World", i);
// }

// for (let i = 5; i >= 1; i--) {
//   if (i % 2 !== 0) console.log(i);
//   break;
// }

// // WHILE LOOP
// let i = 0;
// // while (condtion)
// while (i <= 5) {
//   if (i % 2 != 0) console.log(i);
//   i++;
// }

// DO WHILE LOOP
// let i = 9;
// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i <= 5);

//INFINTE LOOP
// let i = 0;
// while (i< 5) {
//   console.log(i);
// }

// while (true) {

// };

// let x = 0;
// do {

// } while (x < 5);

// // for (let i = 0; i < 10;)
// of you forget to add i++ it can crash the browser or computer

// FOR-IN LOOP
const person = {
  name: "Khalid",
  age: 30,
};

for (let key in person) console.log(key, person[key]);

// //Dot Notation
// person.name

// //Bracket Notation
// person['name']

const colors = ["red", "green", "blue"];
for (let index in colors) console.log(index, colors[index]);

// FOR-OF LOOP
for (let color of colors) console.log(color);

let i = 0;
while (i <= 10) {
  //if (i === 5) break;
  if (i % 2 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

// function max(number1, number2)
let number = max(5, 3);
console.log(number);

function max(a, b) {
  //   if (a > b) return a;
  //   // ....
  //   return b;

  // (condition) ? a : b

  return a > b ? a : b;
}

console.log(isLandscape(800, 600));

function isLandscape(width, height) {
  if (width > height) return true;
  return false;
}

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return "number";

  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

  if (input % 3 === 0) return "Fizz";

  if (input % 5 === 0) return "Buzz";
}

// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

checkSpeed(76);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) console.log("Ok");
  else {
    let point = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log("License suspended");
    else console.log("Point", points);
  }
}

showNumbers(17);

function showNumbers(limit) {
  for (let i = -4; i <= limit; i++) {
    // if (i % 2 === 0) console.log(i, "EVEN");
    // else console.log(i, "ODD");

    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}

const isActive = true;
const name = "Khalid"; // string 'Khalid' is truthy
if (name) console.log("Hello");

const array = [1, 2, 3, 7, 4, 9];
console.log(countTruthy(array));

// LIST FALSY VALUES in javascript (REFRESHER)
// falsy
// undefined
// ''
// false
// 0
// NaN

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}

console.log(sum(10));

// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
}

// CALCULATE THE AVERAGE GRADE SCORE FOR STUDENT

const marks = [40, 100, 25, 100, 100, 55];

//Average = 70

// 0-49: F
// 50-59: E
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  // if (average >= 0 && average <= 49) return 'F';
  if (average < 50) return "F";
  if (average < 60) return "E";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) sum += value;
  return sum / array.length;
}

showStars(3);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}

showPrime(20);

function showPrime(limit) {
  for (let number = 2; <= limit; number++) {
    
    let isPrime = true;  
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0)
        isPrime = false;
    }
  }
}