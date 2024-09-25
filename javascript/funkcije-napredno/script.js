// 1.
var x = "John Doe";
function vratiNesto(name) {
  var x = name;
  function f() {
    return x;
  }
  return f;
}
var y = vratiNesto("Jane Doe");
var z = vratiNesto()();

// console.log(y);
// console.log(z);

// 2.
(function (name) {
  var x = name;
  function f() {
    console.log(x);
    return x;
  }
  return f;
})(x)();
