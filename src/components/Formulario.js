import React, { Component } from "react";
// import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Formulario extends Component {
  nombreRef = React.createRef();
  apellidosRef = React.createRef();
  bioRef = React.createRef();
  generoHombreRef = React.createRef();
  generoMujerRef = React.createRef();
  generoOtroRef = React.createRef();
  state = {
    user: {
        nombre:"",
        apellidos:"",
        bio:"",
        genero:""
    }
  };

  recibirFormulario = (e) => {
    // prevenir que al enviar se refresque la pagina
    e.preventDefault();

    let genero = "";
    if (this.generoHombreRef.current.checked) {
      genero = this.generoHombreRef.current.value;
    } else if (this.generoMujerRef.current.checked) {
      genero = this.generoMujerRef.current.value;
    } else {
      genero = this.generoOtroRef.current.value;
    }

    let user = {
      nombre: this.nombreRef.current.value,
      apellidos: this.apellidosRef.current.value,
      bio: this.bioRef.current.value,
      genero: genero,
    };

    this.setState({
        user: user
    })
  };

  render() {
      console.log(this.state.user.nombre)
    return (
      <div id="formulario">
        {/* <Slider title="Formulario" size="slider-small"></Slider> */}
        <div className="center">
          <div id="content">
            <h1 className="subheader">Formulario</h1>
            {/**vista previa */}
            {(this.state.user.nombre !== "" || this.state.user.apellidos !== "" || this.state.user.bio !== ""  ) && (
              <div id="user-data">
                <h3>Vista previa: </h3>
                <p>Nombre: <strong>{this.state.user.nombre}</strong></p>
                <p>Apellidos: <strong>{this.state.user.apellidos}</strong></p>
                <p>Bio: <strong>{this.state.user.bio}</strong></p>
                <p>Genero: <strong>{this.state.user.genero}</strong></p>
              </div>
            )}

            {/** Crear formulario con React CON EVENTO ONSUBMIT con propiedad REF */}
            <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" ref={this.nombreRef} />
              </div>

              <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" name="apellidos" ref={this.apellidosRef} />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Biografía</label>
                <textarea name="bio" ref={this.bioRef}></textarea>
              </div>

              <div className="form-group radio-button">
                <input
                  type="radio"
                  name="genero"
                  value="hombre"
                  ref={this.generoHombreRef}
                />
                Hombre
                <input
                  type="radio"
                  name="genero"
                  value="mujer"
                  ref={this.generoMujerRef}
                />
                Mujer
                <input
                  type="radio"
                  name="genero"
                  value="otro"
                  ref={this.generoOtroRef}
                />
                Otro
              </div>

              <div className="clearfix"></div>

              <input type="submit" value="Enviar" className="btn btn-success" />
            </form>
          </div>
          <Sidebar blog="false"></Sidebar>
        </div>
      </div>
    );
  }
}
export default Formulario;
