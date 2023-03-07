let arr = ['Refat', 'Amal', 'Jamshed']


let name = prompt('What name do you wonna delete?')

if(arr.indexOf(name) === -1) {
  alert('This name is not in list')
}else {
  alert('Name was deleted')
  arr.splice(arr.indexOf(name), 1)
  // console.log(arr);
}


console.log(arr);