import 'regenerator-runtime';

import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/skip-link.css';
import '../styles/hero.css';
import '../styles/form-review.css';

import swRegister from './utils/sw-register';
import App from './views/app';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
