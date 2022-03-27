import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class Sidebar extends Component {
  searchRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      redirect: false,
    };
  }

  redirectToSearch = (e) => {
    e.preventDefault();
    this.setState({
      search: this.searchRef.current.value,
      redirect: true,
    });
  };

  render() {
    if (this.state.redirect) {
      return (
        <Navigate replace to={"/redirect/" + this.state.search}></Navigate>
      );
    }

    return (
      <aside id="sidebar">
        {this.props.blog === "true" && (
          <React.Fragment>
            <div id="nav-blog" className="sidebar-item">
              <Link to={"/blog/crear"} className="btn btn-success">
                Crear artículo
              </Link>
            </div>
            <div id="search" className="sidebar-item">
              <h3>Buscador</h3>
              <p>Encuentra el artículo que buscas</p>
              <form onSubmit={this.redirectToSearch}>
                <input type="text" className="search" ref={this.searchRef} />
                <input type="submit" className="submit" value="Buscar" />
              </form>
            </div>
          </React.Fragment>
        )}
        {this.props.btn === "IR AL BLOG" && (
          <div id="linkTo" className="sidebar-item">
            <Link to={"/blog"} className="btn btn-link">
              {this.props.btn}
            </Link>
          </div>
        )}
        {this.props.btn === "IR A PRUEBAS" && (
          <div id="linkTo" className="sidebar-item">
            <p>
              La diferencia entre este sidebar y el anterior la brindan las
              Props
            </p>
            <p>Si quieres ver más pruebas ve a:</p>
            <br></br>
            <Link to={"/pruebas"} className="btn btn-link">
              {this.props.btn}
            </Link>
          </div>
        )}
        {this.props.btn === "OTRAS RUTAS" && (
          <div id="linkTo" className="sidebar-item">
            <p>Navega por rutas cambiando la URL</p>
            <p>
              Utiliza los siguientes <code>Links</code>:
            </p>
            <br></br>
            <h5>Prueba de Formulario</h5>
            <br></br>
            <Link to={"/pruebas/formulario"} className="btn btn-link">
              Ver más
            </Link>
            <br></br>
            <hr></hr>
            <br></br>
            <h5>Prueba de Insertar valores en la URL</h5>
            <br></br>
            <Link
              to={"/pruebas/PonAquiTusnombres/PonAquiTusapellidos"}
              className="btn btn-link"
            >
              Ver más
            </Link>
            <br></br>
            <hr></hr>
            <br></br>
            <h5>Prueba una ruta sin componente que expresa un JSX fijo</h5>
            <br></br>
            <Link to={"/pruebas/sin-componente"} className="btn btn-link">
              Ver más
            </Link>
            <br></br>
          </div>
        )}
      </aside>
    );
  }
}

export default Sidebar;
