// @param {string} s
// @return {number}

var romanToInt = function(s) {
  let sArray = s.split('');
  let numArray = [];
  let final = 0;
  for(let i = 0; i < sArray.length; i++) {
      switch (sArray[i]) {
          case 'I':
              numArray.push(1);
              break;
          case 'V':
              numArray.push(5);
              break;
          case 'X':
              numArray.push(10);
              break;
          case 'L':
              numArray.push(50);
              break;
          case 'C':
              numArray.push(100);
              break;
          case 'D':
              numArray.push(500);
              break;
          case 'M':
              numArray.push(1000);
              break;
      }
  }
  for(let i = 0; i < numArray.length; i++) {
      if(numArray[i] < numArray[i + 1]) {
          numArray[i] = -numArray[i];
      }
      final = final + numArray[i];
  }
  return final;
};

