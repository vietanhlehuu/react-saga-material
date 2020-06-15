import { registerEvery } from "store/helpers/sagaHelpers";
import { counterActions, counterSelectors } from "store/ducks/CounterDuck";
import { put, select } from "redux-saga/effects";

function* increase({ payload, setMetaData }) {
  // eslint-disable-next-line no-unused-vars
  const state = yield select(counterSelectors.getNumber);
  setMetaData("Hello world");
  yield put(counterActions.decrease(5));
}

const counterSagas = [
  registerEvery({
    actionType: counterActions.increase,
    worker: increase,
  }),
];

export default counterSagas;
