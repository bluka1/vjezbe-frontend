import { makeObservable, observable, action } from "mobx";

class TodoStore {
  todos = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      removeTodo: action,
    });
  }

  addTodo(task) {
    this.todos.push({
      id: this.todos.length,
      text: task,
      completed: false,
    });
  }

  removeTodo(id) {
    this.todos = this.todos.filter((item) => item.id !== id);
  }
}

const todoStore = new TodoStore();

export default todoStore;
