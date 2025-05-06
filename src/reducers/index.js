import { combineReducers } from "redux";

import auth from "./auth";
import reg from "./reg";
import payment from "./payment";
import route from "./route";
import address from "./addressList";

export default combineReducers({
  auth,
  reg,
  payment,
  route,
  address,
});
