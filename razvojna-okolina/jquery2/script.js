$(document).ready(function () {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://pokeapi.co/api/v2/pokemon-color/yellow", true);

  function addStripes() {
    $("table tr").removeClass("striped");
    $("table tr:nth-child(even)").addClass("striped");
  }

  function afterRender() {
    $('[data-toggle="popover"]').popover();
    $("table th").css("color", "darkBlue");
    addStripes();

    $("table tr").mouseenter(function (e) {
      $(e.currentTarget).css("background-color", "yellow");
    });
    $("table tr").mouseleave(function (e) {
      $(e.currentTarget).removeAttr("style");
    });

    setTimeout(function () {
      const hideElements = $("table td a:contains('p')").filter(function () {
        return this.innerHTML.indexOf("p") == 0;
      });
      hideElements.closest("tr").remove();
      addStripes();

      const info = $("<div></div>")
        .insertAfter($("#pokemon-list"))
        .text("Skriveno: " + hideElements.length);
    }, 2000);
  }

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

    afterRender();
  }

  $(window).resize(() => {
    console.log($(window).width());
  });

  xhr.onload = function () {
    fillList();
  };

  xhr.send();
});
