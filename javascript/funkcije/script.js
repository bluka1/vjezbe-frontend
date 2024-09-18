// var words = ["quickest", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];

const rijeci = [
  "cat",
  "apple",
  "banana",
  "dog",
  "elephant",
  "fish",
  "grapefruit",
  "sun",
  "kiwi",
  "zebra",
  "tangerine",
  "ant",
  "raspberry",
  "orange",
  "lion",
  "watermelon",
  "doghouse",
  "strawberry",
  "pea",
  "cantaloupe",
];

// let longest = null;
// niz.forEach(function (item) {
//   if (!longest || item.length > longest.length) {
//     longest = item;
//   }
// });

function findLongest(niz) {
  let longest = "";

  // for (let i = 0; i < niz.length; i++) {
  //   if (niz[i].length > longest.length) {
  //     longest = niz[i];
  //   }
  // }

  let i = 0;
  while (i < niz.length) {
    if (longest.length <= niz[i].length) {
      longest = niz[i];
    }

    i++;
  }

  return longest;
}

const longestWord = findLongest(rijeci);
console.log(longestWord);
