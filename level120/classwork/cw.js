/*1)შექმენი ფუნქცია calculateScores(), რომელსაც ექნება შემდეგი პარამეტრები:
  studentName — მოსწავლის სახელი.
  subject — საგანი.
  ...scores — მოსწავლის ყველა მიღებული ქულა.

პირობები:
1. ფუნქციამ უნდა დაითვალოს ქულების ჯამი.
2. გამოთვალოს ქულების საშუალო არითმეტიკული.
3. თუ საშუალო ქულა 90 ან მეტია, დააბრუნოს "Excellent".
4. თუ საშუალო ქულა 70 ან მეტია, დააბრუნოს "Good".
5. სხვა შემთხვევაში დააბრუნოს "Needs Improvement".

გამოიყენეთ for of ლუპი და resttt ოპპერატორიი.

გამოიძახეთ ფუნქცია სამჯერ სხვადასხვა არგუმენტებით და ნახე კონსოლი */


// let sum = 0

// function calculateScores(studentName , subject , ...scores){
//     for(let i = 0;i < scores.length; i++){
//         sum += scores[i]
//     }

//     if(sum / scores.length >= 90){
//         return "Excellent"
//     }else if(sum / scores.length >= 70){
//         return "Good"
//     }else{
//         return "Needs Improvement"
//     }
// }

// console.log(calculateScores("Gega" , "Math" , 20 , 90 , 70 , 77 , 97))
// console.log(calculateScores("rezi" , "Biology" , 50 , 10 , 20 , 47 , 99))
// console.log(calculateScores("gio" , "georgraphy" , 10 , 51 , 43 , 82 , 87))


/*2)const students = ["Goga", "Nika", "Ana", "Luka", "Mariam", "Gio"];


პირობები:
1. დესტრუქტურიზაციის გამოყენებით პირველ ცვლადში შეინახე პირველი მოსწავლის სახელი.
2. მეორე ცვლადში შეინახე მეორე მოსწავლის სახელი.
3. დანარჩენი ყველა მოსწავლის სახელი შეინახე ...otherStudents ცვლადში.
4. დაბეჭდე სამივე შედეგი.
5. otherStudents სიაში დაამატე ახალი მოსწავლე "Saba" Spread Operator-ის გამოყენებით. */

const students = ["Goga", "Nika", "Ana", "Luka", "Mariam", "Gio"];

let [name , name2 , ...otherStudents] = students

console.log(name , name2 , otherStudents)

let updated = [...otherStudents , "Saba"]

/*3)const employee = {
    name: "Goga",
    age: 22,
    position: "Developer",
    salary: 3000,
    city: "Tbilisi",
    experience: 3
};


პირობები:
1. დესტრუქტურიზაციის გამოყენებით ცალკე ცვლადებში შეინახე name და position.
2. დანარჩენი ყველა property შეინახე ...otherInfo ცვლადში.
3. დაბეჭდე name და position.
4. დაბეჭდე otherInfo.
5. შექმენი ახალი ობიექტი updatedEmployee, რომელშიც Spread Operator-ის გამოყენებით გადაიტან otherInfo-ს ყველა property-ს და დაამატებ ახალ property-ს department: "IT". */



const employee = {
    name1: "Goga",
    age: 22,
    position: "Developer",
    salary: 3000,
    city: "Tbilisi",
    experience: 3
};

let {name1 , position , ...otherInfo} = employee

console.log(name1 , position)
console.log(otherInfo)

let updatedEmployee = {...otherInfo , department: "IT"}

console.log(updatedEmployee)