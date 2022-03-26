import React, { Component } from "react";
import {Link, Navigate} from 'react-router-dom';

class Sidebar extends Component {

  searchRef = React.createRef();

  constructor(props){
    super(props);
    this.state = {
      search: "",
      redirect: false
    }
  }

  redirectToSearch = (e) => {
    e.preventDefault();
    this.setState({
      search: this.searchRef.current.value,
      redirect: true
    });
  }

  render() {

    if(this.state.redirect){
      return (
        <Navigate replace to={'/redirect/'+this.state.search}></Navigate>
      );
    }

    return (
      <aside id="sidebar">
                <div id="nav-blog" className="sidebar-item">
                  <h3>Puedes hacer esto</h3>
                  <Link to={"/blog/crear"} className="btn btn-success">
                    Crear artículo
                  </Link>
                </div>
        {this.props.blog === "true" &&
        <div id="search" className="sidebar-item">
          <h3>Buscador</h3>
          <p>Encuentra el artículo que buscas</p>
          <form onSubmit={this.redirectToSearch}>
            <input type="text" className="search" ref={this.searchRef}/>
            <input type="submit" className="submit" value="Buscar"/>
          </form>
        </div>
        }

      </aside>
    );
  }
}

export default Sidebar;
