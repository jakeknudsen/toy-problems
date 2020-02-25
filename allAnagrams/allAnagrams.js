/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

 var allAnagrams = function(string) {
  // Your code here.
  var result = [];
  var string = string.split('')

  var swap = (index) => {
      if (index === string.length){
          return
      }
      result.push(string.join(''))
      var temp = string[1]
      var starting = string[0];
      string[1] = string[2]
      string[2] = temp
      result.push(string.join(''))  
      string[0] = string[1]
      string[1] = starting
//       string = string.substring(1) + string.charAt(0);
 
    
   swap(index + 1)
  }
  swap(0)
  
  return result
};
