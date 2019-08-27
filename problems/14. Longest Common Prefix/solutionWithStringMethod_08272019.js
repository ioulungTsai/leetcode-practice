// @param {string[]} strs
// @return {string}

var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
      return "";
  }
  let output = strs[0];
  for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(output) !== 0) {
          output = output.substring(0, output.length - 1);
          if (output.length === 0) { 
              return "";
          } 
      }
  }
  return output;
};