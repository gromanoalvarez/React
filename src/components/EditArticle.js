import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Global from "../Global";
import SimpleReactValidator from "simple-react-validator";
import Swal from 'sweetalert2';

// Recoger el id del articulo a editar desde la url
// Crear metodo para sacar el objeto del api
// rellenar el form con los datos previos del objeto
// Actualizar los nuevos datos
class EditArticle extends Component {
  url = Global.url;
  titleRef = React.createRef();
  contentRef = React.createRef();
  Swal = require('sweetalert2');

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
          Swal.fire(
            'Buen trabajo',
            'El titulo y contenido del articulo se han guardado ',
            'waiting'
          )
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
                  Swal.fire(
                    'Buen trabajo',
                    'La imagen del articulo se ha guardado ',
                    'succes'
                  )
                } else {
                  this.setState({
                    article: res.data.article,
                    status: "failed",
                  });
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo malo ocurrio con la imagen!',
                    footer: 'Verifica los formatos y extensiones permitidos'
                  })
                }
              });
          } else {
            this.setState({
              status: "success",
            });
            Swal.fire(
              'Bien hecho!',
              'El articulo se ha guardado sin imagen!',
              'success'
            )
          }
        } else {
          this.setState({
            status: "failed",
          });
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No hay articulo para guardar!',
            footer: 'Revisa el envio por URL'
          })
        }
      });
    } else {
      this.setState({
        status: "failed",
      });
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Validacion de formulario rechazada!',
        footer: 'Asegurate de cumplir con lo pedido en cada campo'
      })

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
          <h1 className="subheader">Edicíon del Artículo </h1>

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
export default EditArticle;
