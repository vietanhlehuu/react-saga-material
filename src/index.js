import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { history } from 'routes/history';
import store from 'store/store';
import App from 'components/App';
import IntlWrapper from './IntlWrapper';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <IntlWrapper>
          <App />
        </IntlWrapper>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
