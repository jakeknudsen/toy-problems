/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  //   debugger;
    // Your code here.
    var obj = {};
    arr.forEach(function (val) {
      if (obj[val] !== undefined) {
        obj[val]++;
      } else {
          obj[val] =1;
      }
    })
    for (var key in obj) {
        if (obj[key] % 2 === 0) {
            return key;
            console.log(key);
        }
    }
  };
  
  
   var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
  //  console.log(onlyEven); //  4
