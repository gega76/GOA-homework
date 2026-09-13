// დავალება 1

// let arr = ["Laptop", "Mouse", "Keyboard", "Monitor"]

// function editProducts(products){
//     products.unshift("Phone")
//     products.push("Headphones")
//     products.pop()
//     products.splice(2 , 1 , "Webcam")
// }

// editProducts(arr)
// console.log(arr)

// დავალება 2

// let arr = [10, 20, 30, 40, 50, 60, 70, 80]

// function organizeNumbers(numbers){
//     let first = numbers.slice(0 , 4)
//     let end = numbers.slice(4)
//     end.unshift(100)
//     first.unshift(5)
//     const con = first.concat(end)
//     console.log(con)
// }

// organizeNumbers(arr)


// დავალება 3

// let arr = ["Giorgi", "Nika", "Ana", "Luka", "Saba"]

// function studentManager(students){
//     students.shift()
//     students.unshift("Mariam")
//     students.push("Dato")
//     students.splice(3 , 1, "Gabrieli")
//     let New1 = students.slice(0,4)
//     console.log(New1)
// }

// studentManager(arr)

// დავალება 4

// let arr = ["Bread", "Milk", "Cheese", "Apple", "Juice"]

// function shoppingCart(cart){
//     cart.unshift("Water")
//     cart.push("Chocolate")
//     cart.shift()
//     cart.splice(2 , 1 , "Yogurt")
//     let new1 = cart.slice(0,4)
//     console.log(new1)
// }

// shoppingCart(arr)

// დავალება 5

// let arr = [15, 25, 35, 45, 55, 65]

// function finalList(numbers){
//     if(Array.isArray(numbers)){
//         numbers.shift()
//         numbers.unshift(100)
//         numbers.pop()
//         numbers.push(200)
//         numbers.splice(2,0,300)
//         let New1 = numbers
//         console.log(New1)
//     }else{
//         console.log("Is not Array")
//     }
// }

// finalList(arr)

// დავალება 6

// let students = [["Giorgi", 18], ["Nika", 20], ["Luka", 17], ["Saba", 19]];

// function getStudent(students){
//     console.log(students[0][0])
//     console.log(students[1][1])
//     students[2].splice(1,1,18)
//     console.log(students)
// }

// getStudent(students)

// დავალება 7

// let products = [["Laptop", 2500], ["Phone", 1500], ["Mouse", 80], ["Keyboard", 120]];

// function updateProducts(products){
//     products[0].splice(1,1,2300)
//     products[2].splice(1,1,100)
//     products.splice(2,0,["Tablet", 900])
//     products.pop()
//     console.log(products)
// }

// updateProducts(products)

// დავალება 8

// let store = [
//     [
//         "Electronics",
//         [
//             ["Laptop", 2500, ["Black", "Silver"]],
//             ["Phone", 1500, ["Black", "White"]],
//             ["Tablet", 900, ["Gray", "Blue"]]
//         ]
//     ],

//     [
//         "Clothes",
//         [
//             ["T-Shirt", 80, ["Red", "Black", "White"]],
//             ["Jeans", 150, ["Blue", "Black"]],
//             ["Jacket", 300, ["Black", "Brown"]]
//         ]
//     ],

//     [
//         "Shoes",
//         [
//             ["Nike", 400, ["Black", "White"]],
//             ["Adidas", 350, ["White", "Blue"]],
//             ["Puma", 250, ["Black", "Red"]]
//         ]
//     ]
// ];

// function manageStore(store){
//     console.log(store[0][1][1][0])
//     console.log(store[0][1][1][1])
//     console.log(store[0][1][1][2][1])
//     store[0][1][2].splice(1,1,1000)
//     store[1][1][0][2].splice(2,1,"Green")
//     store[1][1][1][2].pop()
//     store[2][1][0][2].unshift("Red")
//     store[2][1][2][2].splice(1,1,"Green")
//     store[2][1].push(["New Balance", 450, ["Gray", "Black"]])
//     store[1][1].pop()
//     let new1 = store.slice(0,1)
//     store[2][1].push(["Reebok", 280, ["Black", "White"]])
//     console.log(store)
// }

// manageStore(store)

// დავალება 9

// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }

// დავალება 10

// for(let i = 1; i <= 20; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

// დავალება 11

// let sum = 0

// for(let i = 0; i < 100; i++){
//     sum += i
// }

// console.log(sum)

// დავალება 14

// for(let i = 0; i < 20; i++){
//     console.log("Gega")
// }

// დავალება 15

// for(let i = 20; i < 50; i+=5){
//     console.log(i)
// }

// დავალება 16

// for(let i = 0; i < 5; i++){
//     console.log(`${i} გეგა`)
// }