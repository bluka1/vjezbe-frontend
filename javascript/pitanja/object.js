const obj = {
  totalSteps: 0,
  getTotalSteps: function () {
    // console.log("getTotalSteps metoda - total steps:", this.totalSteps);
    return this.totalSteps;
  },
  walk: function () {
    this.totalSteps += 1;
    // console.log("walk metoda - total steps:", this.totalSteps);
    return this.totalSteps;
  },
};

// console.log("getTotalSteps:", obj.getTotalSteps());
// console.log("walk:", obj.walk());
// console.log("walk:", obj.walk());
// console.log("walk:", obj.walk());
// console.log("getTotalSteps:", obj.getTotalSteps());
// console.log("getTotalSteps:", obj.totalSteps);

module.exports = {
  getTotalSteps: obj.getTotalSteps.bind(obj),
  /**
   *  da se ne bi izgubio kontekst objekta na kojem zelimo pozvati metodu, koristimo bind
   */
  walk: obj.walk.bind(obj),
};
