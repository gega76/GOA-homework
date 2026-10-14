/*1)const scores = [45, 82, 67, 100, 34, 91, 76, 58, 100, 23, 88, 64];


შეასრულე შემდეგი მოქმედებები:
1. filter() — შექმენი ახალი მასივი, რომელშიც იქნება მხოლოდ 60-ზე მეტი ან ტოლი ქულები.
2. map() — თითოეულ ქულას დაუმატე 5 ქულა.
3. filter() — ახალი მასივიდან დატოვე მხოლოდ ის ქულები, რომლებიც 80-ზე მეტია.
4. reduce() — გამოთვალე საბოლოო მასივში დარჩენილი ქულების ჯამი.
5. findIndex() — იპოვე თავდაპირველ მასივში პირველი 100-ქულიანი შედეგის ინდექსი.
6. some() — შეამოწმე, არის თუ არა თავდაპირველ მასივში 30-ზე ნაკლები ქულა.
7. every() — შეამოწმე, არის თუ არა ყველა ქულა 20-ზე მეტი.
8. forEach() — დაბეჭდე თითოეული საბოლოო ქულა ცალკე ხაზზე.*/


// const scores = [45, 82, 67, 100, 34, 91, 76, 58, 100, 23, 88, 64];

// let filtered = scores.filter(item => item >= 60)

// let mapped = filtered.map(item => item + 5)

// let filtered2 = filtered.filter(item => item > 80)

// let reduced = filtered2.reduce((acc , curr) => acc + curr)

// let perfectscore = scores.findIndex(item => item == 100)

// let lowsc = scores.some(item => item < 30)

// let highsc = scores.every(item => item > 20)


// filtered2.forEach(item => {
//     console.log(item)
// })



/*2)მოცემულია გაყიდული ნივთების ფასები:
const prices = [120, 450, 80, 700, 250, 1200, 90, 550, 300, 1500, 60];


1. filter() — დატოვე მხოლოდ 200-ზე მეტი ფასები.
2. map() — თითოეულ ფასს გამოაკელი 50.
3. map() — მიღებული ფასებიდან შექმენი ახალი მასივი, რომელშიც თითოეული ფასი გაორმაგებული იქნება.
4. reduce() — გამოთვალე გაორმაგებული ფასების ჯამი.
5. findIndex() — იპოვე თავდაპირველ მასივში პირველი 500-ზე მეტი ფასი.
6. some() — შეამოწმე, არის თუ არა რომელიმე ფასი 1000-ზე მეტი.
7. every() — შეამოწმე, არის თუ არა ყველა ფასი 50-ზე მეტი.
8. forEach() — დაბეჭდე საბოლოო ფასები.*/



// const prices = [120, 450, 80, 700, 250, 1200, 90, 550, 300, 1500, 60];


// let filtered = prices.filter(item => item > 200)

// let mapped = filtered.map(item => item - 50)

// let mapped2 = filtered.map(item => item * 2)

// let reduced = mapped2.reduce((acc , curr) => acc + curr)

// let perfectscore = prices.findIndex(item => item > 500)

// let lowsc = prices.some(item => item > 1000)

// let highsc = prices.every(item => item > 50)

// mapped2.forEach(item => {
//     console.log(item)
// })


/*3)const numbers = [12, 7, 24, 9, 36, 15, 42, 5, 18, 27, 30, 11];


1. filter() — დატოვე მხოლოდ ლუწი რიცხვები.
2. map() — თითოეული რიცხვი გაამრავლე 3-ზე.
3. filter() — მიღებული მასივიდან დატოვე მხოლოდ 50-ზე მეტი რიცხვები.
4. reduce() — იპოვე დარჩენილი რიცხვების ჯამი.
5. findIndex() — იპოვე თავდაპირველ მასივში პირველი რიცხვის ინდექსი, რომელიც 20-ზე მეტია.
6. some() — შეამოწმე, არის თუ არა თავდაპირველ მასივში 40-ზე მეტი რიცხვი.
7. every() — შეამოწმე, არის თუ არა ყველა რიცხვი დადებითი.
8. forEach() — დაბეჭდე საბოლოო მასივის თითოეული რიცხვი.*/


// const numbers = [12, 7, 24, 9, 36, 15, 42, 5, 18, 27, 30, 11 , 60 , 70];


// let filtered = numbers.filter(item => item % 2 === 0)

// let mapped = filtered.map(item => item * 3)

// let filtered2 = filtered.filter(item => item > 50)

// let reduced = filtered2.reduce((acc , curr) => acc + curr)

// let perfectscore = numbers.findIndex(item => item > 20)

// let lowsc = numbers.some(item => item > 40)

// let highsc = numbers.every(item => item > 0)

// filtered2.forEach(item => {
//     console.log(item)
// })



