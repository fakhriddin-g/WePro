// let country = {
//   capital: 'Dushanbe',
//   language: 'tajik',
//   teritory: '131 sq. kl',
//   population: '10 million',
//   region: ['Badakhshan', 'Sugd', 'Khatlon', 'Dushanbe'],
//   regionCenter: {
//     Badakhshon: 'Khorug',
//     Sugd: 'Leninobod',
//     Khatlon: 'Kulob',
//     Dushanbe: 'Dushanbe',
//   },
//   border: {
//     east: 'Kirgizixtan',
//     south: 'Afganistan'
//   }
// }

let types = {
  string: [],
  number: [],
  object: [],
  boolean: [],
}

let types2 = {
  name: 'Jaxa',
  age: 23
}

let newType = Object.assign({}, types, types2)

let newTypeKeys = Object.keys(newType)

let newTypeValues = Object.values(newType)

let keysValues = newTypeKeys.concat(newTypeValues)

keysValues.sort()
console.log(keysValues);





// Соеденить два объекта в одно целое (новый объект)
// Получить все ключи из нового объекта и сохранить их в новую переменную
// Получить все значения из нового объекта и сохранить их в новую переменную
// Соеденить две этих массива (ключи и значения)
// Отфильтровать массив по их типам элементов