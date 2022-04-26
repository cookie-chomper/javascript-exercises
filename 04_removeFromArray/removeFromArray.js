const removeFromArray = function(baseArray, ...args) {
    const toRemove = args;
    for (let i = 0; i < toRemove.length; i++) {
        let value = toRemove[i];
        for (let n = 0; n < baseArray.length; n++) {
            if (baseArray[n] === value) {
                baseArray.splice(n, 1);
            }
        }
    }
    return baseArray;
    };

// Do not edit below this line
module.exports = removeFromArray;
