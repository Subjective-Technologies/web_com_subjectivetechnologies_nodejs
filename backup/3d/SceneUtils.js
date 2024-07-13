import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

export function initRenderer(container) {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  return renderer;
}

export function initCamera(scene) {
  const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
  camera.position.set(8, 4, 8);
  scene.add(camera);
  return camera;
}

export function initLights(scene) {
  const pointLights = [];
  for (let i = 0; i < 4; i++) {
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set((i % 2) * 10 - 5, 10, (i < 2 ? 1 : -1) * 5);
    pointLights.push(light);
    scene.add(light);
  }
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(10, 20, 10);
  scene.add(directionalLight);
  return { pointLights, directionalLight };
}

export function initComposer(renderer, scene, camera, type = 'bloom') {
  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  if (type === 'bloom') {
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0;
    bloomPass.strength = 1.5; // Bloom strength
    bloomPass.radius = 0; // Bloom radius
    composer.addPass(bloomPass);
  }

  const finalPass = new ShaderPass(new THREE.ShaderMaterial({
    uniforms: { baseTexture: { value: null }, bloomTexture: { value: composer.renderTarget2.texture } },
    vertexShader: /* glsl */`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */`
      uniform sampler2D baseTexture;
      uniform sampler2D bloomTexture;
      varying vec2 vUv;
      void main() {
        gl_FragColor = (texture2D(baseTexture, vUv) + vec4(1.0) * texture2D(bloomTexture, vUv));
      }
    `,
    defines: {}
  }), 'baseTexture');
  finalPass.needsSwap = true;
  composer.addPass(finalPass);

  return composer;
}

export async function initModel(scene) {
  const loader = new GLTFLoader();
  try {
    const gltf = await loader.loadAsync('3d/all.glb');
    const model = gltf.scene;
    scene.add(model);
    return model;
  } catch (error) {
    console.error('Error loading model:', error);
  }
}

export function setupGUI(model, camera, pointLights, directionalLight, startRecording, stopRecording, pauseRecording, continueRecording, playAnimation) {
  // Implement the GUI setup here, if necessary
}
