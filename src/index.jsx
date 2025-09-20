import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const htmlRootEl = document.getElementById('root');
const root = createRoot(htmlRootEl);
root.render(<App />);
