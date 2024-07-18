const sumAll = function(min, max) {

    let result = 0;

    if(isNaN(min) || isNaN(max) 
        || !Number.isInteger(min) || !Number.isInteger(max) 
        || min < 0 || max < 0)
        return "ERROR";

    if(min > max){
        let temp = min;
        min = max;
        max = temp;
    }

    for(let i=min; i<=max; i++){
        result+=i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
