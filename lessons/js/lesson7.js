let products = [
  {   
    name: "milk",
    type: "milk",
    price: 12000
  },
  {   
    name: "tomato",
    type: "vegetables",
    price: 20000
  },
  {   
    name: "govyadina",
    type: "meat",
    price: 88000
  },
  {   
    name: "konyak",
    type: "alcohol",
    price: 50000
  },
  {   
    name: "tvorog",
    type: "milk",
    price: 13000
  },
  {   
    name: "potato",
    type: "vegetables",
    price: 5000
  },
  {   
    name: "kruryatina",
    type: "meat",
    price: 30000
  },
  {   
    name: "baranina",
    type: "meat",
    price: 80000
  },
  {   
    name: "kolbasa",
    type: "meat",
    price: 60000
  },
  {   
    name: "pivo",
    type: "alcohol",
    price: 6000
  },
  {   
    name: "vine",
    type: "alcohol",
    price: 45000
  },
  {   
    name: "whiskey",
    type: "alcohol",
    price: 10000000
  },
  {   
    name: "cheese",
    type: "milk",
    price: 600000
  },
  {   
    name: "yogurt",
    type: "milk",
    price: 10000
  },
]


console.log(
  products.sort((a,b) => a.price - b.price) 
);


// for (let item of products) {
//   let maxValue = item.price
//   console.log(maxValue);
//   maxValue.max()
// }

// console.log(maxValue);


let max = products.reduce((a, b) => {
  return (a.price > b.price) ? a : b
}) //returns object

let min = products.reduce((a, b) => {
  return (a.price < b.price) ? a : b
}) 


console.log('Min price ', min);
console.log('Max price ', max);



let arr = [{
  id: 1,
  name: "AZIZs_KABLUK",
  budget: 500000,
  tax: 12,
  expensesPerYear: [{
          for: "design",
          total: 60000,
      },
      {
          for: "material",
          total: 70000,
      },
      {
          for: "place",
          total: 120000,
      },
  ],
},
{
  id: 2,
  name: "KAMERON_CINEMA",
  budget: 600000,
  tax: 12,
  expensesPerYear: [{
          for: "camera",
          total: 90000,
      },
      {
          for: "actors",
          total: 140000,
      },
      {
          for: "electricity",
          total: 50000,
      },
  ],
},
{
  id: 3,
  name: "ISKANDARs_ZOO",
  budget: 450000,
  tax: 12,
  expensesPerYear: [{
          for: "animals",
          total: 100000,
      },
      {
          for: "cloune",
          total: 15000,
      },
      {
          for: "food",
          total: 70000,
      },
  ],
},
{
  id: 4,
  name: "AMINs_SOOOO",
  budget: 800000,
  tax: 12,
  expensesPerYear: [{
          for: "house",
          total: 200000,
      },
      {
          for: "cars",
          total: 150000,
      },
      {
          for: "family",
          total: 300000,
      },
      {
          for: "girls",
          total: 90000,
      },
  ],
},
{
  id: 5,
  name: "new comp",
  budget: 1000000,
  tax: 12,
  expensesPerYear: [{
          for: "house",
          total: 200000,
      },
      {
          for: "cars",
          total: 150000,
      },
      {
          for: "family",
          total: 300000,
      },
      {
          for: "girls",
          total: 90000,
      },
  ],
},
];

for (const item of arr) {
  let taxSum = item.tax * item.budget / 100

  console.log(item.name, taxSum);
  item.taxSum = taxSum
}

console.log("Added taxSum ", arr);

let minTax = arr.reduce((a, b) => (a.taxSum < b.taxSum) ? a : b)
let maxTax = arr.reduce((a, b) => (a.taxSum > b.taxSum) ? a : b)

console.log("maxTax ", maxTax);
console.log("minTax ", minTax);

