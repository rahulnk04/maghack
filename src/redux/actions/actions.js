import axios from "axios";
import {
  CLEAR_ERRORS,
  ALL_TOPICS_DETAILS_REQUEST,
  ALL_TOPICS_DETAILS_SUCCESS,
  ALL_TOPICS_DETAILS_FAIL,
  ALL_TOPICS_REACTJS_REQUEST,
  ALL_TOPICS_REACTJS_SUCCESS,
  ALL_TOPICS_REACTJS_FAIL,
  ALL_QSTNS_REACTJS_REQUEST,
  ALL_QSTNS_REACTJS_SUCCESS,
  ALL_QSTNS_REACTJS_FAIL,
  ALL_MCQ_REACTJS_REQUEST,
  ALL_MCQ_REACTJS_SUCCESS,
  ALL_MCQ_REACTJS_FAIL,
  ALL_QSTNS_JAVASCRIPT_REQUEST,
  ALL_QSTNS_JAVASCRIPT_SUCCESS,
  ALL_QSTNS_JAVASCRIPT_FAIL,
  ALL_QSTNS_NODEJS_REQUEST,
  ALL_QSTNS_NODEJS_SUCCESS,
  ALL_QSTNS_NODEJS_FAIL,
  ALL_QSTNS_HTML_REQUEST,
  ALL_QSTNS_HTML_SUCCESS,
  ALL_QSTNS_HTML_FAIL,
  ALL_QSTNS_CSS_REQUEST,
  ALL_QSTNS_CSS_SUCCESS,
  ALL_QSTNS_CSS_FAIL,
} from "../constants/Constants";

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

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

// React Start
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

// React End

// JavaScript Start
export const getJavaScriptQstns = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_QSTNS_JAVASCRIPT_REQUEST,
    });

    const API_URL = `https://rahulnk04.github.io/myapi-v1/questions/javascript/javascriptqstn.json`;

    const { data } = await axios.get(API_URL);
    dispatch({
      type: ALL_QSTNS_JAVASCRIPT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_QSTNS_JAVASCRIPT_FAIL,
      payload: error.response.data.message,
      // payload: error.response.data.error.message
      // payload: error.response.data.message,
    });
  }
};
// JavaScript End

// NodeJst Start
export const getNodeJstQstns = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_QSTNS_NODEJS_REQUEST,
    });

    const API_URL = `https://rahulnk04.github.io/myapi-v1/questions/nodejs/nodejsqstn.json`;

    const { data } = await axios.get(API_URL);
    dispatch({
      type: ALL_QSTNS_NODEJS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_QSTNS_NODEJS_FAIL,
      payload: error.response.data.message,
      // payload: error.response.data.error.message
      // payload: error.response.data.message,
    });
  }
};
// NodeJst End

// HTML Start
export const getHtmlQstns = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_QSTNS_HTML_REQUEST,
    });

    const API_URL = `https://rahulnk04.github.io/myapi-v1/questions/html/htmlqstn.json`;

    const { data } = await axios.get(API_URL);
    dispatch({
      type: ALL_QSTNS_HTML_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_QSTNS_HTML_FAIL,
      payload: error.response.data.message,
      // payload: error.response.data.error.message
      // payload: error.response.data.message,
    });
  }
};
// HTML END

// CSS Start
export const getCssQstns = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_QSTNS_CSS_REQUEST,
    });

    const API_URL = `https://rahulnk04.github.io/myapi-v1/questions/css/cssqstns.json`;

    const { data } = await axios.get(API_URL);
    dispatch({
      type: ALL_QSTNS_CSS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_QSTNS_CSS_FAIL,
      payload: error.response.data.message,
      // payload: error.response.data.error.message
      // payload: error.response.data.message,
    });
  }
};
// Css End
