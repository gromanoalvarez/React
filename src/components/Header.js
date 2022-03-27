import React, {Component} from "react";
import logo from '../assets/images/logo.svg';
import { NavLink } from "react-router-dom";

class Header extends Component{

    render(){

        return(
            <header id="header">
            <div className="center">
    {/* LOGO */}
                <div id="logo">
                    <img src={logo} alt="Logotipo" className="app-logo" />
                    <span id="brand">
                        <strong>ThisIs</strong>React
                    </span>
                </div>
    
    {/* MENU  con NAVLINK: para que funcionen los enlaces, los componentes de las rutas tienen que estar declarados dentro del browserRouter*/}
                <nav id="menu">
                    <ul>
                        <li>
                            <NavLink to="/home" activeclassname="active">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" activeclassname="active">Blog</NavLink>
                        </li>
 
                        <li>
                            <NavLink to="/pruebas" activeclassname="active">Pruebas</NavLink>
                        </li>

                    </ul>
                </nav>
    
                {/* LIMPIAR FLOTADOS FLOATS */}
                <div className="clearfix"></div>
            </div>
        </header>        );
    }
}

export default Header;