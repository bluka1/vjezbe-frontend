var text = " Lorem ipsum dolor sit amet";

const duljinaStringa = text.length;
console.log("*** duljinaStringa:", duljinaStringa);

const indexOfSit = text.indexOf("sit");
console.log("*** indexOfSit:", indexOfSit);

const sitValue = text.substring(indexOfSit, indexOfSit + 3);
console.log("*** sitValue:", sitValue);

const newString = text.replace("amet", "elit");
console.log("*** newString:", newString);

const konkatenacija = text + ", " + "consectetur adipiscing elit";
console.log("*** konkatenacija:", konkatenacija);

const velikaSlova = text.toUpperCase();
console.log("*** velikaSlova:", velikaSlova);

const trimmedText = text.trim();
console.log("*** trimmedText:", trimmedText);
console.log("*** duljina trimmedText:", trimmedText.length);

const letterAt12 = text.charAt(12);
console.log("*** letterAt12:", letterAt12);
