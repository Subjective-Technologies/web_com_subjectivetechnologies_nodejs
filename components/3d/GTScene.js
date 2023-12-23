import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

class GTScene {

  constructor(config) {
    
    this.config = config;
    this.three_scene = new THREE.Scene();

    if (typeof window !== 'undefined') {
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.camera.position.z = 5;
      this.controls.target.set(0, 0, 0);
      this.three_scene.add(this.camera);
      if (this.config.innerWidth===undefined && this.config.innerHeight===undefined){
        this.config.innerWidth = window.innerWidth;
        this.config.innerHeight = window.innerHeight;
      }
      this.renderer.setSize(this.config.innerWidth, this.config.innerHeight);
      this.objectInfoArray = [];


      this.addLights();


      if (this.config.bloom_effect!==undefined){
        if (this.config.bloom_effect==true){

          const params = {
            threshold: 0,
            strength: 1,
            radius: 0,
            exposure: 1
          };

          const container = document.getElementById( 'animation_container' );
          this.renderer = new THREE.WebGLRenderer( { antialias: true } );
          this.renderer.setPixelRatio( window.devicePixelRatio );
          this.renderer.setSize( window.innerWidth, window.innerHeight );
          this.renderer.toneMapping = THREE.ReinhardToneMapping;
          container.appendChild( this.renderer.domElement );
          const pointLight = new THREE.PointLight( 0xffffff, 100 );
          this.camera.add( pointLight );
          const renderScene = new RenderPass( this.scene, this.camera );

          const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
          bloomPass.threshold = params.threshold;
          bloomPass.strength = params.strength;
          bloomPass.radius = params.radius;
  
          const outputPass = new OutputPass();
  
          this.composer = new EffectComposer( this.renderer );
          this.composer.addPass( renderScene );
          this.composer.addPass( bloomPass );
          this.composer.addPass( outputPass );
  
                    
          this.renderer.domElement.style.display = 'relative';
          this.renderer.domElement.style.margin = '0';
          const canvas = this.renderer.domElement;
          canvas.style.position = 'absolute'; // Example to make it absolute positioned
          canvas.style.left = '0';
          canvas.style.top = '0';
  

        } else {
 
  


          

          // Instead of document.body.appendChild(this.renderer.domElement);
  
  
          this.renderer.gammaOutput = false;
          const container = document.getElementById('animation_container'); // Make sure this is the ID of your container div
          container.appendChild(this.renderer.domElement);
  
  
  

  
          // check if background set, else a black image is used
          if (this.config.image360Path===undefined){
            this.config['image360Path'] = 'images/360/background_black_4096x2048_360.png';
          }
          this.addBackgroundSphere(this.config.image360Path); // Use the provided 360 image path
          
  
          if (this.config.objPath!==undefined && this.config.material!==undefined){ 
            // Load the .obj file
            this.loadObjModelWithMaterial(this.objPath,this.material);
          } else {
            if (this.config.objPath!==undefined){
              this.loadObjModel(this.config.objPath);
            }
          }
  
          // Load the .obj file
          this.loadObjModelWithMaterial(this.objPath,this.material);
  
          this.controls.addEventListener('change', () => {
            this.updateObjectInfoArray();
            this.printSceneState();
          });
  
  
          document.addEventListener('keydown', (event) => {
            if (event.key === 'S') {
              this.updateObjectInfoArray();
              this.printSceneState();
            } else if (event.key === 'R') {
              const snapshotJSON = prompt('Enter the snapshot JSON:');
              if (snapshotJSON) {
                this.restoreSceneState(snapshotJSON);
              }
            }
          });
  
          this.animate();
        }
  
      }



    }





    }

  animate() {
    requestAnimationFrame(() => this.animate());
    // Add any animations or updates here
    if (this.bloom){      
      this.composer.render();
    } else {
      this.renderer.render(this.three_scene, this.camera);
    }
  }

  add(mesh){
    this.three_scene.add(mesh);

  }

  addLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.three_scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 218);
    pointLight1.position.set(10, 10, 10);
    this.three_scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 500);
    pointLight2.position.set(-10, -10, -10);
    this.three_scene.add(pointLight2);
  }

  addBackgroundSphere(texturePath) {
    const sphereGeometry = new THREE.SphereGeometry(10, 32, 32);
    sphereGeometry.scale(-1, 1, 1);

    const textureLoader = new THREE.TextureLoader();
    const sphereTexture = textureLoader.load(texturePath);

    const sphereMaterial = new THREE.MeshBasicMaterial({ map: sphereTexture });

    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    this.three_scene.add(sphereMesh);
  }

  updateObjectInfoArray() {
    this.objectInfoArray.length = 0;
    
    this.three_scene.children.forEach((object) => {
      if (object instanceof THREE.Mesh) {
        // Collect object information and add to this.objectInfoArray
        // Similar to what you did in your previous code
      }
    });
  }

  printSceneState() {
    // Create a snapshot of the scene's state and print it
    // Similar to what you did in your previous code
  }

  restoreSceneState(sceneStateJSON) {
    // Restore the scene's state from a JSON string
    // Similar to what you did in your previous code
  }

  // Add methods to add custom elements, manage events, etc.
  addElement(elementPath, options = {}) {
    const { texturePath = null, material = null, position = { x: 0, y: 0, z: 0 }, rotation = { x: 0, y: 0, z: 0 } } = options;

    const loader = new OBJLoader();
    loader.load(elementPath, (obj) => {
      obj.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (material) {
            // Apply the custom material if provided
            child.material = material;
          }

          if (texturePath) {
            const textureLoader = new THREE.TextureLoader();
            const customTexture = textureLoader.load(texturePath);

            // Apply the custom texture to the mesh
            child.material.map = customTexture;
          }
        }
      });

      obj.position.set(position.x, position.y, position.z);
      obj.rotation.set(rotation.x, rotation.y, rotation.z);

      this.three_scene.add(obj);
    });
  }
  
  
 // Method to take a snapshot of the current scene state and return it as JSON
  takeSnapshot() {
    const snapshot = {};

    // Iterate over all properties of the Scene object
    for (const prop in this) {
      if (this.hasOwnProperty(prop)) {
        // Check if the property is not a function
        if (typeof this[prop] !== 'function') {
          // Save the property value to the snapshot
          snapshot[prop] = this[prop];
        }
      }
    }

    // Convert the snapshot object to JSON
    return JSON.stringify(snapshot, null, 2);
  }


  loadObjModel(objPath) {
    const loader = new OBJLoader();
    loader.load(objPath, (obj) => {
      // Process the loaded .obj file
      // For example, setting position, scale, etc.
      this.three_scene.add(obj);
    });
  }

  loadObjModelWithMaterial(objPath, material) {
    const loader = new OBJLoader();
    loader.load(objPath, (obj) => {
        obj.traverse((child) => {
            if (child.isMesh) {
                child.material = material || child.material;
            }
        });

        this.three_scene.add(obj);
    });
  }

// ... rest of the Scene class

  

  dispose() {
    // Dispose of geometries, materials, textures, etc.
    this.three_scene.traverse(object => {
      if (!object.isMesh) return;

      object.geometry.dispose();

      if (object.material.isMaterial) {
        this.cleanMaterial(object.material);
      } else {
        // An array of materials
        for (const material of object.material) cleanMaterial(material);
      }
    });

    if (this.renderer) {
      this.renderer.dispose();
    }

    // Additional cleanup if needed
  
  }

  cleanMaterial(material) {
    material.dispose();
  
    // Dispose textures
    for (const key of Object.keys(material)) {
      const value = material[key];
      if (value && typeof value === 'object' && 'minFilter' in value) {
        value.dispose();
      }
    }
  }

  getRenderer(){
    return this.renderer;
  }

  getCamera(){
    return this.camera;
  }

  getThreeScene(){
    return this.three_scene;
  }

  setConfigProperty(key,val){
    this.config[key] = val;
  }


  
}

export default GTScene;

