import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Global from "../Global";
import SimpleReactValidator from "simple-react-validator";

//Validacion de formularios y alertas
class CreateArticle extends Component {
  url = Global.url;
  titleRef = React.createRef();
  contentRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      article: {},
      status: null,
      selectedFile: null,
    };
    this.validator = new SimpleReactValidator({
         locale: 'es',
          messages: {
            required: 'El campo debe ser llenado'
          },
    });
  }

  titleAndContentChange = () => {
    this.setState({
      article: {
        title: this.titleRef.current.value,
        content: this.contentRef.current.value,
      },
    });
    // console.log(this.state);
    this.validator.showMessages();
    this.forceUpdate();
  };

  fileChange = (event) => {
    // console.log(event);

    //target: input
    // value: "C:\\fakepath\\IMG-20210128-WA0025.jpg"
    //files: FileList
    //0: File {
    //lastModified: 1611871943000
    // lastModifiedDate: Thu Jan 28 2021 19:12:23 GMT-0300 (hora estándar de Argentina)
    // [[Prototype]]: Object
    // name: "IMG-20210128-WA0025.jpg"
    // size: 113737
    // type: "image/jpeg"
    // webkitRelativePath: ""
    // [[Prototype]]: File
    // }
    //length: 1
    //[[Prototype]]: FileList

    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  saveArticle = (e) => {
    e.preventDefault();
    // alert(this.titleRef.current.value);
    // alert(this.contentRef.current.value);

    //Recolecto los datos del form
    this.titleAndContentChange();

    //Comprobar si la validacion esta aprobada
    if (this.validator.allValid()) {
      //A-peticion http por post para "guardar titulo y contenido"
      // router.post('/save', ArticleController.save);
      axios.post(this.url + "/save", this.state.article).then((res) => {
        if (res.data.article) {
          this.setState({
            article: res.data.article,
            status: "waiting",
          });

          //B-Subida de imagen:
          if (this.state.selectedFile !== null) {
            //1.Sacar el id del articulo guardado
            let articleId = this.state.article._id;
            //2.Crear form data y añadir fichero
            const formData = new FormData();
            formData.append(
              "file0",
              this.state.selectedFile,
              this.state.selectedFile.name
            );

            //3.peticion ajax post para "guardar imagen"
            // router.post('/upload-image/:id?', md_upload, ArticleController.upload); //utilizo middleware multipart para form-data
            axios
              .post(this.url + "/upload-image/" + articleId, formData)
              .then((res) => {
                if (res.data.article) {
                  this.setState({
                    article: res.data.article,
                    status: "success",
                  });
                } else {
                  this.setState({
                    article: res.data.article,
                    status: "failed",
                  });
                }
              });
          } else {
            this.setState({
              status: "success",
            });
          }
        } else {
          this.setState({
            status: "failed",
          });
        }
      });
    } else {
      this.setState({
        status: "failed",
      });
      this.validator.showMessages();
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
    }
  };

  render() {
    if (this.state.status === "success") {
      return <Navigate to="/blog"></Navigate>;
    }

    return (
      <div className="center">
        <section id="content">
          <h1 className="subheader">Crear Artículo</h1>

          <form className="mid-form" onSubmit={this.saveArticle}>
            <div className="form-group">
              <label htmlFor="title">Título</label>
              <input
                type="text"
                name="title"
                ref={this.titleRef}
                onKeyUp={this.titleAndContentChange}
              ></input>

              {this.validator.message(
                "title",
                this.state.article.title,
                "required|alpha_space"
              )}
            </div>

            <div className="form-group">
              <label htmlFor="content">Contenido</label>
              <textarea
                type="text"
                name="content"
                ref={this.contentRef}
                onKeyUp={this.titleAndContentChange}
              ></textarea>

              {this.validator.message(
                "content",
                this.state.article.content,
                "required|alpha_num_space"
              )}
            </div>

            <div className="form-group">
              <label htmlFor="file0">Imagen</label>
              <input
                type="file"
                name="file0"
                onChange={this.fileChange}
              ></input>
            </div>

            <input
              type="submit"
              value="Guardar"
              className="btn btn-success"
            ></input>
          </form>
        </section>
      </div>
    );
  }
}
export default CreateArticle;
