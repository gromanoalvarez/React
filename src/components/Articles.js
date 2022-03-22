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
        return (
            <div id="articles">
                <h1>Hola mundo</h1>
            </div>
        );
    }
}

export default Articles;