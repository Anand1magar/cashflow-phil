import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* Agentation: in-browser annotation overlay, development only.
 * Dynamically imported so it is never part of the production bundle. */
if (import.meta.env.DEV) {
  import('agentation')
    .then(({ Agentation }) => {
      const host = document.createElement('div');
      document.body.appendChild(host);
      createRoot(host).render(<Agentation endpoint="http://localhost:4747" />);
    })
    .catch((err) => console.warn('Agentation unavailable:', err));
}
