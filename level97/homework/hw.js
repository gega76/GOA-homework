// დავალება 1

// let songs = ["Song A", "Song B", "Song C"];

// songs.push("Song D" , "Song E")
// songs.pop()
// songs.push("Song F")
// console.log(songs)

// დავალება 2

// let scores = [45, 67, 89, 34, 72];

// scores.push(91,56)
// scores.pop()
// console.log(scores)
// console.log(scores.length)

// დავალება 3

// let students = ["Nika", "Gio", "Luka", "Ana"];

// students.shift()
// students.unshift("Dato","Saba")
// console.log(students)

// დავალება 4

// let messages = ["Hello", "How are you?", "Goodbye"];

// messages.shift()
// messages.unshift("Important!","Warning!","See you!")
// messages.pop()
// console.log(messages)

// დავალება 5

// let products = ["Laptop", "Phone", "Tablet", "Watch", "Headphones", "Camera"];

// let newarr = products.slice(0,3)
// let newarr2 = products.slice(3)
// let newarr3 = products.slice(1,4)

// დავალება 6

// let numbers = [10, 20, 30, 40, 50, 60, 70, 80];

// let newarr1 = numbers.slice(2,6)
// let newarr2 = numbers.slice(4)

// დავალება 7

// let colors = ["red", "blue", "green", "yellow", "black"];

// colors.splice(2,1,"purple")
// colors.splice(3,1,"orange")
// console.log(colors)

// დავალება 8

// let numbers = [5, 10, 15, 20, 25, 30];

// numbers.splice(2,1, 100 , 200)
// numbers.pop()
// console.log(numbers)

// დავალება 9

// let fruits = ["apple", "banana", "orange", "kiwi", "mango"];

// let newarr1 = fruits.toSpliced(2,1,"watermelon")
// console.log(fruits)

// დავალება 10

// let numbers = [10, 20, 30, 40, 50];

// numbers.splice(2,1,100)
// let newarr1 = numbers.toSpliced(2,1,30)
// console.log(numbers)
// console.log(newarr1)

// დავალება 11

// let data1 = [10, 20, 30];
// let data2 = "Hello";
// let data3 = 100;
// let data4 = ["A", "B"];

// if(Array.isArray(data1)){
//     console.log("data1 is array")
// }else{
//     console.log("data1 is not array")
// }

// if(Array.isArray(data2)){
//     console.log("data1 is array")
// }else{
//     console.log("data1 is not array")
// }

// if(Array.isArray(data3)){
//     console.log("data1 is array")
// }else{
//     console.log("data1 is not array")
// }

// if(Array.isArray(data4)){
//     console.log("data1 is array")
// }else{
//     console.log("data1 is not array")
// }

// დავალება 12

// let sentence = "JavaScript is very interesting";

// let sentence1 = sentence.split(" ")

// console.log(sentence1.length)
// console.log(sentence1[0])
// console.log(sentence1[3])


// დავალება 13

// let students = "Nika,Gio,Luka,Ana,Saba";

// let newarr = students.split(",")

// console.log(newarr[0])
// console.log(newarr[1])
// console.log(newarr[2])
// console.log(newarr[3])
// console.log(newarr[4])

// დავალება 14

// let words = ["HTML", "CSS", "JavaScript", "React"];

// let newarr1 = words.join(" - ")
// console.log(newarr1)

// newarr1 = words.join(" | ")
// console.log(newarr1)

// დავალება 15

// let numbers = ["555", "12", "34", "56"];

// let newarr1 = numbers.join("-")
// console.log(newarr1)

// დავალება 16

// let boys = ["Nika", "Gio", "Luka"];
// let girls = ["Ana", "Mariam", "Sali"];

// let newarr1 = boys.concat(girls)
// console.log(newarr1)

// დავალება 17

// let morning = ["Math", "English"];
// let afternoon = ["History", "Physics"];
// let evening = ["Programming", "Design"];

// let newarr1 = morning.concat(afternoon)
// let newarr2 = newarr1.concat(evening)
// console.log(newarr2)

// დავალება 18

// let cart = ["Phone", "Laptop", "Mouse"];
// let extraProducts = ["Webcam", "Microphone"];
// cart.push("Keyboard")
// cart.unshift("USB Cable")
// cart.pop()
// cart.shift()
// cart.splice(2,1,"Headphones")
// let newarr1 = cart.slice(0,2)
// let newarr2 = cart.concat(extraProducts)
// let joins = newarr2.join(" | ")

// console.log(joins)

// დავალება 19

// let data = "apple,banana,orange,kiwi,mango";

// let newdata = data.split(",")
// console.log(Array.isArray(newdata))
// newdata.push("watermelon")
// newdata.unshift("strawberry")
// newdata.pop()
// newdata.shift()
// newdata.splice(3,1,"peach")
// let newdata2 = newdata.slice(2,5)
// let newdata3 = newdata2.toSpliced(1)
// let extraFruits = ["grape", "melon"];
// let concat1 = newdata.concat(extraFruits)
// let joins = concat1.join(" | ")

// console.log(joins)