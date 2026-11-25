/*1)let fruits = ["Apple", "Banana", "Orange"];
let vegetables = ["Carrot", "Potato", "Tomato"];


1. Spread Operator-ის გამოყენებით გააერთიანე ორივე მასივი ახალ მასივში food.
2. დაამატე "Cucumber" მასივის დასაწყისში.
3. დაამატე "Mango" მასივის ბოლოში.
4. დაბეჭდე სამივე მასივი და შეამოწმე, შეიცვალა თუ არა საწყისი მასივები.
 */


// let fruits = ["Apple", "Banana", "Orange"];
// let vegetables = ["Carrot", "Potato", "Tomato"];

// let food = ["Cucumber" , ...fruits , ...vegetables , "Mango"]

// console.log(fruits)
// console.log(vegetables)
// console.log(food)


/*2)let numbers = [10, 20, 30, 40, 50];


1. Spread Operator-ის გამოყენებით შექმენი მისი ასლი copiedNumbers.
2. ასლში პირველი ელემენტი შეცვალე 100-ით.
3. ასლში ბოლო ელემენტი შეცვალე 500-ით.
4. საწყის მასივში დაამატე 60.
5. დაბეჭდე ორივე მასივი და დააკვირდი განსხვავებას. */


// let numbers = [10, 20, 30, 40, 50]

// let copiedNumbers = [...numbers]

// copiedNumbers[0] = 100
// copiedNumbers[copiedNumbers.length - 1] = 500

// numbers.unshift(60)

// console.log(numbers)
// console.log(copiedNumbers)


/*3)let groupA = ["Nika", "Gio"];
let groupB = ["Ana", "Mariam"];
let groupC = ["Luka", "Saba"];


1. შექმენი ახალი მასივი allStudents, რომელშიც სამივე ჯგუფის მოსწავლე იქნება.
2. ახალი მასივის დასაწყისში დაამატე "Goga".
3. ბოლოში დაამატე "Data" და "Tornike".
4. შექმენი კიდევ ერთი მასივი bestStudents, რომელშიც იქნება allStudents-ის პირველი სამი და ბოლო ორი ელემენტი. */


// let groupA = ["Nika", "Gio"];
// let groupB = ["Ana", "Mariam"];
// let groupC = ["Luka", "Saba"];

// let allStudents = ["Goga" , ...groupA , ...groupB , ...groupC , "Data" , "Tornike"]

// let bestStudents = [allStudents[0] , allStudents[1] , allStudents[2] , allStudents[allStudents.length - 2] , allStudents[allStudents.length - 1]]

// console.log(bestStudents)


/*4)let first = [5, 10, 15];
let second = [20, 25, 30];
let third = [35, 40, 45];


1. გააერთიანე სამივე მასივი allNumbers მასივში.
2. შექმენი ახალი მასივი newNumbers, სადაც ჯერ იქნება third, შემდეგ first, ბოლოს second.
3. ახალი მასივის დასაწყისში დაამატე 0.
4. ბოლოში დაამატე 50 და 55.
5. საწყისი მასივები უცვლელი უნდა დარჩეს.
 */


// let first = [5, 10, 15]
// let second = [20, 25, 30]
// let third = [35, 40, 45]

// let allNumbers = [...first, ...second, ...third]

// let newNumbers = [0, ...third, ...first, ...second, 50, 55]

// console.log(first)
// console.log(second)
// console.log(third)
// console.log(allNumbers)
// console.log(newNumbers)

/*5)let activeUsers = ["Nika", "Ana", "Gio"];
let inactiveUsers = ["Luka", "Mariam"];
let newUsers = ["Saba", "Elene"];


1. შექმენი ახალი მასივი allUsers, რომელშიც ყველა მომხმარებელი იქნება.
2. შექმენი onlineUsers მასივი, რომელშიც იქნება მხოლოდ activeUsers და newUsers.
3. შექმენი finalUsers მასივი, რომელშიც ჯერ იქნება allUsers-ის პირველი ორი მომხმარებელი, შემდეგ inactiveUsers, ბოლოს კი allUsers-ის ბოლო ორი მომხმარებელი.
4. ყველა ახალი მასივი Spread Operator-ის გამოყენებით შექმენი.
 */


// let activeUsers = ["Nika", "Ana", "Gio"]
// let inactiveUsers = ["Luka", "Mariam"]
// let newUsers = ["Saba", "Elene"]

// let allUsers = [...activeUsers, ...inactiveUsers, ...newUsers]

// let onlineUsers = [...activeUsers, ...newUsers]

// let finalUsers = [allUsers[0], allUsers[1], ...inactiveUsers, allUsers[allUsers.length - 2], allUsers[allUsers.length - 1]]

