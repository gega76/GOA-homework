// დავალება 1

// let prices = [120, 45, 300, 80, 150, 25, 400]
// let sum1 = 0

// for(let i = prices.length - 1; i > 0; i--){
//     if(prices[i] > 100){
//         prices[i] - 20
//     }else if(prices[i] > 50 && prices[i] < 100){
//         prices[i] - 10
//     }
//     console.log(prices[i])
//     sum1 += prices[i]
// }

// console.log(sum1)



// დავალება 2

// let messages = ["  Hello Goga  " , "JAVASCRIPT is fun" , "  I LOVE CODING " , "React is awesome" , "  Learn JavaScript  "]

// let count = 0

// for(let i = messages.length - 1; i > 0; i--){
//     messages[i] = messages[i].trim()
//     messages[i] = messages[i].toLowerCase()
//     if(messages[i].includes("javascript")){
//         console.log("JavaScript message found")
//         count += 1
//     }

//     if(messages[i].length > 15){
//         console.log(messages[i])
//     }
// }



// დავალება 3

// let numbers = [12, 5, 18, 7, 24, 9, 30, 11, 6, 21];
// let sumodd = 0
// let thegreatest = numbers[0]
// let thesmallest = numbers[0]

// for(let i = numbers.length; i > 0;i--){
//     if(numbers[i] % 2 == 0){
//         console.log(numbers[i])
//     }else{
//       sumodd += numbers[i]
//     }
//     if(numbers[i] > thegreatest){
//         thegreatest = numbers[i]
//     }
//     if(numbers[i] < thesmallest){
//         thesmallest = numbers[i]
//     }
//     if(numbers[i] > 10 && numbers[i] < 25){
//         console.log("Special number")
//     }
//     if(numbers[i] % 3 == 0){
//         console.log(numbers[i])
//     }
// }

// დავალება 4


// let names = [
//   "  goga ",
//   "NIKA",
//   "  ana  ",
//   "Giorgi",
//   "  mariam"
// ]

// let count = 0


// for(let i = names.length - 1; i > 0; i--){
//     names[i] = names[i].trim()
//     names[i] = names[i].toLowerCase()
//     names[i][0] = names[i][0].toUpperCase()
//     if(names[i].includes("a")){
//       count += 1
//     }

//     console.log(names[i])

//     if(names[i] == "goga"){
//       console.log("Hello goga")
//     }
// }

// console.log(count)



// დავალება 5


// let scores = [45, 90, 67, 32, 100, 78, 55, 88, 40, 95];

// let sum = 0

// let avarage = 0

// let failedStudents = 0

// let thegreatestgrade = scores[0]
// let thesmallestgrade = scores[0]

// let moreThanAvarageScoreCount = 0

// let thebestscores = []


// for(let i = scores.length - 1; i > 0; i--){
//   sum += scores[i]
//   avarage += scores[i] / scores.length
//   if(scores[i] < 50){
//     failedStudents += 1
//   }

//   if(thegreatestgrade < scores[i]){
//     thegreatestgrade = scores[i]
//   }

//   if(thesmallestgrade > scores[i]){
//     thesmallestgrade = scores[i]
//   }

  // if(scores[i] >= 90){
  //   console.log("Excellent")
  // }else if(scores[i] >= 70 && scores[i] <= 89){
  //   console.log("Good")
  // }else if(scores[i] >= 50 && scores[i] <= 69){
  //   console.log("Passed")
  // }else{
  //   console.log("Failed")
  // }

//   if(scores[i] >= 80){
//     thebestscores.push(scores[i])
//   }

//   console.log(scores[i])


//   if(scores[i] > avarage){
//     moreThanAvarageScoreCount += 1
//   }
// }


// დავალება 6

// let names = ["goga", "NIKA", "ana", "Giorgi", "MARIAM", "dato"];

// let scores = [85, 42, 96, 67, 51, 73];

// let failedStudents = 0

// let thebestscores = 0

// let thebestone = scores[0]

// let avarage = 0

// for(let i = names.length - 1; i > 0; i--){
//   names[i] = names[i].trim()
//   names[i][0] = names[i][0].toUpperCase()
    
//   if(scores[i] >= 90 && scores[i] <= 100){
//     console.log("Excellent")
//   }else if(scores[i] >= 75 && scores[i] <= 89){
//     console.log("Very Good")
//   }else if(scores[i] >= 60 && scores[i] <= 74){
//     console.log("Good")
//   }else if(scores[i] >= 50 && scores[i] <= 59){
//     console.log("Passed")
//   }else{
//     console.log("Failed")
//     failedStudents += 1
//   }

//   if(scores[i] > 80){
//     thebestscores += scores[i]
//   }
    

//   if(thebestone < scores[i]){
//     thebestone = scores[i]
//   }

//   if(scores.indexOf(thebestone) == names.indexOf(names[i])){
//     console.log(names[i] + " " + scores[i])
//   }


//   avarage += scores[i] / scores.length


//   console.log(names[i] + " " + scores[i])
// }

// დავალება 7

// let products = ["Laptop", "Phone", "Mouse", "Keyboard", "Monitor", "Headphones"]

// let prices1 = [2500, 1800, 80, 150, 900, 300]

// let quantities = [3, 5, 20, 12, 4, 8]

// let newsalary = 0

// for(let i = products.length - 1; i > 0; i--){
//   let salary = prices1[i] * quantities[i]
    

//   if(salary >= 5000){
//     console.log("High sales")
//   }else if(salary >= 1000 && salary < 5000){
//     console.log("Medium sales")
//   }else{
//     console.log("Low sales")
//   }

//   newsalary += salary
    

//   if(quantities[i] > 10){
//     console.log(products[i])
//   }

//   console.log(products[i] + " " + salary)
// }

