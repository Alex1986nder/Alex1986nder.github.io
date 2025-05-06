import { REG } from "../action";
import { serverRegister } from "../../api";
import { logIn } from "../action";

export const regMiddleware = (store) => (next) => async (action) => {
  if (action.type === REG) {
    const { email, password, name } = action.payload;
    const success = await serverRegister({ email, password, name });
    if (success) {
      store.dispatch(logIn());
    }
  } else {
    next(action);
  }
};
