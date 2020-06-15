import { all, spawn, call } from "redux-saga/effects";
import counterSagas from "./counterSagas";
import utilSagas from "./utilSagas";

function* rootSaga() {
  const sagas = [...counterSagas, ...utilSagas];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}

export default rootSaga;
