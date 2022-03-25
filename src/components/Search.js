import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Search extends Component {

  render() {
  const searched = this.props.params.search;

    return (
      <div id="search">
        <Slider 
          title={"Búsqueda de: " + searched}
          size="slider-small"
        ></Slider>
        <div className="center">
          <div id="content">
              <Articles
                   search={searched}
              ></Articles>
          </div>
          <Sidebar blog="true"></Sidebar>
        </div>
      </div>
    );
  }
}
export default Search;
