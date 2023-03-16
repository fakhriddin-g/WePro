for(let i = 0; i < 5; i++) {
  
  for(let k = 5; k > i; k--) {
    let star = '*'
    document.write(`${star}`);
  }
  document.write(`<br>`);
}


let arr = [
  {
  id: Math.random(),
  name: 'Timur',
  info: {
    school: '235',
    faculity: 'SMM'
  },
  },
  {
    id: Math.random(),
    name: 'Imran',
    info: {
      school: 'ne izvestno',
      faculity: 'programming'
    },
  },
  {
    id: Math.random(),
    name: 'Aminjon',
    info: {
      school: '444',
      faculity: 'Dizayn'
    },
  },
  {
    id: Math.random(),
    name: 'Maxmud',
    info: {
      school: '777',
      faculity: '3dsmax'
    },
  },
  {
    id: Math.random(),
    name: 'Muxammad',
    info: {
      school: '5555',
      faculity: 'Backend'
    },
  },
  {
    id: Math.random(),
    name: 'Timur',
    info: {
      school: '235',
      faculity: 'SMM'
    },
  },
  {
    id: Math.random(),
    name: 'Imran',
    info: {
      school: 'ne izvestno',
      faculity: 'programming'
    },
  },
  {
    id: Math.random(),
    name: 'Aminjon',
    info: {
      school: '444',
      faculity: 'Dizayn'
    },
  },
  {
    id: Math.random(),
    name: 'Maxmud',
    info: {
      school: '777',
      faculity: '3dsmax'
    },
  },

  {
  id: Math.random(),
  name: 'Maxmud',
  info: {
    school: '777',
    faculity: '3dsmax'
    }
  },
  {
  id: Math.random(),
  name: 'Muxammad',
  info: {
    school: '5555',
    faculity: 'Backend'
    }
  },
]

let categories = [
  {
    course: ' SMM',
    count: 0
  },
  {
    course: 'PROGRAMMING',
    count: 0
  },
  {
    course: '     3DSMAX',
    count: 0
  },
  {
    course: ' DIZAYN',
    count: 0
  },
  {       
    course: '   BACKEND',
    count: 0
  },
]


// for (const category of categories) {
//   category.course.trim()
// }
// console.log(categories);


// for (const item of arr) {
  
//   for (const category of categories) {
    
//   }
// }


// for (const item of arr) {
//   let newItem = item.info.faculity.toUpperCase()
//   // console.log(newItem);
//   for (const category of categories) {
//     let newCategory = category.course.trim()
//     if(newItem === newCategory) {
//       console.log(item);
//     }
//   }
// }


for(let item of arr) {
  let newItem = item.info.faculity.toUpperCase()
  for(let category of categories) {
    let newCategory = category.course.trim()
    if(newItem === newCategory) {
      category.count++
    }
  }
}

console.log(categories);