import { PROFILE_SUBMIT } from "../action";

const initialState = {
  isSubmitted: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_SUBMIT:
      return { isSubmitted: true };

    default:
      return state;
  }
};

