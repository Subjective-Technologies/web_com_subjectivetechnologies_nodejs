// components/ThreeCanvas.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import Scene from './Scene';

const ThreeCanvas = () => {

  // Usage:
const myScene = new Scene();


// Create a gold material
const goldMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xD4AF37, // Gold color
  metalness: 1, // Full metalness makes it look more like gold
  roughness: 0.3, // Adjust to make it shinier or more matte
  reflectivity: 1, // Full reflectivity for a metallic look
});

myScene.addElement('https://symmetrical-space-fortnight-j7wxgwrjpqcpqj-3000.app.github.dev/3d/anim_goldenthinker.obj', {
  material: goldMaterial,
  position: { x: 0, y: -2, z: 0 },
  rotation: { x: 0, y: 0, z: 0 },
});


};

export default ThreeCanvas;
