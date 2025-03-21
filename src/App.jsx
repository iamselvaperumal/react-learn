import "./App.css";
import Cource from "./Course";
import css from "./assets/css.jpeg";
import html from "./assets/ea50fd5ac033ccb1ab19a9aa4f1135464bbc1399.png";
import js from "./assets/js.png";

// declaring dates using props
function App() {
  return (
    <>
      <Cource name="HTML" price="199$" image={html} rating="?/5" show={true} />
      <Cource name="CSS" price="100$" image={css} rating="?/5" show={true} />
      <Cource name="JS" price="599$" image={js} rating="?/5" show={true} />
    </>
  );
}

export default App;
