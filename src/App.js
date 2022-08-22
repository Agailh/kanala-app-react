import Main from "./components/Main";
import Navbar from "./components/Navbar";
import BG from "./assets/bg.jpg";

function App() {
  return (
    <>
      <div className="bg-hero bg-fixed ">
        <Navbar />
        <Main />
      </div>
    </>
  );
}

export default App;
