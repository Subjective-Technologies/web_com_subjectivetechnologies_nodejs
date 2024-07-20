if (typeof window !== 'undefined') { var dat = require('dat.gui'); }
import SubjectiveGlobalDictionary from './SubjectiveGlobalDictionary';
import { debounce } from './debounce';
import SubjectivePersistentObject from '../subjective_3d/SubjectivePersistentObject';

class SubjectiveDynamicDebugUi {
  constructor() {
    if (SubjectiveDynamicDebugUi.instance) {
      return SubjectiveDynamicDebugUi.instance;
    }

    this.gui = new dat.GUI({ load: JSON, preset: 'Default' });
    this.addedProperties = new Set();
    this.propertiesFolder = null;

    this.applyStyles();
    this.buildGuiFromGlobalDictionary();

    this.setLightTheme();

    this.updateUi = debounce(this.updateUi.bind(this), 300);

    SubjectiveDynamicDebugUi.instance = this;
  }

  applyStyles() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
      .dat-gui-margin-top {
        position: absolute;
        top: 100px;
        right: 0;
        z-index: 1000;
      }
      .dg.main {
        position: relative;
        height: 100%;
      }
      .dg.main .close-button {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 10px;
      }
    `;
    document.getElementsByTagName('head')[0].appendChild(style);
    this.gui.domElement.classList.add('dat-gui-margin-top');
  }

  setLightTheme() {
    const lightTheme = `
      .dg {
        color: #000 !important;
        background: #fff !important;
        font-weight: bold !important;
        margin-top: 2%;
        position: relative;
      }
      .dg .a {
        float: right;
        margin-right: 15px;
        overflow-y: visible;
        width: fit-content;
      }
      .dg .property-name {
        color: white;
      }
      .dg .title {
        color: yellow;
      }
      .dg.main .close-button {
        background: #fff !important;
        border: 1px solid #ddd !important;
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 10px;
      }
      .dg .c input[type="checkbox"]:checked::after {
        background: #000 !important;
      }
      .dg .c input[type="checkbox"]::before {
        background: #fff !important;
        border: 1px solid #ddd !important;
      }
      .dg .c select {
        color: #000 !important;
        background: #fff !important;
        border: 1px solid #ddd !important;
        font-weight: bold !important;
      }
      .dg .c select:focus {
        border-color: #000 !important;
      }
      .dg .c input[type="text"] {
        color: #000 !important;
        background: #fff !important;
        border: 1px solid #ddd !important;
        font-weight: bold !important;
      }
      .dg .c input[type="number"] {
        color: #000 !important;
        background: #fff !important;
        border: 1px solid #ddd !important;
        font-weight: bold !important;
      }
      .dg .c {
        color: #000 !important;
        font-weight: bold !important;
      }
    `;
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = lightTheme;
    document.getElementsByTagName('head')[0].appendChild(style);
  }

  buildGuiFromGlobalDictionary() {
    const globalDict = SubjectiveGlobalDictionary.getAll();
    const gui = this.gui;

    while (this.gui.__controllers.length > 0) {
      this.gui.remove(this.gui.__controllers[0]);
    }

    if (!this.propertiesFolder) {
      this.propertiesFolder = gui.addFolder('Properties');
    } else {
      Object.keys(this.propertiesFolder.__folders).forEach(folderName => {
        this.propertiesFolder.removeFolder(this.propertiesFolder.__folders[folderName]);
      });
    }

    const addedProperties = new Set();

    Object.keys(globalDict).forEach(key => {
      if (!this.addedProperties.has(key)) {
        const value = globalDict[key];
        const parts = key.split('_');
        const propName = parts.pop();
        const className = parts.join('_');

        if (value instanceof SubjectivePersistentObject) {
          let classFolder = this.propertiesFolder.__folders[className];
          if (!classFolder) {
            classFolder = this.propertiesFolder.addFolder(className);
            classFolder.close();
          }

          if (typeof value === 'number') {
            classFolder.add(globalDict, key, 0, 100).name(propName).listen().onChange(() => this.updateThreeJsObject(key, value));
          } else if (typeof value === 'boolean') {
            classFolder.add(globalDict, key).name(propName).listen().onChange(() => this.updateThreeJsObject(key, value));
          } else if (typeof value === 'string') {
            classFolder.add(globalDict, key).name(propName).listen().onChange(() => this.updateThreeJsObject(key, value));
          }

          this.addedProperties.add(key);
        }
      }
    });

    if (!this.closeButton) {
      const closeButton = document.createElement('button');
      closeButton.className = 'close-button';
      closeButton.innerText = 'Close Controls';
      closeButton.onclick = () => {
        this.gui.close();
      };
      this.propertiesFolder.__ul.appendChild(closeButton);
      this.closeButton = closeButton;
    }
  }

  updateThreeJsObject(key, value) {
    const parts = key.split('_');
    const propName = parts.pop();
    const objectName = parts.join('_');
    const threeJsObject = window[objectName];

    if (threeJsObject) {
      threeJsObject[propName] = value;
    }
  }

  updateUi() {
    console.log('Updating UI with current properties');
    this.buildGuiFromGlobalDictionary();
    this.setLightTheme();
  }
}

export default SubjectiveDynamicDebugUi;
