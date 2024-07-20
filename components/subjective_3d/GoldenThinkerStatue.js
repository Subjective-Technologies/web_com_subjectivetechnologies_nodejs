import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import SubjectivePersistentObject from './SubjectivePersistentObject';
import trackProperties from '../developermode/trackProperties';

class GoldenThinkerStatue extends SubjectivePersistentObject {
  constructor(subjective_scene, developerMode = false) {
    super(developerMode);
    this.subjective_scene = subjective_scene;

    // Track properties
    const initialState = {
      object3D: null,
      goldMaterial: {
        color: 0xFFD700,
        metalness: 1,
        roughness: 0.3,
        clearcoat: 1,
        clearcoatRoughness: 0.1
      }
    };

    const proxy = trackProperties(initialState, this.constructor.name);
    Object.assign(this, proxy);

    this.loadModelPromise = new Promise((resolve, reject) => {
      console.log('Loading model...');
      this.goldMaterial = new THREE.MeshPhysicalMaterial(this.goldMaterial);

      new GLTFLoader().load('3d/all.glb', (gltf) => {
        this.object3D = gltf.scene; // Store the reference to the loaded model
        this.object3D.traverse((child) => {
          if (child.isMesh) {
            console.log('Processing mesh:', child);
            child.material = this.goldMaterial;
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        this.object3D.rotation.set(0, -Math.PI / 2, 0);
        this.object3D.position.set(0, -2, 0);
        this.subjective_scene.get_threejs_scene().add(this.object3D);

        console.log('Model loaded and added to the scene', this.object3D); // Debug statement
        resolve();
      }, undefined, reject);
    });
  }

  getObject3D() {
    return this.object3D;
  }

  onLoad() {
    return this.loadModelPromise;
  }
}

export default GoldenThinkerStatue;
