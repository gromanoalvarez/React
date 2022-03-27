import React, { Component } from "react";
import Pelicula from "./Pelicula";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Peliculas extends Component {
  state = {
    peliculas: [
      {
        title: "Los minions",
        image:
          "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias-cine/los-minions-rompen-la-barrera-de-los-mil-millones-de-dolares/69878153-2-esl-ES/Los-Minions-rompen-la-barrera-de-los-mil-millones-de-dolares.jpg?crop=1xw:0.7925696594427245xh;center,top&resize=980:*",
      },
      {
        title: "Hachiko",
        image:
          "http://3.bp.blogspot.com/-3dsQYDJEj3c/Tpy5grYu5KI/AAAAAAAAABU/_PtwIUBsnAY/s1600/images++cxc.jpg",
      },
      {
        title: "Escuela de Rock",
        image:
          "https://indiehoy.com/wp-content/uploads/2021/05/escuela-de-rock.jpg",
      },
    ],
    nombre: "Germán",
    peliFavorita: {},
  };

  cambiarTitulo = () => {
    const { peliculas } = this.state;

    peliculas[0].title = "Mi villano favorito";
    // La key es necesaria para que React identifique este indice [0]
    // Incluso podria aleatoriamente cambiar el titulo
    // let random = Math.floor(Math.random()*3)
    // peliculas[random].title = "Mi villano favorito";

    this.setState({
      peliculas: peliculas,
    });
  };

  favorita = (pelicula) => {
    this.setState({
      peliFavorita: pelicula,
    });
  };

//!   CICLO DE VIDA DE UN COMPONENTE:
// 1. cuando se monta
//  2.cuando se muestra: render es el metodo del ciclo de vida principal  y obligatorio que se encarga de mostrar en la vista  un resultado
//3. cuando se desmonta

    // componentDidCatch(){
    //     alert("componentDidCatch: Cuando el componente atrapa un valor");
    // }
    // componentDidUpdate(){
    //     alert("componentDidUpdate: Cuando se actualiza o modifica un valor del componente");
    // }
    // componentDidMount(){
    //     alert("componentDidMount: Cuando el componente ya esta montado");
    // }
    // componentWillUnmount(){
    //     alert("componentWillUnmount: Cuando sera desmontado un componente")
    // }

  render() {
    //   alert("render: cuando se hace visible el componente y se utiliza algo de el");
    const bgStyle = {
      background: "green",
      color: "white",
      padding: "10px",
    };

    // También podría hacer el condicional con javascript puro aqui, guardando el resultado con una unica variable que luego podría retornar en la vista con llave de interpolación
    // let hayFavorita;
    // if(this.state.peliFavorita.title){
    //     hayFavorita = (
    //         <p className="favorita" style={bgStyle}>
    //             <strong>Mi película favorita es: </strong>
    //             <span>{this.state.peliFavorita.title}</span>
    //         </p>
    //     )
    // }else{
    //     hayFavorita = (
    //         <p>No hay favorita seleccionada</p>
    //     )
    // }

    return (
      <div id="peliculas">
        <Slider title="Prueba con listado de Peliculas" size="slider-small"></Slider>
        <div className="center">
          <div id="content" className="peliculas">
            <h2 className="subheader">Uso de props</h2>
            <p>La idea aquí es interactuar desde componente padre a hijo y biceversa</p>
            {/**Crear componente de cada película */}
            <div id="articles" className="peliculas">
              {this.state.peliculas.map((pelicula, i) => {
                return (
                  <Pelicula
                    key={i}
                    pelicula={pelicula}
                    marcarFavorita={this.favorita}
                  ></Pelicula>
                );
              })}
            </div>

            <h2>Película favorita de {this.state.nombre}: </h2>
            {/**Condicional con JSX usando CondicionDeVariable && */}
            {/* {this.state.peliFavorita.title &&
                        <p className="favorita">
                            <strong>La película favorita es: </strong>
                            <span>{this.state.peliFavorita.title}</span>
                        </p>
                    } */}
            {this.state.peliFavorita.title ? (
              <p className="favorita" style={bgStyle}>
                <strong>Mi película favorita es: </strong>
                <span>{this.state.peliFavorita.title}</span>
              </p>
            ) : (
              <p>Aún no hay favorita seleccionada</p>
            )}

            <div>
              <button onClick={this.cambiarTitulo}>
                Cambiar título de la primer película
              </button>
            </div>

            <br></br>
            <br></br>

          </div>
          <Sidebar
            blog="false"
            ></Sidebar>
        </div>
      </div>
    );
  }
}

export default Peliculas;
