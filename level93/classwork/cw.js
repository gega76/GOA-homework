// დავალება 1

function greet(){
    console.log("gega gabunia")
}

greet()



// დავალება 2


function random(name = "gega" , age = 14 , height = "1.75"){
    console.log(`hello my name is ${name} and my age is ${age} and my height is ${height}`)
}

random("gio")
random("gio" , 17)
random("gio" , 24 , "1.80")
random()