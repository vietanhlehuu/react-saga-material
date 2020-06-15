import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";
import { reduxResources } from "constants/constants";

const initialState = {
  loading: false,
  loadingBar: false,
};

const actions = {
  show: createAction("loading/show"),
  hide: createAction("loading/hide"),
  showLoadingBar: createAction("loading/show-loading-bar"),
  hideLoadingBar: createAction("loading/hide-loading-bar"),
};

const loadingReducer = createReducer(initialState, {
  [actions.show]: (state) => {
    return {
      ...state,
      loading: true,
    };
  },
  [actions.hide]: (state) => {
    return {
      ...state,
      loading: false,
    };
  },
  [actions.showLoadingBar]: (state) => {
    return {
      ...state,
      loadingBar: true,
    };
  },
  [actions.hideLoadingBar]: (state) => {
    return {
      ...state,
      loadingBar: false,
    };
  },
});

const getLoadingState = (field) => (state) =>
  state[reduxResources.LOADING][field];

const selectors = {
  getLoading: createSelector(getLoadingState("loading"), (value) => value),
  getLoadingBar: createSelector(
    getLoadingState("loadingBar"),
    (value) => value
  ),
};

export {
  actions as loadingActions,
  loadingReducer,
  selectors as loadingSelectors,
};
