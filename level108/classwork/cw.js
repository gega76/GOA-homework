// დავალება 1


let Prices = [20,100,2,500,132,315,15]

let Items = ["phone","book","mask","glasses","sticker","bottle","coke"]

Prices.forEach((item , index)=>{
    console.log("ნივთი: " + item)
    console.log("ფასი: " + Items[index])
})


// დავალება 2


const packets = [120, 505, -45, 999, 14, 700, 33, 842];


let filtered = packets.filter(item =>{
    if(item % 7 === 0 && item > 500){
        if(item > 0 && item % 3 === 0 && item < 1000){
            console.log(item)
        }
    }
})

console.log(filtered)


// დავალება 3


const rawEnergies = [5, 45, 120, 200, 12, 88, -10, 150];

let filtered2 = rawEnergies.filter(item => item > 10 && item < 150)

filtered2.forEach(item =>{
    console.log(item * 3 - 5)
    console.log("Q - " + item)
})

// დავალება 4


const tokens_serv1 = ["SEC-0091", "SEC-7821", "SEC-1111", "SEC-999"];
const tokens_serv2 = ["SEC-0091", "SEc-1111", "SEC-1111", "SEC-9999"];
const tokens_serv3 = ["SEC-0000091", "SEC-7821", "SEC-1111"];


const result1 = tokens_serv1.every(token => token.startsWith("SEC-") && token.length >= 8)

const result2 = tokens_serv2.every(token => token.startsWith("SEC-") && token.length >= 8)

const result3 = tokens_serv3.every(token => token.startsWith("SEC-") && token.length >= 8)