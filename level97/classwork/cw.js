// დავალება 1

let names = ["gega" , "rezi" , "dachi"]

names.pop()
names.push("gigi" , true)
names.shift()
names.unshift("avtomobili")


// დავალება 2



let names2 = ["gega" , "rezi" , "dachi", "Saba", "gio"]
let nums = [10 , 20, 50 , 100 , 200]

let newar = names2.concat(nums)
newar.push(true)
newar.shift()

let newar2 = newar.slice(3 , 6)
console.log(newar2)


console.log(Array.isArray(newar2))