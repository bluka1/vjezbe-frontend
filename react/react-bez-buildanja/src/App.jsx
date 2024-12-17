const Person = ({ name, age }) => {
  return React.createElement("div", {}, [
    React.createElement("p", {}, name),
    React.createElement("p", {}, age),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(Person, { name: "John", age: 20 }),
    React.createElement(Person, { name: "John", age: 20 }),
    React.createElement(Person, { name: "John", age: 20 }),
    React.createElement(Person, { name: "John", age: 20 }),
    React.createElement(Person, { name: "John", age: 20 }),
  ]);
};

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);
root.render(React.createElement(App));
