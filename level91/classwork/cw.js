// დავალება 1


let number1 = 13

if(number1 > 0){
    console.log("positive")
}else if(number1 < 0){
    console.log("negative")
}else{
    console.log("zero")
}

// დავალება 2


let name = "gega"

if(name == "gega"){
    console.log("we have same name")
}else{
    console.log("we dont have same name")
}


// დავალება 3


let number2 = 13

if(number2 > 0 && number2 % 2 == 0){
    console.log("positive and even")
}else{
    console.log("zero")
}

// დავალება 4

let name2 = "gega"

if(name2.startsWith("g") || name2 == "levani"){
    console.log("good name")
}else if(name2.startsWith("a") && name2 == "akaki"){
    console.log("excellent name")
}else{
    console.log("other name")
}