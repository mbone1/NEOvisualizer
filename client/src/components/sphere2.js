import React, { Component, useState, useEffect } from "react";
import Sketch from "react-p5";
import Asteroid from "../images/Generic_Celestia_asteroid_texture.jpg";
import Face from '../images/earth.jpg'

let image = "https://www.w3schools.com/html/img_notepad.png";

export default function sketch (p) {

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  };
    let asteroidTexture;
    p.preload = function () {
        asteroidTexture = p.loadImage(Face)
    }
    p.draw = function () {
       p.background(4);
       p.rotateY(p.millis() / 8000);
      //  let locX = p.mouseX - p.width / 2
      //  let locY = p.mouseY - p.width / 2
       p.ambientLight(90, 70, 90);
       let dirX = (p.mouseX / p.width - 0.5) * 2;
       let dirY = (p.mouseY / p.height - 0.5) * 2;
       p.directionalLight(400, 400, 250, -dirX, -dirY, -1);
      //  p.scale(1)
       p.shininess(10)
       p.texture(asteroidTexture);
      p.sphere(250, 30, 25);
      
      p.push()
      // p.sphere(350, 20, 15)
      
    };
  };
      


    
    
