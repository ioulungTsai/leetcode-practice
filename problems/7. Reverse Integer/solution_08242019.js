// @param {number} x
// @return {number}

var reverse = function(x) {
  let num = Math.abs(x);
  let reverse = 0;
  let lastDigit;
  while(num >= 1) {
      lastDigit = num % 10;
      reverse = (reverse * 10) + lastDigit;
      num = Math.floor(num / 10);
  }
  if(x < 0) {
      reverse = -reverse;
  }
  if(reverse > (Math.pow(2, 31) - 1) || reverse < Math.pow(-2, 31)) {
      return 0;
  }
  return reverse;
};