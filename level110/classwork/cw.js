// დავალება 1

// let product = {
//     productName : "lobiani",
//     price : 2.5,
//     quantity : 10,
//     instock : false,
//     allProdPrice(){
//         return product.quantity * product.price
//     },

//     isStock(){
//         return product.instock == true ? "yes we have this nproduct" : "no we dont have this product"
//     }
// }

// console.log(product.allProdPrice())
// console.log(product.isStock())


/*2) let university = {
    name: "Tbilisi University",
    address: {
        city: "Tbilisi",
        building: {
            number: 10,
            floors: 6
        }
    },
    department: {
        name: "Computer Science",
        students: ["Nika", "Ana", "Gio", "Mariam"],
        teacher: {
            name: "Luka",
            subjects: ["JavaScript", "Python", "React"]
        }
    },
    library: {
        books: {
            programming: ["JavaScript Basics", "Learn Python"],
            databases: ["SQL Guide", "MongoDB Basics"]
        }
    }
};



--- გამოიტანე კონსოლში რიცხვი 10
--- შეცვალე Tbilisi --> Qutaisi ით
--- წაშალე floor : 6 ფროფერთი მთლიანად
--- გამოიტანე Python 
--- subject სიის ბოლოში დაამატე c++
--- "luka" შეცვალე შენი სახელით
--- წაშალე programming : ["JavaScript Basics", "Learn Python"] books ობიექტიდან
--- გამოიტანე databases სიიდან ისეთი ელემენტები რომლის სიგრძე მეტია 10 ზე(გამოიყენე for)*/


let university = {
    name: "Tbilisi University",
    address: {
        city: "Tbilisi",
        building: {
            number: 10,
            floors: 6
        }
    },
    department: {
        name: "Computer Science",
        students: ["Nika", "Ana", "Gio", "Mariam"],
        teacher: {
            name: "Luka",
            subjects: ["JavaScript", "Python", "React"]
        }
    },
    library: {
        books: {
            programming: ["JavaScript Basics", "Learn Python"],
            databases: ["SQL Guide", "MongoDB Basics"]
        }
    }
};

console.log(university.address.building.number)
university.address.city = "Qutaisi"
delete university.address.building.floors
console.log(university.department.teacher.subjects[1])
university.department.teacher.subjects.push("c++")
university.department.teacher.name = "gega"
delete university.library.books.programming

let databases = university.library.books.databases.length
for(i = 0;i < databases.length; i++){
    if(databases[i].length > 10){
        console.log(databases[i])
    }
}