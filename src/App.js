import "./assets/css/App.css";
//Importar componentes:
// import MiPrimerComponente from "./components/MiPrimerComponente";
// import Peliculas from "./components/Peliculas";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

// function HolaMundo(profesion, edad) {
//   const texto = (
//     <div>
//       <h3> Tengo {edad} años </h3>
//       <h4> y me dedico al {profesion}</h4>
//       <p>
//         Recordar que en mis variables solo se permite una etiqueta html o puedo
//         incluir varias "dentro de una sola etiqueta"
//       </p>
//     </div>
//   );

//   return texto;
// }

function App() {
  // const nombre = "German Romano Alvarez";
  // const profesion = "Desarrollo web";
  // const presentacion = <h2>Hola, soy {nombre}</h2>;
  // const edad = 31;

  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <div className="center">
        <section id="content">
          {/* Para hacer un comentario en JSX debo usar {} y dentro comentar como js */}
          {/* 
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Estamos en <code>src/App.js</code>. El index.js inserta este
              componente App en el div con id root del index.html!
            </p>
            {alert(
              "En este componente App utilizo LENGUAJE JSX, donde puedo con {} meter javaScript"
            )}
            {presentacion}
            {HolaMundo(profesion, edad)}

            
          <section className="componentes">
            <MiPrimerComponente/>
            <MiPrimerComponente/>
            <Peliculas/>
          </section>
         */}
        </section>
        <Sidebar></Sidebar>
        <div className="clearfix"></div> 
      </div> {/**END DIV CENTER */}
      <Footer/>
    </div>
  );
}

export default App;
