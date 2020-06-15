import { createAction } from '@reduxjs/toolkit';

const actions = {
  login: createAction('auth/login', (email, password) => {
    return { payload: { email, password } };
  }),
  resetPassword: createAction('auth/resetPassword', email => {
    return { payload: { email } };
  }),
  updatePassword: createAction('auth/updatePassword', (token, password) => {
    return { payload: { token, password } };
  }),
};

export { actions as authActions };
