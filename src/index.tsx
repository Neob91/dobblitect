import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'emotion';

import { App } from './components';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  @media print {
    #app {
      display: none;
    }
  }

  @page {
    margin: 0;
    size: A4;
  }
`;
