console.log('Loading App.js');

import React from 'react';
import LoadableComponent from './components/LoadableComponent';
import InvestorComponent from './components/InvestorComponent';
import KnowledgeHooksComponent from './components/KnowledgeHooksComponent';
import Menu from './components/Menu';
import ErrorBoundary from './components/ErrorBoundary';

console.log('Loading App Component');

const App = () => {
console.log('Rendering App');
  console.log('Rendering App Component');
console.log('Returning from App');
  return (
    <ErrorBoundary>
      <div>
        <Menu />
        <InvestorComponent />
        <KnowledgeHooksComponent />
        <LoadableComponent />
      </div>
    </ErrorBoundary>
  );
};

export default App;
