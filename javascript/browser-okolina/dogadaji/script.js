const formElement = document.querySelector("form");

// formElement.addEventListener("mouseover", onMouseOver);

// function onMouseOver(event) {
//   console.log("event:", event);
//   const target = event.target;
//   console.log("event target:", target);

//   target.style.backgroundColor = "lightblue";
// }

formElement.addEventListener("submit", onSubmit);

function onSubmit(e) {
  console.log("SUBMIT");

  e.preventDefault();

  const inputElement = document.querySelector("input");
  inputElement.value = "";
}

const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", onClick);

function onClick(e) {
  const odobrenje = confirm(
    "jeste li sigurni da se zelite prijaviti na newsletter?"
  );

  if (odobrenje) {
    console.log("prijava...");
  } else {
    console.log("ipak ne...");
  }
}

window.addEventListener("scroll", onScroll);

function onScroll(e) {
  console.log(window.scrollX);
  console.log(window.scrollY);

  if (window.scrollY > 30) {
    document.querySelector("body").style.backgroundColor = "gray";
  }
}
