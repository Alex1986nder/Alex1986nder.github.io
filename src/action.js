export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";

export const REG_IN = "REG_IN";
export const REG = "REG";

export const GET_ADDRESS_LIST = "GET_ADDRESS_LIST";
export const SET_ADDRESS_LIST = "SET_ADDRESS_LIST";

export const SET_ROUTE = "SET_ROUTE";
export const GET_ROUTE = "GET_ROUTE";
export const RESET_COORDINATES = "RESET_COORDINATES";

export const PROFILE_SUBMIT = "PROFILE_SUBMIT";
export const CARD_DETAILS = "CARD_DETAILS";

export const logIn = () => ({ type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });

export const regIn = () => ({ type: REG_IN });

export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});

export const regs = (email, password, name, surname) => ({
  type: REG,
  payload: { email, password, name, surname },
});

export const getAddressList = () => ({ type: GET_ADDRESS_LIST });
export const setAddressList = (addressList) => ({
  type: SET_ADDRESS_LIST,
  payload: addressList,
});

export const setRoute = (coordinates) => ({
  type: SET_ROUTE,
  payload: {coordinates} ,
});
export const getRoute = (address) => ({
  type: GET_ROUTE,
  payload: { address},
});
export const resetCoordinates = () => ({type: RESET_COORDINATES});

export const profileSubmit = () => ({ type: PROFILE_SUBMIT });
export const cardDetails = (cardNumber, expiryDate, cardName, cvc, token) => ({
  type: CARD_DETAILS,
  payload: { cardNumber, expiryDate, cardName, cvc, token },
});
