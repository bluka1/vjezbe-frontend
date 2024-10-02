const url = "https://dogapi.dog/api/v2/breeds";
const btn = document.querySelector("#dohvati-pse");
const listaPasa = document.querySelector("#lista-pasa");

let data = null;

btn.addEventListener("click", clickHandler);

async function clickHandler() {
  const response = await fetch(url);
  data = await response.json();
  makeCards(data);
}

function makeCards(dogsData) {
  const { data } = dogsData;
  // const data = dogsData.data; EKVIVALENT PRETHODNOJ LINIJI
  console.log("*** DATA:", data);

  data.forEach((element) => {
    const liEl = document.createElement("li");
    liEl.classList.add("item");
    // const breed = document.createElement("p");
    // const description = document.createElement("p");
    // const averageAge = document.createElement("p");
    // const hipoalergenic = document.createElement("p");

    // breed.textContent = "Pasmina: ";
    // breed.textContent += element.attributes.name;

    // description.textContent = "Opis: ";
    // description.textContent += element.attributes.description;

    // averageAge.textContent = "Prosjecna dob: izmedu ";
    // averageAge.textContent += element.attributes.life.min;
    // averageAge.textContent += " i ";
    // averageAge.textContent += element.attributes.life.max;
    // averageAge.textContent += " godina";

    // liEl.append(breed);
    // liEl.append(description);
    // liEl.append(averageAge);
    // listaPasa.append(liEl);

    liEl.innerHTML = `
      <p><b>Pasmina:</b> ${element.attributes.name}</p>
        <p>
          <b>Opis pasmine:</b> ${element.attributes.description}
        </p>
        <p><b>Prosjecna dob:</b> izmedu ${element.attributes.life.min} i ${
      element.attributes.life.max
    } godina</p>
        <p><b>Hipoalergenost:</b> ${
          element.attributes.hypoallergenic ? "da" : "ne"
        }</p>
    `;
    listaPasa.append(liEl);
  });

  {
    /* 
    **** ZADACA ****
    1. selektirati listaPasa element
    2. izmjeniti innerHTML
    3. unutar innerHTML-a mapirati kroz listu dogsData
    4. napraviti strukturu kao iz zadatka iznad
    */
  }
}
