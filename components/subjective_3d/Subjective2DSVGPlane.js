import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import SubjectivePersistentObject from './SubjectivePersistentObject';

class Subjective2DSVGPlane extends SubjectivePersistentObject {
  constructor(subjective_scene, developerMode = false) {
    super(developerMode);
    this.subjective_scene = subjective_scene;

    const loader = new SVGLoader();
    loader.load('/images/animations/svg/rotating-star.svg', (data) => {
      const paths = data.paths;
      const svgGroup = new THREE.Group();

      paths.forEach((path) => {
        const material = new THREE.MeshBasicMaterial({
          color: path.color,
          side: THREE.DoubleSide,
          depthWrite: false,
          transparent: true,
          opacity: 1.0
        });

        const shapes = SVGLoader.createShapes(path);
        shapes.forEach((shape) => {
          const geometry = new THREE.ShapeGeometry(shape);
          const mesh = new THREE.Mesh(geometry, material);
          svgGroup.add(mesh);
        });
      });

      svgGroup.scale.set(0.1, 0.1, 0.1);
      svgGroup.position.set(0, 0, -5); // Position it in the background
      this.subjective_scene.get_threejs_scene().add(svgGroup);

      console.log("SVG loaded and added to the scene"); // Debug statement
    });
  }
}

export default Subjective2DSVGPlane;
