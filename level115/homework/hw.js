/* 1)შექმენი Factory Function createCharacter, რომელსაც გადაეცემა სამი პარამეტრი:
- name — პერსონაჟის სახელი
- health — სიცოცხლის რაოდენობა
- damage — დარტყმის ძალა
Factory Function-მა უნდა დააბრუნოს ობიექტი შემდეგი თვისებებითა და მეთოდებით:
1. name
2. health
3. damage
4. attack(target) — უნდა შეამციროს მოწინააღმდეგის სიცოცხლე საკუთარი damage-ის მიხედვით.
   - თუ მოწინააღმდეგის სიცოცხლე 0 ან ნაკლებია, გამოიტანოს შეტყობინება "Target is already defeated!".
   - თუ მოწინააღმდეგის სიცოცხლე დადებითია, შეუმციროს სიცოცხლე.
5. heal(amount) — უნდა აღადგინოს პერსონაჟის სიცოცხლე.
   - სიცოცხლე არ უნდა გახდეს 100-ზე მეტი.
6. getStatus() — დააბრუნოს პერსონაჟის ინფორმაცია სახელითა და სიცოცხლით.
შექმენი 3 პერსონაჟი და მოახდინე მათ შორის რამდენიმე შეტევა. */

// function createCharacter(name , health , damage){
//     return {
//         name,
//         health,
//         damage,
//         attack(target){
//             if(this.health <= 0){
//                 return "Target is already defeated!"
//             }else{
//                 target -= this.damage
//                 return target.health
//             }
//         },

//         heal(amount){
//             if(this.health + amount <= 100){
//                 this.health += amount
//             }
//         },

//         getStatus(){
//             return "Name: " + this.name + " Health: " + this.health
//         }
//     }
// }

// let p1 = createCharacter("gega" , 80 , 20)

// let p2 = createCharacter("gio" , 90 , 30)

// let p3 = createCharacter("dachi" , 0 , 0)

// console.log(p1.attack(p2))
// console.log(p2.attack(p3))
// console.log(p3.attack(p1))
/*2)შექმენი Factory Function createBankAccount, რომელსაც გადაეცემა:
- owner — ანგარიშის მფლობელი
- balance — საწყისი თანხა
- pin — ანგარიშის PIN კოდი
დაბრუნებულ ობიექტს უნდა ჰქონდეს:
1. owner
2. deposit(amount) — თანხის დამატება.
   - თანხა უნდა იყოს დადებითი.
3. withdraw(amount, enteredPin) — თანხის გამოტანა.
   - ჯერ უნდა შემოწმდეს PIN კოდი.
   - თუ PIN არასწორია, გამოიტანოს "Incorrect PIN!".
   - თუ თანხა ბალანსზე მეტია, გამოიტანოს "Not enough money!".
   - სხვა შემთხვევაში შეამციროს ბალანსი.
4. getBalance() — დააბრუნოს მიმდინარე ბალანსი.
5. changePin(oldPin, newPin) — PIN-ის შეცვლა.
   - ძველი PIN უნდა ემთხვეოდეს არსებულს.
   - ახალი PIN უნდა შედგებოდეს ზუსტად 4 სიმბოლოსგან.
შექმენი ორი საბანკო ანგარიში და შეამოწმე ყველა მეთოდი.*/


// function createBankAccount(owner , balance , pin){
//     return { 
//         owner,
//         balance,
//         pin,
//         deposit(amount){
//             if(amount > 0){
//                 balance += amount
//             }
//         },


//     }
// }