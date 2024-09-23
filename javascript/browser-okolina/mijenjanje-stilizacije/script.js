const ulElement = document.querySelector("ul");
ulElement.style.listStyleType = "decimal";

const infoElement = document.querySelector(".info");
// infoElement.classList.remove('info');
infoElement.classList.add("hidden");

const bodyElement = document.querySelector("body");
const bodyComputedStyles = window.getComputedStyle(bodyElement);
console.log(bodyComputedStyles);

const marginLeftOnBody = bodyComputedStyles.getPropertyValue("margin-left");
console.log("margin-left on body:", marginLeftOnBody);

let marginLeftNumber = parseInt(marginLeftOnBody); // izvlacimo broj iz stringa
console.log("margin left number:", marginLeftNumber);

let direction = "up";

setInterval(() => {
  if (marginLeftNumber > 300) {
    direction = "down";
  }

  if (marginLeftNumber < 8) {
    direction = "up";
  }

  if (direction === "up") {
    marginLeftNumber++;
    // console.log("margin-left number:", marginLeftNumber);
    bodyElement.style.marginLeft = marginLeftNumber + "px";
  }

  if (direction === "down") {
    marginLeftNumber--;
    // console.log("margin-left number:", marginLeftNumber);
    bodyElement.style.marginLeft = marginLeftNumber + "px";
  }
}, 50);
