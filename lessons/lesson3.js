let arr = [
  'sad',
  true,
  false,
  null,
  null,
  {},
  [],
  12,
  12,
  12
]

let string = 0
let number = 0
let object = 0
let boolean = 0

arr.filter(i => {
  if(typeof(i) === 'string') {
    string++
  } else if(typeof(i) === 'number') {
    number++
  } else if(typeof(i) === 'object') {
    object++
  }
})

console.log(string);
console.log(number);
console.log(object);