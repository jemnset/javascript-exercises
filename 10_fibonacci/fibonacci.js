const fibonacci = function(n) {
    const num = typeof n != "number" ? parseInt(n) : n;

    if(num < 0) return 'OOPS';
    if(num === 0) return 0;
    //if(num === 1 || num === 2) return 1;

    let prevNum = 1;
    let currNum = 1;

    for(let i=2; i<num; i++){
        let total = prevNum + currNum;
        prevNum = currNum;
        currNum = total;
    }

    return currNum;
};

// Do not edit below this line
module.exports = fibonacci;
