import React, { Component } from "react";
import randomstring from "randomstring";
import "./App.css";

// class App extends Component {
//   render() {
//     const randomStr = randomstring.generate(10);
//     return <div>Random string: {randomStr}</div>;
//   }
// }

// export default App;

const App = () => {
  const randomStr = randomstring.generate(10);

  return <div>Random string: {randomStr}</div>;
};

export default App;
