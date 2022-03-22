import React, {Component} from "react";
import axios from 'axios';

class Articles extends Component{
    state = {
        articles: [],
        status: null    
    };

    constructor(props){
        super(props);
        this.getArticles();
    }

    getArticles = () => {
        console.log("metodo getArticles funcionando");
        // como es una promesa con el .then tomo el resultado
        axios.get("http://localhost:3900/api/articles/").then((res) => {
            // modifico con setState el valor de mis variables dinamicas
            this.setState({
                articles: res.data.articles,
                status: 'success'
            });
            console.log(this.state);
        });
    }
    render(){
        if(this.state.articles.length >= 1 ){
            return (
                <div id="articles">
                    <h1>Hay articulos</h1>
                </div>
            );
        }else if(this.state.articles.length === 0 && this.state.status === 'success'){
            return (
                <div id="articles">
                    <h1>Carga exitosa, pero no hay articulos aún</h1>
                </div>
            );
        }else{
            return (
                <div id="articles">
                    <h1>Cargando...</h1>
                    <p>Aguarde unos instantes.</p>
                </div>
            );
        }

    }
}

export default Articles;