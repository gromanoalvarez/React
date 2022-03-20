import React, {Component} from "react";
import Pelicula from "./Pelicula";

class Peliculas extends Component{
    state = {
        peliculas: [
            {title: 'Los minions', image:'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias-cine/los-minions-rompen-la-barrera-de-los-mil-millones-de-dolares/69878153-2-esl-ES/Los-Minions-rompen-la-barrera-de-los-mil-millones-de-dolares.jpg?crop=1xw:0.7925696594427245xh;center,top&resize=980:*'},
            {title: 'Hachiko', image:'http://3.bp.blogspot.com/-3dsQYDJEj3c/Tpy5grYu5KI/AAAAAAAAABU/_PtwIUBsnAY/s1600/images++cxc.jpg'},
            {title: 'Escuela de Rock', image:'https://indiehoy.com/wp-content/uploads/2021/05/escuela-de-rock.jpg'}
        ],
        nombre: 'Germán'
    };

    cambiarTitulo = () => {
        const {peliculas} = this.state;

        peliculas[0].title = "Mi villano favorito";
        // La key es necesaria para que React identifique este indice 
        // Incluso podria aleatoriamente cambiar el titulo 
        // let random = Math.floor(Math.random()*3)
        // peliculas[random].title = "Mi villano favorito";

        this.setState({
            peliculas: peliculas
        });
    }

    render(){
        return (
            <div id="content" className="peliculas">
                <h2 className="subheader">Películas</h2>
                <p>Selección de las películas favoritas de {this.state.nombre}</p>
                <div>
                    <button onClick={this.cambiarTitulo}>
                        Cambiar titulo de primera pelicula
                    </button>    
                </div>

                {/**Crear componente de cada película */}

                <div id="articles" className="peliculas">
                    {
                        this.state.peliculas.map((pelicula, i) => {
                            console.log(pelicula)
                            return (
                                <Pelicula
                                    key={i}
                                    pelicula={pelicula}
                                ></Pelicula>
                            )
                        })
                    }
                </div>

            </div>
        );
    }
}

export default Peliculas;