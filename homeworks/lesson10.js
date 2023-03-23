function fibanacci (n) {

  fibArr = [0, 1];

  if (n <= 1) {
    console.log(fibArr[0]);
  } else if (n == 2) {
    console.log(...fibArr);
  } else if (n > 2) {
    for(let i = 1; i <= (n-2); i++) {
      fibArr.push(fibArr[fibArr.length-1] + fibArr[fibArr.length-2]);
    }

    console.log(...fibArr);
  }
  
}

fibanacci(prompt('Введите число'));