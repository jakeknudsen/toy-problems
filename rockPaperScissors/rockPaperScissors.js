/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function () {
//     debugger;

// TODO: your solution here
//result will be an empty arr
  var result = [];
  var possibleArr = ['R', 'P', 'S'];
  for (var i = 0; i < possibleArr.length; i++) { 
    //first choice
    var choice1 = possibleArr[i]
// push all the possibilites into our result array;
     result.push(choice1 + possibleArr[0] + possibleArr[0]);
     result.push(choice1 + possibleArr[0] + possibleArr[1]);
     result.push(choice1 + possibleArr[0] + possibleArr[2]);
     result.push(choice1 + possibleArr[2] + possibleArr[0]);
     result.push(choice1 + possibleArr[2] + possibleArr[1]);
     result.push(choice1 + possibleArr[2] + possibleArr[2]);
     result.push(choice1 + possibleArr[1] + possibleArr[0]);
     result.push(choice1 + possibleArr[1] + possibleArr[1]);
     result.push(choice1 + possibleArr[1] + possibleArr[2]);
  }
return result;
}

  rockPaperScissors()

