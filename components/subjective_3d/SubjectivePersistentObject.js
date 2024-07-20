import trackProperties from '../developermode/trackProperties.js'

class SubjectivePersistentObject {

  constructor(developerMode = false) {
    this.persistent_object_properties = {
      snapshots: [],
      isPlaying: false,
      isRecording: false,
      currentFrame: 0,
      recordInterval: null
    };
    this.trackedProperties = trackProperties(this.persistent_object_properties);
  }

  get snapshots() {
    return this.trackedProperties.snapshots;
  }

  set snapshots(value) {
    this.trackedProperties.snapshots = value;
  }

  get isPlaying() {
    return this.trackedProperties.isPlaying;
  }

  set isPlaying(value) {
    this.trackedProperties.isPlaying = value;
  }

  get isRecording() {
    return this.trackedProperties.isRecording;
  }

  set isRecording(value) {
    this.trackedProperties.isRecording = value;
  }

  get currentFrame() {
    return this.trackedProperties.currentFrame;
  }

  set currentFrame(value) {
    this.trackedProperties.currentFrame = value;
  }

  get recordInterval() {
    return this.trackedProperties.recordInterval;
  }

  set recordInterval(value) {
    this.trackedProperties.recordInterval = value;
  }

  // Take a snapshot of the current state
  takeSnapshot() {
    const snapshot = v8.serialize(this);
    this.snapshots.push(snapshot);
    console.log('Snapshot taken:', this.snapshots.length);
  }

  // Set the state from a snapshot
  setSnapshot(snapshotIndex) {
    if (snapshotIndex >= 0 && snapshotIndex < this.snapshots.length) {
      const snapshot = this.snapshots[snapshotIndex];
      const restored = v8.deserialize(snapshot);
      Object.assign(this, restored);
      if (this.debugUi) {
        this.debugUi.updateUi(); // Update the UI after setting the snapshot
      }
      console.log('Restored snapshot:', snapshotIndex + 1);
    } else {
      console.error('Snapshot index out of range.');
    }
  }

  // Start recording snapshots
  async record(interval = 1000) {
    this.isRecording = true;
    this.takeSnapshot(); // Initial snapshot
    this.recordInterval = setInterval(() => {
      if (this.isRecording) {
        this.takeSnapshot();
      }
    }, interval);
    console.log('Recording started.');
  }

  // Resume recording snapshots
  resume(interval = 1000) {
    if (this.isRecording) {
      console.log('Recording is already in progress.');
      return;
    }
    this.isRecording = true;
    this.recordInterval = setInterval(() => {
      if (this.isRecording) {
        this.takeSnapshot();
      }
    }, interval);
    console.log('Recording resumed.');
  }

  // Pause recording snapshots
  pause() {
    this.isRecording = false;
    clearInterval(this.recordInterval);
    console.log('Recording paused.');
  }

  // Play back recorded snapshots
  async play(interval = 1000) {
    if (this.snapshots.length === 0) {
      console.error('No snapshots recorded.');
      return;
    }

    this.isPlaying = true;
    this.currentFrame = 0;
    console.log('Playback started.');

    const playbackInterval = setInterval(() => {
      if (!this.isPlaying) {
        clearInterval(playbackInterval);
        console.log('Playback stopped.');
        return;
      }

      if (this.currentFrame < this.snapshots.length) {
        const snapshot = this.snapshots[this.currentFrame];
        const restored = v8.deserialize(snapshot);
        Object.assign(this, restored);
        if (this.debugUi) {
          this.debugUi.updateUi(); // Update the UI during playback
        }
        console.log(`Frame ${this.currentFrame + 1}`);
        this.currentFrame++;
      } else {
        clearInterval(playbackInterval);
        console.log('Playback finished.');
      }
    }, interval); // Adjust playback speed (ms per frame)
  }

  // Stop playing back snapshots
  stop() {
    this.isPlaying = false;
    console.log('Playback stopped.');
  }

  // Pause playing back snapshots
  pausePlayback() {
    this.isPlaying = false;
    console.log('Playback paused.');
  }
}

export default SubjectivePersistentObject;
