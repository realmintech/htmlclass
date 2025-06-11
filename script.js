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

// let weight = document.getElementById("weight");
// let height = document.getElementById("height");
// let result = document.getElementById("result");
// function calculate() {
//   let formula = weight.value / height.value
//   result.innerHTML = `Your BMI is ` + Math.round(formula)
// }
// let display = document.getElementById("display");
// function one() {
//      display.value += "1"
// }

// OBJECT
// const car = {
//   name: "Toyota",
//   color: "Red",
//   tyre: 4,
//   rimColor: "black"
// }

// console.log(car.name);

// const students = [
//   { name: "Aisha", age: 12, school: "Uniosun", complexion: "dark" },
//   { name: "Ayodeji", age: 10, school: "Uniosun", complexion: "light" },
//   { name: "Eniife", age: 14, school: "Uniosun", complexion: "light" },
//   { name: "Kamaldeen", age: 11, school: "Uniosun", complexion: "dark" },
// ];
// let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// console.log(students[2].name);
// console.log(students[2]);
// console.log(typeof students[1].age);

// console.log(alphabet.length)
// console.log(alphabet[1]);

// let text = "We are the so-called 'Vikings' from the north.";
// let tex = 'We are the so-called "Vikings" from the north.';
// let texts = 'It\'s alright';

// let novel = "The God's are not to be blamed. "
// console.log(novel.length);
// console.log(novel.slice(4,9));
// console.log(novel.slice(-1));
// console.log(novel.toUpperCase());
// console.log(novel.toLowerCase());
// console.log(novel.concat(" This is a novel I read in 2015."));
// console.log(novel.trim());
// console.log(novel.padEnd(40, "Holy"));
// let school = "OIC"
// console.log(school.split(" "));
// console.log(novel.replace("are", "is"));
// console.log(novel.repeat(2));
// console.log(novel.at(10));


// // STRING SEARCH METHOD
// let school = "Uniosun is a university in Osogbo. It is located at Osogbo."
// console.log(school.indexOf("is"));
// console.log(school.lastIndexOf("is"));

// console.log(school.search());
// console.log(school.includes("Ade"));
// console.log(school.endsWith("Osogbo."));

// // STRING TEMPLATE
// let name = "Ola"
// // let email = `Lorem ipsum dolor sit amet ${name} consectetur adipisicing elit. Eaque optio aliquam aliquid accusantium facere voluptates cum veniam deserunt quidem. Tempore id vero culpa! Rerum eum, nihil molestiae assumenda inventore ex!`;
// let email = "Lorem ipsum dolor sit amet ${name} consectetur adipisicing elit. Eaque optio aliquam aliquid accusantium facere voluptates cum veniam deserunt quidem. Tempore id vero culpa! Rerum eum, nihil molestiae assumenda inventore ex!";
// console.log(email);

// let num = "081232323232"
// let res = Number(num);
// console.log(typeof res);
// let point = 23.56
// console.log(point.toString());
// console.log(point.toFixed(0));
// console.log(parseFloat(num));
// console.log(parseFloat("12"));

// let age = 45
// if(age < 17) {
//   console.log("You are not eligible to vote");
// }  else {
//   console.log("You are eligible");
// }
// let score = 70
// if(score >= 70) {
//   console.log("Your grade is A");
// } else if(score >= 60) {
//   console.log("Your grade is B");
// } else {
//   console.log("Failed");
  
// }


// // FORM VALIDATION
// let emailInput = document.getElementById("email")
// let result = document.getElementById("res");
// function registration() {
// //  if((emailInput.value).includes("@") && (emailInput.value).includes(".") ){
// //     result.innerHTML = "Valid email"
// //     result.style.color = "green"
// //  } else {
// //   result.innerHTML = "Invalid email"
// //   result.style.color = "red"
// //  }

// // REGEX FOR EMAIL VALIDATION
// const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// let req = regex.test(emailInput.value)
// if(req) {
//   result.innerHTML = "Valid email"
// } else {
//   result.innerHTML = "Invalid email"
// }
// }



// ARRAY METHODS
// let students = ["Ade", "Dele", "Grace", "John", "Favour"]
// console.log("Length of the array is: ",students.length);
// // console.log("Pop method",students.pop());
// console.log(students.push("Clement"));
// console.log(students.unshift("Folake"));
// console.log(students.shift());

// ARRAY SEARCH METHODS
const numbers = [23,56,67,92,3,7]


// function findNum(value, index){
//   return value < 20
// }
// let res = numbers.filter(findNum)
// console.log(res);

// const fruits = ["Mango", "Orange", "Apple", "Cashew"]

// console.log(fruits.sort());

// console.log(numbers.sort((a,b)=> a - b));
// console.log(fruits.reverse());
// console.log(Math.min(2,4,5,6,8,17));




// ARRAY ITERATION METHODS
// let ans = ""
// let ages = [23, 56, 67, 92, 3, 7];
// function showAll(value, index) {
//   ans += value * 3 + "<br>"
// }
// ages.forEach(showAll);
// console.log(ans );

// let fru = ""
// function mapFruits(value, index){
//   fru += value 
// }

// fruits.map(mapFruits);
// console.log(fru);

// fruits.map(
//   (value, index) =>
//     (fru += `

//        <p>${index + 1}</p>
//        <p>${value}</p>
//     `
//   )
// );
// document.getElementById("demo").innerHTML = fru
  
//   console.log(fru);
function totalPrice(total, value, index){
  return total + value
}
let res = numbers.reduce(totalPrice)
console.log(res);

const weights = [45, 4, 9, 16, 25];
let allOver18 = weights.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(allOver18);

