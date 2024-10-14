// Import modula
const todoModule = require("../script2");

// Mockanje html strukture
document.body.innerHTML = `
  <nav class="nav">
    <label for="all" class="active">
      <input type="radio" id="all" name="filter" value="all" />
    </label>
    <label for="active">
      <input type="radio" id="active" name="filter" value="active" />
    </label>
    <label for="completed">
      <input type="radio" id="completed" name="filter" value="completed" />
    </label>
  </nav>
  <input id="newTodoText" />
  <button class="addButton">Add</button>
  <ul class="todoList"></ul>
  <button class="clearCompleted">Clear completed</button>
`;

describe("Test Todo aplikacije", () => {
  beforeEach(() => {
    // destrukturiranje importanog modula
    ({
      Todo,
      addTodoHandler,
      render,
      removeCompletedTodosHandler,
      changeFilterHandler,
      todos,
    } = todoModule);

    // reset todos varijable na prazan array prije svakog testa
    todos = [];
    // Reset input fielda
    document.getElementById("newTodoText").value = "";
  });

  test("Todo konstruktorska funkcija ispravno stvara nove Todo-ove", () => {
    const todo = new Todo("Test todo");
    expect(todo.text).toBe("Test todo");
    expect(todo.done).toBe(false);
    expect(todo.id).toBeDefined();
  });

  // test("addTodoHandler dodaje novi Todo u listu", () => {
  //   const newTodoTextInput = document.getElementById("newTodoText");
  //   newTodoTextInput.value = "New todo";
  //   console.log("newTODOInputValue", newTodoTextInput.value);

  //   addTodoHandler();
  //   expect(todos.length).toBe(1);
  //   expect(todos[0].text).toBe("New todo");
  // });

  test("render funkcija azurira html ispravno", () => {
    const testTodos = [new Todo("Todo 1"), new Todo("Todo 2")];
    const listContainer = document.querySelector(".todoList");
    render(testTodos, listContainer);
    const listItems = document.querySelectorAll(".todoList li");
    expect(listItems.length).toBe(2);
    expect(listItems[0].querySelector("p").textContent).toBe("Todo 1");
    expect(listItems[1].querySelector("p").textContent).toBe("Todo 2");
  });

  // test("removeCompletedTodosHandler brise zavrsene Todo-ove", () => {
  //   todos.push(new Todo("Todo 1"));
  //   todos.push(new Todo("Todo 2"));
  //   todos[1].done = true;
  //   removeCompletedTodosHandler();
  //   expect(todos.length).toBe(1);
  //   expect(todos[0].text).toBe("Todo 1");
  // });

  // test("changeFilterHandler azurira filtere i klase u navigaciji", () => {
  //   const event = {
  //     preventDefault: jest.fn(),
  //     target: document.querySelector('label[for="active"] input'),
  //   };
  //   changeFilterHandler(event);
  //   expect(
  //     document
  //       .querySelector('label[for="active"]')
  //       .parentNode.classList.contains("active")
  //   ).toBe(true);
  //   expect(
  //     document
  //       .querySelector('label[for="all"]')
  //       .parentNode.classList.contains("active")
  //   ).toBe(false);
  // });
});
