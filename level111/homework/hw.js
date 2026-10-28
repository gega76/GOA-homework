/* 1)let student = {
    name: "Giorgi",
    math: 85,
    english: 92,
    physics: 74,
    chemistry: 88,
    history: 60
};

მოთხოვნები:
1. for...in-ის გამოყენებით დაბეჭდე ყველა გასაღები და შესაბამისი მნიშვნელობა.
2. დაითვალე, რამდენ საგანში მიიღო მოსწავლემ 80 ან მეტი ქულა.
3. იპოვე ყველა საგნის ქულების ჯამი.
4. იპოვე ყველაზე დაბალი ქულა და დაბეჭდე მისი შესაბამისი საგნის სახელი.
5. დაითვალე, რამდენ საგანში მიიღო მოსწავლემ 70-ზე ნაკლები ქულა.*/



// let student = {
//     name: "Giorgi",
//     math: 85,
//     english: 92,
//     physics: 74,
//     chemistry: 88,
//     history: 60
// };

// let count = 0
// let sum = 0
// let lowest = 100
// let lowerthan70 = 0
// for(let i in student){
//     console.log(i , student[i])
//     if(student[i] >= 80){
//         count += 1
//     }
//     if(typeof student[i] == "number"){
//         sum += student[i]
//     }
//     if(student[i] < 100){
//         lowest = i
//     }

//     if(student[i] < 70){
//         lowerthan70 += 1
//     }
// }

// console.log(count)
// console.log(sum)
// console.log(lowest)
// console.log(lowerthan70)


/*2)let products = {
    laptop: 2500,
    phone: 1800,
    headphones: 250,
    keyboard: 150,
    monitor: 900,
    mouse: 80
};

მოთხოვნები:
1. დაბეჭდე ყველა პროდუქტის სახელი და ფასი.
2. დაითვალე, რამდენი პროდუქტი ღირს 500 ლარზე მეტი.
3. იპოვე ყველა პროდუქტის საერთო ღირებულება.
4. იპოვე ყველაზე ძვირადღირებული პროდუქტი და მისი ფასი.
5. შექმენი ახალი ცარიელი ობიექტი expensiveProducts და for...in-ის გამოყენებით დაამატე მასში მხოლოდ ის პროდუქტები, რომელთა ფასიც 500 ლარზე მეტია.*/


// let products = {
//     laptop: 2500,
//     phone: 1800,
//     headphones: 250,
//     keyboard: 150,
//     monitor: 900,
//     mouse: 80
// };

// let count = 0
// let sum = 0
// let highest = 0
// let nameofhighest = ""
// for(let i in products){
//     console.log(i , products[i])
//     if(products[i] >= 500){
//         count += 1
//     }
//     sum += products[i]
//     if(products[i] > highest){
//         highest = products[i]
//         nameofhighest = i
//     }
// }

// let expensiveProducts = {

// }

// for(let i in products){
//     if(products[i] >= 500){
//         expensiveProducts[i] = products[i]
//     }
// }

// console.log(expensiveProducts)


/*3)let user = {
    username: "Goga123",
    age: 19,
    city: "Tbilisi",
    score: 450,
    active: true,
    gamesPlayed: 35
};

მოთხოვნები:
1. დაბეჭდე ყველა გასაღები და მნიშვნელობა.
2. დაითვალე, რამდენი მნიშვნელობაა ტიპით number.
3. დაითვალე, რამდენი გასაღების სახელი შეიცავს 5-ზე მეტ სიმბოლოს.
4. შექმენი ახალი ობიექტი numericInfo, რომელშიც მხოლოდ რიცხვითი მნიშვნელობები მოხვდება.
5. იპოვე ყველა რიცხვითი მნიშვნელობის ჯამი.*/

// let user = {
//     username: "Goga123",
//     age: 19,
//     city: "Tbilisi",
//     score: 450,
//     active: true,
//     gamesPlayed: 35
// };

// let numcounter = 0
// let lencounter = 0

// for(let i in user){
//     console.log(i , user[i])

//     if(typeof user[i] == "number"){
//         numcounter += 1
//     }

//     if(user[i].length > 5){
//         lencounter += 1
//     }
// }

// console.log(numcounter)
// console.log(lencounter)

// let numericInfo = {

// }

