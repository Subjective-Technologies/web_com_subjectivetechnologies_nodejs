import * as dat from 'dat.gui';
import SubjectivePersistentObject from '../subjective_3d/SubjectivePersistentObject'; // Adjust the import path as needed

// Patch dat.GUI to use passive event listeners for specific events
const originalAddEventListener = EventTarget.prototype.addEventListener;
EventTarget.prototype.addEventListener = function (type, listener, options) {
  if (type === 'touchstart' || type === 'touchmove' || type === 'wheel') {
    options = options || {};
    if (typeof options === 'object') {
      options.passive = true;
    } else {
      options = { capture: options, passive: true };
    }
  }
  originalAddEventListener.call(this, type, listener, options);
};

class SubjectiveDynamicDebugUi {
  constructor(subjectiveObject) {
    console.log("Initializing SubjectiveDynamicDebugUi with properties: " + JSON.stringify(Object.keys(subjectiveObject)));

    this.subjectiveObject = subjectiveObject;
    this.gui = new dat.GUI({ load: JSON, preset: 'Default' });

    // Apply the CSS styles for alignment and margin directly
    this.applyStyles();

    // Build the GUI with a limit of 2 depth levels
    this.buildGui(this.subjectiveObject, this.gui, 0, 2);

    // Add snapshot controls
    const snapshotFolder = this.gui.addFolder('Snapshots');

    this.snapshotTextarea = document.createElement('textarea');
    this.snapshotTextarea.id = 'snapshotTextarea';
    snapshotFolder.__ul.appendChild(this.snapshotTextarea);

    snapshotFolder.add({ takeSnapshot: () => this.takeSnapshot() }, 'takeSnapshot').name('Take Snapshot');

    const recordAnimationFolder = this.gui.addFolder('Record Animation');
    this.recordAnimationTextarea = document.createElement('textarea');
    this.recordAnimationTextarea.id = 'recordAnimationTextarea';
    recordAnimationFolder.__ul.appendChild(this.recordAnimationTextarea);

    recordAnimationFolder.add({ recordAnimation: () => this.recordAnimation() }, 'recordAnimation').name('Record Animation');
    recordAnimationFolder.add({ playAnimation: () => this.playAnimation() }, 'playAnimation').name('Play Animation');

    // Create a variable for snapshot index and an input for it
    this.snapshotIndex = 0;

    snapshotFolder.add({ setSnapshot: () => this.setSnapshot(this.snapshotIndex) }, 'setSnapshot').name('Set Snapshot');

    // Change to light theme
    this.setLightTheme();
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

  buildGui(object, gui, level, maxDepth) {
    if (level > maxDepth) return; // Limit to specified depth

    const keys = Object.keys(object);
    console.log(`Building GUI for level ${level}, keys: ${keys}`);

    keys.forEach(key => {
      const value = object[key];
      if (value instanceof SubjectivePersistentObject) {
        console.log(`Adding folder for SubjectivePersistentObject: ${key}`);
        const folder = gui.addFolder(key);
        this.buildGui(value, folder, level + 1, maxDepth);
      } else if (typeof value === 'number' || typeof value === 'string' || typeof value === 'boolean') {
        console.log(`Adding property to GUI: ${key} = ${value}`);
        const controller = gui.add(object, key).listen();
        this.applyInlineStyles(controller.domElement);
      }
    });
  }

  applyInlineStyles(element) {
    element.style.color = '#000';
    element.style.background = '#fff';
    element.style.fontWeight = 'bold';
  }

  takeSnapshot() {
    this.subjectiveObject.takeSnapshot();
    this.snapshotTextarea.value = JSON.stringify(this.subjectiveObject.snapshots);
  }

  setSnapshot(index) {
    this.subjectiveObject.setSnapshot(index);
  }

  updateUi() {
    console.log('Updating UI with current properties');
    this.gui.destroy(); // Destroy the existing GUI
    this.gui = new dat.GUI({ load: JSON, preset: 'Default' }); // Create a new GUI instance
    this.buildGui(this.subjectiveObject, this.gui, 0, 2); // Rebuild the GUI with updated properties
    this.setLightTheme(); // Reapply the light theme
  }
}

export default SubjectiveDynamicDebugUi;
