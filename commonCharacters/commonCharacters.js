/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  var obj = {};
  var string1 = string1.split('')
  var string2 = string2.split('')
  var str = ''
  
  string1.forEach((element, index)=> {
    if (obj[element] === undefined && string2.includes(element)) {
      obj[element] = true;
    }
  });
  var arr = Object.keys(obj);
  for (var i = 0; i < arr.length; i++) {
      str += arr[i];
  }
  return str
};
