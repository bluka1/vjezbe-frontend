var obj = {
  totalSteps: 0,
  getTotalSteps: function () {
    console.log("getTotalSteps metoda - total steps:", this.totalSteps);
    return this.totalSteps;
  },
  walk: function () {
    this.totalSteps += 1;
    console.log("walk metoda - total steps:", this.totalSteps);
    return this.totalSteps;
  },
};

module.exports = {
  getTotalSteps: obj.getTotalSteps.bind(obj),
  walk: obj.walk.bind(obj),
};
