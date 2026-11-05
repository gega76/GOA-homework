/*1)
let students = [
    { name: "Nika", age: 17, score: 85, active: true },
    { name: "Ana", age: 19, score: 45, active: false },
    { name: "Giorgi", age: 21, score: 92, active: true },
    { name: "Mariam", age: 18, score: 67, active: true },
    { name: "Luka", age: 16, score: 38, active: false },
    { name: "Saba", age: 20, score: 74, active: true }
];


მოთხოვნები:
1. filter()-ის გამოყენებით შექმენი ახალი სია, სადაც მხოლოდ აქტიური სტუდენტები იქნებიან.
2. forEach()-ით გამოიტანე ყველა სტუდენტის სახელი და ქულა.
3. map()-ით შექმენი ახალი სია, სადაც თითოეული ელემენტი იქნება სტუდენტის სახელი და მისი სტატუსი (Passed ან Failed). ჩათვალე, რომ ჩაბარების ზღვარია 50 ქულა.
4. findIndex()-ით იპოვე სტუდენტის ინდექსი, რომლის სახელია "Mariam".
5. some()-ით შეამოწმე, არსებობს თუ არა სტუდენტი, რომელსაც 90-ზე მეტი ქულა აქვს.
6. every()-ით შეამოწმე, ყველა სტუდენტი არის თუ არა 16 წლის ან უფროსი.*/

// let students = [
//     { name: "Nika", age: 17, score: 85, active: true },
//     { name: "Ana", age: 19, score: 45, active: false },
//     { name: "Giorgi", age: 21, score: 92, active: true },
//     { name: "Mariam", age: 18, score: 67, active: true },
//     { name: "Luka", age: 16, score: 38, active: false },
//     { name: "Saba", age: 20, score: 74, active: true }
// ];

// let filtered = students.filter(item => item.active == true)
// students.forEach(item =>{
//     console.log(item.name , item.age)
// })

// let mapped = students.map(item =>{
//     if(item.score >= 50){
//         return item.name + "Passed"
//     }else{
//         return item.name + "Failed"
//     }
// })

// let findIndexs = students.findIndex(item => item.name == "Mariam")

// let somed = students.some(item => item.score > 90)
// let everyed = students.every(item => item.age >= 16)


/*2)let products = [
    { name: "Laptop", price: 2500, stock: 5, category: "Electronics" },
    { name: "Phone", price: 1800, stock: 0, category: "Electronics" },
    { name: "Book", price: 40, stock: 12, category: "Education" },
    { name: "Headphones", price: 250, stock: 8, category: "Electronics" },
    { name: "Notebook", price: 15, stock: 0, category: "Education" },
    { name: "Monitor", price: 900, stock: 3, category: "Electronics" }
];


მოთხოვნები:
1. filter()-ით მიიღე მხოლოდ ის პროდუქტები, რომლებიც მარაგშია.
2. forEach()-ით გამოიტანე თითოეული პროდუქტის სახელი და ფასი.
3. map()-ით შექმენი ახალი სია, სადაც ყველა პროდუქტის ფასი გაზრდილი იქნება 100 ლარით.
4. findIndex()-ით იპოვე "Headphones"-ის ინდექსი.
5. some()-ით შეამოწმე, არის თუ არა პროდუქტი, რომლის ფასიც 2000 ლარზე მეტია.
6. every()-ით შეამოწმე, ყველა პროდუქტს აქვს თუ არა მარაგში მინიმუმ ერთი ცალი.*/


// let products = [
//     { name: "Laptop", price: 2500, stock: 5, category: "Electronics" },
//     { name: "Phone", price: 1800, stock: 0, category: "Electronics" },
//     { name: "Book", price: 40, stock: 12, category: "Education" },
//     { name: "Headphones", price: 250, stock: 8, category: "Electronics" },
//     { name: "Notebook", price: 15, stock: 0, category: "Education" },
//     { name: "Monitor", price: 900, stock: 3, category: "Electronics" }
// ];


// let filtered = products.filter(item => item.stock > 0)

// products.forEach(item =>{
//     console.log(item.name , item.price)
// })

// let mapped = products.map(item => item.price + 100)

// let findIndexs = products.findIndex(item => item.name == "Headphones")

// let sommed = products.some(item => item.price > 2000)

// let every = products.every(item => item.stock >= 1)


