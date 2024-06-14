import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import GUI from 'lil-gui';
import CameraManager from './CameraManager';
import LightManager from './LightManager';
import ModelManager from './ModelManager';
import AnimationManager from './AnimationManager';
import SnapshotManager from './SnapshotManager';

const DEVELOPER_MODE = true;

const GoldenThinkerAnimation = () => {

  const model_loaded = false;

  useEffect(() => {
    let composer, renderer;
    const scene = new THREE.Scene();

    const cameraManager = new CameraManager(scene);
    const lightManager = new LightManager(scene);
    const modelManager = new ModelManager(scene);
    const animationManager = new AnimationManager(cameraManager, lightManager);
    const snapshotManager = new SnapshotManager(cameraManager, modelManager, lightManager);

    async function init() {
      const container = document.getElementById('animation_container');
      const clock = new THREE.Clock();

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.toneMapping = THREE.ReinhardToneMapping;
      renderer.toneMappingExposure = 1.5;
      container.appendChild(renderer.domElement);

      cameraManager.init();
      lightManager.init();
      modelManager.init();
      scene.add(cameraManager.camera);

      const controls = new OrbitControls(cameraManager.camera, renderer.domElement);
      controls.target.set(0, 0, 0);
      controls.maxPolarAngle = Math.PI * 0.5;
      controls.minDistance = 5;
      controls.maxDistance = 20;

      const renderScene = new RenderPass(scene, cameraManager.camera);
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.7, 0.5, 0.1);
      const outputPass = new EffectComposer(renderer);

      composer = new EffectComposer(renderer);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);
      composer.addPass(outputPass);

      const video = document.createElement('video');
      video.src = '3d/textures/video_texture_360.mp4';
      video.crossOrigin = 'anonymous';
      video.loop = true;
      video.muted = true;
      video.play();

      const videoTexture = new THREE.VideoTexture(video);
      const sphereGeometry = new THREE.SphereGeometry(3, 32, 32);
      const sphereMaterial = new THREE.MeshBasicMaterial({ map: videoTexture, side: THREE.DoubleSide });
      const videoSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      videoSphere.position.set(10, 3, 0);
      scene.add(videoSphere);

      const textureLoader = new THREE.TextureLoader();
      const goldMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xFFD700,
        metalness: 1,
        roughness: 0.3,
        clearcoat: 1,
        clearcoatRoughness: 0.1
      });

      new GLTFLoader().load('3d/all.glb', (gltf) => {
        if (!GoldenThinkerAnimation.model_loaded){
            console.log('model was loaded');
            GoldenThinkerAnimation.model_loaded = true;              
            modelManager.model = gltf.scene;
            modelManager.setMaterial(goldMaterial);
            scene.add(modelManager.model);
            animate();
            setSceneSettings();

            if (DEVELOPER_MODE) {
              setupGUI();
            }
      }
      });

      function animate() {
        requestAnimationFrame(animate);
        composer.render();
        controls.update();
        animationManager.record(clock);
      }

      window.addEventListener('resize', onWindowResize);
    }

    function setupGUI() {
      const gui = new GUI();

      // Camera Controls
      const cameraFolder = gui.addFolder('Camera');
      cameraFolder.add(cameraManager.camera.position, 'x', -10, 10).name('Position X');
      cameraFolder.add(cameraManager.camera.position, 'y', -10, 10).name('Position Y');
      cameraFolder.add(cameraManager.camera.position, 'z', -10, 10).name('Position Z');
      cameraFolder.add(cameraManager.camera.rotation, 'x', -Math.PI, Math.PI).name('Rotation X');
      cameraFolder.add(cameraManager.camera.rotation, 'y', -Math.PI, Math.PI).name('Rotation Y');
      cameraFolder.add(cameraManager.camera.rotation, 'z', -Math.PI, Math.PI).name('Rotation Z');

      // Model Controls
      const modelFolder = gui.addFolder('Model');
      modelFolder.add(modelManager.model.position, 'x', -10, 10).name('Position X');
      modelFolder.add(modelManager.model.position, 'y', -10, 10).name('Position Y');
      modelFolder.add(modelManager.model.position, 'z', -10, 10).name('Position Z');
      modelFolder.add(modelManager.model.rotation, 'x', -Math.PI, Math.PI).name('Rotation X');
      modelFolder.add(modelManager.model.rotation, 'y', -Math.PI, Math.PI).name('Rotation Y');
      modelFolder.add(modelManager.model.rotation, 'z', -Math.PI, Math.PI).name('Rotation Z');

      // Material Controls
      const materialFolder = gui.addFolder('Material');
      materialFolder.add(modelManager.material, 'metalness', 0, 1).name('Metalness');
      materialFolder.add(modelManager.material, 'roughness', 0, 1).name('Roughness');
      materialFolder.add(modelManager.material, 'reflectivity', 0, 1).name('Reflectivity');
      materialFolder.add(modelManager.material, 'clearcoat', 0, 1).name('Clearcoat');
      materialFolder.add(modelManager.material, 'clearcoatRoughness', 0, 1).name('Clearcoat Roughness');

      // Light Controls
      const pointLight1Folder = gui.addFolder('Point Light 1');
      pointLight1Folder.add(lightManager.pointLights[0].position, 'x', -10, 10).name('Position X');
      pointLight1Folder.add(lightManager.pointLights[0].position, 'y', -10, 10).name('Position Y');
      pointLight1Folder.add(lightManager.pointLights[0].position, 'z', -10, 10).name('Position Z');
      pointLight1Folder.addColor(lightManager.pointLights[0], 'color').name('Color');
      pointLight1Folder.add(lightManager.pointLights[0], 'intensity', 0, 10).name('Intensity');

      const pointLight2Folder = gui.addFolder('Point Light 2');
      pointLight2Folder.add(lightManager.pointLights[1].position, 'x', -10, 10).name('Position X');
      pointLight2Folder.add(lightManager.pointLights[1].position, 'y', -10, 10).name('Position Y');
      pointLight2Folder.add(lightManager.pointLights[1].position, 'z', -10, 10).name('Position Z');
      pointLight2Folder.addColor(lightManager.pointLights[1], 'color').name('Color');
      pointLight2Folder.add(lightManager.pointLights[1], 'intensity', 0, 10).name('Intensity');

      const pointLight3Folder = gui.addFolder('Point Light 3');
      pointLight3Folder.add(lightManager.pointLights[2].position, 'x', -10, 10).name('Position X');
      pointLight3Folder.add(lightManager.pointLights[2].position, 'y', -10, 10).name('Position Y');
      pointLight3Folder.add(lightManager.pointLights[2].position, 'z', -10, 10).name('Position Z');
      pointLight3Folder.addColor(lightManager.pointLights[2], 'color').name('Color');
      pointLight3Folder.add(lightManager.pointLights[2], 'intensity', 0, 10).name('Intensity');

      const pointLight4Folder = gui.addFolder('Point Light 4');
      pointLight4Folder.add(lightManager.pointLights[3].position, 'x', -10, 10).name('Position X');
      pointLight4Folder.add(lightManager.pointLights[3].position, 'y', -10, 10).name('Position Y');
      pointLight4Folder.add(lightManager.pointLights[3].position, 'z', -10, 10).name('Position Z');
      pointLight4Folder.addColor(lightManager.pointLights[3], 'color').name('Color');
      pointLight4Folder.add(lightManager.pointLights[3], 'intensity', 0, 10).name('Intensity');

      const directionalLightFolder = gui.addFolder('Directional Light');
      directionalLightFolder.add(lightManager.directionalLight.position, 'x', -10, 10).name('Position X');
      directionalLightFolder.add(lightManager.directionalLight.position, 'y', -10, 10).name('Position Y');
      directionalLightFolder.add(lightManager.directionalLight.position, 'z', -10, 10).name('Position Z');
      directionalLightFolder.addColor(lightManager.directionalLight, 'color').name('Color');
      directionalLightFolder.add(lightManager.directionalLight, 'intensity', 0, 10).name('Intensity');

      // Animation Controls
      const animationFolder = gui.addFolder('Animation');
      animationFolder.add({ startRecording: animationManager.startRecording }, 'startRecording').name('Start Recording (Shift+R)');
      animationFolder.add({ stopRecording: animationManager.stopRecording }, 'stopRecording').name('Stop Recording (Shift+S)');
      animationFolder.add({ pauseRecording: animationManager.pauseRecording }, 'pauseRecording').name('Pause Recording (Shift+P)');
      animationFolder.add({ continueRecording: animationManager.continueRecording }, 'continueRecording').name('Continue Recording (Shift+C)');
      animationFolder.add({ playAnimation: animationManager.playAnimation }, 'playAnimation').name('Play Animation (Shift+A)');

      // Snapshot Controls
      const snapshotFolder = gui.addFolder('Snapshot');

      // Remove the incorrectly added textarea from lil-gui
      while (snapshotFolder.domElement.querySelector('li:last-child')) {
        snapshotFolder.domElement.removeChild(snapshotFolder.domElement.querySelector('li:last-child'));
      }

      // Create a container div for the textarea and buttons
      const snapshotContainer = document.createElement('div');
      snapshotContainer.style.padding = '10px';
      snapshotContainer.style.width = '100%';
      snapshotContainer.style.display = 'flex';
      snapshotContainer.style.flexDirection = 'column';

      // Create the textarea element
      const snapshotTextarea = document.createElement('textarea');
      snapshotTextarea.rows = 5;
      snapshotTextarea.cols = 50;
      snapshotTextarea.style.width = '100%';
      snapshotTextarea.style.height = '100px';

      // Create Take Snapshot button
      const takeSnapshotButton = document.createElement('button');
      takeSnapshotButton.textContent = 'Take Snapshot';
      takeSnapshotButton.onclick = () => {
        const snapshot = snapshotManager.takeSnapshot();
        snapshotTextarea.value = JSON.stringify(snapshot, null, 2);
      };

      // Create Set Snapshot button
      const setSnapshotButton = document.createElement('button');
      setSnapshotButton.textContent = 'Set Snapshot';
      setSnapshotButton.onclick = () => {
        const snapshot = JSON.parse(snapshotTextarea.value);
        snapshotManager.setSnapshot(snapshot);
      };

      // Append textarea and buttons to the container
      snapshotContainer.appendChild(snapshotTextarea);
      snapshotContainer.appendChild(takeSnapshotButton);
      snapshotContainer.appendChild(setSnapshotButton);

      // Append the container to the Snapshot folder
      snapshotFolder.domElement.appendChild(snapshotContainer);
    }

    function setSceneSettings() {
      const settings = {
        camera: {
          position: { x: 8, y: 4, z: 8 },
          rotation: { x: 0, y: 0, z: 0 }
        },
        model: {
          position: { x: 0, y: -2, z: 0 },
          rotation: { x: 0, y: -Math.PI / 2, z: 0 }
        },
        lights: [
          { type: "PointLight", position: { x: 5, y: 10, z: 5 }, color: 0xffffff, intensity: 1.5 },
          { type: "PointLight2", position: { x: -5, y: 10, z: -5 }, color: 0xffffff, intensity: 1.5 },
          { type: "PointLight3", position: { x: 5, y: -10, z: -5 }, color: 0xffffff, intensity: 1.5 },
          { type: "PointLight4", position: { x: -5, y: -10, z: 5 }, color: 0xffffff, intensity: 1.5 },
          { type: "DirectionalLight", position: { x: 10, y: 20, z: 10 }, color: 0xffffff, intensity: 1.5 }
        ]
      };
      snapshotManager.setSnapshot(settings);
    }

    function onWindowResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      cameraManager.camera.aspect = width / height;
      cameraManager.camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    }

    init();
  }, []);

  return <div id="animation_container" />;
};

export default GoldenThinkerAnimation;
