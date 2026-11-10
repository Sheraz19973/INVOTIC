import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Pages are prerendered at build time (vite.config.ts), so React takes over the existing HTML.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
