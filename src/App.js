import Main from "./components/Main";
import Navbar from "./components/Navbar";
import BG from "./assets/bg.jpg";
import About from "./components/About";

function App() {
  return (
    <>
      <div className="bg-hero bg-fixed ">
        <Navbar />
        <Main />
        <About />
      </div>
    </>
  );
}

export default App;
