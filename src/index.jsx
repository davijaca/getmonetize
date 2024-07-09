import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

//https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis

const domNode = document.getElementById('root');
const root = createRoot(domNode);

if (domNode.hasChildNodes()) {
  root.hydrate(<App />);
} else {
  root.render(<App />);
}
