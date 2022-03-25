import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import imageDefault from "../assets/images/DEFAULT.2jpg.png";
// import Moment from "react-moment";
// import "moment/locale/es";
import {Link} from 'react-router-dom';

class Articles extends Component {
  url = Global.url;

  state = {
    articles: [],
    status: null,
  };

  //opcion 1
  // constructor(props){
  //     super(props);
  // this.getArticles();
  // }

  //opcion 2
  componentDidMount() {
    let home = this.props.home;
    let search = this.props.search;
    if(home === "true"){
      this.getLastArticles();
    }else if(search && search !== null && search !== undefined){
      this.getArticlesBySearch(search);
    }else{
      this.getArticles();
    }
  }
 // Mostrar los ultimos 5 articulos de la Api restful
// router.get('/articles/:last?', ArticleController.getArticles);
 getLastArticles = () => {
  // console.log("metodo getArticles funcionando");
  // como es una promesa con el .then tomo la respuesta del servidor creado en nodejs
  axios.get(this.url + "articles/last").then((res) => {
    // modifico con setState el valor de mis variables dinamicas
    this.setState({
      articles: res.data.articles,
      status: "success",
    });
    //   console.log(this.state);
  });
};
  // Mostrar todos los articulos de la Api restful
  getArticles = () => {
    // console.log("metodo getArticles funcionando");
    // como es una promesa con el .then tomo la respuesta del servidor creado en nodejs
    axios.get(this.url + "articles").then((res) => {
      // modifico con setState el valor de mis variables dinamicas
      this.setState({
        articles: res.data.articles,
        status: "success"
      });
      //   console.log(this.state);
    });
  };

// router.get('/search/:search', ArticleController.search); 
  getArticlesBySearch = (search) => {
    axios.get(this.url + "search/"+search)
    .then((res) => {
        this.setState({
          articles: res.data.articles,
          status: "success"
        });
    })
    .catch(err => {
      this.setState({
        articles: [],
        status: "success"
      });
    });
  };

  render() {
    //efecto de carga en la vista de los articulos
    if (this.state.articles.length >= 1) {
      let listArticles = this.state.articles.map((article) => {
        return (
          <article
            className="article-item"
            id="article-template"
            key={article._id}
          >
            <div className="image-wrap">
              {/* router.get('/get-image/:image', ArticleController.getImage); */}

              {article.image !== null ? (
                <img
                  src={this.url + "get-image/" + article.image}
                  alt={article.title}
                />
              ) : (
                <img src={imageDefault} alt={article.title} />
              )}
            </div>

            <h2>{article.title}</h2>

            <span className="date">
              {/* <Moment locale="es" fromNow>{article.date}</Moment> */}
            </span>

            <Link to={'/blog/articulo/' + article._id} >Leer más</Link>

            <div className="clearfix"></div>

          </article>
        );
      });

      return <div id="articles">{listArticles}</div>;

    } else if (
      this.state.articles.length === 0 &&
      this.state.status === "success"
    ) {
      return (
        <div id="articles">
          <h1>No hay articulos creados que coincidan con la búsqueda</h1>
        </div>
      );
    } else {
      return (
        <div id="articles">
          <h1>Cargando...</h1>
          <p>Aguarde unos instantes.</p>
        </div>
      );
    }
  }
}

export default Articles;
