const dodatnaOpremaObj = {
  klima: true,
  senzori: false,
  kamera: false
}

var auto = {
  boja: 'crvena',
  brojVrata: 5,
  gume: 'zimske',
  dodatnaOprema: dodatnaOpremaObj,
  trenutnaBrzina: 50,
  ubrzaj: function(povecanjeBrzine) {
    this.trenutnaBrzina += povecanjeBrzine;
    return this.trenutnaBrzina;
  },
  uspori: function(snizavanjeBrzine) {
    if ((this.trenutnaBrzina - snizavanjeBrzine) >= 0) {
      this.trenutnaBrzina -= snizavanjeBrzine;
    } else {
      this.trenutnaBrzina = 0;
    }
    return this.trenutnaBrzina;
  },
  promijeniBoju: function(novaBoja) {
    this.boja = novaBoja;
    return this.boja;
  }
};

// brzina auta
console.log('brzina auta:', auto.trenutnaBrzina)
console.log('brzina auta2:', auto['trenutnaBrzina']);

// pozivanje funkcija tj. metoda objekta
console.log('brzina nakon ubrzanja:', auto.ubrzaj(50));
console.log('brzina nakon usporavanja:', auto.uspori(150));
console.log('boja nakon promjene:', auto.promijeniBoju('plava'));

// pristupanje vrijednostima objekta kroz petlju
for (const key in auto) {
  console.log(key, ':', auto[key]);
}

// for (const [key, value] of Object.entries(auto)) {
//   console.log(key, ':', value);
// }

// for (const key of Object.keys(auto)) {
//   console.log(key, ':', auto[key]);
// }

// Object.keys().forEach(function (key) {
//   console.log(key, ':', auto[key]);
// })

// recenica s 2 svojstva objekta
console.log(`Moj auto ima ${auto.gume} gume i trenutna brzina kojom vozi je ${auto.trenutnaBrzina} km/h.`);

// pretvorba objekta u JSON
console.log(JSON.stringify(auto));