import React, { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

//Importar componentes:
import MiPrimerComponente from "./components/MiPrimerComponente";
// import SeccionPruebas from "./components/SeccionPruebas";
import Peliculas from "./components/Peliculas";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Blog from "./components/Blog";

class Router extends Component {
  render() {
    function ObtenerParametros() {
      const params = useParams();
      const nombre = params.nombre;
      const apellidos = params.apellidos;

      return (
        <div id="content">
          <h1 className="subheader">Página de pruebas</h1>
          {nombre && <h2>Obteniendo parámetro nombre: {nombre}</h2>}
          {apellidos && <h2>Obteniendo parámetro apellidos: {apellidos}</h2>}
        </div>
      );
    }

    return (
      <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route
              exact
              path="/segunda-ruta"
              element={<MiPrimerComponente />}
            />
            <Route exact path="/tercer-ruta" element={<Peliculas />} />
            {/**CONFIGURAR RUTAS sin elemento estatico sino con JSX incrustado*/}
            <Route
              exact
              path="/pagina-1"
              element={
                <React.Fragment>
                  <h1>Hola mundo desde la ruta /pagina-1</h1>
                  <p>
                    Esta ruta tiene desarrollado <code>JSX</code> dentro del
                    element
                  </p>
                  <MiPrimerComponente saludo="Sos un genio"></MiPrimerComponente>
                </React.Fragment>
              }
            />
            {/**CONFIGURAR RUTAS "obligatorias y optativas" con parametros y recogerlos con una funcion */}
            <Route
              exact
              path="/pruebas/:nombre/:apellidos"
              element={<ObtenerParametros />}
            />
            <Route
              exact
              path="/pruebas/:nombre/"
              element={<ObtenerParametros />}
            />
            {/**CONFIGURAR RUTAS de Error */}
            <Route path="*" element={<Error />} />
          </Routes>

          <div className="clearfix"></div>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default Router;
