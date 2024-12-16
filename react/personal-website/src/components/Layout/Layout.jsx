import "./Layout.css";

export const Layout = ({ background, children }) => {
  const bg = background === "dark" ? "dark-bg" : "lighter-bg";

  return (
    <div className={bg}>
      <div className="max-width">{children}</div>
    </div>
  );
};
