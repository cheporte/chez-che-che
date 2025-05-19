import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx';

import "./i18n/i18n.ts";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // solid icons
import { fab } from '@fortawesome/free-brands-svg-icons'; // brand icons
import { far } from '@fortawesome/free-regular-svg-icons'; // regular icons
import '@fortawesome/fontawesome-svg-core/styles.css';

library.add(fas, fab, far);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
