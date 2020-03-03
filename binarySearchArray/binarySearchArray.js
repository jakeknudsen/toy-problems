/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */
var binarySearch = function (array, target) {
    var left = 0;
    var right = array.length - 1
    var index; 
     var search = (arr, target) => {
       if (left === right) {
         return null;
       }
       index = Math.floor(left + right /2);
   
       if (target === arr[index]) {
         return index
       }
   
       if (target > arr[index]) {
        
         left = index - 1;
       }
   
       if (target < arr[index]) {
         
         right = index + 1
       }
   
       search(arr, target);
     }
     search(array, target)
     return index;
   };
   
