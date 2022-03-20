import React, {Component} from 'react';

class Pelicula extends Component {
    render(){
        console.log(this.props.pelicula);
        const { title, image } = this.props.pelicula;

        console.log("titulo" + title);
        console.log("imagen" + image);


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
            
            <div className="clearfix"></div>
        </article>
        );
    }
}
export default Pelicula;