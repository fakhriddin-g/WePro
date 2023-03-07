let carPrices = [9000, 4000, 16000, 15000, 22000, 37000, 70000, 55000, 40000]

let minMoney = prompt('from') // 20000
let maxMoney = prompt('to') // 40000

let filtered = carPrices.filter(prices => minMoney <= prices && maxMoney >= prices)

// let filtered = []
// carPrices.filter(prices => {
//   if(minMoney <= prices && maxMoney >= prices) {
//     filtered.push(prices)
//   } else {
//     console.log("Not");
//   }
// })


console.log(filtered);