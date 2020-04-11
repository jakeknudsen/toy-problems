// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(str1, str2) {
  // Your code here.
  //  If str1 is empty, insert all characters of str2
  if (str1.length == 0) return str2.length;
  // If str2 is empty, only remove all characters of str1
  if (str2.length == 0) return str1.length;

  const matrix = [];

  // increment across rows and columns
  for (let r = 0; r <= str1.length; r++) {
    // add each row
    matrix[r] = [];
    for (let c = 0; c <= str2.length; c++) {
      // for first row, add column numbers
      if (r === 0) {
        matrix[r][c] = c;
      } else if (c === 0) {
        // for first column, add row numbers
        matrix[r][c] = r;
        // if letter in str1 equals letter in str2
      } else if (str1[r - 1] === str2[c - 1]) {
        // set current cell to value to diagonal value
        matrix[r][c] = matrix[r - 1][c - 1];
        // if letter in str1 doesn't equal letter in str2
      } else {
        // set current cell to the minimum number from 3 diff edit choices
        matrix[r][c] = Math.min(
          matrix[r][c - 1] + 1, // deletion (left value on matrix)
          matrix[r - 1][c - 1] + 1, // substitution (diagonal value on matrix)
          matrix[r - 1][c] + 1 // insertion (top value on matrix)
        );
      }
    }
  }

  // return the bottom, far right cell, representing the number of min edits
  return matrix[str1.length][str2.length];
}
