import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getJavaScriptQstns } from "../../../redux/actions/actions";
import LoadingScreen from "../../layout/LoadingScreen";
import QstnMain from "../QstnMain";

const JavaScriptLearn = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { javascriptqstns, javascriptqstnsloading, javascriptqstnserror } =
    useSelector((state) => state.javascriptAll);
  useEffect(() => {
    dispatch(getJavaScriptQstns());
  }, [dispatch]);
  return (
    <Fragment>
      {javascriptqstnsloading ? (
        <LoadingScreen />
      ) : (
        <QstnMain
          topics={[]}
          qstns={javascriptqstns}
          topicsTrue={false}
          lang={"javascript"}
        />
      )}
    </Fragment>
  );
};

export default JavaScriptLearn;
