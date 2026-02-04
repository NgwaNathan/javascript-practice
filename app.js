let dollar = 500;
let multilier = 1.5;
let ustralianDollar = dollar * multilier;
console.log(ustralianDollar);

// conditionals
let grade = 75;

switch (true) {
  case grade >= 85:
    console.log("A " + "Excellent");
    break;
  case grade >= 70:
    console.log("B " + "Good Job");
    break;
  case grade >= 30:
    console.log("C " + "Passed");
    break;
  default:
    console.log("F " + "Failed");
    break;
}

// ternary operator
let age = 20;
let hasId = true;

let canEnter = age >= 18 && hasId ? "Allowed to enter" : "Not allowed to enter";
console.log(canEnter);

let isLoggedIn = true;
let hasMembership = true;

let showContent =
  isLoggedIn && hasMembership
    ? "show video content"
    : " you can't see video content";
console.log(showContent);

let i = 0;
while (i <= 5) {
  i++;
  console.log(i);
}

// loops
for (i = 1; i <= 15; i++) {
  if (i % 5 === 0) {
    console.log(`${i} ASAP FRONTEND`);
  } else if (i % 2 === 0) {
    console.log(`${i} FRONTEND`);
  } else {
    console.log(`${i} ASAP`);
  }
}

function moneyConverter(dollar) {
  return dollar * 1.5;
}

result = moneyConverter(750);
console.log(result);

const modTwo = (value) => {
  let modulus = value % 2;
  return modulus;
};

let checkMod = modTwo(3);
console.log(checkMod);

// arrays
let list = ["apple", "mango", "pear", "plum"];

console.log(list[list.length - 1]);

let club = [12, 11, 13, 19, 20, 14, 57, 23, 49];
let adults = [];

for (i = 0; i < club.length; i++) {
  if (club[i] >= 18) {
    adults.push(club[i]);
  }
}

console.log(adults);

// map methhod turns every single element into an array into something else

let amountPounds = [10, 20, 30, 40, 50];
let amountdolloar = amountPounds.map((element) => element * 1.5);
console.log(amountdolloar);

// objects

let user = {
  name: "nathan",
  email: "nathan@gmail.com",
};

let Users = [];
function signUp(user) {
  Users.push(user);
}

signUp({
  name: "nathan",
  email: "nathan@gmail.com",
  password: "heyyy",
  lessonsCompleted: [1, 2, 3],
});
signUp({
  name: "lordwill",
  email: "lordwill@gmail.com",
  password: "comehere",
  lessonsCompleted: [4, 5, 2, 1],
});

console.log(Users);

function changeTextColor() {
  document.querySelector("#lord").style.color = "red";
  document.querySelector("#greenButton").style.backgroundColor = "green";
}
