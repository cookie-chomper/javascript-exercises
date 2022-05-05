const palindromes = function (stringA) {
    stringA = stringA.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let temp = [];
    for (let i = 0; i < stringA.length; i++) {
        temp.push(stringA[stringA.length - 1 - i]);
    }
    temp = temp.join('');
    console.log(stringA);
    console.log(temp);
    let bool = (temp == stringA) ? true : false;
    return bool;

    }

//console.log(palindromes('Rac,e ca.r'));
// Do not edit below this  
module.exports = palindromes;