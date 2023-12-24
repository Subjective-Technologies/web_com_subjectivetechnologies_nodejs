import 'aframe';

import {Entity, Scene} from 'aframe-react';
import ReactDOM from 'react-dom';

import React, { useEffect } from 'react';

const GoldenThinkerAnimation = () => {
  useEffect(() => {
    // Add event listeners or other logic as needed
    return () => {
      // Clean up resources if needed
    };
  }, []);

  return (
    <Scene>
      <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
      <Entity particle-system={{preset: 'snow'}}/>
      <Entity light={{type: 'point'}}/>
      <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
      <Entity text={{value: 'Hello, WebVR!'}}/>
    </Scene>
  );
};

export default GoldenThinkerAnimation;
