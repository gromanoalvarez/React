import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import Global from "../Global";
import Sidebar from "./Sidebar";
import Moment from "react-moment";
import "moment-timezone";
import imageDefault from "../assets/images/DEFAULT.2jpg.png";
import Swal from "sweetalert2";
import EditArticle from "./EditArticle";

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

  deleteArticle = (id) => {
    Swal.fire({
      title: "Estas seguro de borrar el articulo ?",
      text: "Borrar es definitivo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar!",
    }).then((result) => {
      if (result.isConfirmed) {
        // router.delete('/article/:id', ArticleController.delete);
        axios.delete(this.url + "/article/" + id).then((res) => {
          this.setState({
            article: res.data.article,
            status: "deleted",
          });
          Swal.fire(
            "Borrado!",
            "El articulo se ha borrado con exito.",
            "success"
          );
        });
        return <Navigate to="/blog" />;
      } else {
        Swal.fire("Calma!", "El articulo sigue intacto.", "success");
      }
    });
  };

  render() {
    if (this.state.status === "deleted") {
      return <Navigate to="/blog"></Navigate>;
    }
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

              <button
                onClick={() => {
                  this.deleteArticle(this.state.article._id);
                }}
                className="btn btn-danger"
              >
                Eliminar
              </button>
              <Link to={'/blog/editar/'+this.state.article._id} className="btn btn-warning">
                Editar
              </Link>

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
