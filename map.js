var words = ["ground", "control", "to", "major", "tom"];

function map(arr, cb){
  var list = []
  for(i = 0; i < arr.length; i++){
    var item = arr[i];
    var newItem = cb(item);
    list.push(newItem);

    // list.push(words[i].length)
    // Instead of always pussing word.length
    // push the return value of the callback function.
  }
  console.log(list)
}


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(words.map(function(word) {
  return word.length;
}));

