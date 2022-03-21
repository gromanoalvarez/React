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
                        <strong>Curso</strong>React
                    </span>
                </div>
    
    {/* MENU  con NAVLINK: para que funcionen los enlaces, los componentes de las rutas tienen que estar declarados dentro del browserRouter*/}
                <nav id="menu">
                    <ul>
                        <li>
                            <NavLink to="/home" activeClassName="active">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/segunda-ruta" activeClassName="active">Formulario</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pagina-1" activeClassName="active">Página 1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pruebas/german/alvarez" activeClassName="active">Página 2</NavLink>
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