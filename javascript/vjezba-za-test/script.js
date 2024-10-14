const pojam = document.getElementById("pojam");
const lista = document.getElementById("lista");
const errorElement = document.getElementById("error");
const loadingElement = document.getElementById("loading");
const nemaPodatakaElement = document.getElementById("nemaPodataka");

let loading = false;

let proizvodi;
let error;

errorElement.style.color = "red";

async function dohvatiPodatke(trazeniPojam) {
  if (!trazeniPojam.trim()) {
    nemaPodatakaElement.textContent = "";
    lista.innerHTML = "";
    errorElement.textContent = "";
    proizvodi = [];
    return;
  }
  error = false;
  loading = true;
  toggleLoading(loading);
  try {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${trazeniPojam}`
    );
    const data = await res.json();
    proizvodi = data.products;
  } catch (err) {
    console.log("err:", err);
    error = true;
  }
  loading = false;
  toggleLoading(loading);
  render();
}

function render() {
  if (error) {
    nemaPodatakaElement.textContent = "";
    lista.innerHTML = "";
    errorElement.textContent = "Nesto ne radi";
  } else if (proizvodi.length === 0) {
    nemaPodatakaElement.textContent = "Nema podataka po trazenom pojmu";
    lista.innerHTML = "";
    errorElement.textContent = "";
  } else {
    nemaPodatakaElement.textContent = "";
    errorElement.textContent = "";
    lista.innerHTML = `
      ${proizvodi
        .map(
          (item) => `
          <li>${item.brand ?? "No brand"} - ${item.title}</li>
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

pojam.addEventListener("input", (e) => {
  dohvatiPodatke(e.target.value);
});
