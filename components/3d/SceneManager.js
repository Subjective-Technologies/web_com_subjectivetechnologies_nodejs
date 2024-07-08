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

export default class SceneManager {
  constructor(container) {
    this.container = container;
    this.clock = new THREE.Clock();
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.toneMapping = THREE.ReinhardToneMapping;
    this.renderer.toneMappingExposure = 1.5;
    this.container.appendChild(this.renderer.domElement);

    this.cameraManager = new CameraManager();
    this.scene.add(this.cameraManager.camera);

    this.controls = new OrbitControls(this.cameraManager.camera, this.renderer.domElement);
    this.controls.target.set(0, 0, 0);
    this.controls.maxPolarAngle = Math.PI * 0.5;
    this.controls.minDistance = 5;
    this.controls.maxDistance = 20;

    this.lightManager = new LightManager(this.scene);

    const renderScene = new RenderPass(this.scene, this.cameraManager.camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.7, 0.5, 0.1);
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(renderScene);
    this.composer.addPass(bloomPass);

    this.modelManager = new ModelManager(this.scene, new THREE.MeshPhysicalMaterial({
      color: 0xFFD700,
      metalness: 1,
      roughness: 0.3,
      clearcoat: 1,
      clearcoatRoughness: 0.1
    }));

    this.animationManager = new AnimationManager(this.cameraManager.camera, this.lightManager.pointLights.concat(this.lightManager.directionalLight));
    this.snapshotManager = new SnapshotManager(this.cameraManager.camera, this.modelManager.model, this.lightManager.pointLights.concat(this.lightManager.directionalLight));
  }

  async init() {
    await this.modelManager.loadModel('3d/all.glb', (model) => {
      this.setupGUI(model);
    });
    this.animate();
  }

  animate = (timestamp) => {
    requestAnimationFrame(this.animate);
    this.composer.render();
    this.controls.update();

    if (this.animationManager.recording && !this.animationManager.recordingPaused) {
      this.animationManager.recordFrame(timestamp);
    }
  };

  setupGUI(model) {
    const gui = new GUI();

    const cameraFolder = gui.addFolder('Camera');
    cameraFolder.add(this.cameraManager.camera.position, 'x', -10, 10).name('Position X');
    cameraFolder.add(this.cameraManager.camera.position, 'y', -10, 10).name('Position Y');
    cameraFolder.add(this.cameraManager.camera.position, 'z', -10, 10).name('Position Z');
    cameraFolder.add(this.cameraManager.camera.rotation, 'x', -Math.PI, Math.PI).name('Rotation X');
    cameraFolder.add(this.cameraManager.camera.rotation, 'y', -Math.PI, Math.PI).name('Rotation Y');
    cameraFolder.add(this.cameraManager.camera.rotation, 'z', -Math.PI, Math.PI).name('Rotation Z');

    const modelFolder = gui.addFolder('Model');
    modelFolder.add(model.position, 'x', -10, 10).name('Position X');
    modelFolder.add(model.position, 'y', -10, 10).name('Position Y');
    modelFolder.add(model.position, 'z', -10, 10).name('Position Z');
    modelFolder.add(model.rotation, 'x', -Math.PI, Math.PI).name('Rotation X');
    modelFolder.add(model.rotation, 'y', -Math.PI, Math.PI).name('Rotation Y');
    modelFolder.add(model.rotation, 'z', -Math.PI, Math.PI).name('Rotation Z');

    const materialFolder = gui.addFolder('Material');
    materialFolder.add(model.material, 'metalness', 0, 1).name('Metalness');
    materialFolder.add(model.material, 'roughness', 0, 1).name('Roughness');
    materialFolder.add(model.material, 'clearcoat', 0, 1).name('Clearcoat');
    materialFolder.add(model.material, 'clearcoatRoughness', 0, 1).name('Clearcoat Roughness');

    this.lightManager.pointLights.forEach((light, index) => {
      const pointLightFolder = gui.addFolder(`Point Light ${index + 1}`);
      pointLightFolder.add(light.position, 'x', -10, 10).name('Position X');
      pointLightFolder.add(light.position, 'y', -10, 10).name('Position Y');
      pointLightFolder.add(light.position, 'z', -10, 10).name('Position Z');
      pointLightFolder.addColor(light, 'color').name('Color');
      pointLightFolder.add(light, 'intensity', 0, 10).name('Intensity');
    });

    const directionalLightFolder = gui.addFolder('Directional Light');
    directionalLightFolder.add(this.lightManager.directionalLight.position, 'x', -10, 10).name('Position X');
    directionalLightFolder.add(this.lightManager.directionalLight.position, 'y', -10, 10).name('Position Y');
    directionalLightFolder.add(this.lightManager.directionalLight.position, 'z', -10, 10).name('Position Z');
    directionalLightFolder.addColor(this.lightManager.directionalLight, 'color').name('Color');
    directionalLightFolder.add(this.lightManager.directionalLight, 'intensity', 0, 10).name('Intensity');

    const textureFolder = gui.addFolder('Textures');
    const textures = { model: '3d/all.glb' };
    textureFolder.add(textures, 'model').name('Model Texture').onChange((value) => {
      const textureLoader = new THREE.TextureLoader();
      const modelTexture = textureLoader.load(value);
      model.traverse((child) => {
        if (child.isMesh) {
          child.material.map = modelTexture;
        }
      });
    });

    const snapshotFolder = gui.addFolder('Snapshot');
    let snapshotText = this.snapshotManager.takeSnapshot();

    snapshotFolder.add({ takeSnapshot: () => snapshotText = this.snapshotManager.takeSnapshot() }, 'takeSnapshot').name('Take Snapshot');
    snapshotFolder.add({ setSnapshot: () => this.snapshotManager.setSnapshot(snapshotText) }, 'setSnapshot').name('Set Snapshot');

    const textarea = document.createElement('textarea');
    textarea.style.width = '100%';
    textarea.style.height = '200px';
    textarea.value = snapshotText;
    textarea.oninput = (e) => snapshotText = e.target.value;
    snapshotFolder.domElement.appendChild(textarea);

    if (DEVELOPER_MODE) {
      const animationFolder = gui.addFolder('Animation');
      animationFolder.add({ startRecording: () => this.animationManager.startRecording() }, 'startRecording').name('Start Recording (Shift+R)');
      animationFolder.add({ stopRecording: () => this.animationManager.stopRecording() }, 'stopRecording').name('Stop Recording (Shift+S)');
      animationFolder.add({ pauseRecording: () => this.animationManager.pauseRecording() }, 'pauseRecording').name('Pause Recording (Shift+P)');
      animationFolder.add({ continueRecording: () => this.animationManager.continueRecording() }, 'continueRecording').name('Continue Recording (Shift+C)');
      animationFolder.add({ playAnimation: () => this.animationManager.playAnimation() }, 'playAnimation').name('Play Animation (Shift+A)');
    }
  }
}
