const findTheOldest = function(people) {
    const currentYear = (new Date()).getFullYear();

    const ages = people.map((person) => (
        {
            name: person.name,
            age: 'yearOfDeath' in person ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth
        }
    ));

    const oldest = ages.sort((a,b) => a.age > b.age ? -1 : 1);

    return people.find((person) => person.name === oldest[0].name);
};

// Do not edit below this line
module.exports = findTheOldest;
