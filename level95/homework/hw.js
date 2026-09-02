// დავალება 1


// function makeNegative(num) {
//  if(num === 0){
//    return 0
//  }else if(num > 0){
//    return -num
//  }else{
//    return num
//  }
// }


// დავალება 2

// const stringToNumber = function(str){
//   return Number(str)
// }


// დავალება 3


// function greet(name){
//   return `Hello, ${name} how are you doing today?`
// }

// დავალება 4


// function makeUpperCase(str) {
//   return str.toUpperCase()
// }

// // დავალება 5

// const rps = (p1, p2) => {
//   if(p1 == "scissors" && p2 == "paper"){
//     return "Player 1 won!"
//   }else if(p2 == "scissors" && p1 == "paper"){
//     return "Player 2 won!"
//   }else if(p1 == "rock" && p2 == "paper"){
//     return "Player 2 won!"
//   }else if(p2 == "rock" && p1 == "paper"){
//     return "Player 1 won!"
//   }else if(p2 == "rock" && p1 == "scissors"){
//     return "Player 2 won!"
//   }else if(p2 == "scissors" && p1 == "rock"){
//     return "Player 1 won!"
//   }else{
//     return "Draw!"
//   }
// };


// დავალება 6


// function testEven(n) {
//   if(n % 2 == 0){
//     return true
//   }else{
//     return false
//   }
// }


// დავალება 7


// let name = "Goga";

// function first() {
//     let age = 20;

//     function second() {
//         let city = "Tbilisi";

//         console.log(name);
//         console.log(age);
//         console.log(city);
//     }

//     second();
// }

// first();

// დავალება:

// მიუთითე თითოეული ცვლადის Scope.
// რომელი ცვლადის გამოყენება შეუძლია second() ფუნქციას? -- age , name , city
// რომელი ცვლადის გამოყენება არ შეუძლია first() ფუნქციას? -- city
// შეცვალე კოდი ისე, რომ city დაბეჭდო first() ფუნქციიდანაც. -- 


// დავალება 8

// let score = 100;

// if (score > 50){
//     let message = "Passed";
// }

// console.log(message);

// let message = "Passed"; ეს არის ბლოკში და consols არ აქვს წდომა მასზე

// დავალება 9

// let x = 10;

// function outer() {
//     let x = 20;

//     function middle() {
//         let y = 30;

//         function inner() {
//             let x = 40;

//             console.log(x);
//             console.log(y);
//         }

//         inner();
//     }

//     middle();
// }

// outer();


// რა დაიბეჭდება?
// inner()-ში რომელი x გამოიყენება? -- 40 , 30
// თუ inner()-დან let x = 40 წავშლით, რომელი x იქნება გამოყენებული? - 20
// თუ middle()-დანაც წავშლით let y = 30-ს, რა მოხდება console.log(y)-ზე? - error რადგან y არ გვაქვს სხვა


// დავალება 10


// let country = "Georgia";

// function school() {
//     let students = 20;

//     if (students > 10) {
//         let teacher = "Goga";

//         console.log(country);
//         console.log(students);
//         console.log(teacher);
//     }
// }

// school()

// country → global scope
// students → local scope
// teacher → local scope