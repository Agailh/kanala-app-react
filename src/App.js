import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Tentang from "./components/Tentang";

function App() {
  return (
    <>
      <div className="bg-hero bg-fixed ">
        <Navbar />
        <Main />
        <Tentang />
        <Menu />
      </div>
    </>
  );
}

export default App;
