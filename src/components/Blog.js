import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";
// axios es la libreria que permite hacer las peticiones ajax al servidor de nodejs
// import axios from "axios";

class Blog extends Component {
  // state = {
  //   articles: {},
  //   status: null,
  // };

  render() {
    //Prueba de peticion ajax al servidor creado con nodejs (lo ideal es hacerlo en un metodo y extraerlo fuera del render)
    // como es una promesa con el .then tomo la respuesta del servidor creado en nodejs
    // axios.get("http://localhost:3900/api/articles/").then((res) => {
    //   console.log(res.data);
    //   this.setState({
    //     articles: res.data.articles,
    //     status: "success",
    //   });
    // });

    return (
      <div id="blog">
        <Slider title="Blog" size="slider-small"></Slider>
        <div className="center">
          <div id="content">
            {/**listado de artículos que vendran del api rest de nodejs */}

            {/* {this.state.status === "success" && 
              (<div>
                {this.state.articles.map((article) => {
                  return (<h1 key={article._id}>{article.title}</h1>)
                })}
              </div>)
            } */}

            <Articles></Articles>

          </div>
          <Sidebar blog="true"></Sidebar>
        </div>
      </div>
    );
  }
}
export default Blog;
