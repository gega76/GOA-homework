// დავალება 1

// codecademy


// დავალება 2


let checknumber = num => num > 0 ? "Positive" : num < 0 ? "Negative": "Zero"


// დავალება 3


let checkscore = function(score){
    if(score >= 90 && score <= 100){
        return "A"
    }else if(score >= 80 && score <= 89){
        return "B"
    }else if(score >= 70 && score <= 79){
        return "C"
    }else if(score >= 60 && score <= 69){
        return "D"
    }else if(score >= 0 && score <= 59){
        return "F"
    }else if(score < 0 || score > 100){
        return "Invalid score"
    }
}

console.log(checkscore(-1))


// დავალება 4

let checkWord = name => {
    name = name.Tolowercase()
    if(name.startswith("a")){
        return "Starts with a"
    }else{
        return "Doesn't start with A"
    }
}



// დავალება 5


let analyzeNumbers = function(num1 , num2 , num3){
    if(num1 > num2 && num1 > num3){
        return num1
    }else if(num2 > num1 && num2 > num3){
        return num2
    }else{
        return num3
    }
}

// დავალება 6


let analyzeText = function(text){
    console.log(text.length)
    console.log(text.toUpperCase())
    console.log(text.startswith("Hello"))
}

// დავალება 7


let Checkdiscount = (price , discount) =>{
    if(discount >= 50){
        return "Discount too high"
    }else if(discount < 0){
        return "Invalid discount"
    }else{
        return price - discount
    }
}

// დავალება 8


let validatePassword = password =>{
    if(password.length >= 8 && password.includes("@") && password[0] === password[0].toUpperCase()){
        return "Strong password"
    }else{
        return "Weak password"
    }
}

// დავალება 9


let validateUser = (username , age , password) =>{
    if(username != "" && age >= 18 && password.length >= 8){
        return "User is valid"
    }else{
        return "User is invalid"
    }
}