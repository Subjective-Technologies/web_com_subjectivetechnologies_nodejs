import os

# Define the content for SubjectiveVideoPlane.js with the updated material
subjective_video_plane_content = """import * as THREE from 'three';

class SubjectiveVideoPlane {
  constructor(scene, videoUrl, developerMode) {
    this.scene = scene.get_threejs_scene();
    this.developerMode = developerMode;
    this.videoUrl = videoUrl;
    this.videoElement = document.createElement('video');
    this.videoElement.src = this.videoUrl;
    this.videoElement.loop = true;
    this.videoElement.muted = true;
    this.videoElement.play();

    const texture = new THREE.VideoTexture(this.videoElement);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide, // Ensure the material is rendered on both sides
    });

    const geometry = new THREE.PlaneGeometry(4, 2);
    this.mesh = new THREE.Mesh(geometry, material);

    this.mesh.position.set(0, 0, 0);
    this.mesh.rotation.y = Math.PI; // Rotate the plane to face the correct direction
  }

  getObject3D() {
    return this.mesh;
  }

  onLoad() {
    return new Promise((resolve) => {
      this.videoElement.oncanplaythrough = () => resolve();
    });
  }
}

export default SubjectiveVideoPlane;
"""

# Write the content to SubjectiveVideoPlane.js
file_path = 'components/subjective_3d/SubjectiveVideoPlane.js'

# Ensure the directory exists
os.makedirs(os.path.dirname(file_path), exist_ok=True)

# Write the file
with open(file_path, 'w') as file:
    file.write(subjective_video_plane_content)

print(f'Patch applied: {file_path} has been updated.')
