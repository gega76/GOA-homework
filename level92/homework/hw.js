// დავალება 1

let score = 87

score >= 90 && score <= 100 ? console.log("Excellent") : score >= 75 && score <= 89 ? console.log("Very Good") : score >= 60 && score <= 74 ? console.log("Good") : score >= 40 && score <= 59 ? console.log("Passed") : console.log("Failed")

// დავალება 2

let age = 20;
let isStudent = true;

age < 18 ? console.log("Minor") : age >= 18 && isStudent ?console.log("Adult Student") : age >= 18 && !isStudent ? console.log("Adult") : age >= 65 ? console.log("Senior") : console.log("Alien")


// დავალება 3

let number = -14;


number > 0 && number % 2 == 0? console.log("positive even") : 
number > 0 && number % 2 == 1? console.log("positive odd") : number < 0 ? console.log("negative") : console.log("zero")


// დავალება 4

let username = "adminGoga";

username == "" ? console.log("Username is empty") : username.startsWith("admin") ? console.log("Admin") : username.startsWith("user") ? console.log("User") : console.log("Unknown user")

// დავალება 5

let temperature = 28;

temperature < 0 ? console.log("Freezing") : temperature >= 0 && temperature <= 10? console.log("Cold") : temperature >= 11 && temperature <= 20? console.log("Cool") : temperature >= 21 && temperature <= 30? console.log("Warm") : console.log("Hot")


// დავალება 6


let a = 45;
let b = 78;
let c = 32;

a > b && a > c ? console.log("a is Biggest") : b > a && b > c ? console.log("b is Biggest") : console.log("c is Biggest")

// დავალება 7

let day = 4;

switch(day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid day")
        break
}

// დავალება 8

let grade = "B";


switch(grade){
    case "A":
        console.log("Excellent")
        break
    case "B":
        console.log("Very good")
        break
    case "C":
        console.log("Good")
        break
    case "D":
        console.log("Passed")
        break
    case "F":
        console.log("Failed")
        break
    default:
        console.log("Invalid grade")
        break
}


// დავალება 9

let month= 8;

switch(month){
    case 12 && 1 && 2:
        console.log("Winter")
        break
    case 3 && 4 && 5:
        console.log("Spring")
        break
    case 6 && 7 && 8:
        console.log("Summer")
        break
    case 9 && 10 && 11:
        console.log("Autumn")
        break
}


// დავალება 10

let aa = 20;
let bb = 5;
let operator = "*";

switch(operator){
    case "+":
        console.log(aa + bb)
        break
    case "-":
        console.log(aa - bb)
        break
    case "*":
        console.log(aa * bb)
        break
    case "/":
        console.log(aa / bb)
        break
    case "%":
        console.log(aa % bb)
        break
    default:
        console.log("Invalid operator")
        break
}


// დავალება 11


let action = "withdraw";
let balance = 500;
let amount = 200;


switch(true){
    case action == "balance":
        console.log(balance)
        break
    case action == "deposit":
        balance = balance + amount
        amount = 0
        break
    case action =="withdraw" && balance >= amount:
        balance = balance - amount
        amount = 0
        break
    case action =="withdraw" && amount > balance:
        console.log("Insufficient balance")
        break
    case action == "exit":
        console.log("Goodbye")
        break
}

console.log(balance)