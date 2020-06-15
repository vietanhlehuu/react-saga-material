import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";
import { reduxResources } from "constants/constants";

const initialState = {
  number: 1,
};

const actions = {
  increase: createAction("counter/increase", (step) => ({
    payload: { step },
  })),
  decrease: createAction("counter/decrease", (step) => ({
    payload: { step },
  })),
};

const counterReducer = createReducer(initialState, {
  [actions.increase]: (state, action) => {
    state.number += action.payload.step;
  },
  [actions.decrease]: (state, action) => {
    state.number -= action.payload.step;
  },
});

const getCounterState = (state) => state[reduxResources.COUNTER];

const selectors = {
  getNumber: createSelector(getCounterState, (state) => state.number),
};

export {
  actions as counterActions,
  counterReducer,
  selectors as counterSelectors,
};
