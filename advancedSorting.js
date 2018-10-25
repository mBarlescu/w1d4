var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var sortx = students.sort(function(a, b){
  var nameA = a.name;
  var nameB = b.name;
  var ageA = a.age;
  var ageB = b.age;

  if(nameA < nameB){
    return -1;
  }
  if(nameA > nameB){
    return 1;
  }
  if(nameA === nameB){
    return ageB - ageA;
  }

});

console.log(sortx)
