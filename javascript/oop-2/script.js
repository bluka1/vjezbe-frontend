function Dog(name = "Rex") {
  // if (!name) name = 'Rex';
  // name = name || 'Rex';
  this.name = name;

  this.brojKoraka = 0;

  this.getName = function () {
    return this.name;
  };
}

Dog.prototype.hodaj = function () {
  this.brojKoraka += 1;
};

Dog.prototype.bark = function () {
  console.log("Vau vau");
};

const rex = new Dog();
const hugo = new Dog("Hugo");

rex.hodaj();
rex.hodaj();

hugo.hodaj();
hugo.hodaj();
hugo.hodaj();
hugo.hodaj();
hugo.hodaj();

console.log(rex.getName(), "brojKoraka:", rex.brojKoraka);
console.log(hugo.getName(), "brojKoraka:", hugo.brojKoraka);

rex.bark();
hugo.bark();
