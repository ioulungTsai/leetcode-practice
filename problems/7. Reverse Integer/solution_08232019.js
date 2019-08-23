@param {number} x
@return {number}
 
var reverse = function(x) {
    let stringX = "" + x;
    let reverseArrayX = stringX.split('').reverse();
    if(reverseArrayX[reverseArrayX.length -1] === '-') {
        reverseArrayX.pop();
        reverseArrayX.unshift('-')
    }
    let ans = Number(reverseArrayX.join(''));
    if(ans > (Math.pow(2, 31) - 1) || ans < Math.pow(-2, 31)) {
        return 0;
    } else {
        return ans;
    }
};

