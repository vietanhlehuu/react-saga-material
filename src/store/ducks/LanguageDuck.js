import { createAction, createReducer, createSelector } from '@reduxjs/toolkit';
import { reduxResources, languageConstants } from 'constants/constants';

const initialState = languageConstants.VI;

const actions = {
  setLang: createAction('lang/set', lang => ({ payload: { lang } })),
};

const langReducer = createReducer(initialState, {
  [actions.setLang]: (_, action) => {
    localStorage.setItem('lang', action.payload.lang);
    return action.payload.lang;
  },
});

const getLanguage = state => {
  return state[reduxResources.LANGUAGE];
};

const selectors = {
  getLanguage: createSelector([getLanguage], lang => lang),
};

export { actions as langActions, langReducer, selectors as langSelectors };
