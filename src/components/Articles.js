import React, { Component } from "react";
import axios from "axios";

class Articles extends Component {
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
    this.getArticles();
  }

  // Mostrar todos los articulos de la Api restful
  getArticles = () => {
    // console.log("metodo getArticles funcionando");
    // como es una promesa con el .then tomo la respuesta del servidor creado en nodejs
    axios.get("http://localhost:3900/api/articles/").then((res) => {
      // modifico con setState el valor de mis variables dinamicas
      this.setState({
        articles: res.data.articles,
        status: "success",
      });
      //   console.log(this.state);
    });
  };
  render() {
    //efecto de carga en la vista de los articulos
    if (this.state.articles.length >= 1) {
      let listArticles = this.state.articles.map((article) => {
        return (
            <article className="article-item" id="article-template" key={article._id}>
              <div className="image-wrap">
                <img
                  src="https://i.pinimg.com/564x/db/86/85/db8685f39c83d34c6090b8839e0bd864.jpg"
                  alt={article.title}
                />
              </div>
              <h2>{article.title}</h2>
              <span className="date">{article.date}</span>
              <a href="article.html">Leer más</a>
              <div className="clearfix"></div>
            </article>
        );
      });

      return (
        <div id="articles">
            {listArticles}
        </div>
      );

    } else if (
      this.state.articles.length === 0 &&
      this.state.status === "success"
    ) {
      return (
        <div id="articles">
          <h1>Carga exitosa, no hay articulos creados</h1>
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
