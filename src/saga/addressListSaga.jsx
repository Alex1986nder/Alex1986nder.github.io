import { takeEvery, call, put } from "redux-saga/effects";
import { GET_ADDRESS_LIST, setAddressList } from "../action";
import { serverAddressList } from "../api";

export function* AddListSaga() {
  try {
    const address = yield call(serverAddressList);

    yield put(setAddressList(address));
  } catch (e) {
    console.log(e);
  }
}

export function* addressListSaga() {
  yield takeEvery(GET_ADDRESS_LIST, AddListSaga);
}
