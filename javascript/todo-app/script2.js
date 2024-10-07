/**
 * Pokrece Todo aplikaciju.
 */
(function () {
  "use strict";

  let filter = "all";

  let todos = [];

  const listContainer = document.querySelector(".todoList");
  const addTodoButton = document.querySelector(".addButton");
  const newTodoTextInput = document.getElementById("newTodoText");
  const clearCompletedButton = document.querySelector(".clearCompleted");
  const navElement = document.querySelector(".nav");
  const allTodosNavButton = document.getElementById("all");
  const activeTodosNavButton = document.getElementById("active");
  const completedTodosNavButton = document.getElementById("completed");

  /**
   * @constructor
   * @param {string} text - Todo text
   */
  function Todo(todoText) {
    this.text = todoText;
    this.done = false;
    this.id = Math.random().toFixed(7);
  }

  function addTodoHandler() {
    const todoText = newTodoTextInput.value.trim();
    if (!todoText) return;
    const todo = new Todo(todoText);
    newTodoTextInput.value = "";
    todos.push(todo);
    render(todos);
  }

  listContainer.addEventListener("click", handleClick);

  function handleClick(event) {
    const target = event.target;
    const isRemoveButton = target.classList.value.includes("removeTodo");
    const isCheckbox = target.getAttribute("type") === "checkbox";
    const dataId = target.getAttribute("data-id");

    if (isRemoveButton) {
      todos = todos.filter((todo) => {
        return todo.id !== dataId;
      });
    } else if (isCheckbox) {
      todos.forEach((todo) => {
        if (todo.id === dataId) {
          todo.done = !todo.done;
        }
      });
    }

    render(todos);
  }

  function render(todos) {
    listContainer.innerHTML = `${todos
      .map(
        (todo) =>
          `<li class="todoItem ${todo.done ? "done" : null}" data-id=${todo.id}>
          <input type="checkbox" ${todo.done ? "checked" : null} data-id=${
            todo.id
          } />
          <p>${todo.text}</p>
          <button class="removeTodo" data-id=${todo.id}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="size-4"
            >
              <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
            </svg>
          </button>
        </li>`
      )
      .join("")}`;
  }

  navElement.addEventListener("click", changeFilterHandler);

  /**
   * Mijenja vrijednost filter varijable i filtrira Todo-ove na temelju iste.
   * @param {Event} event - oznacava click event objekt
   */
  function changeFilterHandler(event) {
    event.preventDefault();
    filter = event.target.getAttribute("for");

    // changeNavClasses(filter);

    // const listItems = document.querySelectorAll(".todoItem");
    // listItems.forEach((item) => {
    //   const isCompleted = item.classList.value.includes("done");
    //   if (filter === "completed" && !isCompleted) {
    //     item.style.display = "none";
    //   } else if (filter === "active" && isCompleted) {
    //     item.style.display = "none";
    //   } else {
    //     item.style.display = "flex";
    //   }
    // });
  }

  /**
   * Mijenja stilove navigacijske trake.
   * @param {string} filter - vrijednost filter varijable
   */
  function changeNavClasses(filter) {
    switch (filter) {
      case "active":
        allTodosNavButton.parentNode.classList.remove("active");
        completedTodosNavButton.parentNode.classList.remove("active");
        activeTodosNavButton.parentNode.classList.add("active");

        break;
      case "completed":
        allTodosNavButton.parentNode.classList.remove("active");
        completedTodosNavButton.parentNode.classList.add("active");
        activeTodosNavButton.parentNode.classList.remove("active");
        break;
      case "all":
      default:
        allTodosNavButton.parentNode.classList.add("active");
        completedTodosNavButton.parentNode.classList.remove("active");
        activeTodosNavButton.parentNode.classList.remove("active");
        break;
    }
  }

  /**
   * Dodaje li element na stranicu.
   */
  // function addItem() {
  //   const todoText = newTodoTextInput.value.trim();
  //   if (!todoText) return;
  //   newTodoTextInput.value = "";

  //   const listItem = createTodo(todoText);
  //   listContainer.append(listItem);
  // }

  /**
   * @param {string} todoText - text unutar li elementa
   * @returns {HTMLElement} HTML element koji predstavlja Todo stavku.
   */
  // function createTodo(todoText) {
  //   const listItem = document.createElement("li");
  //   listItem.className = "todoItem";
  //   addCheckbox(listItem);
  //   addText(listItem, todoText);
  //   addRemoveButton(listItem);
  //   return listItem;
  // }

  /**
   * Dodaje input checkbox u li element.
   */
  // function addCheckbox(listItem) {
  //   const checkbox = document.createElement("input");
  //   checkbox.setAttribute("type", "checkbox");
  //   checkbox.addEventListener("click", markDone);
  //   listItem.append(checkbox);
  // }

  /**
   * Dodaje p element u li element.
   */
  // function addText(listItem, todoText) {
  //   const paragraph = document.createElement("p");
  //   paragraph.innerText = todoText;
  //   listItem.append(paragraph);
  // }

  /**
   * Dodaje button element u li element.
   */
  // function addRemoveButton(listItem) {
  //   const removeButton = document.createElement("button");
  //   removeButton.className = "removeTodo";
  //   removeButton.innerHTML = `<svg
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 viewBox="0 0 16 16"
  //                 fill="currentColor"
  //                 class="size-4"
  //               >
  //                 <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
  //               </svg>`;
  //   removeButton.addEventListener("click", removeTodo);
  //   listItem.append(removeButton);
  // }

  /**
   * Dodaje klasu done u li element i oznacava Todo kao zavrseni.
   */
  // function markDone(event) {
  //   const listElement = event.target.parentNode;
  //   listElement.classList.toggle("done");
  // }

  /**
   * Brise li element sa stranice.
   */
  // function removeTodo(event) {
  //   const listElement = event.target.parentNode.parentNode;
  //   listElement.remove();
  // }

  /**
   * Brise sve dovrsene Todo-ove.
   */
  // function removeCompletedTodosHandler() {
  //   const listItems = document.querySelectorAll(".todoItem.done");

  //   listItems.forEach((item) => {
  //     // if (item.classList.value.includes("done")) {
  //     //   item.remove();
  //     // }
  //     item.remove();
  //   });
  // }

  /**
   * Mijenja vrijednost filter varijable i filtrira Todo-ove na temelju iste.
   * @param {Event} event - oznacava click event objekt
   */
  // function changeFilterHandler(event) {
  //   event.preventDefault();
  //   filter = event.target.getAttribute("for");
  //   changeNavClasses(filter);

  //   const listItems = document.querySelectorAll(".todoItem");
  //   listItems.forEach((item) => {
  //     const isCompleted = item.classList.value.includes("done");
  //     if (filter === "completed" && !isCompleted) {
  //       item.style.display = "none";
  //     } else if (filter === "active" && isCompleted) {
  //       item.style.display = "none";
  //     } else {
  //       item.style.display = "flex";
  //     }
  //   });
  // }

  /**
   * Mijenja stilove navigacijske trake.
   * @param {string} filter - vrijednost filter varijable
   */
  // function changeNavClasses(filter) {
  //   switch (filter) {
  //     case "active":
  //       allTodosNavButton.parentNode.classList.remove("active");
  //       completedTodosNavButton.parentNode.classList.remove("active");
  //       activeTodosNavButton.parentNode.classList.add("active");

  //       break;
  //     case "completed":
  //       allTodosNavButton.parentNode.classList.remove("active");
  //       completedTodosNavButton.parentNode.classList.add("active");
  //       activeTodosNavButton.parentNode.classList.remove("active");
  //       break;
  //     case "all":
  //     default:
  //       allTodosNavButton.parentNode.classList.add("active");
  //       completedTodosNavButton.parentNode.classList.remove("active");
  //       activeTodosNavButton.parentNode.classList.remove("active");
  //       break;
  //   }
  // }

  /**
   * Dodaje event listenere u aplikaciju.
   */
  function init() {
    addTodoButton.addEventListener("click", addTodoHandler);
    // clearCompletedButton.addEventListener("click", removeCompletedTodosHandler);
    // navElement.addEventListener("click", changeFilterHandler);
  }

  window.addEventListener("load", init);
})();
