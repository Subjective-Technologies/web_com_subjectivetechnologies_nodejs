import * as THREE from 'three';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import SubjectivePersistentObject from './SubjectivePersistentObject';

class GoldenThinkerStatue extends SubjectivePersistentObject {
  constructor(subjective_scene, developerMode = false) {
    super(developerMode);
    this.subjective_scene = subjective_scene;

    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xFFD700,
      metalness: 1,
      roughness: 0.3,
      clearcoat: 1,
      clearcoatRoughness: 0.1
    });

    const renderScene = new RenderPass(this.subjective_scene.get_threejs_scene(), this.subjective_scene.get_threejs_camera());
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5, // Strength
      0.4, // Radius
      0.85 // Threshold
    );
    const composer = new EffectComposer(this.subjective_scene.get_threejs_renderer());
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    const outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), this.subjective_scene.get_threejs_scene(), this.subjective_scene.get_threejs_camera());
    outlinePass.edgeStrength = 2.5;
    outlinePass.edgeGlow = 0.0;
    outlinePass.edgeThickness = 1.0;
    outlinePass.pulsePeriod = 0;
    outlinePass.visibleEdgeColor.set('#ffffff');
    outlinePass.hiddenEdgeColor.set('#190a05');
    composer.addPass(outlinePass);

    function setMaterial(object, material) {
      object.traverse((child) => {
        if (child.isMesh) {
          child.material = material;
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }

    new GLTFLoader().load('3d/all.glb', (gltf) => {
      let model = gltf.scene; // THREE.Group
      let main_scene = this.subjective_scene.get_threejs_scene(); // Your existing Three.js scene

      setMaterial(model, goldMaterial);
      model.rotation.set(0, -Math.PI / 2, 0);
      model.position.set(0, -2, 0);
      main_scene.add(model); // Add the loaded model to your main scene

      console.log("Model loaded and added to the scene"); // Debug statement
    });


  }
}

export default GoldenThinkerStatue;