/*4)const words = [
  "javascript",
  "html",
  "programming",
  "css",
  "developer",
  "react",
  "computer",
  "code",
  "algorithm"
];


1. filter() — დატოვე მხოლოდ ის სიტყვები, რომელთა სიგრძეც 5 სიმბოლოზე მეტია.
2. map() — ყველა დარჩენილი სიტყვა გადაიყვანე დიდ ასოებში toUpperCase() მეთოდით.
3. filter() — მიღებული სიტყვებიდან დატოვე მხოლოდ ისინი, რომელთა სიგრძეც 8 სიმბოლოზე მეტია.
4. reduce() — გამოთვალე საბოლოო მასივში არსებული ყველა სიმბოლოს საერთო რაოდენობა. გამოიყენე word.length.
5. findIndex() — იპოვე თავდაპირველ მასივში პირველი სიტყვის ინდექსი, რომლის სიგრძეც 8-ზე მეტია.
6. some() — შეამოწმე, არსებობს თუ არა 10 სიმბოლოზე გრძელი სიტყვა.
7. every() — შეამოწმე, არის თუ არა ყველა სიტყვა მინიმუმ 3 სიმბოლოსგან შემდგარი.
8. forEach() — დაბეჭდე საბოლოო სიტყვები.*/

// const words = [
//   "javascript",
//   "html",
//   "programming",
//   "css",
//   "developer",
//   "react",
//   "computer",
//   "code",
//   "algorithm"
// ];

// let filtered = words.filter(item => item.length > 5)

// let mapped = filtered.map(item => item.toUpperCase())

// let filtered2 = mapped.filter(item => item.length > 8)

// let reduced = filtered2.reduce((acc , curr) => acc + curr)

// console.log(reduced.length)

// let lowsc = filtered2.some(item => item.length > 10)

// let highsc = filtered2.every(item => item.length >= 3)

// filtered2.forEach(item => {
//     console.log(item)
// })



/*5)const numbers = [14, 28, 35, 42, 19, 56, 63, 70, 25, 84, 91, 100, 32];


შექმენი პროგრამა, რომელიც:
1. filter()-ით დატოვებს მხოლოდ 20-ზე მეტ რიცხვებს.
2. map()-ით თითოეულ მათგანს დაუმატებს მის ინდექსს გაფილტრულ მასივში.
3. filter()-ით მიღებული შედეგებიდან დატოვებს მხოლოდ ლუწ რიცხვებს.
4. map()-ით თითოეულ დარჩენილ რიცხვს გაამრავლებს 2-ზე.
5. reduce()-ით გამოთვლის საბოლოო მასივის ჯამს.
6. reduce()-ით იპოვის საბოლოო მასივის უდიდეს რიცხვს.
7. findIndex()-ით იპოვის თავდაპირველ მასივში პირველი რიცხვის ინდექსს, რომელიც 60-ზე მეტია.
8. some()-ით შეამოწმებს, არის თუ არა საბოლოო მასივში 200-ზე მეტი რიცხვი.
9. every()-ით შეამოწმებს, არის თუ არა საბოლოო მასივის ყველა რიცხვი ლუწი.
10. forEach()-ით დაბეჭდავს საბოლოო მასივის თითოეულ ელემენტს.*/


// const numbers = [14, 28, 35, 42, 19, 56, 63, 70, 25, 84, 91, 100, 32];

// let filtered = numbers.filter(item => item > 20)

// let mapped = filtered.map((item , index) => item + index)

// let filtered2 = mapped.filter(item => item % 2 === 0)

// let mapped2 = filtered2.map(item => item * 2)

// let reduced = mapped2.reduce((acc , curr) => acc + curr)

// let reducedbiggest = mapped2.reduce((acc , curr) =>{
//     if(curr > acc){
//         return curr
//     }else{
//         return acc
//     }
// })


// let perfectscore = mapped2.findIndex(item => item > 60)

// let lowsc = mapped2.some(item => item > 200)

// let highsc = mapped2.every(item => item % 2 === 0)


// mapped2.forEach(item => {
//     console.log(item)
// })



/*6)const scores = [
  45, 88, 72, 96, 54, 100, 63, 81,
  39, 92, 77, 68, 85, 49, 98, 59
];


შექმენი პროგრამა შემდეგი მოთხოვნებით:
1. filter() — დატოვე 60 ან მეტი ქულა.
2. map() — თითოეულ ქულას დაუმატე 7.
3. filter() — დატოვე მხოლოდ 80 ან მეტი შედეგი.
4. map() — თითოეული შედეგიდან გამოაკელი მისი ინდექსი მიმდინარე მასივში.
5. filter() — დატოვე მხოლოდ კენტი რიცხვები.
6. reduce() — გამოთვალე საბოლოო შედეგების ჯამი.
7. reduce() — გამოთვალე საბოლოო შედეგების საშუალო არითმეტიკული.
8. findIndex() — იპოვე საწყის მასივში პირველი ქულა, რომელიც 90-ზე მეტია.
9. some() — შეამოწმე, არის თუ არა საბოლოო მასივში 90-ზე ნაკლები რიცხვი.
10. every() — შეამოწმე, არის თუ არა ყველა საბოლოო შედეგი 70-ზე მეტი.
11. forEach() — თითოეული საბოლოო ქულა დაბეჭდე და მიუწერე "ჩააბარა", თუ 80 ან მეტია, სხვა შემთხვევაში — "ვერ ჩააბარა".*/


