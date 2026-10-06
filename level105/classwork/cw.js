// დავალება 1


let names = ["gega","rezi","alexsandre","gio","daviti"]


names.forEach(item => {
    if(item.length > 4){
        console.log(item)
    }
})

// დავალება 2


let nums = [10,21,13,16,17,25]

nums.forEach((item , index) =>{
    if(item % 2 == 1 && index % 2 == 1){
        console.log(item)
    }
})



// დავალება 3



let scores = [45, 78, 32, 90, 56, 84, 67];

let newScores = scores.map(item =>{
    if(item < 60){
        return item + 10
    }else{
        return item + 5
    }
})

console.log(newScores)