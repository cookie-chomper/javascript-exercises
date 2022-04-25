const repeatString = function(string, n) {
    let finalString = '';
    if (n < 0) return 'ERROR';
    for (let i=0; i<n; i++) {
        finalString = finalString + string;
    };
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
