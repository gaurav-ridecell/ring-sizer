import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const renderMyApp = elementId => {
  createRoot(document.getElementById(elementId)).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

declare global {
  interface Window {
    mount: (elementId: string) => void;
  }
}

window.mount = renderMyApp;

// renderMyApp('root');
