// დავალება 1

// filter -- ფილტერი ფილტრავს ელემენტს ტოვებს ელემენტს რომელიც არის True

// დავალება 2

let ages = [20,15,40,53,12,32,17,18,19,33,29,85,67]

let srulwlovani = ages.filter(num => num >= 18)
let arasrulwlovani = ages.filter(num => num < 18)
console.log(srulwlovani)
console.log(arasrulwlovani)

// დავალება 3


let numbers = [25,111,921,321,432,545,133,987,436]

let newNumber = numbers.map(item =>{
    if(item % 2 == 0){
        return item * 13
    }else{
        return item * 16
    }
})

let onlyEven = newNumber.filter(even => even % 2 === 0)

console.log(onlyEven)