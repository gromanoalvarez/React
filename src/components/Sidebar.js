import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Sidebar extends Component {

  render() {
    return (
      <aside id="sidebar">
        {this.props.blog === "true" &&
                <div id="nav-blog" className="sidebar-item">
                  <h3>Puedes hacer esto</h3>
                  <Link to={"/home"} className="btn btn-success">
                    Crear artículo
                  </Link>
                </div>
        }

        <div id="search" className="sidebar-item">
          <h3>Buscador</h3>
          <p>Encuentra el artículo que buscas</p>
          <form>
            <input type="text" className="search" />
            <input type="submit" className="submit" value="buscar" />
          </form>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
