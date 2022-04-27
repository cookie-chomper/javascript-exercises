const sumAll = function(x, y) {
    if (typeof(x, y) != 'number') {
        return 'ERROR';
    }
    else if (x < 0 || y < 0) {
        return 'ERROR';
    }
    if (y > x) {
        let sumOf = 0;
        for (let n = x; n <= y; n++) {
            sumOf = sumOf + n;
        }
        return sumOf;
    }
    else {
        let sumOf = 0;
        for (let n = y; n <= x; n++) {
            sumOf = sumOf + n;
        }
        return sumOf;
    }
};

// Do not edit below this line
module.exports = sumAll;
