// @param {string} s
// @return {boolean}

var isValid = function(s) {
  let stackArray = [];
  for (let i = 0; i < s.length; i++) {
      if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
          stackArray.push(s[i]);
      } else if (stackArray[stackArray.length - 1] === "(" && s[i] === ")" ||
                 stackArray[stackArray.length - 1] === "[" && s[i] === "]" ||
                 stackArray[stackArray.length - 1] === "{" && s[i] === "}") {
          stackArray.pop();
      } else {
          return false;
      }
  }
  if (stackArray.length === 0) {
      return true;
  } else {
      return false;
  }
};

