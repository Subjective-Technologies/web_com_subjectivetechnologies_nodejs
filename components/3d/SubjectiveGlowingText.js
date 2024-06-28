import React, { useEffect } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import * as dat from 'dat.gui';

class SubjectiveGlowingText {
  constructor(text, scene, camera, params = {}, developerMode = false) {
    this.text = text;
    this.scene = scene;
    this.camera = camera;
    this.developerMode = developerMode;

    this.params = {
      bloomStrength: 1.5,
      bloomThreshold: 0.85,
      emissiveIntensity: 0.855,
      textSize: 0.9,
      textHeight: 0.1,
      bevelThickness: 0.02,
      bevelSize: 0.05,
      bevelSegments: 5,
      textColor: 0xffffff,
      emissiveColor: 0xffffff,
      ...params
    };

    this.init();
  }

  init() {
    this.fontLoader = new FontLoader();
    this.fontLoader.load('/font/RobotoMono/fonts/json/Roboto Mono_Regular.json', (font) => {
      this.createText(font);
      if (this.developerMode) {
        this.setupGUI();
      }
    });
  }

  createText(font) {
    if (this.textMesh) this.scene.remove(this.textMesh);
    if (this.glowMesh) this.scene.remove(this.glowMesh);

    const textGeometry = new TextGeometry(this.text, {
      font,
      size: this.params.textSize,
      height: this.params.textHeight,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: this.params.bevelThickness,
      bevelSize: this.params.bevelSize,
      bevelOffset: 0,
      bevelSegments: this.params.bevelSegments
    });

    const textMaterial = new THREE.MeshStandardMaterial({
      color: this.params.textColor,
      emissive: this.params.emissiveColor,
      emissiveIntensity: this.params.emissiveIntensity,
    });

    this.textMesh = new THREE.Mesh(textGeometry, textMaterial);
    this.textMesh.position.set(-5, 0, 0);
    this.scene.add(this.textMesh);

    const glowGeometry = textGeometry.clone();
    glowGeometry.computeVertexNormals();
    glowGeometry.scale(1.05, 1.05, 1.05);

    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        "c": { type: "f", value: 1.0 },
        "p": { type: "f", value: 1.4 },
        glowColor: { type: "c", value: new THREE.Color(0xffffff) },
        viewVector: { type: "v3", value: this.camera.position }
      },
      vertexShader: `
        uniform vec3 viewVector;
        uniform float c;
        uniform float p;
        varying float intensity;
        void main() {
          vec3 vNormal = normalize(normalMatrix * normal);
          vec3 vNormel = normalize(normalMatrix * viewVector);
          intensity = pow(c - dot(vNormal, vNormel), p);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        varying float intensity;
        void main() {
          vec4 color = vec4(glowColor, 1.0) * intensity;
          gl_FragColor = color;
        }
      `,
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });

    this.glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    this.glowMesh.position.set(-5, 0, 0);
    this.glowMesh.layers.enable(1); // Enable bloom layer
    //this.scene.add(this.glowMesh);
  }

  setupGUI() {
    if (!this.developerMode) {
      return; // Ensure the GUI setup only happens in developer mode
    }

    const gui = new dat.GUI();
    gui.add(this.params, 'bloomStrength', 0.0, 3.0).onChange(value => {
      this.bloomPass.strength = value;
    });
    gui.add(this.params, 'bloomThreshold', 0.0, 1.0).onChange(value => {
      this.bloomPass.threshold = value;
    });
    gui.add(this.params, 'emissiveIntensity', 0.0, 2.0).onChange(value => {
      this.textMesh.material.emissiveIntensity = value;
    });
    gui.add(this.params, 'textSize', 0.1, 5.0).onChange(() => {
      this.createText(this.font);
    });
    gui.add(this.params, 'textHeight', 0.01, 1.0).onChange(() => {
      this.createText(this.font);
    });
    gui.add(this.params, 'bevelThickness', 0.01, 0.1).onChange(() => {
      this.createText(this.font);
    });
    gui.add(this.params, 'bevelSize', 0.01, 0.1).onChange(() => {
      this.createText(this.font);
    });
    gui.add(this.params, 'bevelSegments', 1, 10).step(1).onChange(() => {
      this.createText(this.font);
    });
    gui.addColor(this.params, 'textColor').onChange(value => {
      this.textMesh.material.color.set(value);
    });
    gui.addColor(this.params, 'emissiveColor').onChange(value => {
      this.textMesh.material.emissive.set(value);
    });
  }
}

export default SubjectiveGlowingText;
