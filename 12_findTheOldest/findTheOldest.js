const findTheOldest = function(people) {

    const date = Date.now();
    const dateInYears = Math.floor(1970 + date/1000/60/60/24/365);
    console.log(date);
    let tempAge = 0;
    let oldest;
    let age;
    for (person of people) {
        //check if person still alive
        if (person.yearOfDeath) {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        //if still alive:
        else {
            age = dateInYears - person.yearOfBirth;
        }
        if (age > tempAge) {
            tempAge = age;
            oldest = person
            } 
        }
    return oldest;
    };
// Do not edit below this line
module.exports = findTheOldest;
