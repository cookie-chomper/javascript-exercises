const add = function(x, y) {
    return x + y;
};

const subtract = function(x, y) {
    return x - y;
};

const sum = function(someArray) {
    let currentSum = 0;
    for (let i = 0; i <= someArray.length - 1; i++) {
        currentSum += someArray[i];
    }
    return currentSum;
};

const multiply = function(someArray) {
    let result = 1;
    while (someArray.length > 0) {
        result = result * someArray.shift() * multiply(someArray);
    }
    return result;
};

const power = function(x, n) {
    if (n > 1) {
        x = x * power(x, n - 1)
    }
    return x;
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
