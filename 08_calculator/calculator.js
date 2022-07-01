const add = function(x, y) {
    return x + y;
};

const subtract = function(x, y) {
    return x - y;
};

const sum = function(array) {
  let sum = 0
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i]
  }
  return sum
};

const multiply = function(array) {
  let multiply = 1
  for (let i = 0; i < array.length; i += 1) {
    multiply *= array[i]
  }
  return multiply
};

const power = function(x, y) {
  return x**y
};

const factorial = function(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
