import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Tentang from "./components/Tentang";
import Kontak from "./components/Kontak";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import MapsG from "./components/MapsG";

function App() {
  return (
    <>
      <div className="bg-hero bg-fixed ">
        <Navbar />
        <Main />
        <Tentang />
        <Menu />
        <Gallery />
        {/* <MapsG /> */}
        <Kontak />
        <Footer />
      </div>
    </>
  );
}

export default App;
