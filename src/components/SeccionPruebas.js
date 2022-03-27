import React, { Component } from "react";
import MiPrimerComponente from "./MiPrimerComponente";
import Peliculas from "./Peliculas";
import Sidebar from "./Sidebar";
import Slider from "./Slider";

class SeccionPruebas extends Component {
  contador = 0;

  state = {
    contador: 0,
  };

  //El modo tradicional seria hacer el state en el constructor pero es mas largo:
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     contador: 0
  //   };
  // }

  //const HolaMundo = () => {} ////Otra manera de definir
  HolaMundo(profesion, edad) {
    const texto = (
      <div>
        <h3> Tengo {edad} años </h3>
        <h4> y me dedico al {profesion}</h4>
        <p>
          Recordar que en mis variables solo se permite una etiqueta html o
          puedo incluir varias "dentro de una sola etiqueta"
        </p>
      </div>
    );
    return texto;
  }

  sumar = (e) => {
    // si la defino como funcion de flecha no necesito hacer el bind(this) en el evento click
    // this.contador = this.contador+1; || this.contador++; NO FUNCIONA PORQUE PARA QUE UNA VARIABLE SEA REACTIVA Y DINAMICA DEBO DECLARAR EL STATE ya que no puedo modificar su valor directamente en la vista de este modo
    // this.state.contador = this.state.contador +1; NO FUNCIONA PORQUE DEBO UTILIZAR setEstate()
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  restar(e) {
    // this.contador = this.contador-1; || this.contador--; NO FUNCIONA PORQUE PARA QUE UNA VARIABLE SEA REACTIVA Y DINAMICA DEBO DECLARAR EL STATE ya que no puedo modificar su valor directamente en la vista de este modo
    // this.state.contador = this.state.contador +1; NO FUNCIONA PORQUE DEBO UTILIZAR setEstate()
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    const nombre = "German Romano Alvarez";
    const profesion = "Desarrollo web";
    const presentacion = <h2>Hola, soy {nombre}</h2>;
    const edad = 31;

    // TAMBIEN PODRIA DEFINIR EL HOLA MUNDO COMO FUNCION AQUI DENTRO Y LUEGO LLAMARLO SIN EL .THIS
    // function HolaMundo(profesion, edad) {
    //     const texto = (
    //       <div>
    //         <h3> Tengo {edad} años </h3>
    //         <h4> y me dedico al {profesion}</h4>
    //         <p>
    //           Recordar que en mis variables solo se permite una etiqueta html o
    //           puedo incluir varias "dentro de una sola etiqueta"
    //         </p>
    //       </div>
    //     );
    //     return texto;
    //   }

    return (
      <div id="seccion-pruebas">
        <Slider title="Sección de Pruebas" size="slider-small"></Slider>
        <div className="center">
          <section id="content">
          <h2 className="subheader">Tener en cuenta: </h2>
          <p>
            Estamos trabajando con lenguaje JSX. Para hacer un comentarios debo usar {"{/*Comentarios*/}"}.
          </p>
          <p>
            En <code>src/App.js</code>. El index.js inserta este componente App en el div con id root del index.html!
          </p>

          <h3 className="subheader">Probando Funciones</h3>
          <p>Mostrando variables:</p>
          {presentacion}
          <p>Mostrando función:</p>
          {this.HolaMundo(profesion, edad)}

          <h3 className="subheader">Probando Componentes</h3>

          <p>Puedo repetir los componentes las veces que necesite:
            <MiPrimerComponente />
            <MiPrimerComponente />
          </p>

          <h3 className="subheader">Probando Estados con setState</h3>
          <h4>Evento onClick</h4>
          <p>Contador: {this.state.contador}</p>
          <input type="button" value="Sumar" onClick={this.sumar}></input>
          <input
            type="button"
            value="Restar"
            onClick={this.restar.bind(this)}
          ></input>
          </section>
        </div>
        <Sidebar
          btn="OTRAS RUTAS"
        ></Sidebar> 
        <div className="clearfix"></div>
        <br></br>
            <br></br>
        <Peliculas></Peliculas>
        <Sidebar
          btn="OTRAS RUTAS"
        ></Sidebar>  
      </div>
    );
  }
}
export default SeccionPruebas;
