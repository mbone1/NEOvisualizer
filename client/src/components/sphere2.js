import React, { Component, useState, useEffect } from "react";
import Sketch from "react-p5";
import Asteroid from "../images/Generic_Celestia_asteroid_texture.jpg";

let image = "https://www.w3schools.com/html/img_notepad.png";

export default function sketch (p) {

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  };
    let asteroidTexture;
    p.preload = function () {
        asteroidTexture = p.loadImage(Asteroid)
    }
      
console.log(p.windowWidth)

    
    
  p.draw = function () {
        p.background(0);
        p.circle(p.width / 2, p.height / 2, 100);
        p.rotateY(p.millis() / 20000);
        p.rotateX(p.millis() / 500);
        p.texture(asteroidTexture);
        p.sphere(100, 20, 25);
  };
};



// let img;
// s.preload = function () {
//      img = s.loadImage(image)
//   }

// preload(Sketch)

//   let draw = (p5) => {
//     p5.background(0);
//     p5.circle(p5.width / 2, p5.height / 2, 100);
//     p5.rotateY(p5.millis() / 1000);
//     p5.rotateX(p5.millis() / 1000);
//     // p5.texture(img);
//     p5.sphere(100, 13, 10);
//   };




//   return (
//       <div>
//           {/* <Sketch setup={setup} draw={draw} /> */}
//       </div>
//   )