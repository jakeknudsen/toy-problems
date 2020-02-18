/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {
    
    // pick pivot point (middle value).
    var pivot = array.pop();
   //  console.log(pivot);
    // creat two arrays, if smaller than and if greater than the pivot
    var lessArr = [];
    var greatArr = [];
    // recursivly sorts the arrays
     var sorting = function (index) {
         if (index === array.length) {
             return;
         }
         if (array[index] < pivot) {
             lessArr.push(array[index]);
         } else {
             greatArr.push(array[index]);
         }
         sorting(index + 1)
     }
     sorting(0)
     return lessArr.concat(2).concat(greatArr);
    
    // combine arrays into one and return the now sorted array
   };
   
   
   quicksort([0,3,1,4,2]);