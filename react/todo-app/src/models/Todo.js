class Todo {
  constructor(text) {
    this.id = Math.random().toFixed(7);
    this.text = text;
    this.isDone = false;
  }
}

export default Todo;

// const newTodo = new Todo("kupiti mlijeko");s

// function NewTodo(text) {
//   this.id = Math.random().toFixed(7);
//   this.text = text;
//   this.isDone = false;
//   return this;
// }

// const newItem = new NewTodo("kupiti kruh");
