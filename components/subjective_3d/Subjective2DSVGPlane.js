import * as THREE from 'three';
import SubjectivePersistentObject from './SubjectivePersistentObject';

class Subjective2DSVGPlane extends SubjectivePersistentObject {
  constructor(subjective_scene, svgPath, developerMode = false) {
    super(developerMode);
    this.subjective_scene = subjective_scene;

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(svgPath);

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
    });

    const geometry = new THREE.PlaneGeometry(4, 4);
    this.mesh = new THREE.Mesh(geometry, material);

    this.subjective_scene.get_threejs_scene().add(this.mesh);

    console.log("SVG texture loaded and added to the scene"); // Debug statement
  }

  getObject3D() {
    return this.mesh;
  }
}

export default Subjective2DSVGPlane;
