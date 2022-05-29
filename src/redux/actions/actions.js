import axios from "axios";
import {
  ALL_TOPICS_DETAILS_REQUEST,
  ALL_TOPICS_DETAILS_SUCCESS,
  ALL_TOPICS_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/Constants";

export const getTopics = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_TOPICS_DETAILS_REQUEST,
    });

    const API_URL = `https://rahulnk04.github.io/myapi-v1/questions/index/index.json`;

    const { data } = await axios.get(API_URL);
    dispatch({
      type: ALL_TOPICS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_TOPICS_DETAILS_FAIL,
      payload: error.response.data.message,
      // payload: error.response.data.error.message
      // payload: error.response.data.message,
    });
  }
};
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
