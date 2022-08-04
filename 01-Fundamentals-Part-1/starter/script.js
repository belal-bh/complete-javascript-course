/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Belal");
console.log(23);

let firstName = "Belal";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let belal_hername = "BH";
let $function = 27;

let person = "belal";
let PI = 3.1415;

let myFirstJob = "Teacher";
let myCurrentJob = "Programmer"

let job1 = "teacher";
let job2 = "programmer";


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Belal');

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

// bug can occure
console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1997;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lasName = "Hossain";
console.log(lasName);

// Math operators
const now = 2037;
const ageBelal = now - 1997;
const ageKabir = now - 2018;
console.log(ageBelal, ageKabir);

console.log(ageBelal * 2, ageBelal / 10, 2 ** 3);

const firstName = "Belal";
const lastName = "Hossain";
console.log(firstName + ' ' +  lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; 100;
x++;
x--;
x--;
console.log(x);

// Comparision operators
console.log(ageBelal > ageKabir);
console.log(ageKabir >= 18);

const isFullAge = ageKabir >= 18;
console.log(now - 1997 > now - 2018);

const now = 2037;
const ageBelal = now - 1997;
const ageKabir = now - 2018;

console.log( now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageBelal + ageKabir) / 2;
console.log(ageBelal, ageKabir, averageAge);
*/

// Coding Challenge 1

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.92;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);
