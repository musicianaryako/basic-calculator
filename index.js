
'use strict';

let answer = 0;
function calculator(num1, operator, num2) {
  if (operator === '+') {
    answer = num1 + num2;
  } else if (operator === '-') {
    answer = num1 - num2;
  } else if (operator === '*') {
    answer = num1 * num2;
  } else if (operator === '/') {
    answer = num1 / num2;
  }
  return answer;
}

console.log(calculator(9, '+', 3)); // 12
console.log(calculator(9, '-', 3)); // 6
console.log(calculator(9, '*', 3)); // 27
console.log(calculator(9, '/', 3)); // 3
