import * as THREE from 'three';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
import SubjectivePersistentObject from './SubjectivePersistentObject';

class Subjective2DSVGPlaneCSS3D extends SubjectivePersistentObject {
  constructor(subjective_scene, developerMode = false) {
    super(developerMode);
    this.subjective_scene = subjective_scene;

    this.loadSVGPromise = new Promise((resolve, reject) => {
      const svgContainer = document.createElement('div');
      svgContainer.style.width = '400px'; // Increase size if needed
      svgContainer.style.height = '400px'; // Increase size if needed
      svgContainer.style.pointerEvents = 'none'; // Make sure it does not block interactions

      fetch('/images/animations/svg/text_animation.svg')
        .then((response) => response.text())
        .then((svgContent) => {
          svgContainer.innerHTML = svgContent;

          this.object3D = new CSS3DObject(svgContainer);
          this.object3D.position.set(0, 0, 0); // Default position
          this.subjective_scene.get_threejs_scene().add(this.object3D);

          console.log('SVG animation loaded and added to the scene'); // Debug statement
          resolve();
        })
        .catch((error) => {
          console.error('An error happened loading the SVG', error);
          reject(error);
        });
    });
  }

  getObject3D() {
    return this.object3D;
  }

  onLoad() {
    return this.loadSVGPromise;
  }
}

export default Subjective2DSVGPlaneCSS3D;
