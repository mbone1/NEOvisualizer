import React, { Component, useState } from "react";
import Sketch from "react-p5";

export default class Floaters extends Component {
  setup = (p5, parent, degrees) => {
      p5.createCanvas(250, 259).parent(parent);
      p5.angleMode(degrees)
};
draw = (p5) => {
        p5.background("black");
      p5.circle(p5.width/2, p5.height/2, 100)
  };

  render() {
    return (
      <div>
        <Sketch setup={this.setup} draw={this.draw} />
      </div>
    );
  }
}
