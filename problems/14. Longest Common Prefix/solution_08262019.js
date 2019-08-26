// @param {string[]} strs
// @return {string}

var longestCommonPrefix = function(strs) {
  if(strs.length === 0) {
      return "";
  }
  if(strs.length === 1) {
      return strs[0];
  }
  let output = "";
  let firstStrLength = strs[0].length;
  for(let x = 0; x < firstStrLength; x++) {
      let letter = strs[0][x];
      let same;
      for(let y = 1; y < strs.length; y++) {
          if(strs[y][x] === letter) {
              same = true;
          } else {
              same = false;
              break;
          }
      }
      if(same) {
          output = output + strs[0][x];
      } else {
          break;
      }
  }
  return output;
};

