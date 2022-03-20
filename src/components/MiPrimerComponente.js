//* También puedo hacer de este modo pero no es tan buena práctica:
// import React from "react";
// class MiPrimerComponente extends React.Component{

import React, { Component } from "react";

class MiPrimerComponente extends Component {
  render() {
    let receta = {
      nombre: "Pizza",
      ingredientes: ["Tomate", "Queso", "Jamon"],
      calorias: 300,
    };

    return (
      <div className="mi-primer-componente">
        <h1>Este es MiPrimerComponente</h1>
        <h4>
          Como no puedo retornar mas de una etiqueta html, debo tener que crear
          una etiqueta div o section con su respectiva clase (en JSX se expresa
          como <code>className</code>). <br></br>
          Opcionalmente puedo utilizar <code>React.Fragment</code>: <br></br>
          <React.Fragment>
            para que las agrupe EVITANDO CREAR UNA NUEVA ETIQUETA ya que es
            practicamente invisible al inspeccionar
          </React.Fragment>
        </h4>
        <h5>Trabajaremos con una variable de array:</h5>
        <p>{"Mi Receta de: " + receta.nombre}</p>
        <p>{"Calorias: " + receta.calorias}</p>
        <ol>
          {receta.ingredientes.map((ingrediente, i) => {
            console.log(ingrediente);
            return <li key={i}>{ingrediente}</li>;
          })}
        </ol>
        <hr />
      </div>
    );
  }
}

export default MiPrimerComponente;
