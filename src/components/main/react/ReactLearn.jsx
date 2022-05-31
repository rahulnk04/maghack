import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReactTopics, getReactQstns } from "../../../redux/actions/actions";
import Main from "../Main";

const ReactLearn = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { reacttopics, reacttopicloading, reacttopicerror } = useSelector(
    (state) => state.reactTopicsAll
  );
  // eslint-disable-next-line
  const { reactqstns, reactqstnsloading, reactqstnserror } = useSelector(
    (state) => state.reactQstnsAll
  );
  useEffect(() => {
    dispatch(getReactTopics());
    dispatch(getReactQstns());
  }, [dispatch]);

  return (
    <Fragment>
      <Main topics={reacttopics} qstns={reactqstns} />
    </Fragment>
  );
};

export default ReactLearn;
