const reverseString = function(strToReverse) {
    /**let result = "";

    const splitStr = strToReverse.split("");

    for(let i = splitStr.length - 1; i>=0; i--){
        result += splitStr[i];
    }

    return result;**/

    return strToReverse.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
