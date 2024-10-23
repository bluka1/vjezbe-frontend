$(document).ready(function () {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://pokeapi.co/api/v2/pokemon-color/yellow", true);

  function fillList() {
    const data = JSON.parse(xhr.response);
    const source = document.getElementById("pokemon-list").innerHTML;
    const template = Handlebars.compile(source);
    const context = {
      pokemon: data.pokemon_species.slice(0, 20),
      tableClass: "table",
    };
    const html = template(context);

    document.getElementById("result").innerHTML = html;
    $('[data-toggle="popover"]').popover();
  }

  xhr.onload = function () {
    fillList();
    addZebraStyles();
    addHeaderStyles();

    setTimeout(() => removePokemonOnP(), 2000);
  };

  xhr.send();

  function addZebraStyles() {
    $("table tr:even").addClass("zebra");
    $("table tr:odd").removeClass("zebra");
  }

  function addHeaderStyles() {
    $("table th").css("background-color", "lightblue");
  }

  function removePokemonOnP() {
    const trs = $("table td a:contains('p')");
    const filteredTrs = trs.filter(function () {
      return this.innerHTML.indexOf("p") == 0;
    });

    filteredTrs.closest("tr").remove();

    addZebraStyles();
    addHiddenRowsToDiv(filteredTrs.length);
  }

  function addHiddenRowsToDiv(rows) {
    $("table").after("<div class='hiddenRows'>Hidden Rows: " + rows + "</div>");
  }
});
