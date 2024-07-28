import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import SubjectivePersistentObject from './SubjectivePersistentObject';

class SubjectiveGlowingText extends SubjectivePersistentObject {
  constructor(scene, text, developerMode = true) {
    super(developerMode);
    this.text = text;
    this.scene = scene;

    // Load font and create text geometry
    const loader = new FontLoader();
    loader.load('font/RobotoMono/fonts/json/Roboto Mono_Regular.json', (font) => {
      const geometry = new TextGeometry(this.text, {
        font: font,
        size: 80,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 8,
        bevelOffset: 0,
        bevelSegments: 5
      });

      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      this.mesh = new THREE.Mesh(geometry, material);
      this.mesh.position.set(0, 0, 0);
      this.scene.add(this.mesh);
    });
  }
}

export default SubjectiveGlowingText;
