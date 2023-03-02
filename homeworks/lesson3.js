let arr = [
  {
    name: 'alex',
    age: 18 
  },
  {
    name: 'refat',
    age: 19
  },
  {
    name: 'amal',
    age: 14
  },
  {
    name: 'shoxrux',
    age: 17
  },
  {
    name: 'abdulvosid',
    age: 16
  },
  {
    name: 'jamshed',
    age: 18
  },
  {
    name: 'manuchexr',
    age: 18
  },
  {
    name: 'Faxriddin',
    age: 24
  },
  {
    name: 'Shakhnoza',
    age: 15
  },
  {
    name: 'Timur',
    age: 17
  },
]



let overEightTeen = arr.filter(item => item.age >= 18)
overEightTeen.sort((a, b) => a.age - b.age);
console.log(overEightTeen);

let underEightTeen = arr.filter(item => item.age < 18)
underEightTeen.sort((a, b) => a.age - b.age);
console.log(underEightTeen);
