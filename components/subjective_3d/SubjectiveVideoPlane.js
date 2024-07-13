import * as THREE from 'three';
import SubjectivePersistentObject from './SubjectivePersistentObject';

class SubjectiveVideoPlane extends SubjectivePersistentObject {
  constructor(subjective_scene, videoPath, developerMode = false) {
    super(developerMode);
    this.subjective_scene = subjective_scene;

    // Create a video element
    const video = document.createElement('video');
    video.src = videoPath;
    video.loop = true; // Loop the video
    video.muted = true; // Mute the video
    video.play(); // Start playing the video

    // Create a texture from the video element
    const videoTexture = new THREE.VideoTexture(video);

    // Create a material using the video texture
    const material = new THREE.MeshBasicMaterial({
      map: videoTexture,
      side: THREE.DoubleSide,
    });

    // Create a plane geometry and apply the material
    const geometry = new THREE.PlaneGeometry(16, 9);
    this.mesh = new THREE.Mesh(geometry, material);

    // Scale and position the plane
    this.mesh.scale.set(0.1, 0.1, 0.1);
    this.mesh.position.set(0, 0, -5); // Position it in the background

    // Add the mesh to the scene
    this.subjective_scene.get_threejs_scene().add(this.mesh);

    console.log("Video plane loaded and added to the scene"); // Debug statement
  }

  getObject3D() {
    return this.mesh;
  }

  onLoad() {
    return new Promise((resolve) => {
      resolve();
    });
  }
}

export default SubjectiveVideoPlane;
