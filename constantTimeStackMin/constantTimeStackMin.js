/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */



/**
  * Stack Class
  */
 

/**
  * Stack Class
  */
 var Stack = function() {
  this.storage = [];

// add an item to the top of the stack
  this.push = function(value) {
    this.storage.push(value)
  };

// remove an item from the top of the stack
  this.pop = function() {
    this.storage.pop()
  };

// return the number of items in the stack
  this.size = function() {
    this.storage.length;
  };

// return the minimum value in the stack
  this.min = function() {
   var min = this.storage[0];
   var storage = this.storage
     for (var i = 0; i < storage.length; i++) {
       if (min > storage[i]) {
         min = storage[i];
       }
     }
     return min
  };
};

// var example = new Stack()
// example.push(4)
// example.push(3)
// example.min() === 3
// example.push(3)
// example.push(2)
// example.push(2)
// example.min() === 2
// example.push(21)
// example.pop()
// example

