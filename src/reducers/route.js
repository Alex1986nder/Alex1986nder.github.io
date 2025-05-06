/* eslint-disable import/no-anonymous-default-export */
import { SET_ROUTE, RESET_COORDINATES } from "../action";

const initialState = {
  coordinates: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUTE:
      return { ...state, coordinates: action.payload.coordinates };
      case RESET_COORDINATES: 
      return {
          ...state,
          coordinates: []
      }
    default:
      return state;
  }
};

export const coordinatesSelector = (store) => store.route.coordinates;
