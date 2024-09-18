// 1. zadatak
// const num = 3;
let num = 3;
while (num <= 20) {
  if (num % 9 === 0) {
    num++;
    continue;
  }
  console.log(num);
  num++;
}

// 2. zadatak

/*
  Za svaku iteraciju petlje i, petlja j ce se vrtiti 4 puta.
  Petlja i se vrti 4 puta, znaci 16 puta ce se vrtiti petlja j i povecati varOne za 1. 
*/
var varOne = 0;
for (i = 0; i < 4; i++) {
  // i = 0
  for (j = 0; j < 4; j++) {
    /*
      i=0
      1. iteracija - i=0, j=0 -> varOne = 1
      2. iteracija - i=0, j=1 -> varOne = 2
      3. iteracija - i=0, j=2 -> varOne = 3
      4. iteracija - i=0, j=3 -> varOne = 4
      5. iteracija - i=0, j=4 -> j nije manji od 4 (nije prosao uvjet) -> izlazimo iz petlje
    */
    varOne++;
  }
}
console.log(varOne);
