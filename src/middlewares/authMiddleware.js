import { logIn } from "../action";
import { AUTHENTICATE } from "../action";
import { serverLogin } from "../api";

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const { email, password } = action.payload;
    const success = await serverLogin(email, password);
    if (success) {
      store.dispatch(logIn());
    }
  } else {
    next(action);
  }
};
