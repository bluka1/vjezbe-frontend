import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";

const Komponenta4 = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeThemeHandler = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div>
      Komponenta4
      <p>Text from context: {theme}</p>
      <div>
        <button onClick={changeThemeHandler}>PROMIJENI TEMU</button>
      </div>
    </div>
  );
};

export default Komponenta4;
