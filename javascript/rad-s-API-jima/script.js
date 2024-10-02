const url = "https://dogapi.dog/api/v2/breeds";
// var request = new XMLHttpRequest();
// request.open("GET", url);

// request.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     console.log(JSON.parse(this.response));
//   }
// };

// request.send();

fetch(url, { method: "GET" })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