/*3)let characters = [
    { name: "Shadow", health: 85, level: 10, alive: true },
    { name: "Dragon", health: 0, level: 15, alive: false },
    { name: "Knight", health: 60, level: 7, alive: true },
    { name: "Wizard", health: 100, level: 20, alive: true },
    { name: "Hunter", health: 25, level: 5, alive: true },
    { name: "Ghost", health: 0, level: 12, alive: false }
];


მოთხოვნები:
1. filter()-ით შექმენი ახალი სია, სადაც მხოლოდ ცოცხალი პერსონაჟები იქნებიან.
2. forEach()-ით გამოიტანე თითოეული პერსონაჟის სახელი და Health.
3. map()-ით შექმენი ახალი სია, სადაც თითოეულ პერსონაჟს ექნება სახელი და ახალი Health, რომელიც იქნება არსებული Health + 20.
4. findIndex()-ით იპოვე "Wizard" პერსონაჟის ინდექსი.
5. some()-ით შეამოწმე, არსებობს თუ არა პერსონაჟი, რომლის Level 18-ზე მეტია.
6. every()-ით შეამოწმე, ყველა პერსონაჟი ცოცხალია თუ არა.*/


// let characters = [
//     { name: "Shadow", health: 85, level: 10, alive: true },
//     { name: "Dragon", health: 0, level: 15, alive: false },
//     { name: "Knight", health: 60, level: 7, alive: true },
//     { name: "Wizard", health: 100, level: 20, alive: true },
//     { name: "Hunter", health: 25, level: 5, alive: true },
//     { name: "Ghost", health: 0, level: 12, alive: false }
// ];

// let filtered = characters.filter(item => item.alive == true)

// characters.forEach(item =>{
//     console.log(item.name , item.health)
// })

// let mapped = characters.map(item => item.health + 20 + " Name: " + item.name)
// console.log(mapped)

// let findIndexs = characters.findIndex(item => item.name == "Wizard")

// let somed = characters.some(item => item.level > 18)

// let everyed = characters.every(item => item.alive == true)


/*4)let employees = [
    { name: "Gio", salary: 2500, experience: 3, department: "IT" },
    { name: "Nino", salary: 1800, experience: 1, department: "HR" },
    { name: "Luka", salary: 3200, experience: 5, department: "IT" },
    { name: "Ana", salary: 2100, experience: 2, department: "Marketing" },
    { name: "Saba", salary: 4000, experience: 7, department: "IT" },
    { name: "Mariam", salary: 1500, experience: 1, department: "HR" }
];


მოთხოვნები:
1. filter()-ით მიიღე მხოლოდ IT დეპარტამენტის თანამშრომლები.
2. forEach()-ით გამოიტანე თითოეული თანამშრომლის სახელი და ხელფასი.
3. map()-ით შექმენი ახალი სია, სადაც თითოეულ თანამშრომელს ექნება სახელი და გამოცდილების მიხედვით დამატებული ბონუსი:
   - თუ გამოცდილება 5 ან მეტია, ბონუსი არის 500.
   - სხვა შემთხვევაში ბონუსი არის 200.
4. findIndex()-ით იპოვე თანამშრომელი, რომლის ხელფასი 4000-ია.
5. some()-ით შეამოწმე, არსებობს თუ არა თანამშრომელი, რომელსაც 6 წელზე მეტი გამოცდილება აქვს.
6. every()-ით შეამოწმე, ყველა თანამშრომლის ხელფასი 1000-ზე მეტია თუ არა.*/


// let employees = [
//     { name: "Gio", salary: 2500, experience: 3, department: "IT" },
//     { name: "Nino", salary: 1800, experience: 1, department: "HR" },
//     { name: "Luka", salary: 3200, experience: 5, department: "IT" },
//     { name: "Ana", salary: 2100, experience: 2, department: "Marketing" },
//     { name: "Saba", salary: 4000, experience: 7, department: "IT" },
//     { name: "Mariam", salary: 1500, experience: 1, department: "HR" }
// ];

// let filtered = employees.filter(item => item.department == "IT")

// employees.forEach(item =>{
//     console.log(item.name , item.salary)
// })

// let mapped = employees.map(item =>{
//     if(item.experience >= 5){
//         return item.name + " " + (item.salary + 500)
//     }else{
//         return item.name + " " + item.salary 
//     }
// })

