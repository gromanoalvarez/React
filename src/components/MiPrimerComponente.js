//* También puedo hacer de este modo pero no es tan buena práctica:
// import React from "react";
// class MiPrimerComponente extends React.Component{

import React, {Component} from "react";

class MiPrimerComponente extends Component{

    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon'],
            calorias: 300
        }

        return (
            <React.Fragment>
                <h1>Este es MiPrimerComponente</h1>
                <h4>Como no puedo retornar mas de una etiqueta html, entonces puedo utilizar React.Fragment para que las agrupe sin tener que crear una etiqueta div o section, es practicamente invisible al inspeccionar</h4>
                <p>{'Mi Receta de: ' + receta.nombre}</p>
                <p>{'Calorias: ' + receta.calorias}</p>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            console.log(ingrediente);
                            return (
                                <li key= {i}>
                                    {ingrediente}
                                </li>
                            )
                        })
                    }
                </ol>
                <hr/>
            </React.Fragment>
        );
    }
}

export default MiPrimerComponente;