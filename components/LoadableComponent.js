import { getText } from '../utils/getText.js';
console.log('Loading LoadableComponent.js');
import React, { forwardRef } from 'react';
console.log('Loading LoadableComponent');
const LoadableComponent = forwardRef((props, ref) => {
  console.log('Rendering LoadableComponent');
  return <div ref={ref}>{getText('LoadableComponent.js_18_TG9hZG')}</div>;
});
export default LoadableComponent;