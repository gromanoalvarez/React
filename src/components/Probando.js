import React, { Component } from "react";
import MensajeEstatico from "./MensajeEstatico";
import MiPrimerComponente from "./MiPrimerComponente";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Probando extends Component {
    
  render() {
    const buttonString = "IR A PRUEBAS";
      
    return (
      <div id="pruebas">
        <Slider title="Pruebas con React" size="slider-small"></Slider>
        <div className="center">
          <div id="content">
            <h1 className="subheader">Soy el componente Probando</h1>
            <h4>Insertaré a continuación mi primer componente:</h4>
            <MiPrimerComponente></MiPrimerComponente>
            <p>
              El método render() pertenece al ciclo de vida del componente, y es
              obligatorio para retornar a la vista información.
            </p>
            <p>
              Todos los componentes pueden reutilizarse las veces que quiera y
              ser llamados desde cualquier componente.{" "}
            </p>
            <h4>A continuación llamaré al componente MensajeEstatico :</h4>
            <MensajeEstatico />
          </div>
          <Sidebar blog="false" btn={buttonString}></Sidebar>
        </div>
      </div>
    );
  }
}

export default Probando;
