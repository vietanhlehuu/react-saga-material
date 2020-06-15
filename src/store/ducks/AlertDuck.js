import { createAction, createReducer, createSelector } from '@reduxjs/toolkit';
import { reduxResources } from 'constants/constants';

const initialState = {
  alerts: [],
};

const actions = {
  show: createAction(
    'alert/show',
    ({ translateId, alertType, translateMsg }) => ({
      payload: { translateId, alertType, translateMsg },
    }),
  ),
  remove: createAction('alert/remove', key => ({ payload: { key } })),
};

const alertReducer = createReducer(initialState, {
  [actions.show]: (state, action) => {
    return {
      alerts: [
        ...state.alerts,
        {
          ...action.payload,
          key: Date.now().toString() + Math.random(),
        },
      ],
    };
  },
  [actions.remove]: (state, action) => {
    return {
      alerts: state.alerts.filter(a => a.key !== action.payload.key),
    };
  },
});

const getAlertState = state => state[reduxResources.ALERT];

const selectors = {
  getAlerts: createSelector(getAlertState, state => state.alerts),
};

export { actions as alertActions, alertReducer, selectors as alertSelectors };
