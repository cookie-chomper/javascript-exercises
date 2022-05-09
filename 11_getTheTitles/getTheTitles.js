const getTheTitles = function(bookArray) {
    let titles = [];
    for (let i = 0; i < bookArray.length; i++) {
        let title = bookArray[i].title;
        titles.push(title);

    }
    return titles;

};

// Do not edit below this line
module.exports = getTheTitles;
