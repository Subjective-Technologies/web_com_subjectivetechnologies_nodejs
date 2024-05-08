import React, { useEffect } from 'react';
import * as THREE from 'three';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const GoldenThinkerAnimation = () => {
  useEffect(() => {
    let composer, camera, renderer;

    const init = () => {
      const container = document.getElementById('animation_container');
      const clock = new THREE.Clock();

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.toneMapping = THREE.ReinhardToneMapping;
      container.appendChild(renderer.domElement);

      const scene = new THREE.Scene();

      // Function to add spherical image as background
      const addBackgroundSphere = (texturePath) => {
        const sphereGeometry = new THREE.SphereGeometry(10, 32, 32);
        sphereGeometry.scale(-1, 1, 1);

        const textureLoader = new THREE.TextureLoader();
        const sphereTexture = textureLoader.load(texturePath);

        const sphereMaterial = new THREE.MeshBasicMaterial({ map: sphereTexture });

        const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphereMesh);
      };

      // Add spherical image background
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
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.5, 0.2, 0.55);
      const outputPass = new OutputPass();

      composer = new EffectComposer(renderer);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);
      composer.addPass(outputPass);

      const goldMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xD4AF37,
        metalness: 1.5,
        roughness: 0.3,
        reflectivity: 1,
      });

      new GLTFLoader().load('3d/all.glb', function (gltf) {
        const model = gltf.scene;
        setMaterial(model, goldMaterial);
        scene.add(model);
        animate();
      });

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

      function animate() {
        requestAnimationFrame(animate);
        composer.render();
      }

      window.addEventListener('resize', onWindowResize);
    };

    const onWindowResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    };

    init();

    return () => {
      // Clean up Three.js resources if needed
      window.removeEventListener('resize', onWindowResize);
      renderer.dispose();
      composer.dispose();
    };
  }, []);

  return <div id="animation_container" />;
};

export default GoldenThinkerAnimation;