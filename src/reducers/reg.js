// eslint-disable-next-line import/no-anonymous-default-export
import { REG_IN } from "../action";

const initialState = {
  isRegisterIn: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case REG_IN: 
      return { isRegisterIn: true };
    

    default:
      return state;
  }
};
