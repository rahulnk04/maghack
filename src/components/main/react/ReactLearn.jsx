import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReactTopics, getReactQstns } from "../../../redux/actions/actions";
import Main from "../Main";

const ReactLearn = () => {
  const dispatch = useDispatch();
  const { reacttopics, reacttopicloading, reacttopicerror } = useSelector(
    (state) => state.reactTopicsAll
  );
  const { reactqstns, reactqstnsloading, reactqstnserror } = useSelector(
    (state) => state.reactQstnsAll
  );
  useEffect(() => {
    getResult();
  }, [dispatch]);

  const getResult = async () => {
    await dispatch(getReactTopics());
    await dispatch(getReactQstns());
  };
  return (
    <Fragment>
      <Main topics={reacttopics} qstns={reactqstns} />
    </Fragment>
  );
};

export default ReactLearn;
