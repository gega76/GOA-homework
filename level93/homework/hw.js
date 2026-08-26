// დავალება 1


function calculatePrice(price, quantity = 1){
    return price * quantity
}

console.log(calculatePrice(9))
console.log(calculatePrice(9 , 8))
console.log(calculatePrice(20 , 25))


// დავალება 2

function getResult(name, score = 0){
    if(score >= 90){
        return  name + ": Excellent"
    }else if(score >= 70 && score <= 89){
        return  name + ": Good"
    }else if(score >= 50 && score <= 69){
        return  name + ": Passed"
    }else if(score < 50){
        return  name + ": Failed"
    }
}

console.log(getResult("gega" , 75))
console.log(getResult("rezi" , 1))
console.log(getResult("dachi" , 99))

// დავალება 3

function calculateShipping(price, shipping = 10){
    if(price > 100){
        return "მიწოდება უფასოა"
    }else{
        price += shipping
    }

    return price
}

console.log(calculateShipping(30))
console.log(calculateShipping(120 , 30))
console.log(calculateShipping(50 , 10))


// დავალება 4


function checkAge(name, age = 18){
    if(age >= 18){
        return name + " is adult"
    }else if(age <= 18){
        return name + " is minor"
    }
}

console.log(checkAge("gega" , 14))
console.log(checkAge("gio" , 20))
console.log(checkAge("rezi" , 15))
console.log(checkAge("dachi" , 1))

// დავალება 5


function addPoints(score, points = 10){
    points += score
    return points
}

console.log(addPoints(5))


// დავალება 6

function createMessage(name, message = "Hello"){
    if(message == "Hello"){
        return "Hello, " + name + "!"
    }else{
        return "Welcome, " + name + "!"
    }
}

console.log(createMessage("goga"))
console.log(createMessage("goga" , "Welcome"))


// დავალება 7

function calculateDiscount(price, discount = 10){
    price -= discount
    return price
}

console.log(calculateDiscount(30))


// დავალება 8


function convertTemperature(value, type = "C"){
    if(type == "C"){
        return value * 9 / 5 + 32
    }else if(type == "F"){
        return (value - 32) * 5 / 9
    }
}

console.log(convertTemperature(20))
console.log(convertTemperature(20 , "F"))


// დავალება 9

function calculateSalary(salary, bonus = 0){
    if(salary < 1000){
        salary += bonus * 2
    }else{
        salary += bonus
    }

    return salary
}

console.log(calculateSalary(750 , 125))
console.log(calculateSalary(1500))


// დავალება 10

function checkExam(name, score = 0){
    switch(true){
        case score >= 90 && score <= 100:
            return  name + ": Excellent"
            break
        case score >= 75 && score <= 89:
            return  name + ": Very Good"
            break
        case score >= 60 && score <= 74:
            return  name + ": Good"
            break
        case score >= 50 && score <= 59:
            return  name + ": Passed"
            break
        case score >= 0 && score <= 49:
            return  name + ": Failed"
            break
    }
}

console.log(getResult("gega" , 75))
console.log(getResult("rezi" , 1))
console.log(getResult("dachi" , 99))


// დავალება 11


function ticketPrice(age, price = 50){
    if(5 > age){
        return 0
    }else if(age >= 5 && age <= 12){
        return price / 2
    }else if(age >= 13 && age <= 59){
        return price
    }else if(age >= 60){
        return price * 0.3
    }
}

console.log(ticketPrice(10))

// დავალება 12


// ვერ მივხვდი Ternary როგორ გამეკეთებინა ფუნქციაში