import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";
import Probando from "./Probando";

class Home extends Component {
  render() {
    const buttonString = "IR AL BLOG";

    return (
      <React.Fragment>
        <div id="home">
          <Slider
            title="Single Page Application"
            size="slider-big"
          ></Slider>
          <div className="center">
            <div id="content">
              <h1 className="subheader">Últimos artículos</h1>
              <Articles home="true"></Articles>
            </div>
            <Sidebar blog="true"  btn={buttonString}></Sidebar>
          </div>

          <div className="clearfix"></div>
        </div>
        <Probando></Probando>
      </React.Fragment>
    );
  }
}
export default Home;
