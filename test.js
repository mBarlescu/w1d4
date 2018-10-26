function makeIdGenerator() {
  var id = 0;

  // The following is the closure function
  return function() {
    // This inner function accesses and assigns the value of
    // the variable id, which was defined in the parent function
    id += 1;
    return id;
  }
}


var nextId = makeIdGenerator();

console.log(nextId()); // Logs: 1
console.log(nextId()); // Logs: 2
console.log(nextId()); // Logs: 3

var anotherId = makeIdGenerator();

console.log(anotherId()); // Logs: 1
console.log(anotherId()); // Logs: 2
console.log(anotherId()); // Logs: 3
console.log(anotherId()); // Logs: 3

