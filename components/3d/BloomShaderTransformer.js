import * as THREE from 'three';
import { BloomEffect, EffectComposer, EffectPass } from 'postprocessing';

class BloomShaderTransformer {
  constructor() {}

  transform(
    renderer,
    scene,
    camera,
    originalMaterial,
    bloomStrength = 1.5,
    bloomRadius = 0.2,
    bloomThreshold = 0.8
  ) {
    // Validate inputs
    if (!renderer || !renderer.getContext) {
      throw new Error('Invalid renderer provided');
    }
    if (!scene || !scene.children.length) {
      throw new Error('Scene is empty');
    }
    if (!camera) {
      throw new Error('Invalid camera provided');
    }

    // Create the composer and passes
    const composer = new EffectComposer(renderer);
    const bloomPass = new EffectPass(camera, new BloomEffect({
      luminanceThreshold: bloomThreshold,
      luminanceSmoothing: 0.2,
      intensity: bloomStrength,
      kernelSize: bloomRadius,
    }));
    composer.addPass(bloomPass);

    // Create a render target matching the viewport size
    const renderTarget = new THREE.WebGLRenderTarget(
      renderer.domElement.width,
      renderer.domElement.height
    );

    // Clone the original material to avoid modifying it
    const bloomMaterial = originalMaterial.clone();

    // Create a temporary mesh with the bloom material
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), bloomMaterial);
    scene.add(mesh); // Temporarily add to the scene for rendering

    composer.renderTarget1 = renderTarget;
    composer.renderToScreen = false;

    // Render the scene with the composer
    composer.render();

    scene.remove(mesh); // Remove the temporary mesh

    return renderTarget.texture;
  }
}

export default BloomShaderTransformer;
