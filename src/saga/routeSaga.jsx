import { takeEvery, call, put } from "redux-saga/effects";
import { serverRoute } from "../api";
import { GET_ROUTE, setRoute } from "../action";

export function* routerSaga(action) {
  try {
    const { address } = action.payload;
    const coordinates = yield call(serverRoute, address);

    yield put(setRoute(coordinates));
  } catch (e) {
    console.log(e);
  }
}

export function* routeSaga() {
  yield takeEvery(GET_ROUTE, routerSaga);
}
