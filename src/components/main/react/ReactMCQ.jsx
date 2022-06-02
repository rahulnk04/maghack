import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReactMcqs } from "../../../redux/actions/actions";
import LoadingScreen from "../../layout/LoadingScreen";
import { Typography } from "@mui/material";
import McqMain from "../McqMain";

const ReactMCQ = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { reactmcqs, reactmcqsloading, reactmcqserror } = useSelector(
    (state) => state.reactMcqAll
  );
  useEffect(() => {
    dispatch(getReactMcqs());
  }, [dispatch]);
  return (
    <Fragment>
      <Typography
        variant="overline"
        sx={{ color: "#079FFF", fontWeight: "bold" }}
      >
        React JS MCQ Questions !!
      </Typography>

      {reactmcqsloading ? (
        <LoadingScreen />
      ) : (
        <Fragment>
          <McqMain mcqs={reactmcqs} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default ReactMCQ;
