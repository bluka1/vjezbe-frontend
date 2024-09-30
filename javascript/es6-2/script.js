function getX() {
  return Math.random() >= 0.5;
}

new Promise((resolve, reject) => {
  const bool = getX();
  if (bool) {
    return resolve(bool);
  }
  return reject();
})
  .then((data) => console.log(data))
  .catch(() => console.log("Oh no!"));
