// let password
// let i = 0

// do {
//   i++
//   password = +prompt()

//   if(i === 5) {
    
//   }
// } while (password !== 7777);


let names = ['Timur', 'Manu', 'Jamshed', 'Fakhriddin', 'Abdulvosid', 'Shakhnoza', 'Amal', 'Refat']
let ln = ""

for (let item of names) {
  console.log(item.length);
  if(ln === item.length) {
    console.log(item);
  }
}