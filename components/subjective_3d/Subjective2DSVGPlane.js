console.log('Loading Subjective2DSVGPlane.js');
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import SubjectivePersistentObject from './SubjectivePersistentObject';
import trackProperties from '../developermode/trackProperties';

class Subjective2DSVGPlane extends SubjectivePersistentObject {

  constructor(subjective_scene, developerMode = false) {
    super(developerMode);
    this.subjective_scene = subjective_scene;

    const initialState = {
      svgGroup: null
    };

    const proxy = trackProperties(initialState, this.constructor.name);
    Object.assign(this, proxy);

    const loader = new SVGLoader();
    loader.load('/images/animations/svg/rotating-star.svg', (data) => {
      const paths = data.paths;
      this.svgGroup = new THREE.Group();

      paths.forEach((path) => {
        const material = trackProperties(new THREE.MeshBasicMaterial({
          color: path.color,
          side: THREE.DoubleSide,
          depthWrite: false,
          transparent: true,
          opacity: 1.0
        }), 'SVGMaterial');

        const shapes = SVGLoader.createShapes(path);
        shapes.forEach((shape) => {
          const geometry = trackProperties(new THREE.ShapeGeometry(shape), 'SVGShapeGeometry');
          const mesh = trackProperties(new THREE.Mesh(geometry, material), 'SVGMesh');
          this.svgGroup.add(mesh);
        });
      });

      this.svgGroup.scale.set(0.1, 0.1, 0.1);
      this.svgGroup.position.set(0, 0, -5); // Position it in the background
      this.subjective_scene.get_threejs_scene().add(this.svgGroup);

      console.log("SVG loaded and added to the scene"); // Debug statement
    });
  }


  getObject3D() {
    return this.svgGroup;
  }

}

export default Subjective2DSVGPlane;