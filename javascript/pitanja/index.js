// const importedObject = require("./object");
// const getTotalSteps = importedObject.getTotalSteps;
// const walk = importedObject.walk;

const { getTotalSteps, walk } = require("./object");

console.log("getTotalSteps:", getTotalSteps.call());
console.log("getTotalSteps:", getTotalSteps.call());
console.log("walk:", walk.apply());
console.log("walk:", walk());
console.log("getTotalSteps:", getTotalSteps());
console.log("getTotalSteps:", getTotalSteps());

const prom = new Promise((resolve, reject) => {
  const randomNum = Math.random();
  console.log("randomNum:", randomNum);

  // setTimeout koristimo kao simulaciju dohvacanja podataka s backenda
  setTimeout(() => {
    if (randomNum > 0.4) {
      resolve("resolved");
    } else {
      reject("rejected");
    }
  }, 2000);
})
  .then((data) => console.log(data))
  .catch(console.log);
