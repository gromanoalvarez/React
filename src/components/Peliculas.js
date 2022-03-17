import React, {Component} from "react";
import MensajeEstatico from "./MensajeEstatico";

class Peliculas extends Component{

    render(){
        return (
            <div id="peliculas">
                <h4>Soy el componente Peliculas</h4>
                <p>El método render() pertenece al ciclo de vida del componente, y es obligatorio para retornar a la vista información</p>
                <h5>Todos los componentes pueden reutilizarse las veces que quiera y ser llamados desde cualquier componente. A continuación llamaré al componente MensajeEstatico desde Peliculas:</h5>

                <MensajeEstatico/>

            </div>
        );
    }
}

export default Peliculas;