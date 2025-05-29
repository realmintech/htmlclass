// // This is function declaration
// function greet() {
//     // alert('Good morning Ade')
//     window.prompt("How old are you?")
// }

// // Variable
// let school = "OIC"
// let name = "Mariam"
// let age = 12
// document.getElementById(
//   "bio"
// ).innerHTML = `My name is ${name}. I am ${age} years old. I attended ${school} hub coding school.`;
// console.log(`My name is ${name}. I am ${age} years old. I attended ${school} hub coding school.`);

// OPERATORS
// let a = 5;
// let b = 8;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a === b);
// console.log(a !== b);
// console.log(a <= b);
// let c = "Ade"
// let d = "Ola"
// console.log(c + d);
// a > 4 ? console.log("Good") : console.log("false");
// console.log(typeof c);


// FUNCTION
// let f = 7
// let g = 5
// function sum() {
//     document.getElementById("calculate").innerHTML = f + g
// //   return f + g
// }
// // console.log();

// const times = (a, b) =>{
//    return a * b
// }
// console.log(times(8, 4))

// const divide = (c,d) =>  c / d
// console.log(divide(4,2));

let weight = document.getElementById("weight");
let height = document.getElementById("height");
let result = document.getElementById("result");
function calculate() {
  let formula = weight.value / height.value
  result.innerHTML = `Your BMI is ` + Math.round(formula)
}
let display = document.getElementById("display");
function one() {
     display.value += "1"
}