import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Home extends Component {
  render() {
    const buttonString = "Ir al Blog";

    return (
      <div id="home">
        <Slider title="Stairway to heaven" btn={buttonString} size="slider-big"></Slider>
        <div className="center">
          <div id="content">
            <h1 className="subheader">Últimos artículos</h1>
            <Articles
              home="true"
            ></Articles>
          </div>
          <Sidebar></Sidebar>
        </div>
      </div>
    );
  }
}
export default Home;
