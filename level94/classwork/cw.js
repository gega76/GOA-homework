// დავალება 1


let checkNumber = function(number){
    if(number > 0 && number % 2 == 0){
        return "Positive Even"
    }else if(number > 0 && number % 2 == 1){
        return "Positive Odd"
    }else if(number < 0 && number % 2 == 0){
        return "Negative Even"
    }else if(number < 0 && number % 2 == 1){
        return "Negative Odd"
    }else{
        return "Zero"
    }
}



// დავალება 2


let greet = name => {
    if(name.startswith("g")){
        return "Good name"
    }else{
        return "still good name"
    }
}

// დავალება 3

let gret = num => num % 2 == 0 ? "even ": "odd"