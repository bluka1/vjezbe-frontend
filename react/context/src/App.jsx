import Komponenta1 from "./Komponenta1";
import ThemeContextProvider from "./ThemeContextProvider";

import "./App.css";
import UserContextProvider from "./UserContextProvider";
import Komponenta2 from "./Komponenta2";
import Komponenta3 from "./Komponenta3";

function App() {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Komponenta1 />
        <Komponenta2 />
        <Komponenta3 />
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
