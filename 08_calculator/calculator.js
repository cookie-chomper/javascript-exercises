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

const multiply = function() {

};

const power = function() {
	
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
