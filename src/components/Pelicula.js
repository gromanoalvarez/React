import React, {Component} from 'react';

class Pelicula extends Component {

    marcar = () => {
        this.props.marcarFavorita(this.props.pelicula);
    }

    render(){
        // console.log(this.props.pelicula);
        const { title, image } = this.props.pelicula;

        return(
            <article className="article-item" id="article-template">
            <div className="image-wrap">
                <img src={image} alt={title}/>
            </div>

            <h2>{title}</h2>
            <span className="date">
                Hace 5 minutos
            </span>
            <a href="article.html">Leer más</a>

            {/* Cuando hago click carga la propiedad marcarFavorita del padre PELICULAS  */}
            <button onClick={this.marcar}>
                Marcar como favorita
            </button>
            
            <div className="clearfix"></div>
        </article>
        );
    }
}
export default Pelicula;