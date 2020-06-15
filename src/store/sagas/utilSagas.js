import { registerEvery } from "store/helpers/sagaHelpers";
import { put } from "redux-saga/effects";
import { actionUtils } from "store/helpers/actionUtils";

function* resolveCallback({ payload: { meta, callback } }) {
  callback(meta);
  yield put(actionUtils.doNothing());
}

const utilSagas = [
  registerEvery({
    actionType: "CALLBACK",
    worker: resolveCallback,
  }),
];

export default utilSagas;
