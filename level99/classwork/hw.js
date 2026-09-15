// დავალება 1

let names = ["gega","rezi","dachi","giooo","valeri"]

for(let i = 0; i < names.length ; i++){
    if(names[i].length > 5 && names[i].startsWith("g")){
        console.log(names[i])
    }
}

// დავალება 2

let age = [10,20,220,15]

for(let i = 0; i < age.length ; i++){
    if(age[i] % 2 == 0 || age[i] > 100){
        console.log(age[i])
    }
}

// დავალება 3

let name = ["gega","rezi","dachi","giooo","valeri"]

for(let i = 0; i < name.length ; i++){
    console.log(i + " " + name[i])
}
