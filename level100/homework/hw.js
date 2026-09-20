// დავალება 1

// let number1 = 100

// for(let i = 0; i < number1;i++){
//     if(i % 3 == 0){
//         console.log(i)
//     }
// }


// დავალება 2

// const numbers = [-5, 10, -2, 8, 0, 15, -7]

// let positive = 0
// let negative = 0
// let zero = 0

// for(let i = 0;i < numbers.length;i++){
//     if(numbers[i] > 0){
//         positive += 1
//     }else if(numbers[i] < 0){
//         negative += 1
//     }else{
//         zero += 1
//     }
// }


// დავალება 3


// const secretNumber = 7
// let guess = 1

// while(guess < secretNumber){
//     guess++
//     if(guess == 7){
//         console.log("Correct number")
//     }
// }


// დავალება 4

// let i = 10
// do{
//     console.log(i)
//     i++
// }while(i < 10)

// დავალება 5

// let numbers = [1,2,3,4,5,6,7,8,9,10]
// let sum = 0
// let counteven = 0
// let countodd = 0

// function analyzeNumbers(numbers){
//     for(let i = 0; i < numbers.length;i++){
//         sum += numbers[i]
//         if(numbers[i] % 2 == 0){
//             counteven += 1
//         }else{
//             countodd += 1
//         }
//     }

//     console.log(sum)
//     console.log(counteven)
//     console.log(countodd)
// }
// analyzeNumbers(numbers)


// დავალება 6

// const prices = [100, 250, 80, 400, 150]

// function calculateDiscount(discount = [10,20,40,50,30]){
//     for(let i = 0; i < discount.length;i++){
//         console.log(prices[i] * discount[i] / 100)
//     }
// }

// calculateDiscount() 

// დავალება 7


// function findDivisors(num = 12){
//     for(let i = 0; i <= num ;i++){
//         if(num % i == 0){
//             console.log(i)
//         }
//     }
// }
// findDivisors()


// დავალება 8


// function countVowels(string = "gega"){
//     let count = 0
//     for(let i = 0; i < string.length;i++){
//         if("aeiou".includes(string[i])){
//             count++
//         }
//     }
//     console.log(count)
// }
// countVowels()


// დავალება 9

// const numbers = [4, 8, 12, 25, 30, 40, 50];

// let i = 0

// while(i < numbers.length){
//     if(numbers[i] > 20){
//         console.log(numbers[i])
//         break
//     }

//     i++
// }

// დავალება 10

// function calculateSum(n = 15){
//     let sum = 0
//     for(let i = 0; i <= n; i++){
//         sum += i
//     }

//     console.log(sum)
// }
// let sum = 0

// calculateSum()


// დავალება 11


// const text = "JavaScript is fun and JavaScript is powerful";

// function analyzeText(name = text){
//     let count = 0
//     let spacecount = 0
//     let vowelcount = 0
//     for(let i = name.length - 1; i > 0;i--){
//         console.log(name[i])

//         if(name[i] == "a" || name[i] == "A"){
//             count += 1
//             vowelcount += 1
//         }else if(name[i] == " "){
//             spacecount += 1
//         }else if("eiou".includes(name[i])){
//             vowelcount += 1
//         }
        

//         if(name[i] == " "){
//             break
//         }
//     }
//     console.log(vowelcount)
// }

// analyzeText()

// დავალება 12


// function numberGame(num = 20){
//     let guess = 1
//     let count = 0
//     while(guess <= num){
//         if(guess == num){
//             console.log("You found it!")
//             break
//         }

//         count += 1
//         guess++
//     }

//     console.log("It was done in " + count +  " attempts")
// }

// numberGame()

// დავალება 13


// let i = 1
// let c3 = 0
// let c5 = 0
// let countsum = 0
// let c7 = 0
// while(i <= 500){
//     if(i % 3 == 0){
//         c3 += 1
//     }
//     if(i % 5 == 0){
//         c5 += 1
//     }
//     if(i % 5 != 0 && i % 3 != 0){
//         countsum += i
//     }

//     if(i % 7 == 0 && i > c7){
//         c7 = i
//     }
//     i++
// }

// console.log("სამის ჯერადია: " + c3)
// console.log("ხუთის ჯერადია: " + c5)
// console.log("სამის და ხუთის ჯერადია: " + (c5 + c3))
// console.log("ყველა იმ რიცხვის ჯამი რომელიც არც 3ზე და არც 5ზე იყოფა: " + countsum)
// console.log("ყველაზე დიდი რიცხვი რომელიც იყოფა 7ზე: " + c7)

// დავალება 14

