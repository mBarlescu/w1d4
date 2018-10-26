// var rollDie = function () {
//   return Math.floor(1 + Math.random() * 6);
// }

// console.log(rollDie());  // 1 (for example)

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = 0;
  return function() {
//     var roll = 0;
//     for(i=0;i<list.length;i++);
//       roll = list[i];
// console.log(roll)
//     return roll
    return list[i++];
  }


}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 1


var rollLoadedDie1 = makeLoadedDie();

console.log(rollLoadedDie1());  // 5
console.log(rollLoadedDie1());  // 4
console.log(rollLoadedDie1());  // 6
console.log(rollLoadedDie1());  // 1
