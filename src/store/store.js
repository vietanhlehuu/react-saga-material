import { configureStore } from '@reduxjs/toolkit';

import { history } from 'routes/history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import { languageConstants, reduxResources } from 'constants/constants';
import createReducer from './ducks/rootReducer';
import rootSaga from './sagas/rootSaga';

let language =
  localStorage.getItem('lang') || 'vi' || navigator.language.split(/[-_]/)[0]; // language without region code
if (!Object.values(languageConstants).includes(language)) {
  language = languageConstants.VI;
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: createReducer(history),
  middleware: [routerMiddleware(history), sagaMiddleware],
  devTools: {
    shouldHotReload: true,
  },
  preloadedState: {
    [reduxResources.LANGUAGE]: language,
  },
});

sagaMiddleware.run(rootSaga);

export default store;
