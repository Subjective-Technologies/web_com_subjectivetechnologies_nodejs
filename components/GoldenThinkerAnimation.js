// components/GoldenThinkerAnimation.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import Scene from './Scene';

const GoldenThinkerAnimation = () => {
  useEffect(() => {
    const myScene = new Scene();
    myScene.init();

    // Rest of your code to add elements to the scene...

    return () => {
      // Clean up when the component unmounts
      myScene.dispose();
    };
  },[]);

  return <div id="three-canvas-container"></div>;
};
export default GoldenThinkerAnimation;
