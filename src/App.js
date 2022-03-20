import "./assets/css/App.css";
//Importar componentes:
import Header from "./components/Header";
import Slider from "./components/Slider";
// import SeccionPruebas from "./components/SeccionPruebas";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Peliculas from "./components/Peliculas";

function App() {
  const buttonString="Ir al Blog";

  return (
    <div className="App">
      <Header></Header>
      <Slider 
        title="Stairway to heaven"
        btn={buttonString}
      ></Slider>
      <div className="center">
        {/* <SeccionPruebas></SeccionPruebas> */}
        <Peliculas></Peliculas>
        <Sidebar></Sidebar>
        <div className="clearfix"></div> 
      </div> {/**END DIV CENTER */}
      <Footer/>
    </div>
  );
}

export default App;
