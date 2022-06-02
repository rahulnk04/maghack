import axios from "axios";
import {
  ALL_TOPICS_DETAILS_REQUEST,
  ALL_TOPICS_DETAILS_SUCCESS,
  ALL_TOPICS_DETAILS_FAIL,
  CLEAR_ERRORS,
  ALL_TOPICS_REACTJS_REQUEST,
  ALL_TOPICS_REACTJS_SUCCESS,
  ALL_TOPICS_REACTJS_FAIL,
  ALL_QSTNS_REACTJS_REQUEST,
  ALL_QSTNS_REACTJS_SUCCESS,
  ALL_QSTNS_REACTJS_FAIL,
  ALL_MCQ_REACTJS_REQUEST,
  ALL_MCQ_REACTJS_SUCCESS,
  ALL_MCQ_REACTJS_FAIL,
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

export const getReactTopics = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_TOPICS_REACTJS_REQUEST,
    });

    const API_URL = `https://rahulnk04.github.io/myapi-v1/questions/reactjs/react.json`;

    const { data } = await axios.get(API_URL);
    dispatch({
      type: ALL_TOPICS_REACTJS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_TOPICS_REACTJS_FAIL,
      payload: error.response.data.message,
      // payload: error.response.data.error.message
      // payload: error.response.data.message,
    });
  }
};

export const getReactQstns = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_QSTNS_REACTJS_REQUEST,
    });

    const API_URL = `https://rahulnk04.github.io/myapi-v1/questions/reactjs/reactqstns.json`;

    const { data } = await axios.get(API_URL);
    dispatch({
      type: ALL_QSTNS_REACTJS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_QSTNS_REACTJS_FAIL,
      payload: error.response.data.message,
      // payload: error.response.data.error.message
      // payload: error.response.data.message,
    });
  }
};

export const getReactMcqs = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_MCQ_REACTJS_REQUEST,
    });

    const API_URL = `https://rahulnk04.github.io/myapi-v1/questions/reactjs/mcq.json`;

    const { data } = await axios.get(API_URL);
    dispatch({
      type: ALL_MCQ_REACTJS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_MCQ_REACTJS_FAIL,
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
