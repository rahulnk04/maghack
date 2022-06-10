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

// All Topics Start
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
// All Topics End

// ReactJS Start
export const topicsReactReducer = (state = { reacttopics: [] }, action) => {
  switch (action.type) {
    case ALL_TOPICS_REACTJS_REQUEST:
      return {
        reacttopicloading: true,
        reacttopics: [],
        reacttopicSuccess: false,
      };
    case ALL_TOPICS_REACTJS_SUCCESS:
      return {
        reacttopicloading: false,
        reacttopics: action.payload,
        reacttopicSuccess: true,
      };
    case ALL_TOPICS_REACTJS_FAIL:
      return {
        // loading:false,
        reacttopicerror: action.payload,
        ...state,
        reacttopicSuccess: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        reacttopicerror: null,
      };
    default:
      return state;
  }
};

export const qstnReactReducer = (state = { reactqstns: [] }, action) => {
  switch (action.type) {
    case ALL_QSTNS_REACTJS_REQUEST:
      return {
        reactqstnsloading: true,
        reactqstns: [],
      };
    case ALL_QSTNS_REACTJS_SUCCESS:
      return {
        reactqstnsloading: false,
        reactqstns: action.payload,
      };
    case ALL_QSTNS_REACTJS_FAIL:
      return {
        // loading:false,
        reactqstnserror: action.payload,
        ...state,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        reactqstnserror: null,
      };
    default:
      return state;
  }
};

export const mcqReactReducer = (state = { reactmcqs: [] }, action) => {
  switch (action.type) {
    case ALL_MCQ_REACTJS_REQUEST:
      return {
        reactmcqsloading: true,
        reactmcqs: [],
      };
    case ALL_MCQ_REACTJS_SUCCESS:
      return {
        reactmcqsloading: false,
        reactmcqs: action.payload,
      };
    case ALL_MCQ_REACTJS_FAIL:
      return {
        // loading:false,
        reactmcqserror: action.payload,
        ...state,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        reactmcqserror: null,
      };
    default:
      return state;
  }
};
// ReactJS End

// JavaScript Start
export const qstnJavaScriptReducer = (
  state = { javascriptqstns: [] },
  action
) => {
  switch (action.type) {
    case ALL_QSTNS_JAVASCRIPT_REQUEST:
      return {
        javascriptqstnsloading: true,
        javascriptqstns: [],
      };
    case ALL_QSTNS_JAVASCRIPT_SUCCESS:
      return {
        javascriptqstnsloading: false,
        javascriptqstns: action.payload,
      };
    case ALL_QSTNS_JAVASCRIPT_FAIL:
      return {
        // loading:false,
        javascriptqstnserror: action.payload,
        ...state,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        javascriptqstnserror: null,
      };
    default:
      return state;
  }
};
// JavaScript End

// NodeJs Start
export const qstnNodeJsReducer = (state = { nodejsqstns: [] }, action) => {
  switch (action.type) {
    case ALL_QSTNS_NODEJS_REQUEST:
      return {
        nodejsqstnsloading: true,
        nodejsqstns: [],
      };
    case ALL_QSTNS_NODEJS_SUCCESS:
      return {
        nodejsqstnsloading: false,
        nodejsqstns: action.payload,
      };
    case ALL_QSTNS_NODEJS_FAIL:
      return {
        // loading:false,
        nodejsqstnserror: action.payload,
        ...state,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        nodejsqstnserror: null,
      };
    default:
      return state;
  }
};
// NodeJs End

// HTML Start
export const qstnHtmlReducer = (state = { htmlqstns: [] }, action) => {
  switch (action.type) {
    case ALL_QSTNS_HTML_REQUEST:
      return {
        htmlqstnsloading: true,
        htmlqstns: [],
      };
    case ALL_QSTNS_HTML_SUCCESS:
      return {
        htmlqstnsloading: false,
        htmlqstns: action.payload,
      };
    case ALL_QSTNS_HTML_FAIL:
      return {
        // loading:false,
        htmlqstnserror: action.payload,
        ...state,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        htmlqstnserror: null,
      };
    default:
      return state;
  }
};
// HTML End

// CSS Start
export const qstnCssReducer = (state = { cssqstns: [] }, action) => {
  switch (action.type) {
    case ALL_QSTNS_CSS_REQUEST:
      return {
        cssqstnsloading: true,
        cssqstns: [],
      };
    case ALL_QSTNS_CSS_SUCCESS:
      return {
        cssqstnsloading: false,
        cssqstns: action.payload,
      };
    case ALL_QSTNS_CSS_FAIL:
      return {
        // loading:false,
        cssqstnserror: action.payload,
        ...state,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        cssqstnserror: null,
      };
    default:
      return state;
  }
};
// CSS END
