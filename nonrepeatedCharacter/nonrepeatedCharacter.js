/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var splitStr = string.split('');
  var obj = {};
  var firstChar;

  for (var i = 0; i < splitStr.length; i++) {
     if (obj[splitStr[i]]) {
       obj[splitStr[i]]++
     } else {
       obj[splitStr[i]] = 1
     }
  }
  
  for (var  i = 0; i < splitStr.length; i++) {
    if (obj[splitStr[i]] === 1) {
      firstChar = splitStr[i]
      break;
    }
  }
  return firstChar;
};

// // firstNonRepeatedCharacter('aabbdc')
// firstNonRepeatedCharacter('aaazcfggg')
// firstNonRepeatedCharacter('hello my name is jake')