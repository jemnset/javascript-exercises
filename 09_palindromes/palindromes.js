const palindromes = function (word) {
    const formattedWord = word
        .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
        .split(' ')
        .join('')
        .toLowerCase();

    const reversedWord = formattedWord.split('').reverse().join('');

    return formattedWord === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
