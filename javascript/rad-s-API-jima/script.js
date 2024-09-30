// var request = new XMLHttpRequest();
// request.open("GET", "https://dogapi.dog/api/v2/breeds");
// request.onload = TO-DO;
// request.send();

fetch("https://dogapi.dog/api/v2/breeds", { method: "GET" })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