// const scores = [
//   45, 88, 72, 96, 54, 100, 63, 81,
//   39, 92, 77, 68, 85, 49, 98, 59
// ];


// let filtered = scores.filter(item => item >= 60)

// let mapped = filtered.map(item => item + 7)

// let filtered2 = mapped.filter(item => item >= 80)

// let mapped2 = filtered.map((item , index) => item - index)

// let filtered3 = mapped2.filter(item => item % 2 === 1)

// let reduced = filtered3.reduce((acc , curr) => acc + curr)

// console.log("საშუალო არითმეტიკული: " + reduced / filtered3.length)

// let perfectscore = scores.findIndex(item => item > 90)

// let lowsc = scores.some(item => item < 90)

// let highsc = filtered3.every(item => item > 70)


// filtered3.forEach(item => {
//     if(item >= 80){
//         console.log("ჩააბარა -> ქულა: " + item)
//     }else{
//         console.log("ვერ ჩააბარა -> ქულა: " + item)
//     }
// })



/*7)Master Challenge

მოცემულია:
const numbers = [
  18, 45, 72, 91, 34, 120, 57, 86,
  103, 64, 39, 150, 77, 98, 25, 132
];


შეასრულე შემდეგი მოქმედებები:
1. filter() — დატოვე 30-ზე მეტი რიცხვები.
2. map() — თითოეულ რიცხვს დაუმატე მისი ინდექსი ამ ახალ მასივში.
3. filter() — დატოვე მხოლოდ ლუწი რიცხვები.
4. map() — ლუწ რიცხვებს დაუმატე 20, ხოლო კენტებს გამოაკელი 10. ამ ეტაპზე გამოიყენე ternary operator.
5. filter() — დატოვე 100-ზე მეტი შედეგები.
6. reduce() — გამოთვალე საბოლოო მასივის ჯამი.
7. reduce() — გამოთვალე საბოლოო მასივის საშუალო არითმეტიკული.
8. reduce() — იპოვე უდიდესი ელემენტი.
9. findIndex() — იპოვე საწყის მასივში პირველი 100-ზე ნაკლები ლუწი რიცხვის ინდექსი.
10. some() — შეამოწმე, არსებობს თუ არა საწყის მასივში 140-ზე მეტი რიცხვი.
11. every() — შეამოწმე, არის თუ არა საბოლოო მასივის ყველა ელემენტი 100-ზე მეტი და ლუწი.
12. forEach() — დაბეჭდე საბოლოო მასივის ყველა ელემენტი, ინდექსი და ის, არის თუ არა რიცხვი 200-ზე მეტი.
13. საბოლოოდ დაბეჭდე საწყისი მასივის ელემენტების რაოდენობა, საბოლოო მასივის ელემენტების რაოდენობა, მათი ჯამი და საშუალო არითმეტიკული.
 #მთავარი წესი: თითოეულ ეტაპზე ახალი მასივი შეინახეთ ცალკე ცვლადში, რათა გაარჩიოთ საწყისი მონაცემები, შუალედური შედეგები და საბოლოო შედეგი. findIndex(), some() და every() გამოიყენეთ შესაბამისი მასივის შესამოწმებლად, ხოლო reduce() — ჯამის, ნამრავლის, საშუალოს ან უდიდესი მნიშვნელობის მისაღებად.*/



// const numbers = [
//   18, 45, 72, 91, 34, 120, 57, 86,
//   103, 64, 39, 150, 77, 98, 25, 132
// ];


// let filtered = numbers.filter(item => item > 30)

// let mapped = filtered.map((item , index) => item + index)

// let filtered2 = mapped.filter(item => item % 2 === 0)

// let mapped2 = filtered2.map(item => item % 2 == 0 ? item + 20 : item - 10)

// let filtered3 = mapped2.filter(item => item > 100)

// let reduced = filtered3.reduce((acc , curr) => acc + curr)

// console.log("საშუალო არითმეტიკული: " + reduced / filtered3.length)

// let reducedbiggest = filtered3.reduce((acc , curr) =>{
//     if(curr > acc){
//         return curr
//     }else{
//         return acc
//     }
// })

// let perfectscore = numbers.findIndex(item => item < 100 && item % 2 === 0)

// let lowsc = numbers.some(item => item > 140)

// let highsc = filtered3.every(item => item > 100 && item % 2 === 0)


// filtered3.forEach((item,index) => {
//     if(item > 200){
//         console.log("რიცხვი - " + item)
//         console.log("ინდექსი - " + index)
//         console.log("ეს რიცხვი მეტია 200")
//     }else{
//         console.log("რიცხვი - " + item)
//         console.log("ინდექსი - " + index)
//     }
// })

// console.log("საწყისი მასივის ელემენტების რაოდენობა: " + numbers.length)
// console.log("საბოლოო მასივის ელემენტების რაოდენობა: " + filtered3.length)
// console.log("მათი ჯამი: " + numbers.length + filtered3.length)
// console.log("საშუალო არითმეტიკული: " + reduced / filtered3.length)