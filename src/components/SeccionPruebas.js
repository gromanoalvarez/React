import React, { Component } from "react";
import MiPrimerComponente from "./MiPrimerComponente";
import Peliculas from "./Peliculas";

class SeccionPruebas extends Component {

  contador = 0;

  state = {
        contador: 0
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

  sumar(e){
    // this.contador = this.contador+1; || this.contador++; NO FUNCIONA PORQUE PARA QUE UNA VARIABLE SEA REACTIVA Y DINAMICA DEBO DECLARAR EL STATE ya que no puedo modificar su valor directamente en la vista de este modo
    // this.state.contador = this.state.contador +1; NO FUNCIONA PORQUE DEBO UTILIZAR setEstate()
    this.setState({
      contador: (this.state.contador+1)
    });
  }
  restar(e){
    // this.contador = this.contador-1; || this.contador--; NO FUNCIONA PORQUE PARA QUE UNA VARIABLE SEA REACTIVA Y DINAMICA DEBO DECLARAR EL STATE ya que no puedo modificar su valor directamente en la vista de este modo
    // this.state.contador = this.state.contador +1; NO FUNCIONA PORQUE DEBO UTILIZAR setEstate()
    this.setState({
      contador: (this.state.contador-1)
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
      <section id="content">
        {/* Para hacer un comentario en JSX debo usar {} y dentro comentar como js */}
        <h2 className="subheader">Últimos artículos</h2>
        <p>
          Estamos en <code>src/App.js</code>. El index.js inserta este
          componente App en el div con id root del index.html!
        </p>
        {/* {alert(
          "En este componente App utilizo LENGUAJE JSX, donde puedo con {} meter javaScript"
        )} */}

        <h2 className="subheader">Probando Funciones</h2>
        <p>Mostrando variable</p>
        {presentacion}
        <p>Mostrando función</p>
        {this.HolaMundo(profesion, edad)}

        <h2 className="subheader">Probando Componentes</h2>

        <section className="componentes">
          <MiPrimerComponente />
          <MiPrimerComponente />
          <Peliculas />
        </section>

        <h2 className="subheader">Probando Estados</h2>
        <p>Contador: {this.state.contador}</p>
        <input type="button" value="Sumar" onClick={this.sumar.bind(this)}></input>
        <input type="button" value="Restar" onClick={this.restar.bind(this)}></input>

      </section>
    );
  }
}
export default SeccionPruebas;