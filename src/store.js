import { createStore, applyMiddleware } from "redux";
// import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/rootSaga";
import { loadState, saveState } from "./LocalStorage";

const initialState = loadState();

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState({
    isLoggedIn: store.getState().isLoggedIn,
  });
});

sagaMiddleware.run(rootSaga);
