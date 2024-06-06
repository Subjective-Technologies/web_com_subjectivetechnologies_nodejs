import * as THREE from 'three';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import GUI from 'lil-gui';

export function initRenderer(container) {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ReinhardToneMapping;
  renderer.toneMappingExposure = 1.5;
  container.appendChild(renderer.domElement);
  return renderer;
}

export function initCamera(scene) {
  const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
  camera.position.set(8, 4, 8); // Adjusted camera position for better view
  scene.add(camera);
  return camera;
}

export function initComposer(renderer, scene, camera) {
  const renderScene = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.7, 0.5, 0.1); // Softer bloom effect
  const outputPass = new OutputPass();

  const composer = new EffectComposer(renderer);
  composer.addPass(renderScene);
  composer.addPass(bloomPass);
  composer.addPass(outputPass);

  return composer;
}

export function initLights(scene) {
  const pointLights = [
    new THREE.PointLight(0xffffff, 1.5, 0, 0),
    new THREE.PointLight(0xffffff, 1.5, 0, 0),
    new THREE.PointLight(0xffffff, 1.5, 0, 0),
    new THREE.PointLight(0xffffff, 1.5, 0, 0),
  ];
  
  pointLights[0].position.set(5, 10, 5);
  pointLights[1].position.set(-5, 10, -5);
  pointLights[2].position.set(5, -10, -5);
  pointLights[3].position.set(-5, -10, 5);

  pointLights.forEach(light => scene.add(light));

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
  directionalLight.position.set(10, 20, 10);
  scene.add(directionalLight);

  return { pointLights, directionalLight };
}

export function initModel(scene) {
  return new Promise((resolve) => {
    const textureLoader = new THREE.TextureLoader();
    const diffuseTexture = textureLoader.load('3d/textures/Avellana_Diffuse.png');
    const glossinessTexture = textureLoader.load('3d/textures/Avellana_Glossiness.png');
    const heightTexture = textureLoader.load('3d/textures/Avellana_Height.png');
    const normalTexture = textureLoader.load('3d/textures/Avellana_Normal.png');
    const specularTexture = textureLoader.load('3d/textures/Avellana_Specular.png');

    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xFFD700, // Gold color
      metalness: 1,
      roughness: 0.3,
      clearcoat: 1,
      clearcoatRoughness: 0.1
    });

    new GLTFLoader().load('3d/all.glb', function (gltf) {
      const model = gltf.scene;
      setMaterial(model, goldMaterial);
      model.rotation.set(0, -Math.PI / 2, 0);
      model.position.set(0, -2, 0);
      scene.add(model);
      resolve(model);
    });
  });
}

export function setMaterial(object, material) {
  object.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
}

export function setupGUI(model, camera, pointLights, directionalLight, startRecording, stopRecording, pauseRecording, continueRecording, playAnimation) {
  const gui = new GUI();

  const cameraFolder = gui.addFolder('Camera');
  cameraFolder.add(camera.position, 'x', -10, 10).name('Position X');
  cameraFolder.add(camera.position, 'y', -10, 10).name('Position Y');
  cameraFolder.add(camera.position, 'z', -10, 10).name('Position Z');
  cameraFolder.add(camera.rotation, '_x', -Math.PI, Math.PI).name('Rotation X');
  cameraFolder.add(camera.rotation, '_y', -Math.PI, Math.PI).name('Rotation Y');
  cameraFolder.add(camera.rotation, '_z', -Math.PI, Math.PI).name('Rotation Z');

  const modelFolder = gui.addFolder('Model');
  modelFolder.add(model.position, 'x', -10, 10).name('Position X');
  modelFolder.add(model.position, 'y', -10, 10).name('Position Y');
  modelFolder.add(model.position, 'z', -10, 10).name('Position Z');
  modelFolder.add(model.rotation, '_x', -Math.PI, Math.PI).name('Rotation X');
  modelFolder.add(model.rotation, '_y', -Math.PI, Math.PI).name('Rotation Y');
  modelFolder.add(model.rotation, '_z', -Math.PI, Math.PI).name('Rotation Z');

  const materialFolder = gui.addFolder('Material');
  materialFolder.add(model.children[0].material, 'metalness', 0, 1).name('Metalness');
  materialFolder.add(model.children[0].material, 'roughness', 0, 1).name('Roughness');
  materialFolder.add(model.children[0].material, 'reflectivity', 0, 1).name('Reflectivity');
  materialFolder.add(model.children[0].material, 'clearcoat', 0, 1).name('Clearcoat');
  materialFolder.add(model.children[0].material, 'clearcoatRoughness', 0, 1).name('Clearcoat Roughness');

  const pointLightFolders = pointLights.map((light, index) => {
    const folder = gui.addFolder(`Point Light ${index + 1}`);
    folder.add(light.position, 'x', -10, 10).name('Position X');
    folder.add(light.position, 'y', -10, 10).name('Position Y');
    folder.add(light.position, 'z', -10, 10).name('Position Z');
    folder.addColor(light, 'color').name('Color');
    folder.add(light, 'intensity', 0, 10).name('Intensity');
    return folder;
  });

  const directionalLightFolder = gui.addFolder('Directional Light');
  directionalLightFolder.add(directionalLight.position, 'x', -10, 10).name('Position X');
  directionalLightFolder.add(directionalLight.position, 'y', -10, 10).name('Position Y');
  directionalLightFolder.add(directionalLight.position, 'z', -10, 10).name('Position Z');
  directionalLightFolder.addColor(directionalLight, 'color').name('Color');
  directionalLightFolder.add(directionalLight, 'intensity', 0, 10).name('Intensity');

  const animationFolder = gui.addFolder('Animation');
  animationFolder.add({ startRecording }, 'startRecording').name('Start Recording (Shift+R)');
  animationFolder.add({ stopRecording }, 'stopRecording').name('Stop Recording (Shift+S)');
  animationFolder.add({ pauseRecording }, 'pauseRecording').name('Pause Recording (Shift+P)');
  animationFolder.add({ continueRecording }, 'continueRecording').name('Continue Recording (Shift+C)');
  animationFolder.add({ playAnimation: () => playAnimation(1, camera, pointLights, directionalLight) }, 'playAnimation').name('Play Animation (Shift+A)');
}
