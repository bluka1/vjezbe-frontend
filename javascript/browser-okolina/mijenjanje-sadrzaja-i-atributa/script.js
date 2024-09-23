const h1Element = document.querySelector("h1");
h1Element.textContent = "Karlovac";

const h3Element = document.querySelector("span");
h3Element.innerHTML = "<h3>5 rijeka</h3>";

const infoElement = document.querySelector(".info");
infoElement.textContent = "Peta rijeka je piva.";

const liElements = document.querySelectorAll("li");
console.log(liElements);

const rijeke = ["Dobra", "Korana", "Kupa", "Mreznica", "Piva"];

for (let i = 0; i < liElements.length; i++) {
  liElements[i].textContent = rijeke[i];
}
