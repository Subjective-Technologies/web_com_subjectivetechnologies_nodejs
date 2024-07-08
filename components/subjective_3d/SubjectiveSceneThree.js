import * as THREE from 'three';
import SubjectivePersistentObject from './SubjectivePersistentObject';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


class SubjectiveSceneThree extends SubjectivePersistentObject {
  constructor(developerMode = false) {
    super(developerMode);
    this.developerMode = developerMode;
    this.my_objects = [];
    this.threejs_scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    if (this.developerMode) {
      const axesHelper = new THREE.AxesHelper(10);
      this.threejs_scene.add(axesHelper);
      this.addGridHelper();
    }

    this.animate = this.animate.bind(this); // Ensure correct context for 'this'
    requestAnimationFrame(this.animate);
    this.renderer.setAnimationLoop(this.animate);

    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.maxPolarAngle = Math.PI * 0.5;
    controls.minDistance = 5;
    controls.maxDistance = 20;

    

  }

  add_object = (subjective_persistent_object) => {
    this.my_objects.push(subjective_persistent_object);
  }


  addGridHelper = () => {
    const size = 10;
    const divisions = 10;
    const gridHelper = new THREE.GridHelper(size, divisions);
    this.threejs_scene.add(gridHelper);
  }

  test_show_cube = () => {
    if (this.developerMode) {
      this.geometry = new THREE.BoxGeometry(1, 1, 1);
      this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      this.cube = new THREE.Mesh(this.geometry, this.material);
      this.threejs_scene.add(this.cube);
    }
  }

  animate() {
    if (this.developerMode && this.cube) {
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
    }

    this.renderer.render(this.get_threejs_scene(), this.get_threejs_camera());
    //requestAnimationFrame(this.animate); // Continue the animation loop
  }

  get_threejs_scene() {
    return this.threejs_scene;
  }

  get_threejs_camera() {
    return this.camera;
  }

  get_threejs_renderer() {
    return this.renderer;
  }

  
}

export default SubjectiveSceneThree;