// let sum = 0
// for(let i in user){
//     if(typeof user[i] == "number"){
//         numericInfo[i] = user[i]
//     }

//     if(typeof user[i] == "number"){
//         sum += user[i]
//     }
// }

// console.log(sum)

/* 4)let exam = {
    Nika: 95,
    Ana: 68,
    Giorgi: 82,
    Mariam: 45,
    Luka: 73,
    Saba: 30,
    Elene: 88
};

მოთხოვნები:
1. for...in-ის გამოყენებით დაბეჭდე თითოეული მოსწავლის სახელი და ქულა.
2. თუ მოსწავლის ქულა 70 ან მეტია, დაბეჭდე "ჩააბარა", სხვა შემთხვევაში — "ვერ ჩააბარა".
3. დაითვალე ჩაბარებული და ვერჩაბარებული მოსწავლეების რაოდენობა.
4. იპოვე ყველაზე მაღალი ქულა და იმ მოსწავლის სახელი, რომელმაც ეს ქულა მიიღო.
5. გამოთვალე ყველა მოსწავლის ქულების საშუალო არითმეტიკული. */

// let exam = {
//     Nika: 95,
//     Ana: 68,
//     Giorgi: 82,
//     Mariam: 45,
//     Luka: 73,
//     Saba: 30,
//     Elene: 88
// };

// let passed = 0
// let didntpass = 0

// let highestpoint = 0
// let nameofstudent = ""
// let sum = 0
// for(let i in exam){
//     console.log(i , exam[i])

//     if(exam[i] >= 70){
//         console.log(i+":" + " ჩააბარა")
//         passed += 1
//     }else{
//         console.log(i+":" + " ვერ ჩააბარა")
//         didntpass += 1
//     }

    // if(exam[i] > highestpoint){
    //     highestpoint = exam[i]
    //     nameofstudent = i
    // }

//     sum += exam[i]
// }

// console.log("ყველაზე დიდი ქულა: " + nameofstudent + ":" + highestpoint)
// console.log("საშუალო არითმეტიკული: " + sum / (passed + didntpass))


/*5)let student = {
    math: 85,
    english: 92,
    physics: 67,
    chemistry: 78,
    history: 55,
    biology: 90
};

მოთხოვნები:
1. Object.keys()-ის გამოყენებით მიიღე ყველა საგნის სახელი და შეინახე ცალკე მასივში.
2. Object.values()-ის გამოყენებით მიიღე ყველა ქულა და შეინახე სხვა მასივში.
3. დაბეჭდე საგნების რაოდენობა.
4. დაითვალე, რამდენ საგანში მიიღო მოსწავლემ 80 ან მეტი ქულა.
5. გამოთვალე ყველა ქულის ჯამი.
6. იპოვე ყველაზე მაღალი ქულა და დაბეჭდე შესაბამისი საგნის სახელიც.*/


// let student = {
//     math: 85,
//     english: 92,
//     physics: 67,
//     chemistry: 78,
//     history: 55,
//     biology: 90
// };

// let keys1 = Object.keys(student) 
// let values1 = Object.values(student)
// console.log("საგნების რადენობა: " + keys1.length)
// let passedcount = 0
// let sum = 0
// let highestpoint = 0
// let nameofclass = " "
// for(let i in student){
//     if(student[i] >= 80){
//         passedcount += 1
//     }

//     sum += student[i]


//     if(student[i] > highestpoint){
//         highestpoint = student[i]
//         nameofclass = i
//     }
// }



/*6)let employees = {
    Nika: 2500,
    Ana: 3200,
    Luka: 1800,
    Mariam: 4000,
    Saba: 2200,
    Elene: 3500
};

მოთხოვნები:
1. მიიღე თანამშრომლების სახელების მასივი და ხელფასების მასივი.
2. დაბეჭდე თანამშრომლების საერთო რაოდენობა.
3. დაითვალე, რამდენი თანამშრომლის ხელფასია 3000 ლარზე მეტი.
4. გამოთვალე ხელფასების საშუალო არითმეტიკული.
5. იპოვე ყველაზე დაბალი ხელფასი.
6. იპოვე იმ თანამშრომლის სახელი, რომელსაც ყველაზე მაღალი ხელფასი აქვს.*/


// let employees = {
//     Nika: 2500,
//     Ana: 3200,
//     Luka: 1800,
//     Mariam: 4000,
//     Saba: 2200,
//     Elene: 3500
// };

