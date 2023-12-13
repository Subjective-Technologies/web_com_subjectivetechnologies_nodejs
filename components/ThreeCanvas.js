// components/ThreeCanvas.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

const ThreeCanvas = () => {
    const canvasRef = useRef();

    useEffect(() => {
        // Create a scene
        const scene = new THREE.Scene();
        
        // Create a camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        
        // Create a renderer
        const renderer = new THREE.WebGLRenderer();
        //renderer.setSize(window.innerWidth, window.innerHeight);
        // Change the canvas size
        
        const canvasWidth = window.innerWidth;
        const canvasHeight = window.innerHeight * 0.8; // 80% of the window height

        renderer.setSize(canvasWidth, canvasHeight);

        renderer.gammaOutput = true; // Make output colors look more correct
        document.body.appendChild(renderer.domElement);
        
        // Create the gold material
        const goldMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xD4AF37, // Gold color
          metalness: 1, // Full metalness makes it look more like gold
          roughness: 0.3, // Adjust to make it shinier or more matte
          reflectivity: 1, // Full reflectivity for a metallic look
        });
        
        // Load the OBJ model
        const loader = new OBJLoader();
        loader.load('/3d/anim_goldenthinker.obj', (obj) => {
          obj.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.material = goldMaterial;
            }
          });
        
          // Position the model at the bottom of the page
          obj.position.y = -2; // Adjust this value as needed
        
          scene.add(obj);
        });
        
        // Create lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);
        
        const pointLight1 = new THREE.PointLight(0xffffff, 1);
        pointLight1.position.set(10, 10, 10);
        scene.add(pointLight1);
        
        const pointLight2 = new THREE.PointLight(0xffffff, 1);
        pointLight2.position.set(-10, -10, -10);
        scene.add(pointLight2);
        
        // Create user controls
        const controls = new OrbitControls(camera, renderer.domElement);
        
        camera.position.set(0, 0, 5);
        camera.rotation.set(0, 0, 0);
        
        // Create a large sphere for the background
        const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
        sphereGeometry.scale(-1, 1, 1); // Invert the geometry on the x-axis so that all of the faces point inward
        
        const textureLoader = new THREE.TextureLoader();
        const sphereTexture = textureLoader.load('/images/back.jpg'); // Replace with the path to your image
        
        const sphereMaterial = new THREE.MeshBasicMaterial({
            map: sphereTexture,
        });
        
        const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphereMesh);
        
        // Animate the scene
        const animate = () => {
            requestAnimationFrame(animate);
        
            // Add any animations or updates here
        
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            canvasRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={canvasRef} />;
};

export default ThreeCanvas;
