import { takeEvery, call, put } from "redux-saga/effects";
import { serverCard } from "../api";
import {CARD_DETAILS, profileSubmit} from "../action"

export function* cardDetailsSaga(action) {
    const {cardNumber, expiryDate, cardName, cvc, token} = action.payload;
    const success = yield call(serverCard, cardNumber, expiryDate, cardName, cvc, token);
    if(success) {
        yield put(profileSubmit(success))
    }
}
export function* paymentSaga() {
    yield takeEvery(CARD_DETAILS, cardDetailsSaga)
}