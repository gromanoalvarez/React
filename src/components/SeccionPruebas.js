import React, { Component } from "react";
import MiPrimerComponente from "./MiPrimerComponente";
import Peliculas from "./Peliculas";

class SeccionPruebas extends Component {
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

        <p>
          Estamos en <code>src/App.js</code>. El index.js inserta este
          componente App en el div con id root del index.html!
        </p>
        {alert(
          "En este componente App utilizo LENGUAJE JSX, donde puedo con {} meter javaScript"
        )}
        {presentacion}
        {this.HolaMundo(profesion, edad)}

        <section className="componentes">
          <MiPrimerComponente />
          <MiPrimerComponente />
          <Peliculas />
        </section>
      </section>
    );
  }
}
export default SeccionPruebas;
