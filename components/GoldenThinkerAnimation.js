import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import * as dat from 'dat.gui';

const GoldenThinkerAnimation = () => {
  useEffect(() => {
    let composer, bloomComposer, camera, renderer;
    const scene = new THREE.Scene();
    const bloomLayer = new THREE.Layers();
    bloomLayer.set(1); // Set layer 1 for bloom

    const darkMaterial = new THREE.MeshBasicMaterial({ color: 'black' });
    const materials = {};

    // Initialize renderer
    const container = document.getElementById('animation_container');
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 1.5; // Adjust as needed
    container.appendChild(renderer.domElement);

    console.log('Renderer initialized');

    // Initialize camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1, 5);
    scene.add(camera);

    console.log('Camera initialized');

    // Initialize controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.update();

    console.log('Controls initialized');

    // Add lights
    const light = new THREE.PointLight(0xffffff, 1.5);
    light.position.set(10, 10, 10);
    scene.add(light);

    console.log('Light added');

    // Add a box to confirm the scene is rendering
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    console.log('Box added to scene');

    // GUI parameters
    const params = {
      bloomStrength: 1.5,
      bloomThreshold: 0.85,
      emissiveIntensity: 0.6,
      textSize: 1,
      textHeight: 0.1,
      bevelThickness: 0.02,
      bevelSize: 0.05,
      bevelSegments: 5,
      textColor: 0xffffff,
      emissiveColor: 0xffffff,
    };

    // Set up postprocessing
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      params.bloomStrength, // Bloom strength
      0.4, // Radius
      params.bloomThreshold // Threshold
    );

    bloomComposer = new EffectComposer(renderer);
    bloomComposer.addPass(renderScene);
    bloomComposer.addPass(bloomPass);

    console.log('Postprocessing initialized');

    let textMesh, glowMesh;

    // Function to create text
    const createText = (font) => {
      // Remove existing text meshes if they exist
      if (textMesh) scene.remove(textMesh);
      if (glowMesh) scene.remove(glowMesh);

      // Normal text mesh
      const textGeometry = new TextGeometry('Subjective Technologies', {
        font,
        size: params.textSize,
        height: params.textHeight,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: params.bevelThickness,
        bevelSize: params.bevelSize,
        bevelOffset: 0,
        bevelSegments: params.bevelSegments
      });

      const textMaterial = new THREE.MeshStandardMaterial({
        color: params.textColor,
        emissive: params.emissiveColor,
        emissiveIntensity: params.emissiveIntensity,
      });

      textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(-5, 0, 0);
      scene.add(textMesh);

      // Glow text mesh
      const glowGeometry = textGeometry.clone();
      glowGeometry.computeVertexNormals();

      // Dilate the geometry
      glowGeometry.scale(1.05, 1.05, 1.05);

      const glowMaterial = new THREE.ShaderMaterial({
        uniforms: {
          "c": { type: "f", value: 1.0 },
          "p": { type: "f", value: 1.4 },
          glowColor: { type: "c", value: new THREE.Color(0xffffff) },
          viewVector: { type: "v3", value: camera.position }
        },
        vertexShader: `
          uniform vec3 viewVector;
          uniform float c;
          uniform float p;
          varying float intensity;
          void main() {
            vec3 vNormal = normalize(normalMatrix * normal);
            vec3 vNormel = normalize(normalMatrix * viewVector);
            intensity = pow(c - dot(vNormal, vNormel), p);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 glowColor;
          varying float intensity;
          void main() {
            vec4 color = vec4(glowColor, 1.0) * intensity;
            gl_FragColor = color;
          }
        `,
        side: THREE.FrontSide,
        blending: THREE.AdditiveBlending,
        transparent: true
      });

      glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
      glowMesh.position.set(-5, 0, 0);
      glowMesh.layers.enable(bloomLayer);
      scene.add(glowMesh);

      console.log('Text and glow added to scene');
    };

    // Load font and create text geometry
    const fontLoader = new FontLoader();
    fontLoader.load('/font/RobotoMono/fonts/json/Roboto Mono_Regular.json', function (font) {
      createText(font);

      // GUI setup
      const gui = new dat.GUI();
      gui.add(params, 'bloomStrength', 0.0, 3.0).onChange(value => {
        bloomPass.strength = value;
      });
      gui.add(params, 'bloomThreshold', 0.0, 1.0).onChange(value => {
        bloomPass.threshold = value;
      });
      gui.add(params, 'emissiveIntensity', 0.0, 2.0).onChange(value => {
        textMesh.material.emissiveIntensity = value;
      });
      gui.add(params, 'textSize', 0.1, 5.0).onChange(value => {
        createText(font);
      });
      gui.add(params, 'textHeight', 0.01, 1.0).onChange(value => {
        createText(font);
      });
      gui.add(params, 'bevelThickness', 0.01, 0.1).onChange(value => {
        createText(font);
      });
      gui.add(params, 'bevelSize', 0.01, 0.1).onChange(value => {
        createText(font);
      });
      gui.add(params, 'bevelSegments', 1, 10).step(1).onChange(value => {
        createText(font);
      });
      gui.addColor(params, 'textColor').onChange(value => {
        textMesh.material.color.set(value);
      });
      gui.addColor(params, 'emissiveColor').onChange(value => {
        textMesh.material.emissive.set(value);
      });
    });

    // Add grid helper for better visualization
    const gridHelper = new THREE.GridHelper(10, 10);
    scene.add(gridHelper);

    console.log('Grid helper added');

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      // Render scene with bloom
      renderer.render(scene, camera);
      bloomComposer.render();

      controls.update();
    }

    animate();

    console.log('Animation started');

    // Handle window resize
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      bloomComposer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      renderer.dispose();
      bloomComposer.dispose();
    };
  }, []);

  return (
    <div id="animation_container" style={{ width: '100%', height: '100vh' }}></div>
  );
};

export default GoldenThinkerAnimation;
