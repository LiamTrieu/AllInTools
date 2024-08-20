import App from 'App';
import ReactDOM from 'react-dom/client';
import './assets/css/styles.css';
import { I18nextProvider } from 'react-i18next';
import i18n from '@app/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);
