import { takeEvery, call, put} from "redux-saga/effects";
import { serverLogin} from "../api";
import { logIn, AUTHENTICATE } from "../action";


export function* authenticateSaga(action){
  // const {email, password} = action.payload;
    // const success = yield call(serverLogin, email, password);
    const success = true
  if (success){
    yield put(logIn())
  }
}

export function* authorizationSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga)
}