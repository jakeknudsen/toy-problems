/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
  // TODO: everything
  var sortedArr = array.sort((a, b) => {
    return a - b;
  });

  //set largest to one for multiplication
  let largest = 1;
  let greatest = [];

  //push 3 largest into new arr
  for (var i = sortedArr.length - 3; i < sortedArr.length; i++) {
    greatest.push(sortedArr[i]);
  }

  //multiply largest by each num
  greatest.forEach(num => {
    largest *= num;
  });

  // return largest
  return largest;
};
