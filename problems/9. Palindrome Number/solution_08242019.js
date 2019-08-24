// @param {number} x
// @return {boolean}

var isPalindrome = function(x) {
  if(x < 0) {
      return false;
  }
  let num = x;
  let reverse = 0;
  let lastDigit;
  while(num >= 1) {
      lastDigit = num % 10;
      reverse = (reverse * 10) + lastDigit;
      num = Math.floor(num / 10);
  }
  if(x === reverse) {
      return true;
  } else {
      return false;
  }
};

