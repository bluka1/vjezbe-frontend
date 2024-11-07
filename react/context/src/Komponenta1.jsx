import { useContext } from "react";
import Komponenta2 from "./Komponenta2";
import { ThemeContext } from "./ThemeContextProvider";

const Komponenta1 = () => {
  const { theme } = useContext(ThemeContext);

  const classNames = theme === "dark" ? "dark" : "light";

  return (
    <div className={classNames}>
      <p>Komponenta1</p>
      <Komponenta2 />
    </div>
  );
};

export default Komponenta1;
