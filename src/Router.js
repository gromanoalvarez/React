import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  Navigate,
} from "react-router-dom";

//Importar componentes:
import MiPrimerComponente from "./components/MiPrimerComponente";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Blog from "./components/Blog";
import Formulario from "./components/Formulario";
import WithRouter from "./components/WithRouter";
import ObtenerIdArticulo from "./components/ObtenerIdArticulo";
import CreateArticle from "./components/CreateArticle";
import ObtenerIdEditar from "./components/ObtenerIdEditar";
import SeccionPruebas from "./components/SeccionPruebas";

class Router extends Component {
  render() {
    function ObtenerParametros() {
      let params = useParams();
      let nombre = params.nombre;
      let apellidos = params.apellidos;
      return (
        <div id="content">
          <h2 className="subheader">Probando Parámetros</h2>
          <p>
            Desde la ruta hé llamado a una función que obtiene los parámetros
            insertados en la URL.
          </p>
          <p>
            En este Link puedes ingresar tus nombre y apellidos (o lo que desees
            escribir) en la <code>URL</code>.
          </p>
              <h3>Procedimiento:</h3>
            <p>
              Mira la barra de URL, a continuación de /pruebas/ puedes poner primero tus
              nombres, y opcionalmente luego agregar otra barra / seguida de tus apellidos
            </p>
            <h3>Ejemplos:</h3>
            <h4>a) Si solo quieres ingresar tus nombres:</h4>
             <code>.../puebas/soy IT Recruiter</code>
            <br></br> 
            <h4>b) Si quieres agregar un parametro extra con tus apellidos:</h4>
            <br></br> 
            <code>.../puebas/soy el mejor IT Recruiter/ y estas contratado </code>
            <br></br> 
            <br></br> 
            <br></br> 

            <h2>Vista de Resultados:</h2>
          {nombre && <h3>Nombres obtenidos: {nombre}</h3>}
          {apellidos && <h3>Apellidos obtenidos: {apellidos}</h3>}
        </div>
      );
    }

    function GetParamsRedirect() {
      let params = useParams();
      return <Navigate to={"/blog/busqueda/" + params.search} />;
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
            path="/blog/crear"
            element={<CreateArticle></CreateArticle>}
          />
          <Route
            exact
            path="/blog/editar/:id"
            element={<ObtenerIdEditar></ObtenerIdEditar>}
          />
          <Route
            exact
            path="/blog/articulo/:id"
            element={<ObtenerIdArticulo></ObtenerIdArticulo>}
          />
          <Route exact path="/blog/busqueda/:search" element={<WithRouter />} />
          <Route
            exact
            path="/redirect/:search"
            element={<GetParamsRedirect />}
          />
          <Route exact path="/pruebas" element={<SeccionPruebas />} />

          {/* OTRAS RUTAS */}
          <Route exact path="/pruebas/formulario" element={<Formulario />} />
          {/** "obligatorias y optativas" con parametros y recogerlos con una funcion */}
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
          {/**sin elemento estatico sino con JSX incrustado*/}
          <Route
            exact
            path="/pruebas/sin-componente"
            element={
              <React.Fragment>
                <h1>
                  Hola mundo desde la ruta <code>/sin-componente</code>{" "}
                </h1>
                <p>
                  Esta ruta tiene desarrollado <code>JSX</code> dentro del
                  element.
                </p>
                <p>
                  Y además puedo incrustar aqui otras etiquetas de componentes:
                </p>
                <MiPrimerComponente saludo="Sos un genio"></MiPrimerComponente>
              </React.Fragment>
            }
          />

          {/**RUTA DE ERROR: cuando se ingresa por URL un valor que no coincida a ninguna de las rutas anteriores */}
          <Route path="*" element={<Error />} />
        </Routes>

        <div className="clearfix"></div>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default Router;
