import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { loadingActions } from 'store/ducks/LoadingDuck';
import { actionUtils } from './actionUtils';

function* workerRegistation(worker, action) {
  const meta = {
    data: null,
    err: null,
  };
  const setMetaData = (data) => {
    if (data === undefined) return;
    meta.data = data;
  };
  const setMetaErr = (err) => {
    if (err === undefined) return;
    meta.err = err;
  };

  const isLoading = action.meta?.isLoading;
  const callback = action.meta?.callback;

  if (isLoading) {
    yield put(loadingActions.show());
  }
  yield call(worker, {
    payload: action.payload,
    action,
    setMetaData,
    setMetaErr,
  });
  if (isLoading) {
    yield put(loadingActions.hide());
  }
  if (callback) {
    yield put(actionUtils.callback(meta, callback));
  }
}
export const registerEvery = ({ actionType, worker }) => {
  return function* watcher() {
    yield takeEvery(actionType, workerRegistation, worker);
  };
};

export const registerLatest = ({ actionType, worker }) => {
  return function* watcher() {
    yield takeLatest(actionType, workerRegistation, worker);
  };
};
