/**
 * Pokrece Todo aplikaciju.
 */

(function () {
  "use strict";

  let filter = "all";
  const TODOS_LOCAL_STORAGE = "todos";

  let todos = JSON.parse(localStorage.getItem(TODOS_LOCAL_STORAGE)) || [];

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

  function updateLocalStorage(value) {
    localStorage.setItem(TODOS_LOCAL_STORAGE, JSON.stringify(value));
  }

  function addTodoHandler() {
    const todoText = newTodoTextInput.value.trim();
    if (!todoText) return;
    const todo = new Todo(todoText);
    newTodoTextInput.value = "";
    todos.push(todo);
    updateLocalStorage(todos);
    render(todos);
  }

  function handleClick(event) {
    const target = event.target;
    const isRemoveButton = target.classList.value.includes("removeTodo");
    const isCheckbox = target.getAttribute("type") === "checkbox";
    const dataId = target.getAttribute("data-id");

    if (isRemoveButton) {
      todos = todos.filter((todo) => {
        return todo.id !== dataId;
      });
      updateLocalStorage(todos);
    } else if (isCheckbox) {
      todos.forEach((todo) => {
        if (todo.id === dataId) {
          todo.done = !todo.done;
        }
      });
      updateLocalStorage(todos);
    }

    render(todos);
  }

  function render(todos, listElement = listContainer) {
    listElement.innerHTML = `${todos
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
  /**
   * Mijenja vrijednost filter varijable i filtrira Todo-ove na temelju iste.
   * @param {Event} event - oznacava click event objekt
   */
  function changeFilterHandler(event) {
    event.preventDefault();
    filter = event.target.getAttribute("for");
    changeNavClasses(filter);

    if (filter === "completed") {
      const completedTodos = todos.filter((todo) => todo.done === true);
      render(completedTodos);
    } else if (filter === "active") {
      const activeTodos = todos.filter((todo) => todo.done !== true);
      render(activeTodos);
    } else {
      render(todos);
    }
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
   * Brise sve dovrsene Todo-ove.
   */
  function removeCompletedTodosHandler() {
    todos = todos.filter((todo) => !todo.done);
    updateLocalStorage(todos);
    render(todos);
  }

  /**
   * Dodaje event listenere u aplikaciju.
   */
  function init() {
    addTodoButton.addEventListener("click", addTodoHandler);
    clearCompletedButton.addEventListener("click", removeCompletedTodosHandler);
    navElement.addEventListener("click", changeFilterHandler);
    listContainer.addEventListener("click", handleClick);
    render(todos);
  }

  window.addEventListener("load", init);

  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      Todo,
      addTodoHandler,
      render,
      removeCompletedTodosHandler,
      changeFilterHandler,
    };
  }
})();
