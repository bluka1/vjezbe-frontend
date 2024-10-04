(function () {
  "use strict";

  const todos = [];

  const listContainer = document.querySelector(".todoList");
  const addTodoButton = document.querySelector(".addButton");
  const newTodoTextInput = document.getElementById("newTodoText");
  const clearCompletedButton = document.querySelector(".clearCompleted");
  const allTodosNavButton = document.getElementById("all");
  const activeTodosNavButton = document.getElementById("active");
  const completedTodosNavButton = document.getElementById("completed");

  function Todo(todoText) {
    this.text = todoText;
    this.done = false;
    this.id = Math.random().toFixed(7);

    this.toggleDone = function toggleDone() {
      console.log("toggle Done");

      this.done = !this.done;
    };
  }

  function addTodoHandler() {
    const todoText = newTodoTextInput.value.trim();
    if (!todoText) return;
    const newTodo = new Todo(todoText);
    todos.push(newTodo);
    newTodoTextInput.value = "";
    showAllTodos();
  }

  function toggleDone(id) {
    for (let i = 0; i < todos.length; i++)
      if (todos[i].id == id) {
        todos[i].toggleDone();
        break;
      }
    showAllTodos();
  }

  function removeTodo(id) {
    for (let i = 0; i < todos.length; i++)
      if (todos[i].id == id) {
        todos.splice(i, 1);
        break;
      }
    showAllTodos();
  }

  function showAllTodos() {
    listContainer.innerHTML = `
      ${todos
        .map(
          (todo) => `<li class="todoItem ${todo.done ? "done" : ""}" data-id="${
            todo.id
          }">
          <input type="checkbox" name="todoCompleted" id="checkbox_${
            todo.id
          }" ${todo.done ? "checked" : ""} />
          <p>${todo.text}</p>
          <button class="removeTodo" id="removeTodo_${todo.id}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="size-4"
            >
              <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
            </svg>
          </button>
        </li>`,
        )
        .join("")}
    `;
    todos.forEach((todo) => {
      document.getElementById("checkbox_" + todo.id).onclick = () => {
        toggleDone(todo.id);
      };
      document.getElementById("removeTodo_" + todo.id).onclick = () => {
        removeTodo(todo.id);
      };
    });
  }

  addTodoButton.addEventListener("click", addTodoHandler);

  function init() {
    console.log("loaded after HTML");
  }
  window.addEventListener("load", init);
})();
