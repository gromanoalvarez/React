import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Blog extends Component {
  render() {
    return (
      <div id="blog">
        <Slider title="Blog" size="slider-small"></Slider>
        <div className="center">
          <div id="content">
            {/**listado de artículos que vendran del api rest de nodejs */}
          </div>
          <Sidebar
            blog="true"
            ></Sidebar>
        </div>
      </div>
    );
  }
}
export default Blog;
