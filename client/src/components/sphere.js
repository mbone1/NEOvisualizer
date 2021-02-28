import React, { Component, useState } from "react";
import Sketch from "react-p5";
import Asteroid from '../images/Generic_Celestia_asteroid_texture.jpg'

let image;
export default class Floaters extends Component {
    image = 0
   
    preload = (p5) => {
        image =  p5.loadImage(Asteroid);
    }
    
    
    setup = (p5, parent, degrees) => {
        p5.createCanvas(500, 500, p5.WEBGL).parent(parent);
        p5.angleMode(degrees)
    };
draw = (p5) => {
    p5.background(0);
    p5.circle(p5.width / 2, p5.height / 2, 100)
    // console.log(Y)
    
    p5.rotateY(p5.millis()/1000)
    p5.rotateX(p5.millis() / 1000)
    // p5.texture(image)
    p5.sphere(100, 13, 10)
  };

  render() {
    return (
      <div>
            <Sketch setup={this.setup} draw={this.draw} />
            {/* <img src={Asteroid}></img> */}
      </div>
    );
  }
}
