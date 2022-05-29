import {
  ALL_TOPICS_DETAILS_REQUEST,
  ALL_TOPICS_DETAILS_SUCCESS,
  ALL_TOPICS_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/Constants";

export const topicsReducer = (state = { topics: [] }, action) => {
  switch (action.type) {
    case ALL_TOPICS_DETAILS_REQUEST:
      return {
        loading: true,
        topics: [],
      };
    case ALL_TOPICS_DETAILS_SUCCESS:
      return {
        loading: false,
        topics: action.payload,
      };
    case ALL_TOPICS_DETAILS_FAIL:
      return {
        // loading:false,
        error: action.payload,
        ...state,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