// let number = String(58374629)
// let i = 0
// let countlength = 0
// let even = 0
// let odd = 0
// let sum = 0
// let biggest = 0
// let smallest = number[0]
// let biggerthan5 = 0
// while(i < number.length){
//     countlength += 1
//     sum += Number(number[i])
//     if(number[i] % 2 == 0){
//         even += 1 
//     }else{
//         odd += 1
//     }

//     if(number[i] > biggest){
//         biggest = number[i]
//     }

//     if(number[i] < smallest){
//         smallest = number[i]
//     }

//     if(number[i] > 5){
//         biggerthan5 += 1
//     }
    

//     i++
// }

// console.log("რამდენი ციფრია რიცხვში: " + countlength)
// console.log("რამდენი ციფრია ლუწი: " + even)
// console.log("რამდენი ციფრია კენტი: " + odd)
// console.log("ციფრების ჯამი: " + sum)
// console.log("ყველაზე დიდი ციფრი: " + biggest)
// console.log("ყველაზე პატარა ციფრი: " + smallest)
// console.log("რამდენი ციფრია 5ზე მეტი: " + biggerthan5)


// დავალება 15

// let numbers = [15, 8, 23, 42, 11, 67, 30, 19, 54, 72, 5]
// let sumnewnums = 0
// let i = 0

// while(i < numbers.length){
//     i++
//     if(numbers[i] % 2 == 1){
//         continue
//     }

//     if(numbers[i] > 50){
//         break
//     }else if(numbers[i] % 2 == 0){
//         console.log(numbers[i])
//         sumnewnums += numbers[i]
//     }
// }

// console.log("მათი ჯამი: " + sumnewnums)


// დავალება 16

// let balance = 1200
// let operations = [200, -150, -500, 300, -200, -1000, 400]

// let i = 0
// let successful = 0
// let failed = 0

// while(i < operations.length){
//     if(operations[i] > 0){
//         balance += operations[i]
//     }else if(balance + operations[i] >= 0){
//         balance += operations[i]
//         successful++
//     }else{
//         failed++
//     }

//     i++
// }

// console.log(balance)
// console.log(successful)
// console.log(failed)


// დავალება 17


// let numbers = [34, 12, 89, 45, 67, 23, 90, 11, 56, 78, 43, 29]

// let i = 0
// let max = 0
// let min = numbers[0]
// let sum = 0
// let even = 0
// let odd = 0
// let biggerthan50 = 0
// let smallerthan50 = 0
// let biggesteven = 0
// let biggestodd = 0
// let smallesteven = numbers[0]
// let smallestodd = numbers[0]

// while(i < numbers.length){
//     sum += numbers[i]

//     if(numbers[i] > max){
//         max = numbers[i]
//     }

//     if(numbers[i] < min){
//         min = numbers[i]
//     }

//     if(numbers[i] % 2 ==0){
//         even += 1
//     }else{
//         odd += 1
//     }

//     if(numbers[i] > 50){
//         biggerthan50 += 1
//     }else if(numbers[i] < 50){
//         smallerthan50 += 1
//     }

//     if(numbers[i] % 2 == 0 && numbers[i] > biggesteven){
//         biggesteven = numbers[i]
//     }else if(numbers[i] % 2 == 1 && numbers[i] > biggestodd){
//         biggestodd = numbers[i]
//     }

//     if(numbers[i] % 2 == 0 && numbers[i] < smallesteven){
//         smallesteven = numbers[i]
//     }else if(numbers[i] % 2 == 1 && numbers[i] < smallestodd){
//         smallestodd = numbers[i]
//     }

//     i++
// }

// console.log("ყველაზე დიდი რიცხვი: " + max)
// console.log("ყველაზე პატარა რიცხვი: " + min)
// console.log("ჯამი: " + sum)
// console.log("საშუალო: " + (sum / numbers.length))
// console.log("ლუწების რაოდენობა: " + even)
// console.log("კენტების რაოდენობა: " + odd)
// console.log("50-ზე მეტი რიცხვების რაოდება: " + biggerthan50)
// console.log("50-ზე ნაკლები რიცხვების რაოდება: " + smallerthan50)
// console.log("ყველაზე დიდი ლუწი: " + biggesteven)
// console.log("ყველაზე დიდი კენტი: " + biggestodd)
// console.log("ყველაზე პატარა ლუწი: " + smallesteven)
// console.log("ყველაზე პატარა კენტი: " + smallestodd)


// დავალება 18

// let correctPin = 4821
// let attempts = [1234, 1111, 5555, 4821]

// let i = 0
// let count = 0

// while(i < attempts.length){
//     if(count == 3){
//         console.log("Card blocked")
//         break
//     }

//     if(attempts[i] == correctPin){
//         console.log("Access granted")
//         break
//     }else{
//         count += 1
//         console.log("Access denied you have " + (3 - count) + " Attempts left")
//     }

//     i++
// }