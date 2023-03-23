let num = []

let arr = [[1,3], true, [2,3,6], [7,3,6]]

for (const item of arr) {
  
  if(Array.isArray(item)) {
    for (const element of item) {
      if(typeof(element === 'number')) {
        num.push(element)
      } else{
        for (const i of element) {
          num.push(i)
        }
      }
    }
  }
}
console.log(num);


let name_1 = 'Fakhriddin'

name_1 = name_1.split('')
console.log();
log



