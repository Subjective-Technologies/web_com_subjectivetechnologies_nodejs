// components/GoldenThinkerAnimation.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import Scene from './Scene';
import { EffectComposer, RenderPass, UnrealBloomPass } from 'postprocessing';



const GoldenThinkerAnimation = () => {
  useEffect(() => {
   //const image360Path = 'images/360/back.jpg'; // Update with the actual path
   const image360Path = 'images/360/background_black_4096x2048_360.png'
   const objPath = '3d/anim_goldenthinker.obj'; // Update with the actual path
    
    //const objPath = '3d/anim_menu.obj';
    // Create a gold material
    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xD4AF37, // Gold color
      metalness: 1.5, // Full metalness makes it look more like gold
      roughness: 0.3, // Adjust to make it shinier or more matte
      reflectivity: 1, // Full reflectivity for a metallic look
    });

  

  function createBloomMaterial(originalMaterial, bloomStrength = 1.5, bloomRadius = 0.2, bloomThreshold = 0.8) {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    const bloomMaterial = new THREE.ShaderMaterial({
      uniforms: {
        baseTexture: { value: null },
        bloomTexture: { value: null },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D baseTexture;
        uniform sampler2D bloomTexture;
        varying vec2 vUv;
        
        void main() {
          vec4 baseColor = texture2D(baseTexture, vUv);
          vec4 bloomColor = texture2D(bloomTexture, vUv);
          
          gl_FragColor = baseColor + bloomColor * ${bloomStrength};
        }
      `,
    });

    bloomMaterial.uniforms.baseTexture.value = originalMaterial.map;
    bloomMaterial.uniforms.bloomTexture.value = originalMaterial.map; // You can replace this with your own bloom texture if needed.

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), bloomStrength, bloomRadius, bloomThreshold);

    return new THREE.Mesh(originalMaterial, bloomMaterial);
  }




    MyBloomGoldMaterial = createBloomMaterial(goldMaterial)

    const myScene = new Scene(image360Path,objPath, MyBloomGoldMaterial);
    

   
/* 
     myScene.addElement(objPath, {
       material: goldMaterial,
       position: { x: 0, y: -2, z: 0 },
       rotation: { x: 0, y: 0, z: 0 },
     }); */







    return () => {
      // Clean up when the component unmounts
      //myScene.dispose();
    };
  }, []);

  return <div id="animation_container"></div>;
};
export default GoldenThinkerAnimation;
