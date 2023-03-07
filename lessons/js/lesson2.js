let arr = ['Refat', 'Amal', 'Jamshed', 'Alex']

let filtered = arr.filter(name => name.length % 2 === 0)

console.log(filtered);



// let arrNumbers = [1,2,3,4]

// let total = 0

// arrNumbers.map(num => total += num)

// console.log(total);


let array = [1,2,3, '', null, 'hello', false, NaN, 0]

const result = array.filter(Boolean);
// const result = array.filter(item => item);
console.log(result);

// let filtered = array.filter(item => item === true)

// console.log(filtered);
// // if() {
  
// }


