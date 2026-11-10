/*1)შექმენით factory ფუნქცია რომელიც დააბრუნებს ობიექტს შემდეგი property ებით --> name , surname , age , adress , hobby

გადაეცით ამავე რაოდენობის პარამეტრი ფუქნციას რომ გადასცეთ ქიებს მნიშვნელობებად , ამ ობიექტს დაამატეთ ასევე მეთოდი სახელად displayUsersName() რომელიც დააბრუნებს მომხმარრებლის სახელს გვარს და მისამართს

შექმენი ასეთი 4 ობიექტი სხვადასხვა მნიშვენლობებით და 4 ივე მათგანზე გამოიძახეთ displayUsersName() მეთოდი , ასევე თითოეული ობიექტი შეინახეთ ცვლადებში და თვითონ ეს ცვლადებიც(ობიექტები) ც გამოიტანეთ კონსოლში*/


function biography(name , surname , age , adress , hobby){
    return{
        name : name,
        surname : surname,
        age : age,
        adress: adress,
        hobby: hobby,
        displayUsersName(){
            console.log(this.name, this.surname , this.adress)
        }
    }
}

let biography1 = biography("gega" , "gabunia" , 14 , "tbilisi" , "Programming")
console.log(biography1)
biography1.displayUsersName()
let biography2 = biography("rezi" , "rezesidze" , 16 , "Qutaisi" , "Basketball")
console.log(biography2)
biography2.displayUsersName()
let biography3 = biography("gio" , "lobzanidze" , 25 , "zestafoni" , "Football")
console.log(biography3)
biography3.displayUsersName()
let biography4 = biography("dachi" , "arkania" , 12 , "batumi" , "Baseball")
console.log(biography4)
biography4.displayUsersName()
let biography5 = biography("luka" , "farjanadze" , 16 , "gori" , "Tennis")
console.log(biography5)
biography5.displayUsersName()
