import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';

import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';


import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls';
import Stats from 'three/addons/libs/stats.module.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';


const GoldenThinkerAnimation = () => {
  

  useEffect(() => {
    const containerRef = document.getElementById( 'animation_container' );
    let camera, stats;
    let composer, renderer, mixer, clock;

    const params = {
      threshold: 0,
      strength: 1,
      radius: 0,
      exposure: 1,
    };

    init();

    function init() {

      if (typeof window !== 'undefined') {
        const container = containerRef;



        clock = new THREE.Clock();

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.toneMapping = THREE.ReinhardToneMapping;
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();


        function addBackgroundSphere(texturePath) {
          const sphereGeometry = new THREE.SphereGeometry(10, 32, 32);
          sphereGeometry.scale(-1, 1, 1);
      
          const textureLoader = new THREE.TextureLoader();
          const sphereTexture = textureLoader.load(texturePath);
      
          const sphereMaterial = new THREE.MeshBasicMaterial({ map: sphereTexture });
      
          const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
          scene.add(sphereMesh);
        }

        //addBackgroundSphere('images/360/background_black_4096x2048_360.jpg');


        addBackgroundSphere('images/360/back4.png');

        camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
        camera.position.set(-5, 2.5, -3.5);
        scene.add(camera);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.maxPolarAngle = Math.PI * 0.5;
        controls.minDistance = 3;
        controls.maxDistance = 8;

        scene.add(new THREE.AmbientLight(0xcccccc));

        const pointLight = new THREE.PointLight(0xffffff, 100);
        camera.add(pointLight);

        const renderScene = new RenderPass(scene, camera);

        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
        bloomPass.threshold = params.threshold;
        bloomPass.strength = params.strength;
        bloomPass.radius = params.radius;

        const outputPass = new OutputPass();

        composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);
        composer.addPass(outputPass);


        const goldMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xD4AF37, // Gold color
          metalness: 1.5, // Full metalness makes it look more like gold
          roughness: 0.3, // Adjust to make it shinier or more matte
          reflectivity: 1, // Full reflectivity for a metallic look
        });

        new GLTFLoader().load('3d/all.glb', function (gltf) {
          const model = gltf.scene;
        
          // Function to set material recursively for all children
          function setMaterial(object, material) {
            if (object.isMesh) {
              object.material = material;
            }
            if (object.children) {
              object.children.forEach((child) => {
                setMaterial(child, material);
              });
            }
          }
        
          // Call setMaterial to apply goldMaterial to all mesh objects in the model
          setMaterial(model, goldMaterial);
        
          scene.add(model);
        
          animate();
        });
        

        const gui = new GUI();

        const bloomFolder = gui.addFolder('bloom');

        bloomFolder.add(params, 'threshold', 0.0, 1.0).onChange(function (value) {
          bloomPass.threshold = Number(value);
        });

        bloomFolder.add(params, 'strength', 0.0, 2.0).onChange(function (value) {
          bloomPass.strength = Number(value);
        });

        gui.add(params, 'radius', 0.0, 1.0).step(0.01).onChange(function (value) {
          bloomPass.radius = Number(value);
        });

        const toneMappingFolder = gui.addFolder('tone mapping');

        toneMappingFolder.add(params, 'exposure', 0.1, 2).onChange(function (value) {
          renderer.toneMappingExposure = Math.pow(value, 4.0);
        });

        window.addEventListener('resize', onWindowResize);
    }
  }

    function onWindowResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      composer.setSize(width, height);
    }





    

    function animate() {
      requestAnimationFrame(animate);

      //const delta = clock.getDelta();

      //mixer.update(delta);

      //stats.update();

      composer.render();
    }

    return () => {
      // Clean up Three.js resources here if needed
    };
  }, []);

  return  <div id="animation_container"></div>;
};

export default GoldenThinkerAnimation;
