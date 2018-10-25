// The second argument/parameter is expected to be a function
function findWaldo(arr, found){
  arr.forEach(function(i, value){
    // console.log(i, value)
    if (i === "Waldo") {
      found(value);   // execute callback
    };
  });
};


function actionWhenFound(where) {

  console.log("Found Waldo at index " + where + "!");

}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);