import Main from "./components/Main";
import Navbar from "./components/Navbar";
import BG from "./assets/bg.jpg";

import Menu from "./components/Menu";
import About from "./components/About";

function App() {
  return (
    <>
      <div className="bg-hero bg-fixed ">
        <Navbar />
        <Main />
        <About />
        <Menu />
      </div>
    </>
  );
}

export default App;
