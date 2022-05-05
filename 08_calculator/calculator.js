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

const factorial = function(f) {
    let result = 1;
    if (f === 0 || f === 1) return 1;
    for (let i = 1; i <= f; i++) {
        result = result * i;
    }
    return result;
    
	
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