// let keys1 = Object.keys(employees)
// let values1 = Object.values(employees)
// console.log("თანამშრომლების რაოდენობა: " + keys1.length)
// let count = 0
// let sum = 0
// let lowest = values1[0]
// let highest = 0
// let nameofhighest = " "
// for(let i in employees){
//     if(employees[i] > 3000){
//         count += 1
//     }

//     sum += employees[i]

//     if(lowest > employees[i]){
//         lowest = employees[i]
//     }

//     if(employees[i] > highest){
//         highest = employees[i]
//         nameofhighest = i
//     }
// }

// console.log("საშუალო არითმეტიკული: " + sum / keys1.length)
// console.log("ყველაზე დაბალი ხელფასი: " + lowest)
// console.log("ყველაზე მაღალი ხელფასის მქონე თანამშრომელი: " + nameofhighest)


/*7)let user = {
    username: "Shadow123",
    age: 21,
    city: "Tbilisi",
    score: 750,
    active: true,
    gamesPlayed: 45,
    premium: false
};

მოთხოვნები:
1. Object.keys()-ით მიიღე ყველა გასაღები.
2. Object.values()-ით მიიღე ყველა მნიშვნელობა.
3. დაითვალე, რამდენი გასაღების სახელი შეიცავს 5-ზე მეტ სიმბოლოს.
4. დაითვალე, რამდენი მნიშვნელობაა ტიპით number.
5. დაითვალე, რამდენი მნიშვნელობაა ტიპით boolean.
6. შექმენი ახალი ობიექტი numberInfo, რომელშიც მხოლოდ რიცხვითი მნიშვნელობები მოხვდება.*/

// let user = {
//     username: "Shadow123",
//     age: 21,
//     city: "Tbilisi",
//     score: 750,
//     active: true,
//     gamesPlayed: 45,
//     premium: false
// };

// let keys1 = Object.keys(user)
// let values1 = Object.values(user)
// let count = 0
// let numbercount = 0
// let boolcount = 0
// for(let i in user){
//     if(user[i].length > 5){
//         count += 1
//     }

//     if(typeof user[i] == "number"){
//         numbercount += 1
//     }

//     if(typeof user[i] == "boolean"){
//         boolcount += 1
//     }
// }
// console.log(count)
// console.log(numbercount)
// console.log(boolcount)

// let numberInfo = {

// }

// for(let i in user){
//     if(typeof user[i] == "number"){
//         numberInfo[i] = user[i]
//     }
// }

// console.log(numberInfo)


/*8)let company = {
    marketing: 12000,
    development: 35000,
    design: 9000,
    support: 7000,
    sales: 18000,
    research: 15000
};

მოთხოვნები:
1. მიიღე განყოფილებების სახელების მასივი და ბიუჯეტების მასივი.
2. გამოთვალე კომპანიის მთლიანი ბიუჯეტი.
3. დაითვალე, რამდენ განყოფილებას აქვს 15000 ლარი ან მეტი.
4. იპოვე ყველაზე დიდი ბიუჯეტის მქონე განყოფილება.
5. იპოვე ყველაზე პატარა ბიუჯეტის მქონე განყოფილება.*/


// let company = {
//     marketing: 12000,
//     development: 35000,
//     design: 9000,
//     support: 7000,
//     sales: 18000,
//     research: 15000
// };

// let keys1 = Object.keys(company)
// let values1 = Object.values(company)
// let sum = 0
// let higherthan15000 = 0
// let biggestcompany = 0
// let biggestcompanyname = ""
// let lowestcompany = values1[0]
// let lowestcompanyname = ""
// for(let i in company){
//     sum += company[i]

//     if(company[i] >= 15000){
//         higherthan15000 += 1
//     }

//     if(biggestcompany < company[i]){
//         biggestcompany = company[i]
//         biggestcompanyname = i
//     }

//     if(lowestcompany > company[i]){
//         lowestcompany = company[i]
//         lowestcompanyname = i
//     }
// }

// console.log("ყველაზე დიდი ბიუჯეტის მქონდე განყოფილება: " + biggestcompanyname + " " + biggestcompany)
// console.log("ყველაზე პატარა ბიუჯეტის მქონდე განყოფილება: " + lowestcompanyname + " " + lowestcompany)