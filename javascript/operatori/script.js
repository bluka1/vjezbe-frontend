// Truthy vs Falsy
/*
  Falsy - false, "", 0, undefined i null
  Truthy vrijednosti - sve sto nije falsy
*/

var x = "Lorem ipsum",
  y = 2345,
  z = "2345";
q = false;

// 1.
var trueFalse = !!"false" == !!"true"; // Boolean("abcdefg") == Boolean("zyqwjvgbxn")
console.log("trueFalse:", trueFalse);

var trueFalse2 = !"" == !"true";

// 2.
console.log(q || x || y || z);

// 3.
var num = 6;
num--;
console.log(num);

// 4.
const price = 26.5;
const taxRate = 0.082;

let totalPrice = price + price * taxRate;
let roundedTotalPrice = +totalPrice.toFixed(2);
// pretvaranje stringa u float - Number(vrijednost), parseFloat(vrijednost), +vrijednost

console.log("Total:", roundedTotalPrice);
