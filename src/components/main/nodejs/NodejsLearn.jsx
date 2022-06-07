import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNodeJstQstns } from "../../../redux/actions/actions";
import LoadingScreen from "../../layout/LoadingScreen";
import QstnMain from "../QstnMain";

const NodejsLearn = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { nodejsqstns, nodejsqstnsloading, nodejsqstnserror } = useSelector(
    (state) => state.nodejsAll
  );
  useEffect(() => {
    dispatch(getNodeJstQstns());
  }, [dispatch]);
  return (
    <Fragment>
      {nodejsqstnsloading ? (
        <LoadingScreen />
      ) : (
        <QstnMain
          topics={[]}
          qstns={nodejsqstns}
          topicsTrue={false}
          lang={"javascript"}
        />
      )}
    </Fragment>
  );
};

export default NodejsLearn;