// console.log(allUsers)
// console.log(onlineUsers)
// console.log(finalUsers)


/*6)let student = {
    name: "Nika",
    age: 20,
    city: "Tbilisi"
};


1. Spread Operator-ის გამოყენებით შექმენი studentCopy.
2. ასლში სახელი შეცვალე "Giorgi"-თ.
3. ასაკი შეცვალე 22-ით.
4. დაამატე ახალი property grade: "A".
5. დაბეჭდე ორივე ობიექტი. */


// let student = {
//     name: "Nika",
//     age: 20,
//     city: "Tbilisi"
// };

// let studentCopy = {...student, name: "Giorgi",age: 22, grade: "A"}

// console.log(student)
// console.log(studentCopy)



/*7)let personalInfo = {
    name: "Ana",
    age: 19
};

let contactInfo = {
    email: "ana@gmail.com",
    phone: "555123456"
};


1. გააერთიანე ორივე ობიექტი ახალ ობიექტში user.
2. დაამატე city: "Batumi".
3. შეცვალე age 20-ით.
4. დაბეჭდე მიღებული ობიექტი. */


// let personalInfo = {
//     name: "Ana",
//     age: 19
// }

// let contactInfo = {
//     email: "ana@gmail.com",
//     phone: "555123456"
// }

// let user = {...personalInfo, ...contactInfo, city: "Batumi", age: 20 }

// console.log(user)



/*8)let product = {
    name: "Laptop",
    price: 2500,
    brand: "Lenovo",
    inStock: true
};

let updatedInfo = {
    price: 2200,
    inStock: false,
    discount: 300
};


1. Spread Operator-ის გამოყენებით შექმენი ახალი ობიექტი updatedProduct.
2. გააერთიანე ორივე ობიექტი ისე, რომ updatedInfo-ში არსებული მნიშვნელობები გადაიწეროს.
3. საწყისი ობიექტები არ შეცვალო.
4. დაბეჭდე მიღებული ობიექტი. */


// let product = {
//     name: "Laptop",
//     price: 2500,
//     brand: "Lenovo",
//     inStock: true
// }

// let updatedInfo = {
//     price: 2200,
//     inStock: false,
//     discount: 300
// }

// let updatedProduct = {...product, ...updatedInfo}

// console.log(updatedProduct)


/*9)let user = {
    name: "Gio",
    age: 21
};

let address = {
    city: "Tbilisi",
    street: "Rustaveli"
};

let account = {
    username: "gio21",
    isActive: true
};


1. სამივე ობიექტი გააერთიანე fullUser ობიექტში.
2. დაამატე role: "Admin".
3. შეცვალე city "Kutaisi"-თ.
4. შეცვალე isActive მნიშვნელობა false-ით.
5. დაბეჭდე საბოლოო ობიექტი.
 */


// let user = {
//     name: "Gio",
//     age: 21
// };

// let address = {
//     city: "Tbilisi",
//     street: "Rustaveli"
// };

// let account = {
//     username: "gio21",
//     isActive: true
// };


// let fullUser = {...user,...address,...account,role: "Admin",city : "Kutaisi",isActive:false,}

// console.log(fullUser)


/*10)let employee = {
    firstName: "Nika",
    lastName: "Beridze",
    age: 25,
    salary: 3000,
    department: "Marketing",
    position: "Junior"
};

let promotion = {
    salary: 4500,
    position: "Senior",
    department: "Development"
};

let additionalInfo = {
    experience: 5,
    isActive: true
};


შეასრულე შემდეგი მოქმედებები:
1. შექმენი ახალი ობიექტი updatedEmployee.
2. მასში გააერთიანე სამივე ობიექტი Spread Operator-ის გამოყენებით.
3. განახლებული თანამშრომლის ხელფასი უნდა იყოს 4500.
4. განყოფილება უნდა იყოს "Development".
5. პოზიცია უნდა იყოს "Senior".
6. დაამატე ახალი property country: "Georgia".
7. საწყისი ობიექტები არ უნდა შეიცვალოს. */


// let employee = {
//     firstName: "Nika",
//     lastName: "Beridze",
//     age: 25,
//     salary: 3000,
//     department: "Marketing",
//     position: "Junior"
// }

// let promotion = {
//     salary: 4500,
//     position: "Senior",
//     department: "Development"
// }

// let additionalInfo = {
//     experience: 5,
//     isActive: true
// }

// let updatedEmployee = {...employee, ...promotion, ...additionalInfo, salary: 4500, department:"Development", position:"Senior", country: "Georgia"}

// console.log(updatedEmployee)