import { takeEvery, call, put } from "redux-saga/effects";
import { serverRegister } from "../api";
import { REG, regIn } from "../action";

export function* regSaga(action) {
  const register  = yield call(serverRegister, action.payload);
  if (register) {
    yield put(regIn(register));
  }
}

export function* registrationSaga() {
  yield takeEvery(REG, regSaga);
}
