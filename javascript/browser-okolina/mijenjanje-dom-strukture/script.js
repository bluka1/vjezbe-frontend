const body =  document.querySelector('body');
// console.log(body);

const h1El = document.createElement('h1');
h1El.textContent = 'Ovo je novi h1 element';

body.prepend(h1El);

const infoEl = document.createElement('div');
infoEl.textContent = 'ovo je info div';
infoEl.classList.add('info');

const descriptionEl = document.getElementsByClassName('description');
console.log(descriptionEl);
// descriptionEl.after(infoEl);

const ulEl = document.getElementsByTagName('ul')[0];
console.log(ulEl);

for (let i = 0; i < 3; i++) {
  const newLiEl = document.createElement('li');
  ulEl.append(newLiEl)
}