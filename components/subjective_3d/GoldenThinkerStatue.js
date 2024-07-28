import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import SubjectivePersistentObject from './SubjectivePersistentObject';

class GoldenThinkerStatue extends SubjectivePersistentObject {
  constructor(scene, materialConfig) {
    super(true); // Assuming developer mode is always true for this class
    this.scene = scene;
    this.materialConfig = materialConfig;

    this.material = new THREE.MeshPhysicalMaterial(this.materialConfig);

    this.loader = new GLTFLoader();
    this.loader.load('3d/all.glb', (gltf) => {
      this.model = gltf.scene;
      this.model.traverse((child) => {
        if (child.isMesh) {
          child.material = this.material;
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      this.model.position.set(0, -2, 0);
      this.scene.add(this.model);
    });
  }

  getObject3D() {
    return this.model;
  }

  getMaterial() {
    return this.material;
  }
}

export default GoldenThinkerStatue;
