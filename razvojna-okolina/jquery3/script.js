$(document).ready(function () {
  $.get("https://pokeapi.co/api/v2/pokemon-color/yellow")
    .done(function (data) {
      fillList(data);
    })
    .fail(function (err) {
      $("body").append('<div class="error">' + err.responseText + "</div>");
    });

  function addStripes() {
    $("table tr").removeClass("striped");
    $("table tr:nth-child(even)").addClass("striped");
  }

  function afterRender() {
    $('[data-toggle="popover"]').popover();
    $("table th").css("color", "darkBlue");

    $("table tr").on("mouseenter", (event) => {
      $(event.currentTarget).css("backgroundColor", "yellow");
    });

    $("table tr").on("mouseleave", (event) => {
      $(event.currentTarget).removeAttr("style");
    });

    addStripes();

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

  function fillList(data) {
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
});
