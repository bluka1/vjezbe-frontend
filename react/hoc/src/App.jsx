import "./App.css";
import Button from "./Button";
import Paragraph from "./Paragraph";
import withColor from "./withColor";

function App() {
  const ColoredButton = withColor(Button);
  const ColoredP = withColor(Paragraph);

  return (
    <>
      <ColoredButton bgColor="lightblue" padding={20} />
      <ColoredButton bgColor="red" padding={10} />
      <ColoredButton bgColor="green" padding={30} />
      <ColoredButton bgColor="yellow" padding={40} />
      <ColoredP bgColor="salmon" padding={10} />
      <ColoredP bgColor="brown" padding={20} />
      <ColoredP bgColor="lightgray" padding={30} />
    </>
  );
}

export default App;
