import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Global from "../Global";
import Sidebar from "./Sidebar";
import Moment from "react-moment";
import "moment-timezone";
import imageDefault from "../assets/images/DEFAULT.2jpg.png";


class Article extends Component {
  url;
  idSearched;

  constructor(props) {
    super(props);

    this.state = {
      article: false,
      status: null,
    };
    this.url = Global.url;
    this.idSearched = this.props.params.id;
  }

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    axios
      .get(this.url + "article/" + this.idSearched)
      .then((res) => {
        this.setState({
          article: res.data.article,
          status: "success",
        });
      })
      .catch((err) => {
        this.setState({
          article: false,
          status: "success",
        });
      });
  };

  render() {
    return (
      <div className="center">
        <section id="content">
          {this.state.article && (
            <article className="article-item article-detail">
              <div className="image-wrap">
                {/* router.get('/get-image/:image', ArticleController.getImage); */}
                    {this.state.article.image !== null ? (
                    <img
                    src={this.url + "get-image/" + this.state.article.image}
                    alt={this.state.article.title}
                    />
                ) : (
                    <img src={imageDefault} alt={this.state.article.title} />
                )}
              </div>

              <h1 className="subheader">{this.state.article.title}</h1>
              <span className="date">
                <Moment locale="es" fromNow>
                  {this.state.article.date}
                </Moment>
              </span>

              <p>{this.state.article.content} </p>

              <button href="#" className="btn btn-danger">Eliminar</button>
              <Link to="" className="btn btn-warning">Editar</Link>


              <div className="clearfix"></div>
            </article>
          )}

          {!this.state.article && this.state.status == null && (
            <div id="article">
              <h1 className="subheader">Cargando...</h1>
            </div>
          )}

          {!this.state.article && this.state.status === "success" && (
            <div id="article">
              <h1 className="subheader">El artículo no existe</h1>
            </div>
          )}
        </section>

        <Sidebar></Sidebar>
        <div className="clearfix"></div>
      </div>
    );
  }
}
export default Article;
