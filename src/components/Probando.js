import React, {Component} from "react";
import MensajeEstatico from "./MensajeEstatico";

class Probando extends Component{

    render(){
        return (
            <div >
                <h4>Soy el componente Probando</h4>
                <p>El método render() pertenece al ciclo de vida del componente, y es obligatorio para retornar a la vista información</p>
                <h5>Todos los componentes pueden reutilizarse las veces que quiera y ser llamados desde cualquier componente. A continuación llamaré al componente MensajeEstatico desde Peliculas:</h5>

                <MensajeEstatico/>

            </div>
        );
    }
}

export default Probando;