const pojam = document.getElementById("pojam");
const lista = document.getElementById("lista");
const loadingElement = document.getElementById("loading");

let loading = false;
let proizvodi = [];

pojam.addEventListener("input", (e) => {
  dohvatiPodatke(e.target.value);
});

function dohvatiPodatke(trazeniPojam) {
  toggleLoading(true);
  fetch(`https://dummyjson.com/products/search?q=${trazeniPojam}`)
    .then((res) => res.json())
    .then((data) => {
      proizvodi = data.products;
      toggleLoading(false);
      render();
    })
    .catch((err) => {
      console.log(err);
      toggleLoading(false);
    });
}

function render() {
  if (proizvodi.length === 0) {
    lista.innerHTML = "Nema podataka za trazeni pojam";
  } else {
    lista.innerHTML = `
      ${proizvodi
        .map(
          (item) => `
          <li>${item.brand} - ${item.title}</li>
        `
        )
        .join("")}
    `;
  }
}

function toggleLoading(loadingState) {
  if (loadingState) {
    loadingElement.textContent = "Loading...";
    return;
  }
  loadingElement.textContent = "";
}
