var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
// console.log(input)
var result = input.map(function(obj){
  var inputNums = (Math.pow(obj.x, 2) + Math.pow(obj.y, 2));
  var roots = (Math.sqrt(inputNums));
  return roots
  // var rObj ={};
  // rObj[obj.x] = obj.y;
  // return rObj;
});
// console.log(result);
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);