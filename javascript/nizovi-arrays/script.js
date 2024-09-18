var names = ["John", "Jane", "Bob", , "Mike"];
console.log(names);
console.log(names.length);

names.push("Pero");

for (let i = 0; i < names.length; i++) {
  /* izvrsava se za:
      i = 0, i = 1, i = 2, i = 3, i = 4
      staje na uvjetu kada je i = 5 jer 5 nije manji od 5
  */
  console.log(i);
  console.log(names[i]);
}

console.log("*** WHILE PETLJA ***");

let iterator = 0;
while (iterator < names.length) {
  const currName = names[iterator];
  console.log(currName);

  if (currName === "Jane") {
    break;
  }

  iterator++;
}

console.log("*** REMOVING UNDEFINED ***");

// const indexOfUndefined = names.indexOf(undefined);
// names.splice(indexOfUndefined,1);

// names = names.filter(function (item) {
//   if (item) return item;
// });

console.log(names);

for (let i = 0; i < names.length; i++) {
  if (!names[i]) {
    names.splice(i, 1);
  }
}

console.log(names);
