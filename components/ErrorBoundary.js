console.log('Loading ErrorBoundary.js');

import React from 'react';

console.log('Loading ErrorBoundary');

class ErrorBoundary extends React.Component {
console.log('Rendering ErrorBoundary');
console.log('Rendering ErrorBoundary');
console.log('Rendering ErrorBoundary');
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children; 
  }
}

export default ErrorBoundary;
