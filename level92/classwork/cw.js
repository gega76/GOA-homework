// დავალება 1

let name = ""
let nameForGreeting = name || "guest"

console.log(`hello ${nameForGreeting} , how are you doing`)

// nameForGreeting ცვლადში შეინახა guest რადგან ვიყენებთ ||


// დავალება 2

let username = "xinkala"


username.length == 6 ? console.log("medium length"): username.length > 6 ? console.log("long length") : console.log("short name")


// დავალება 3


let city = "tbilisi"

switch (city){
    case "tbilisi":
        console.log("tbilisi")
        break
    case "batumi":
        console.log("batumi")
        break
    case "qutaisi":
        console.log("qutaisi")
        break
    default:
        console.log("zestafoni")
        break
}