// let findIndexs = employees.findIndex(item => item.salary == 4000)

// let somed = employees.some(item => item.experience > 6)

// let everyed = employees.every(item => item.salary > 1000)



/*5)let orders = [
    { id: 101, customer: "Nika", total: 350, delivered: true },
    { id: 102, customer: "Ana", total: 120, delivered: false },
    { id: 103, customer: "Gio", total: 750, delivered: true },
    { id: 104, customer: "Mariam", total: 90, delivered: false },
    { id: 105, customer: "Luka", total: 500, delivered: true },
    { id: 106, customer: "Saba", total: 220, delivered: false }
];


მოთხოვნები:
1. filter()-ით შექმენი სია, რომელშიც მხოლოდ მიტანილი შეკვეთები იქნება.
2. forEach()-ით გამოიტანე ყველა შეკვეთის ID და მომხმარებლის სახელი.
3. map()-ით შექმენი ახალი სია, სადაც თითოეული შეკვეთის თანხა გაზრდილი იქნება 50 ლარით.
4. findIndex()-ით იპოვე შეკვეთა, რომლის ID არის 104.
5. some()-ით შეამოწმე, არსებობს თუ არა შეკვეთა, რომლის ღირებულება 700 ლარზე მეტია.
6. every()-ით შეამოწმე, ყველა შეკვეთის ღირებულება 100 ლარზე მეტია თუ არა.*/


// let orders = [
//     { id: 101, customer: "Nika", total: 350, delivered: true },
//     { id: 102, customer: "Ana", total: 120, delivered: false },
//     { id: 103, customer: "Gio", total: 750, delivered: true },
//     { id: 104, customer: "Mariam", total: 90, delivered: false },
//     { id: 105, customer: "Luka", total: 500, delivered: true },
//     { id: 106, customer: "Saba", total: 220, delivered: false }
// ];


// let filtered = orders.filter(item => item.delivered == true)

// orders.forEach(item =>{
//     console.log(item.id , item.customer)
// })

// let mapped = orders.map(item => item.total + 50)

// let findIndexs = orders.findIndex(item => item.id == 104)

// let somed = orders.some(item => item.total > 700)

// let everyed = orders.every(item => item.total > 100)


/*6)let movies = [
    { title: "Avatar", rating: 8.5, year: 2009, watched: true },
    { title: "Titanic", rating: 7.9, year: 1997, watched: true },
    { title: "Joker", rating: 8.4, year: 2019, watched: false },
    { title: "Inception", rating: 9.0, year: 2010, watched: true },
    { title: "Venom", rating: 6.5, year: 2021, watched: false },
    { title: "Interstellar", rating: 9.2, year: 2014, watched: false }
];


მოთხოვნები:
1. filter()-ით მიიღე მხოლოდ ის ფილმები, რომელთა რეიტინგი 8-ზე მეტია.
2. forEach()-ით გამოიტანე ყველა ფილმის სათაური და გამოშვების წელი.
3. map()-ით შექმენი ახალი სია, სადაც თითოეული ფილმი წარმოდგენილი იქნება შემდეგი ფორმით: "Avatar - 8.5".
4. findIndex()-ით იპოვე "Interstellar"-ის ინდექსი.
5. some()-ით შეამოწმე, არის თუ არა ისეთი ფილმი, რომელიც ჯერ არ უნახავთ.
6. every()-ით შეამოწმე, ყველა ფილმის რეიტინგი 6-ზე მეტია თუ არა.*/


// let movies = [
//     { title: "Avatar", rating: 8.5, year: 2009, watched: true },
//     { title: "Titanic", rating: 7.9, year: 1997, watched: true },
//     { title: "Joker", rating: 8.4, year: 2019, watched: false },
//     { title: "Inception", rating: 9.0, year: 2010, watched: true },
//     { title: "Venom", rating: 6.5, year: 2021, watched: false },
//     { title: "Interstellar", rating: 9.2, year: 2014, watched: false }
// ];

// let filtered = movies.filter(item => item.rating > 8)

// movies.forEach(item =>{
//     console.log(item.title , item.year)
// })

// let mapped = movies.map(item => `${item.title} - ${item.rating}`)

// let findIndexs = movies.findIndex(item => item.title == "Interstellar")

// let somed = movies.some(item => item.watched == false)

// let everyed = movies.every(item => item.rating > 6)