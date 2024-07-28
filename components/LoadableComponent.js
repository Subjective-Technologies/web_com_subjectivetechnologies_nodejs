console.log('Loading LoadableComponent.js');

import React, { forwardRef } from 'react';

console.log('Loading LoadableComponent');

const LoadableComponent = forwardRef((props, ref) => {
  console.log('Rendering LoadableComponent');
  return <div ref={ref}>Loadable Component</div>;
});

export default LoadableComponent;
