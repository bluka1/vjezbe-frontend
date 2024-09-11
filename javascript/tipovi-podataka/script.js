var x = "Lorem ipsum",
  y = 2345,
  z = "2345",
  q = false,
  w;

x += "3" + 1;
// x = x + "3" + 1
// x = "Lorem ipsum" + "3" + 1;
// x = "Lorem ipsum31"
var baaa = "b" + "a" + +"a" + "a";
// baaa = "baNaNa"

console.log("***x: ", x);
console.log("***typeof x:", typeof x);
console.log("***baaa:", baaa);
console.log("***typeof w: ", typeof w);
