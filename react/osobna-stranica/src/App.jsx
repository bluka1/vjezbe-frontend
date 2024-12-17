import { Header, Footer } from "./components";
import { Homepage } from "./pages";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
