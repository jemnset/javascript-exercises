const removeFromArray = function(arrayToRemoveFrom, ...argsToRemove) {

    for(let i=0; i<arrayToRemoveFrom.length; i++){
        for(arg of argsToRemove){
            if(arrayToRemoveFrom[i] === arg){
                arrayToRemoveFrom.splice(i, 1);
                i--;
                break;
            }
        }
    }

    return arrayToRemoveFrom;
};

// Do not edit below this line
module.exports = removeFromArray;
