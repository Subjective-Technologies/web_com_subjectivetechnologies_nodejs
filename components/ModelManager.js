import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class ModelManager {
  constructor(scene) {
    this.scene = scene;
    this.model = null;
    this.material = null;
  }

  init() {
    const loader = new GLTFLoader();
    loader.load('3d/all.glb', (gltf) => {
      this.model = gltf.scene;
      this.model.rotation.set(0, -Math.PI / 2, 0);
      this.model.position.set(0, -2, 0);
      this.scene.add(this.model);
    });
  }

  setMaterial(material) {
    this.material = material;
    if (this.model) {
      this.model.traverse((child) => {
        if (child.isMesh) {
          child.material = material;
        }
      });
    }
  }
}

export default ModelManager;
