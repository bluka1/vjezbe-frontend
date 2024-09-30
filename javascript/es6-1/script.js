"use strict";
// 1.
let a = 78;
var b = 34;
// console.log("b:", b);

console.log("this:", this);

console.log("a:", a);

// delete globalThis.a;
// delete globalThis.b;

const myObject = { property1: 1, property2: 2, property1: 1 };

// 2.
const user = { name: "Lorenzo", surname: "Verdi" };
const users = [
  { name: "Fabio", surname: "Biondi" },
  { name: "Mario", surname: "Rossi" },
  { ...user },
];

console.log(users);

// 3.
var i = 0;
for (i; i < 10; i++) {
  setTimeout(function () {
    console.log("The number is " + i);
  }, 1000);
  console.log(i);
}
