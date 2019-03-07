// ===============VARIABLES

console.log("I am enjoying Javascript");
console.log(2019);
var firstName;
console.log(firstName);

console.log(typeof firstName);
firstName = "Simon";
console.log(firstName);
console.log(typeof firstName);
var year = 2019;
console.log(typeof year);
let houseNumber = "2808";
console.log(typeof houseNumber);
console.log(Number(houseNumber));
console.log(2019);
var yearBorn = 1979;
console.log(yearBorn);
console.log(year - yearBorn);
var age = year - yearBorn;
console.log(age);
var lastName = "Maher";
var fullName = firstName + " " + lastName;
var country = "Finland";
var nationality = "British";
var personInfoOne =
  " I am " +
  fullName +
  ". I am " +
  age +
  " and I live in " +
  country +
  ", but I am " +
  nationality;
console.log(personInfoOne);
peronInfoTwo = ` I am ${fullName}. I am  ${age} and I live in ${country}, but I am ${nationality}.`;

const bodyTemperature = 37;
const boilingPoint = 100;
const gravity = 9.8;

let facts = `The human body temperature is ${bodyTemperature}, the water boiling point is ${boilingPoint}. The Earth's gravity is ${gravity}`;

console.log(facts);

let numOne = 3;
let numTwo = 3;
let sum = numOne + numTwo;
console.log(sum);
let div = numOne / numTwo;
console.log(div);
let multi = numOne * numTwo;
console.log(multi);
let remainder = numOne % numTwo;
console.log(remainder);
// ===============COMPARISON=========

console.log(4 > 3);
console.log(3 < 4);
console.log(4 >= 3);
console.log(3 >= 4);
console.log(4 == 4);
console.log(4 == "4");
console.log(4 === "4");
console.log(4 !== 4);
console.log(4 !== "4");
console.log(4 != "4");

// ===============LOGICAL OPERATOR

let isSnowing = true;
if (isSnowing == true) {
  console.log(isSnowing);
} else {
  console.log("Not snowing");
}

let num = 8;
if (num > 10) {
  console.log(true);
} else {
  console.log(false);
}

num > 10 ? console.log(true) : console.log(false);

// ============ARRAYS

const shoppingCart = ["milk", "mango", "tomato", "honey", "coffee"];
console.log(shoppingCart);
console.log(shoppingCart.length); /* Calls the array's length*/
console.log(shoppingCart[0]); /* Calls the first item(milk) in the array*/
console.log(
  shoppingCart[shoppingCart.length - 1]
); /*Calls the last item (coffee) in the array*/
shoppingCart[0] =
  "meat"; /* Replaces item at index[0](milk) with new item 'meat*/
console.log(shoppingCart);
shoppingCart[3] = "sugar";
console.log(shoppingCart);
console.log(
  shoppingCart.slice(1, 3)
); /* Takes items starting at index[1] up to [3] mango, tomato*/
console.log(
  shoppingCart.push("lettuce")
); /*adds new item lettuce to the end of the array*/
console.log(shoppingCart);
console.log(shoppingCart.push("onions"));
console.log(shoppingCart.pop()); /* Takes away the last item of the array*/
console.log(shoppingCart.pop());
console.log(
  shoppingCart.shift()
); /* Like pop but takes the first item away in the array*/
console.log(shoppingCart.pop());
shoppingCart.unshift("potato"); /* adds item to the beginning of the array*/
console.log(shoppingCart);
shoppingCart.unshift("orange");
console.log(shoppingCart);

// ==========SPLICE

shoppingCart.splice(0, 1);
console.log(shoppingCart);

// =======ARRAY TO STRING

console.log(shoppingCart.join()); /* Turns an Array into a string*/

// ===========LOOPS

for (let i = 0; i < 11; i++) {
  let cal = i * i;
  console.log(cal);
}

for (let i = 10; i >= 0; i--) {
  let cal = i * i;
  console.log(cal);
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log("Number is even " + i);
  } else {
    console.log("Number is odd " + i);
  }
}
let sumOfEven = 0;
let sumOfOdd = 0;
for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    sumOfEven = sumOfEven + i;
  } else {
    sumOfOdd = sumOfOdd + i;
  }
}
console.log(sumOfEven);
console.log(sumOfOdd);

// ================FUNCTION

function areaOfCircle(radius, radius) {
  var area = Math.PI * radius * radius;
  return area;
}
console.log(areaOfCircle(2, 2));

function sumOfNumbers() {
  let sumOfEven = 0;
  let sumOfOdd = 0;
  for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
      sumOfEven = sumOfEven + i;
    } else {
      sumOfOdd = sumOfOdd + i;
    }
  }
  return [sumOfEven, sumOfOdd];
}
console.log(sumOfNumbers());
