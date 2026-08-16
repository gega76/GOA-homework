// დავალება 1


let age = 16

if(age >= 0 && age <= 16){
    console.log("ბავშვი")
}else if(age >= 13 && age <= 17){
    console.log("მოზარდი")
}else if(age >= 18 && age <= 59){
    console.log("ზრდასრული")
}else if(age >= 60){
    console.log("პენსიონერი")
}else{
    console.log("არასწორი ასაკი")
}

// დავალება 2


let number = -7

if(number > 0){
    console.log("დადებითი")
}else if(number < 0){
    console.log("უარყოფითი")
}else{
    console.log("ნულია")
}

// დავალება 3

let age2 = 20
let price = 150
let isStudent = true

if(price > 100 && isStudent == true){
    console.log("30% discount")
}else if(price > 100 || age < 18){
    console.log("20% discount")
}else if(age >= 60){
    console.log("15% discount")
}else{
    console.log("No discount")
}


// დავალება 4

let username = "adminGoga";

if(username === false){
    console.log("Username is empty")
}else if(username.startsWith("admin")){
    console.log("Admin")
}else if(username.startsWith("user")){
    console.log("User")
}else{
    console.log("Unknown user")
}

// დავალება 5

let password = "JavaScript";

if(password === false){
    console.log("Password is empty")
}else if(password.length < 6){
    console.log("Too short")
}else if(password.length >= 6 && password.length <= 10){
    console.log("Medium password")
}else if(password.length > 10){
    console.log("Strong password")
}

// დავალება 6

let city = "TBILISI";
city = city.toLowerCase()

if(city == "tbilisi"){
    console.log("თბილისი")
}else if(city == "batumi"){
    console.log("ბათუმი")
}else if(city == "kutaisi"){
    console.log("ქუთაისი")
}else{
    console.log("უცნობი ქალაქი")
}


// დავალება 7

let age3 = 19;
let isStudent2 = true;

if(age3 < 18){
    console.log("Minor")
}else if(age >= 18 && age3 == isStudent2){
    console.log("Adult student")
}else if(age >= 18 && age3 != isStudent2){
    console.log("Adult")
}else{
    console.log("Invalid age")
}


// დავალება 8

let username2 = "User123";

if(username2 === false){
    console.log("Empty")
}else if(username2.startsWith("admin") && username2.length > 10){
    console.log("Strong admin username")
}else if(username2.startsWith("user")){
    console.log("Regular user")
}else if(username2.length < 5){
    console.log("Too short")
}else{
    console.log("Valid username")
}

// დავალება 9

let username3 = "ADMIN_GOGA";
let age4 = 25;
let isActive = true;

username3 = username3.toLowerCase()

if(username3 == ""){
    console.log("No username")
}else if(username3.startsWith("admin") && age >= 18 && isActive == true){
    console.log("Admin access")
}else if(username3.startsWith("user") && age >= 18){
    console.log("User access")
}else if(age < 18){
    console.log("Access denied")
}else{
    console.log("Unknown account")
}