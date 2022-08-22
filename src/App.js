import Main from "./components/Main";
import Navbar from "./components/Navbar";
import BG from "./assets/bg.jpg";
import About from "./components/About";
import Menu from "./components/Menu";

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
