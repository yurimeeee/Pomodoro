import './index.css';
import './locales/i18n.ts';

import App from './App.tsx';
import { I18nextProvider } from 'react-i18next';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import i18n from './locales/i18n.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
