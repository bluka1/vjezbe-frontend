const lista = document.querySelector("#lista");

const pokemonsList = fetch("https://pokeapi.co/api/v2/pokemon-color/yellow")
  .then((res) => res.json())
  .then((data) => {
    fillTemplate(data);
  })
  .catch(console.log);

function fillTemplate(data) {
  const source = `
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
       {{#each pokemon_species}}
          <tr>
            <td>{{@index}}</td>
            <td><a href={{url}}>{{name}}</a></td>
          </tr>
       {{/each}}
      </tbody>
    </table>
  `;

  const template = Handlebars.compile(source);
  const html = template(data);
  lista.innerHTML = html;
}
