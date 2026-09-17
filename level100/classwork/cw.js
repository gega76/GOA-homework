// დავალება 1


let names = ["gega", "rezi", "gio"]
let i = 0

while(i < names.length){
    if (names[i].length < 4){
        console.log(names[i])
    }
    i++
}

i = 0

do{
    if (names[i].length < 4){
        console.log(names[i])
}
    i++
}while (i < names.length)




// დავალება 2

let numbers = [2,5,15,200,25,30]

for(i = 0; i < numbers.length; i++){
    if(numbers[i] > 50){
        console.log("num which is greater than 50 is found" + " " + numbers[i])
        break
    }
}