const reverseString = function(str) {
    let stringArray = [];
    for (let i=0; i<str.length; i++) {
        stringArray.push(str[str.length-1 - i]);
    };
    return stringArray.join('');

};

// Do not edit below this line
module.exports = reverseString;
