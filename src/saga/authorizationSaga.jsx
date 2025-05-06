import { takeEvery, call, put} from "redux-saga/effects";
import { serverLogin} from "../api";
import { logIn, AUTHENTICATE } from "../action";


export function* authenticateSaga(action){
  const {email, password} = action.payload;
    const success = yield call(serverLogin, email, password);
  if (success){
    yield put(logIn(success))
  }
}

export function* authorizationSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga)
}