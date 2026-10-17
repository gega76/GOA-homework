// ForEach

// 1)

// const names = ["ნიკა", "ანანო", "გიორგი", "საბა"]

// names.forEach(name => {
//   if(name.length % 2 == 0){
//     console.log(name + " - ლუწ-ასოიანი")
//   }else{
//     console.log(name + " - კენტ-ასოიანი")
//   }
// })

// 2) 


// const numbers = [12, 45, 8, 23, 50, 3]
// let oddsum = 0
// let evensum = 0

// numbers.forEach(num => {
//   if(num % 2 === 0){
//     evensum = evensum + num
//   }else{
//     oddsum = oddsum + num
//   }
// })

// console.log("ლუწების ჯამი:", evensum)
// console.log("კენტების ჯამი:", oddsum)


// map

// 1)

// const names2 = ["nika", "alexsandre", "ana", "giorgi"]

// const transformedNames = names2.map(name => {
//   let isshort = name.length <= 4
//   if(isshort){
//     return name.toUpperCase() + " - მოკლე"
//   }else{
//     return name.toUpperCase() + " - გრძელი"
//   }
// })

// console.log(transformedNames)


// 2)

// let prices = [100, 250, 80, 500]

// let finalprices = prices.map(price => {
//   let tax = price * 0.1
//   let discount = price > 200 ? price * 0.05 : 0
//   return price + tax - discount
// })

// console.log(finalprices)


// filter

// 1)

// let names3 = ["ნიკა", "ანანო", "გიორგი", "ალექსანდრე", "ანა"]

// let filterednames = names3.filter(name => {
//   let startswitha = name.startsWith("ა")
//   let islongenough = name.length >= 4
//   return startswitha && islongenough
// })

// console.log(filterednames)

// 2)


// let scores = [45, 88, 92, 30, 67, 51, 100]

// let topscores = scores.filter(score => {
//   let ispassed = score >= 51
//   let iseven = score % 2 == 0
//   return ispassed && iseven
// })

// console.log(topscores)


// reduce

// 1)

// let words = ["JavaScript", "HTML", "CSS", "React", "Node"]

// let longestword = words.reduce((acc, curr) => {
//   if(curr.length > acc.length){
//     return curr
//   }else{
//     return acc
//   }
// }, "")

// console.log(longestword)


// findindex

// 1)

// let names4 = ["ნიკა", "საბა", "ალექსანდრე", "გიორგი"]

// let index = names4.findIndex(name => {
//   return name.length > 5 && name.includes("ო")
// })

// console.log(index)


// 2)

// let numbers2 = [15, 27, 40, 55, 62, 80]

// let targetindex = numbers2.findIndex(num => {
//   return num > 30 && num % 5 == 0 && num % 2 != 0
// })

// console.log(targetindex)


// every

// 1)

// let words2 = ["ვაშლი", "მსხალი", "ატამი", "ალუბალი"]

// let isvalidlist = words2.every(word => {
//   return word.length >= 5
// })

// console.log(isvalidlist)

// 2)

// let ages = [18, 22, 30, 45, 19, 60]

// let isalladults = ages.every(age => {
//   return age >= 18 && age <= 100
// })

// console.log(isalladults)


// some

// 1)

// let names5 = ["გიორგი", "დავითი", "ალექსანდრე", "ლუკა"]

// let name0 = names5.some(name => {
//   return name.length > 10 && name.endsWith("ე")
// })

// console.log(name0)

// 2)

// let numbers1 = [12, 18, 25, 44, 60]

// let number0 = numbers1.some(num => {
//   return num > 59
// })

// console.log(number0)