const firstName = "Ante";
const lastName = "Antic";
// const fullName = firstName + " " + lastName;
const fullName = `${firstName} ${lastName}`;

console.log(fullName);

// ako zelite testirati pokretanje skripte, otkomentirajte iduce dvije linije koda
// const y = 1;
// const z = 2;

var x = z === 2 ? y : 5;

if (z === 2) {
  var x = y;
} else {
  var x = 5;
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("Broj " + i + " je paran");
  } else {
    console.log("Broj " + i + " je neparan");
  }
}
