function registerPopovers() {
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );

  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
}

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon-color/yellow", true);

function fillList() {
  const data = JSON.parse(xhr.response);
  const source = document.getElementById("pokemon-list").innerHTML;
  const template = Handlebars.compile(source);
  const context = { pokemon: data.pokemon_species.slice(0, 20) };
  const html = template(context);

  document.getElementById("result").innerHTML = html;
}

xhr.onload = function () {
  fillList();
  registerPopovers();
};

xhr.send();
