var character = {
  name: "Eleven",
  show: "Stranger Things",
  portrayedBy: "Millie Bobby Brown",
};

const quotes = [
  "I'm going to my friends. I'm going home.",
  "Pure fuel! PURE FUEL! WOO!",
  "See? Zoomer.",
  "Bitchin.",
];

// const userDetails = {
//   ime: "Ivo",
//   prezime: "Ivic",
//   dob: 20,
// };

const characterProto = Object.getPrototypeOf(character);
const protoOfCharacterProto = Object.getPrototypeOf(characterProto);
console.log(characterProto);
console.log(protoOfCharacterProto);

characterProto.character = function () {
  const randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
};

console.log(character.character());

// console.log("userDetails.character:", userDetails.character());
